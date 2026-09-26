import { useState, useEffect, useRef, useCallback } from 'react';

export const SECTIONS = ['Welcome', 'About Me', 'Career', 'Skills', 'Projects', 'Certifications'] as const;
export type SectionName = (typeof SECTIONS)[number] | 'Contact Me';

export function useHorizontalScroll() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionName>('Welcome');
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const getMaxScroll = useCallback(() => {
    return window.innerWidth * (SECTIONS.length - 1);
  }, []);

  // Smooth lerp loop for both horizontal and vertical downward scroll
  useEffect(() => {
    let isRunning = true;

    const loop = () => {
      if (!isRunning) return;

      // Horizontal lerp
      const diffX = targetXRef.current - currentXRef.current;
      if (Math.abs(diffX) > 0.05) {
        currentXRef.current += diffX * 0.085;
        setScrollX(currentXRef.current);
      } else if (currentXRef.current !== targetXRef.current) {
        currentXRef.current = targetXRef.current;
        setScrollX(targetXRef.current);
      }

      // Vertical lerp (for downward Contact Me transition)
      const diffY = targetYRef.current - currentYRef.current;
      if (Math.abs(diffY) > 0.05) {
        currentYRef.current += diffY * 0.085;
        setScrollY(currentYRef.current);
      } else if (currentYRef.current !== targetYRef.current) {
        currentYRef.current = targetYRef.current;
        setScrollY(targetYRef.current);
      }

      // Active section calculation
      const viewportHeight = window.innerHeight || 1;
      if (currentYRef.current > viewportHeight * 0.45) {
        setActiveSection('Contact Me');
      } else {
        const viewportWidth = window.innerWidth || 1;
        const sectionIndex = Math.min(
          SECTIONS.length - 1,
          Math.max(0, Math.round(currentXRef.current / viewportWidth))
        );
        setActiveSection(SECTIONS[sectionIndex]);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Wheel listener
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      e.preventDefault();

      const viewportHeight = window.innerHeight || 1;
      const isContactOpen = targetYRef.current > 0;

      if (isContactOpen) {
        // When in Contact Me: scrolling UP exits Contact Me back to previous section
        if (e.deltaY < -15) {
          targetYRef.current = 0;
        }
        return;
      }

      // In horizontal sections mode:
      const maxScroll = getMaxScroll();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const speedMultiplier = e.deltaMode === 1 ? 32 : 1;

      // If at the end of Certifications and scrolling down: trigger vertical scroll to Contact Me
      if (targetXRef.current >= maxScroll - 5 && e.deltaY > 30) {
        targetYRef.current = viewportHeight;
        return;
      }

      const newTarget = Math.max(
        0,
        Math.min(maxScroll, targetXRef.current + delta * speedMultiplier * 0.9)
      );

      targetXRef.current = newTarget;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [getMaxScroll]);

  // Touch listener
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current || !e.touches[0]) return;

      const deltaX = touchStartRef.current.x - e.touches[0].clientX;
      const deltaY = touchStartRef.current.y - e.touches[0].clientY;
      const viewportHeight = window.innerHeight || 1;
      const isContactOpen = targetYRef.current > 0;

      if (isContactOpen) {
        // Swiping down in Contact Me closes Contact Me
        if (deltaY < -35) {
          targetYRef.current = 0;
          touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
          };
        }
        return;
      }

      // Swiping up at the end of Certifications opens Contact Me
      const maxScroll = getMaxScroll();
      if (targetXRef.current >= maxScroll - 10 && deltaY > 40) {
        targetYRef.current = viewportHeight;
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
        return;
      }

      // Only process horizontal page transition if swipe is predominantly horizontal
      if (Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
        const newTarget = Math.max(
          0,
          Math.min(maxScroll, targetXRef.current + deltaX * 1.4)
        );

        targetXRef.current = newTarget;
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = () => {
      touchStartRef.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [getMaxScroll]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const step = window.innerWidth;
      const maxScroll = getMaxScroll();
      const viewportHeight = window.innerHeight || 1;
      const isContactOpen = targetYRef.current > 0;

      if (isContactOpen) {
        if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Escape') {
          e.preventDefault();
          targetYRef.current = 0;
        }
        return;
      }

      let newTarget = targetXRef.current;

      if (e.key === 'ArrowDown') {
        if (targetXRef.current >= maxScroll - 5) {
          e.preventDefault();
          targetYRef.current = viewportHeight;
          return;
        }
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        if (targetXRef.current >= maxScroll - 5 && e.key === 'PageDown') {
          targetYRef.current = viewportHeight;
          return;
        }
        newTarget = Math.min(maxScroll, targetXRef.current + step);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        newTarget = Math.max(0, targetXRef.current - step);
      } else if (e.key === 'Home') {
        e.preventDefault();
        newTarget = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        newTarget = maxScroll;
      }

      if (newTarget !== targetXRef.current) {
        targetXRef.current = newTarget;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [getMaxScroll]);

  // Navigate to section
  const scrollToSection = useCallback((target: SectionName | number) => {
    if (target === 'Contact Me') {
      if (targetYRef.current > 0) {
        targetYRef.current = 0;
      } else {
        targetYRef.current = window.innerHeight;
      }
      return;
    }

    targetYRef.current = 0;

    let index = 0;
    if (typeof target === 'number') {
      index = target;
    } else {
      const found = SECTIONS.indexOf(target as any);
      if (found !== -1) index = found;
    }

    const targetPos = index * window.innerWidth;
    targetXRef.current = targetPos;
  }, []);

  return {
    scrollX,
    scrollY,
    activeSection,
    scrollToSection,
  };
}
