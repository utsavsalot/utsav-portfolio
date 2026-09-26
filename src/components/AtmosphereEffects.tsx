import React, { useEffect, useState } from 'react';

// Dimensions of public/backgrounds/room_sunset.jpg
const IMG_WIDTH = 1376;
const IMG_HEIGHT = 768;
const IMG_RATIO = IMG_WIDTH / IMG_HEIGHT;

export const AtmosphereEffects: React.FC = () => {
  const [coords, setCoords] = useState<{
    scale: number;
    mugX: number;
    mugY: number;
    winLeftX: number;
    winLeftY: number;
    winLeftW: number;
    winLeftH: number;
    winRightX: number;
    winRightY: number;
    winRightW: number;
    winRightH: number;
  }>({
    scale: 1,
    mugX: 200,
    mugY: 535,
    winLeftX: 755,
    winLeftY: 30,
    winLeftW: 343,
    winLeftH: 320,
    winRightX: 1115,
    winRightY: 30,
    winRightW: 157,
    winRightH: 320,
  });

  useEffect(() => {
    const updateCoords = () => {
      const vw = window.innerWidth || 1440;
      const vh = window.innerHeight || 900;
      const screenRatio = vw / vh;

      let scale = 1;
      let offsetX = 0;
      let offsetY = 0;

      if (screenRatio > IMG_RATIO) {
        const renderedH = vw / IMG_RATIO;
        offsetY = (vh - renderedH) / 2;
        scale = vw / IMG_WIDTH;
      } else {
        const renderedW = vh * IMG_RATIO;
        offsetX = (vw - renderedW) / 2;
        scale = vh / IMG_HEIGHT;
      }

      setCoords({
        scale,
        mugX: offsetX + 195 * scale,
        mugY: offsetY + 538 * scale,
        // Left Window Pane ("this side" - open sky): x: 755 to 1098
        winLeftX: offsetX + 755 * scale,
        winLeftY: offsetY + 30 * scale,
        winLeftW: 343 * scale,
        winLeftH: 320 * scale,
        // Right Window Pane ("leaves line" - sunset & plant): x: 1115 to 1272
        winRightX: offsetX + 1115 * scale,
        winRightY: offsetY + 30 * scale,
        winRightW: 157 * scale,
        winRightH: 320 * scale,
      });
    };

    updateCoords();
    window.addEventListener('resize', updateCoords);
    return () => window.removeEventListener('resize', updateCoords);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-[1]">
      <style>{`
        /* --- GENTLE DELICATE COFFEE STEAM WISPS --- */
        @keyframes steamWisp1 {
          0% {
            transform: translateY(0px) scaleX(0.8) scaleY(0.5);
            opacity: 0;
          }
          20% {
            opacity: 0.45;
          }
          50% {
            transform: translateY(-20px) scaleX(1.2) scaleY(1.0) rotate(-3deg);
            opacity: 0.52;
          }
          80% {
            transform: translateY(-40px) scaleX(1.5) scaleY(1.3) rotate(4deg);
            opacity: 0.25;
          }
          100% {
            transform: translateY(-56px) scaleX(1.8) scaleY(1.6) rotate(6deg);
            opacity: 0;
          }
        }

        @keyframes steamWisp2 {
          0% {
            transform: translateY(0px) scaleX(0.9) scaleY(0.6);
            opacity: 0;
          }
          25% {
            opacity: 0.4;
          }
          55% {
            transform: translateY(-22px) scaleX(1.3) scaleY(1.1) rotate(4deg);
            opacity: 0.48;
          }
          85% {
            transform: translateY(-44px) scaleX(1.6) scaleY(1.4) rotate(-3deg);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-60px) scaleX(1.9) scaleY(1.7) rotate(-5deg);
            opacity: 0;
          }
        }

        /* --- STEAM CONDENSING INTO 'code' ABOVE CUP --- */
        @keyframes steamWordCode {
          0% {
            opacity: 0;
            transform: translateY(6px) scale(0.75) rotate(-2deg);
            filter: blur(3.5px);
          }
          15% {
            opacity: 0.3;
            filter: blur(2.5px);
          }
          28% {
            opacity: 0.85;
            transform: translateY(-14px) scale(0.98) rotate(-0.5deg);
            filter: blur(1.0px);
          }
          48% {
            opacity: 0.9;
            transform: translateY(-26px) scale(1.05) rotate(0.6deg);
            filter: blur(0.9px);
          }
          64% {
            opacity: 0.6;
            transform: translateY(-38px) scale(1.12) rotate(1.5deg);
            filter: blur(1.6px);
          }
          80% {
            opacity: 0.2;
            transform: translateY(-50px) scale(1.22) rotate(3deg);
            filter: blur(3px);
          }
          92%, 100% {
            opacity: 0;
            transform: translateY(-60px) scale(1.35) rotate(4deg);
            filter: blur(5.5px);
          }
        }

        /* --- WING FLAP ANIMATIONS --- */
        @keyframes birdWingFlap1 {
          0%, 100% {
            transform: rotate(-24deg);
          }
          50% {
            transform: rotate(24deg);
          }
        }

        @keyframes birdWingFlap2 {
          0%, 100% {
            transform: rotate(24deg);
          }
          50% {
            transform: rotate(-24deg);
          }
        }

        /* ==============================================================
           20s MASTER CYCLE (Larger, majestic flight pacing):
           1. RIGHT PANE ("Leaves Line"):
              - Upper Leaves Group: 0s -> 3.8s (0% -> 19%)
              - Lower Leaves Group: 10s -> 13.8s (50% -> 69%)
           2. LEFT PANE ("This Side"):
              - Upper Sky Group: 2.8s -> 8.8s (14% -> 44%)
              - Lower Sky Group: 12.8s -> 18.8s (64% -> 94%)
           ============================================================== */

        /* RIGHT PANE: Upper leaves flock (0s to 3.8s) */
        @keyframes flyRightPaneUpper {
          0% {
            transform: translate3d(108%, 4px, 0);
            opacity: 0;
          }
          2% {
            opacity: 0.88;
          }
          17% {
            transform: translate3d(-45%, 16px, 0);
            opacity: 0.88;
          }
          19% {
            transform: translate3d(-65%, 18px, 0);
            opacity: 0;
          }
          19.1%, 100% {
            transform: translate3d(108%, 4px, 0);
            opacity: 0;
          }
        }

        /* RIGHT PANE: Lower leaves flock (10s to 13.8s, at leaves line) */
        @keyframes flyRightPaneLower {
          0%, 49.9% {
            transform: translate3d(108%, 6px, 0);
            opacity: 0;
          }
          50% {
            transform: translate3d(108%, 6px, 0);
            opacity: 0;
          }
          52% {
            opacity: 0.85;
          }
          67% {
            transform: translate3d(-45%, 18px, 0);
            opacity: 0.85;
          }
          69% {
            transform: translate3d(-65%, 20px, 0);
            opacity: 0;
          }
          69.1%, 100% {
            transform: translate3d(108%, 6px, 0);
            opacity: 0;
          }
        }

        /* LEFT PANE: Upper sky flock (2.8s to 8.8s) */
        @keyframes flyLeftPaneUpper {
          0%, 13.9% {
            transform: translate3d(108%, 6px, 0);
            opacity: 0;
          }
          14% {
            transform: translate3d(108%, 6px, 0);
            opacity: 0;
          }
          16% {
            opacity: 0.9;
          }
          41% {
            transform: translate3d(-24%, 36px, 0);
            opacity: 0.85;
          }
          44% {
            transform: translate3d(-40%, 40px, 0);
            opacity: 0;
          }
          44.1%, 100% {
            transform: translate3d(108%, 6px, 0);
            opacity: 0;
          }
        }

        /* LEFT PANE: Lower sky flock (12.8s to 18.8s) */
        @keyframes flyLeftPaneLower {
          0%, 63.9% {
            transform: translate3d(108%, 6px, 0);
            opacity: 0;
          }
          64% {
            transform: translate3d(108%, 6px, 0);
            opacity: 0;
          }
          66% {
            opacity: 0.88;
          }
          91% {
            transform: translate3d(-24%, 30px, 0);
            opacity: 0.82;
          }
          94% {
            transform: translate3d(-40%, 34px, 0);
            opacity: 0;
          }
          94.1%, 100% {
            transform: translate3d(108%, 6px, 0);
            opacity: 0;
          }
        }
      `}</style>

      {/* 1A. RIGHT WINDOW PANE: LEAVES LINE BIRDS (Upper & Lower Alternating) */}
      <div
        className="absolute overflow-hidden pointer-events-none"
        style={{
          left: `${coords.winRightX}px`,
          top: `${coords.winRightY}px`,
          width: `${coords.winRightW}px`,
          height: `${coords.winRightH}px`,
        }}
      >
        {/* RIGHT PANE: UPPER GROUP (Above leaves) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            animation: 'flyRightPaneUpper 20s linear infinite',
            willChange: 'transform, opacity',
          }}
        >
          <div
            className="relative"
            style={{
              width: '95px',
              height: '56px',
              top: '18%',
              left: 0,
            }}
          >
            {/* Bird 1: Lead */}
            <div
              className="absolute"
              style={{
                left: '0px',
                top: '16px',
                transform: `scale(${Math.max(0.75, Math.min(1.25, coords.scale * 1.0))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.38s ease-in-out infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.38s ease-in-out infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#241627" />
              </svg>
            </div>

            {/* Bird 2: Upper Follower */}
            <div
              className="absolute"
              style={{
                left: '28px',
                top: '2px',
                transform: `scale(${Math.max(0.65, Math.min(1.1, coords.scale * 0.88))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.36s ease-in-out 0.08s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.36s ease-in-out 0.08s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#241627" />
              </svg>
            </div>

            {/* Bird 3: Lower Follower */}
            <div
              className="absolute"
              style={{
                left: '34px',
                top: '32px',
                transform: `scale(${Math.max(0.6, Math.min(1.0, coords.scale * 0.8))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.40s ease-in-out 0.16s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.40s ease-in-out 0.16s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#241627" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: LOWER GROUP (Right at leaves line) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            animation: 'flyRightPaneLower 20s linear infinite',
            willChange: 'transform, opacity',
          }}
        >
          <div
            className="relative"
            style={{
              width: '95px',
              height: '56px',
              top: '44%',
              left: 0,
            }}
          >
            {/* Bird 1: Lead */}
            <div
              className="absolute"
              style={{
                left: '0px',
                top: '16px',
                transform: `scale(${Math.max(0.72, Math.min(1.2, coords.scale * 0.95))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#281729"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.36s ease-in-out 0.05s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#281729"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.36s ease-in-out 0.05s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#281729" />
              </svg>
            </div>

            {/* Bird 2: Upper Follower */}
            <div
              className="absolute"
              style={{
                left: '26px',
                top: '2px',
                transform: `scale(${Math.max(0.62, Math.min(1.05, coords.scale * 0.84))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#281729"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.34s ease-in-out 0.12s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#281729"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.34s ease-in-out 0.12s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#281729" />
              </svg>
            </div>

            {/* Bird 3: Lower Follower */}
            <div
              className="absolute"
              style={{
                left: '32px',
                top: '32px',
                transform: `scale(${Math.max(0.58, Math.min(0.98, coords.scale * 0.78))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#281729"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.38s ease-in-out 0.2s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#281729"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.38s ease-in-out 0.2s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#281729" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 1B. LEFT WINDOW PANE: "THIS SIDE" MAIN SKY BIRDS (Upper & Lower Alternating) */}
      <div
        className="absolute overflow-hidden pointer-events-none"
        style={{
          left: `${coords.winLeftX}px`,
          top: `${coords.winLeftY}px`,
          width: `${coords.winLeftW}px`,
          height: `${coords.winLeftH}px`,
        }}
      >
        {/* LEFT PANE: UPPER GROUP (High sky) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            animation: 'flyLeftPaneUpper 20s linear infinite',
            willChange: 'transform, opacity',
          }}
        >
          <div
            className="relative"
            style={{
              width: '105px',
              height: '62px',
              top: '16%',
              left: 0,
            }}
          >
            {/* Bird 1: Lead Bird */}
            <div
              className="absolute"
              style={{
                left: '0px',
                top: '18px',
                transform: `scale(${Math.max(0.85, Math.min(1.4, coords.scale * 1.15))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.38s ease-in-out infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.38s ease-in-out infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#241627" />
              </svg>
            </div>

            {/* Bird 2: Upper Follower */}
            <div
              className="absolute"
              style={{
                left: '32px',
                top: '2px',
                transform: `scale(${Math.max(0.72, Math.min(1.2, coords.scale * 0.98))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.36s ease-in-out 0.08s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.36s ease-in-out 0.08s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#241627" />
              </svg>
            </div>

            {/* Bird 3: Lower Follower */}
            <div
              className="absolute"
              style={{
                left: '38px',
                top: '36px',
                transform: `scale(${Math.max(0.65, Math.min(1.1, coords.scale * 0.88))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.40s ease-in-out 0.16s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#241627"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.40s ease-in-out 0.16s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#241627" />
              </svg>
            </div>
          </div>
        </div>

        {/* LEFT PANE: LOWER GROUP (Lower sky) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            animation: 'flyLeftPaneLower 20s linear infinite',
            willChange: 'transform, opacity',
          }}
        >
          <div
            className="relative"
            style={{
              width: '102px',
              height: '58px',
              top: '40%',
              left: 0,
            }}
          >
            {/* Bird 1: Lead */}
            <div
              className="absolute"
              style={{
                left: '0px',
                top: '16px',
                transform: `scale(${Math.max(0.72, Math.min(1.2, coords.scale * 0.98))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#271a2a"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.36s ease-in-out 0.05s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#271a2a"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.36s ease-in-out 0.05s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#271a2a" />
              </svg>
            </div>

            {/* Bird 2: Upper Follower */}
            <div
              className="absolute"
              style={{
                left: '30px',
                top: '2px',
                transform: `scale(${Math.max(0.62, Math.min(1.05, coords.scale * 0.85))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#271a2a"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.34s ease-in-out 0.12s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#271a2a"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.34s ease-in-out 0.12s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#271a2a" />
              </svg>
            </div>

            {/* Bird 3: Lower Follower */}
            <div
              className="absolute"
              style={{
                left: '36px',
                top: '32px',
                transform: `scale(${Math.max(0.58, Math.min(0.98, coords.scale * 0.78))})`,
              }}
            >
              <svg viewBox="0 0 24 16" width="28" height="19">
                <path
                  d="M12,9 Q6,1 0,6 Q6,8 12,9"
                  fill="#271a2a"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap1 0.38s ease-in-out 0.2s infinite alternate',
                  }}
                />
                <path
                  d="M12,9 Q18,1 24,6 Q18,8 12,9"
                  fill="#271a2a"
                  style={{
                    transformOrigin: '12px 9px',
                    animation: 'birdWingFlap2 0.38s ease-in-out 0.2s infinite alternate',
                  }}
                />
                <ellipse cx="12" cy="9" rx="2.5" ry="1.2" fill="#271a2a" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DELICATE HOT COFFEE STEAM & 'code' VAPOR */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${coords.mugX}px`,
          top: `${coords.mugY}px`,
          transform: 'translate(-50%, -100%)',
          width: '125px',
          height: '110px',
        }}
      >
        {/* Soft wisps of delicate coffee steam rising from mug rim */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          {/* Steam wisp 1 */}
          <svg
            viewBox="0 0 30 70"
            className="absolute bottom-0 w-8 h-20"
            style={{
              filter: 'blur(1.6px)',
              animation: 'steamWisp1 3.5s ease-out infinite',
              transformOrigin: 'bottom center',
            }}
          >
            <path
              d="M15,70 Q10,48 18,30 T13,8"
              fill="none"
              stroke="rgba(255, 245, 235, 0.48)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>

          {/* Steam wisp 2 */}
          <svg
            viewBox="0 0 30 70"
            className="absolute bottom-0 w-10 h-22"
            style={{
              filter: 'blur(1.8px)',
              animation: 'steamWisp2 4.0s ease-out 1.1s infinite',
              transformOrigin: 'bottom center',
            }}
          >
            <path
              d="M14,70 Q20,50 12,32 T17,8"
              fill="none"
              stroke="rgba(255, 242, 230, 0.44)"
              strokeWidth="3.0"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Ethereal steam forming the word 'code' in the space above mug rim */}
        <div
          className="absolute inset-x-0 flex items-center justify-center text-center pointer-events-none"
          style={{
            bottom: '26px',
            animation: 'steamWordCode 7.5s ease-in-out infinite',
            transformOrigin: 'bottom center',
            willChange: 'transform, opacity, filter',
          }}
        >
          <span
            className="font-playfair italic font-normal tracking-wide lowercase select-none"
            style={{
              fontSize: `${Math.max(20, Math.min(29, Math.round(25 * coords.scale)))}px`,
              color: 'rgba(255, 248, 240, 0.88)',
              textShadow: '0 0 8px rgba(255, 230, 205, 0.7), 0 0 16px rgba(255, 200, 160, 0.42)',
              filter: 'blur(0.8px)',
              letterSpacing: '0.04em',
            }}
          >
            code
          </span>
        </div>
      </div>
    </div>
  );
};

export default AtmosphereEffects;
