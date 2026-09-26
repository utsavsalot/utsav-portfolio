import React from 'react';

interface HeroContentProps {
  onExplore?: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onExplore }) => {
  return (
    <>
      {/* 3. Heading (z-50) */}
      <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
        <h1 className="text-white leading-[0.95]">
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{
              letterSpacing: '-0.05em',
              animationDelay: '0.25s',
            }}
          >
            Hey I'm
          </span>
          <span
            className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
            style={{
              letterSpacing: '-0.08em',
              animationDelay: '0.42s',
            }}
          >
            Utsav Salot
          </span>
        </h1>
      </div>

      {/* 4. Bottom-left paragraph (z-50) */}
      <div
        className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[280px] z-50 hero-anim hero-fade"
        style={{ animationDelay: '0.7s' }}
      >
        <p className="text-sm text-white/80 leading-relaxed">
          Ideas are easy. Making them real is the interesting part. I turn concepts into projects, experiments, and experiences through code
        </p>
      </div>

      {/* 5. Bottom-right block (z-50) */}
      <div
        className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[280px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
        style={{ animationDelay: '0.85s' }}
      >
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          Explore the projects, skills, and experiments I've turned into something real. There's always something new being built.
        </p>
        <button
          type="button"
          onClick={onExplore}
          className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer"
        >
          Start Exploring
        </button>
      </div>
    </>
  );
};

export default HeroContent;
