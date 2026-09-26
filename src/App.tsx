import React from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundVideo } from './components/BackgroundVideo';
import { AtmosphereEffects } from './components/AtmosphereEffects';
import { AboutMePage } from './components/sections/AboutMePage';
import { CareerSection } from './components/sections/CareerSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactMeSection } from './components/sections/ContactMeSection';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';

interface SectionConfig {
  id: string;
  name: string;
}

const SECTIONS_CONFIG: SectionConfig[] = [
  { id: 'welcome', name: 'Welcome' },
  { id: 'about', name: 'About Me' },
  { id: 'career', name: 'Career' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'certifications', name: 'Certifications' },
];

export const App: React.FC = () => {
  const { scrollX, scrollY, activeSection, scrollToSection } = useHorizontalScroll();

  return (
    <div
      className="min-h-screen bg-black text-white tracking-[-0.02em] overflow-hidden select-none"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fixed Navigation (Header) */}
      <Navbar
        activeItem={activeSection}
        onNavigate={(item) => scrollToSection(item as any)}
      />

      {/* Main Full-Screen Hero Viewport */}
      <main
        className="relative w-full overflow-hidden h-screen bg-black"
        style={{ height: '100dvh' }}
      >
        {/* 1. Base Layer (z-0): Cozy Developer Room Background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/backgrounds/room_sunset.jpg"
            alt="Room Background"
            className="w-full h-full object-cover object-center"
          />

          {/* Dynamic atmospheric effects: flying birds in sunset window & delicate coffee steam forming 'code' */}
          <AtmosphereEffects />

          {/* Subtle cinematic gradient and vignette for character focus and text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 75% 85% at 50% 50%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.82) 100%)',
            }}
          />
          {/* Side scrim to enhance left/right text contrast */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.38) 100%)',
            }}
          />
        </div>

        {/* 2. Middle Layer (z-10): 3D Character Video with horizontal gaze cursor tracking and smooth section transition */}
        <BackgroundVideo src="/character/character_alpha.webm" scrollX={scrollX} scrollY={scrollY} />

        {/* 3. Section Typography & Content Layer (z-50): Horizontally & Vertically scrollable */}
        <div
          className="absolute inset-0 w-full h-full z-50 pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(0, -${scrollY}px, 0)`,
          }}
        >
          {/* Horizontal Sections Layer (0 to 5) */}
          <div
            className="absolute top-0 left-0 h-full flex pointer-events-none will-change-transform"
            style={{
              width: `${SECTIONS_CONFIG.length * 100}vw`,
              transform: `translate3d(-${scrollX}px, 0, 0)`,
            }}
          >
            {/* Section 0: About Me */}
            <div className="w-screen h-full flex-shrink-0 relative flex flex-col justify-between">
              {/* Heading positioned at top-left below Utsav.dev */}
              <div className="absolute top-16 sm:top-18 md:top-20 left-4 sm:left-5 md:left-6 flex flex-col items-start text-left pointer-events-none">
                <h1 className="text-white leading-[0.95] text-left">
                  <span
                    className="block font-playfair italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl hero-anim hero-reveal text-left"
                    style={{
                      letterSpacing: '-0.05em',
                      animationDelay: '0.25s',
                    }}
                  >
                    Hey I'm
                  </span>
                  <span
                    className="block font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl -mt-1 hero-anim hero-reveal text-left"
                    style={{
                      letterSpacing: '-0.08em',
                      animationDelay: '0.42s',
                    }}
                  >
                    Utsav Salot
                  </span>
                </h1>
              </div>

              {/* Left copy positioned above the coffee cup with breathable space */}
              <div
                className="hidden sm:block absolute top-[44%] sm:top-[46%] md:top-[47%] left-4 sm:left-5 md:left-6 max-w-[280px] hero-anim hero-fade pointer-events-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]"
                style={{ animationDelay: '0.7s' }}
              >
                <p className="text-sm text-white/80 leading-relaxed">
                  Ideas are easy. Making them real is the interesting part. I turn concepts into projects, experiments, and experiences through code
                </p>
              </div>

              {/* Bottom-right block (Frosted on mobile for legibility over character shirt, clean on desktop) */}
              <div
                className="absolute bottom-12 sm:bottom-24 left-4 right-4 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[280px] p-4 sm:p-0 rounded-2xl sm:rounded-none bg-black/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border border-white/10 sm:border-none flex flex-col items-start gap-3 sm:gap-5 hero-anim hero-fade pointer-events-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]"
                style={{ animationDelay: '0.85s' }}
              >
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed text-left">
                  Explore the projects, skills, and experiments I've turned into something real. There's always something new being built.
                </p>
                <button
                  type="button"
                  onClick={() => scrollToSection('Projects')}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-medium px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer"
                >
                  Start Exploring
                </button>
              </div>
            </div>

            {/* Section 1: About Me */}
            <AboutMePage onNavigate={(sec) => scrollToSection(sec as any)} />

            {/* Section 2: Career (Education & Flow Pathway) */}
            <CareerSection />

            {/* Section 3: Skills */}
            <SkillsSection onNavigate={(sec) => scrollToSection(sec as any)} />

            {/* Section 4: Projects */}
            <ProjectsSection onNavigate={(sec) => scrollToSection(sec as any)} />

            {/* Section 5: Certifications */}
            <CertificationsSection />
          </div>

          {/* Vertical Downward Section: Contact Me */}
          <div className="absolute top-[100vh] left-0 w-screen h-full pointer-events-none">
            <ContactMeSection onNavigate={(sec) => scrollToSection(sec as any)} />
          </div>
        </div>

        {/* 4. Minimal Horizontal Progress Dots (z-50) - Fades out smoothly on Contact Me */}
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 pointer-events-auto transition-opacity duration-300"
          style={{
            opacity: Math.max(0, 1 - (scrollY / ((typeof window !== 'undefined' ? window.innerHeight : 900) * 0.4))),
            pointerEvents: scrollY > 50 ? 'none' : 'auto',
          }}
        >
          {SECTIONS_CONFIG.map((sec) => {
            const isActive = activeSection === sec.name;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.name as any)}
                aria-label={`Scroll to ${sec.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-1.5 bg-[#e8702a]'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
