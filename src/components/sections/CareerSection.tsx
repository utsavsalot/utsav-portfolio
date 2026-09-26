import React from 'react';

export const CareerSection: React.FC = () => {
  return (
    <div className="w-screen h-full flex-shrink-0 relative select-none">
      {/* DESKTOP LAYOUT (lg & above) — 100% UNTOUCHED */}
      <div className="hidden lg:block w-full h-full relative">
        {/* LEFT SIDE: Title + Vertical Flow Timeline beside 3D character */}
        <div className="absolute top-16 sm:top-18 md:top-20 left-4 sm:left-5 md:left-6 pointer-events-auto z-10 max-w-[320px] sm:max-w-[360px] md:max-w-[390px] lg:max-w-[min(420px,29vw)] max-h-[calc(100dvh-5.5rem)] overflow-y-auto no-scrollbar drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
          {/* Title */}
          <h1 className="text-white leading-[0.95] text-left mb-6 sm:mb-7">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Career
            </span>
          </h1>

          {/* Vertical Flow-Based Timeline */}
          <div className="flex flex-col items-start">
            {/* Step 1: 2024 - Secondary School Education */}
            <div className="w-full">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
                2024
              </div>
              <div className="mt-1.5 text-base sm:text-lg font-medium text-white leading-snug">
                Secondary School Education
              </div>
              <div className="mt-0.5 text-sm sm:text-base text-white/75 font-light leading-relaxed">
                Sheth Karanshi Kanji English School
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-mono text-[#e8702a] font-medium tracking-wider">
                94.80%
              </div>
            </div>

            {/* Flow Connector 1 */}
            <div className="py-2.5 pl-0.5 text-[#e8702a] text-base font-medium select-none">
              ↓
            </div>

            {/* Step 2: 2025 — Present - Diploma in Computer Engineering */}
            <div className="w-full">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
                2025 — Present
              </div>
              <div className="mt-1.5 text-base sm:text-lg font-medium text-white leading-snug">
                Pursuing Diploma in Computer Engineering
              </div>
              <div className="mt-0.5 text-sm sm:text-base text-white/75 font-light leading-relaxed">
                Shri Bhagubhai Mafatlal Polytechnic &amp; College of Engineering
              </div>
            </div>

            {/* Flow Connector 2 */}
            <div className="py-2.5 pl-0.5 text-[#e8702a] text-base font-medium select-none">
              ↓
            </div>

            {/* Step 3: Progression Horizon */}
            <div className="w-full pt-0.5">
              <div className="text-sm sm:text-base md:text-lg font-light text-white/90 leading-relaxed">
                Currently Learning{' '}
                <span className="text-[#e8702a] mx-1 font-medium">→</span>{' '}
                Building{' '}
                <span className="text-[#e8702a] mx-1 font-medium">→</span>{' '}
                Exploring
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET LAYOUT (< lg) — Vertical Timeline in clean frosted container */}
      <div className="lg:hidden w-full h-full relative">
        {/* Top Heading */}
        <div className="absolute top-16 sm:top-18 left-4 sm:left-6 pointer-events-none z-20">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-4xl sm:text-5xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Career
            </span>
          </h1>
        </div>

        {/* Timeline & Goals Card (Positioned beneath character face) */}
        <div className="absolute top-[46dvh] bottom-14 left-4 right-4 sm:left-6 sm:right-6 bg-black/65 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 overflow-y-auto no-scrollbar pointer-events-auto z-20 flex flex-col space-y-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {/* Step 1: 2024 */}
          <div className="w-full text-left">
            <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              2024
            </div>
            <div className="mt-1 text-sm sm:text-base font-medium text-white leading-snug">
              Secondary School Education
            </div>
            <div className="mt-0.5 text-xs sm:text-sm text-white/75 font-light leading-relaxed">
              Sheth Karanshi Kanji English School
            </div>
            <div className="mt-1 text-xs sm:text-sm font-mono text-[#e8702a] font-medium tracking-wider">
              94.80%
            </div>
          </div>

          {/* Flow Connector 1 */}
          <div className="text-[#e8702a] text-base font-medium select-none pl-0.5">
            ↓
          </div>

          {/* Step 2: 2025 — Present */}
          <div className="w-full text-left">
            <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              2025 — Present
            </div>
            <div className="mt-1 text-sm sm:text-base font-medium text-white leading-snug">
              Pursuing Diploma in Computer Engineering
            </div>
            <div className="mt-0.5 text-xs sm:text-sm text-white/75 font-light leading-relaxed">
              Shri Bhagubhai Mafatlal Polytechnic &amp; College of Engineering
            </div>
          </div>

          {/* Flow Connector 2 */}
          <div className="text-[#e8702a] text-base font-medium select-none pl-0.5">
            ↓
          </div>

          {/* Step 3: Progression Horizon */}
          <div className="w-full text-left">
            <div className="text-sm sm:text-base font-light text-white/90 leading-relaxed">
              Currently Learning{' '}
              <span className="text-[#e8702a] mx-1 font-medium">→</span>{' '}
              Building{' '}
              <span className="text-[#e8702a] mx-1 font-medium">→</span>{' '}
              Exploring
            </div>
          </div>

          {/* Career Goals */}
          <div className="pt-3 border-t border-white/10 space-y-3 text-xs sm:text-sm text-white/85 leading-relaxed font-light text-left">
            <p>
              My goal is to build a career at the intersection of{' '}
              <strong className="text-white font-semibold">
                software development, cybersecurity, and emerging technologies
              </strong>
              . I want to strengthen my skills in{' '}
              <span className="text-white font-medium">
                secure application development
              </span>
              ,{' '}
              <span className="text-white font-medium">
                ethical security practices
              </span>
              , <span className="text-white font-medium">AI</span>, and{' '}
              <span className="text-white font-medium">system design</span> while
              working on projects that solve real-world problems.
            </p>
            <p>
              As I grow, I aim to become a{' '}
              <strong className="text-white font-semibold">
                well-rounded technology professional
              </strong>{' '}
              who can not only build reliable software, but also understand how to{' '}
              <strong className="text-white font-semibold">protect it</strong>.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default CareerSection;
