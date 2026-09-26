import React, { useEffect, useRef, useState } from 'react';

interface BackgroundVideoProps {
  className?: string;
  src?: string;
  scrollX?: number;
  scrollY?: number;
}

const TOTAL_FRAMES = 96;
const FRAME_PATH = (idx: number) =>
  `/character/frames/frame_${String(idx).padStart(3, '0')}.webp`;

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  className = '',
  scrollX = 0,
  scrollY = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const targetRatioRef = useRef<number>(0.5); // Start at 0.5 (center gaze)
  const currentRatioRef = useRef<number>(0.5);
  const rafRef = useRef<number | null>(null);
  const lastDrawnIndexRef = useRef<number>(-1);
  const [isReady, setIsReady] = useState(false);

  // Viewport width state for responsive layout calculation
  const [viewportWidth, setViewportWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth || 1440);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper for cinematic cubic ease-in-out
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Responsive target offsets:
  // - On Career: character moves to the right (+right)
  // - On Skills: character moves to the left towards the Skills title (+left)
  const getOffsets = (w: number) => {
    if (w >= 1536) return { right: w * 0.22, left: -w * 0.145 }; // Large/4K desktop
    if (w >= 1280) return { right: w * 0.20, left: -w * 0.135 }; // Standard desktop
    if (w >= 1024) return { right: w * 0.18, left: -w * 0.12 };  // Laptop/Tablet landscape
    if (w >= 768)  return { right: w * 0.15, left: -w * 0.09 };  // Tablet portrait
    return { right: w * 0.14, left: -w * 0.07 };                 // Mobile
  };

  const width = viewportWidth || 1;
  const offsets = getOffsets(width);

  // Compute horizontal translation across sections:
  let currentTranslateX = 0;
  if (scrollX <= width) {
    currentTranslateX = 0;
  } else if (scrollX <= 2 * width) {
    const p = Math.max(0, Math.min(1, (scrollX - width) / width));
    const eased = easeInOutCubic(p);
    currentTranslateX = eased * offsets.right;
  } else if (scrollX <= 3 * width) {
    const p = Math.max(0, Math.min(1, (scrollX - 2 * width) / width));
    const eased = easeInOutCubic(p);
    currentTranslateX = offsets.right + eased * (offsets.left - offsets.right);
  } else if (scrollX <= 4 * width) {
    const p = Math.max(0, Math.min(1, (scrollX - 3 * width) / width));
    const eased = easeInOutCubic(p);
    currentTranslateX = offsets.left + eased * (0 - offsets.left);
  } else if (scrollX <= 5 * width) {
    const p = Math.max(0, Math.min(1, (scrollX - 4 * width) / width));
    const eased = easeInOutCubic(p);
    currentTranslateX = eased * offsets.right;
  } else {
    currentTranslateX = offsets.right;
  }

  // If vertically scrolling downwards to Contact Me, smoothly translate character to the left side (offsets.left)
  const vh = typeof window !== 'undefined' ? window.innerHeight || 1 : 900;
  const verticalProgress = Math.max(0, Math.min(1, scrollY / vh));
  if (verticalProgress > 0) {
    const verticalEased = easeInOutCubic(verticalProgress);
    currentTranslateX = currentTranslateX + verticalEased * (offsets.left - currentTranslateX);
  }

  // Keep a ref of current translateX for real-time cursor tracking coordination
  const translateXRef = useRef<number>(0);
  translateXRef.current = currentTranslateX;

  // Store last known mouse/pointer position
  const lastMousePosRef = useRef<{ x: number; y: number } | null>(null);

  // Preload initial center frame (48) for instant display, then batch load all frames
  useEffect(() => {
    let isCancelled = false;

    const initialImg = new Image();
    initialImg.src = FRAME_PATH(48);
    initialImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[48] = initialImg;
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(initialImg, 0, 0, canvas.width, canvas.height);
          lastDrawnIndexRef.current = 48;
        }
      }
      setIsReady(true);

      // Preload all remaining frames in parallel into memory
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (i === 48) continue;
        const img = new Image();
        img.src = FRAME_PATH(i);
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[i] = img;
          }
        };
      }
    };

    return () => {
      isCancelled = true;
    };
  }, []);

  // Continuous 60/120fps smooth cursor tracking RAF loop with zero seek latency
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      const w = window.innerWidth || 1;
      const offset = translateXRef.current || 0;
      const ratio = Math.max(0, Math.min(1, (e.clientX - offset) / w));
      targetRatioRef.current = ratio;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        const w = window.innerWidth || 1;
        const offset = translateXRef.current || 0;
        const ratio = Math.max(0, Math.min(1, (e.touches[0].clientX - offset) / w));
        targetRatioRef.current = ratio;
      }
    };

    const handleTouchEnd = () => {
      lastMousePosRef.current = null;
      targetRatioRef.current = 0.5;
    };

    const handleMouseLeave = () => {
      lastMousePosRef.current = null;
      targetRatioRef.current = 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
    window.addEventListener('mouseleave', handleMouseLeave);

    const tick = () => {
      if (lastMousePosRef.current) {
        const w = window.innerWidth || 1;
        const offset = translateXRef.current || 0;
        targetRatioRef.current = Math.max(0, Math.min(1, (lastMousePosRef.current.x - offset) / w));
      }

      const diff = targetRatioRef.current - currentRatioRef.current;
      if (Math.abs(diff) > 0.0005) {
        currentRatioRef.current += diff * 0.22;
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(currentRatioRef.current * (TOTAL_FRAMES - 1)))
        );

        if (frameIndex !== lastDrawnIndexRef.current) {
          const img = imagesRef.current[frameIndex] || imagesRef.current[48];
          const canvas = canvasRef.current;
          if (canvas && img && img.complete) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              lastDrawnIndexRef.current = frameIndex;
            }
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-10 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-transparent ${className}`}
    >
      {/* Motion wrapper for horizontal page-transition translation */}
      <div
        className="w-full h-full will-change-transform flex items-center justify-center"
        style={{
          transform: `translate3d(${currentTranslateX}px, 0, 0)`,
          backfaceVisibility: 'hidden',
        }}
      >
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
            isReady ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        />
      </div>

      {/* Subtle radial vignette around the edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.7) 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundVideo;
