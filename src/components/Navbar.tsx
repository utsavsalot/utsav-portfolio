import React, { useState, useRef, useLayoutEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['Welcome', 'About Me', 'Career', 'Skills', 'Projects', 'Certifications'] as const;

interface NavbarProps {
  activeItem?: string;
  onNavigate?: (item: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeItem = 'Welcome',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeActive, setIsResumeActive] = useState(false);

  const pillRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);
  const [resumeCenterLeft, setResumeCenterLeft] = useState<number | null>(null);

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (!pillRef.current || !contactRef.current) return;
      const pillRect = pillRef.current.getBoundingClientRect();
      const contactRect = contactRef.current.getBoundingClientRect();

      // Exactly halfway between the right edge of the navbar pill (Certifications) and the left edge of Contact Me button
      const midX = (pillRect.right + contactRect.left) / 2;
      setResumeCenterLeft(midX);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(updatePosition);
      if (pillRef.current) ro.observe(pillRef.current);
      if (contactRef.current) ro.observe(contactRef.current);
    }

    // Secondary check in case font / layout settled
    const rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
    };
  }, []);

  const handleNavClick = (item: string) => {
    if (onNavigate) {
      onNavigate(item);
    }
    setMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    setIsResumeActive((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 pointer-events-auto">
        {/* Left: Logo & Wordmark (Clean, professional modern sans typography) */}
        <button
          type="button"
          onClick={() => handleNavClick('Welcome')}
          className="flex items-center gap-2.5 z-10 cursor-pointer bg-transparent border-none text-left focus:outline-none group"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 256 256"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
          >
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
            className="text-white text-xl sm:text-[22px] font-bold tracking-tight select-none"
          >
            Utsav<span className="text-white/70 font-normal">.dev</span>
          </span>
        </button>

        {/* Center Pill (Desktop) */}
        <div
          ref={pillRef}
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1 shadow-md"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white bg-white/20 shadow-sm'
                    : 'text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Desktop: My Resume Button positioned EXACTLY halfway between Certifications and Contact Me */}
        <div
          style={
            resumeCenterLeft !== null
              ? { left: `${resumeCenterLeft}px` }
              : undefined
          }
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-auto"
        >
          <button
            type="button"
            onClick={handleResumeClick}
            className={`text-xs lg:text-sm font-semibold px-4.5 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 shadow-md cursor-pointer ${
              isResumeActive
                ? 'bg-[#e8702a] text-white shadow-[#e8702a]/30 scale-[1.03]'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            My Resume
          </button>
        </div>

        {/* Right (Desktop): Contact Me Button */}
        <div className="hidden md:flex items-center z-10">
          <button
            ref={contactRef}
            type="button"
            onClick={() => handleNavClick('Contact Me')}
            className={`text-xs lg:text-sm font-semibold px-4.5 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 shadow-md cursor-pointer ${
              activeItem === 'Contact Me'
                ? 'bg-[#e8702a] text-white shadow-[#e8702a]/30 scale-[1.03]'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-white p-2 focus:outline-none z-10 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center gap-6 px-6 md:hidden">
          <div className="flex flex-col items-center gap-3.5 w-full max-w-xs">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`w-full py-3 rounded-full text-center text-lg font-medium transition-all ${
                  activeItem === item
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            ))}

            {/* Mobile Resume Button */}
            <button
              type="button"
              onClick={() => {
                handleResumeClick();
                setMobileMenuOpen(false);
              }}
              className={`w-full mt-3 text-base font-semibold py-3 rounded-full transition-all shadow-lg cursor-pointer ${
                isResumeActive
                  ? 'bg-[#e8702a] text-white'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              My Resume
            </button>

            {/* Mobile Contact Me Button */}
            <button
              type="button"
              onClick={() => handleNavClick('Contact Me')}
              className={`w-full text-base font-semibold py-3 rounded-full transition-all shadow-lg cursor-pointer ${
                activeItem === 'Contact Me'
                  ? 'bg-[#e8702a] text-white'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
