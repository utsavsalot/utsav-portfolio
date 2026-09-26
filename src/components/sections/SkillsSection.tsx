import React from 'react';

interface SkillsSectionProps {
  onNavigate?: (section: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = () => {
  return (
    <div className="w-screen h-full flex-shrink-0 relative select-none">
      {/* DESKTOP LAYOUT (lg & above) — 100% UNTOUCHED */}
      <div className="hidden lg:block w-full h-full relative">
        {/* Title positioned at top-left below Utsav.dev */}
        <div className="absolute top-16 sm:top-18 md:top-20 left-4 sm:left-5 md:left-6 pointer-events-none z-10">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Skills
            </span>
          </h1>
        </div>

        {/* Content beside character in ROW format: Row 1 = What I Know, Row 2 = Future Interests & Learning */}
        <div className="absolute top-16 sm:top-18 md:top-[80px] lg:top-[85px] left-4 sm:left-[50vw] md:left-[52vw] lg:left-[53.5vw] xl:left-[53vw] right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 z-10 pointer-events-auto max-h-[calc(100dvh-5rem)] overflow-y-auto no-scrollbar pb-8 flex flex-col drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
          {/* FIRST ROW — WHAT I KNOW */}
          <div className="flex flex-col items-start w-full">
            <div className="mb-3">
              <h2 className="text-xl sm:text-2xl font-light tracking-tight flex items-baseline gap-2 flex-wrap">
                <span className="text-[#e8702a]">What I Know</span>
                <span className="text-base sm:text-lg md:text-xl text-white font-light">
                  ( Technical &amp; Soft Skills )
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-2 text-sm sm:text-base text-white/85 leading-relaxed font-light text-left w-full">
              {/* Subcolumn A: Languages, Tools */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#e8702a] font-bold text-base leading-none select-none mt-1">•</span>
                  <p>
                    <strong className="text-white font-medium">Languages:</strong>{' '}
                    Python, Java, C, JavaScript, HTML, CSS, React.js, Node.js
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#e8702a] font-bold text-base leading-none select-none mt-1">•</span>
                  <p>
                    <strong className="text-white font-medium">Tools &amp; Platforms:</strong>{' '}
                    Git, GitHub, Netlify, Vercel, Supabase, Firebase
                  </p>
                </div>
              </div>

              {/* Subcolumn B: Concepts, Soft Skills */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#e8702a] font-bold text-base leading-none select-none mt-1">•</span>
                  <p>
                    <strong className="text-white font-medium">Concepts:</strong>{' '}
                    OOP, DSA, Operating Systems, Basic Cybersecurity, Basic IoT
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#e8702a] font-bold text-base leading-none select-none mt-1">•</span>
                  <p>
                    <strong className="text-white font-medium">Soft Skills:</strong>{' '}
                    Leadership &amp; Teamwork, Communication &amp; Coordination, Time Management, Problem-Solving, Presentation Skills
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle Divider between Row 1 and Row 2 */}
          <div className="w-full border-t border-white/10 my-4 sm:my-5" />

          {/* SECOND ROW — FUTURE INTERESTS & SKILLS */}
          <div className="flex flex-col items-start w-full">
            <div className="mb-3">
              <h2 className="text-xl sm:text-2xl font-light tracking-tight flex items-baseline gap-2 flex-wrap">
                <span className="text-[#e8702a]">Future Interests &amp; Skills</span>
                <span className="text-base sm:text-lg md:text-xl text-white font-light">
                  ( What I want to Learn )
                </span>
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-white/85 leading-relaxed font-light text-left w-full max-w-3xl">
              <p>
                I want to expand my knowledge beyond the fundamentals and explore the intersection of{' '}
                <strong className="text-white font-semibold">
                  software development, cybersecurity, AI, and emerging technologies
                </strong>
                . I am particularly interested in learning{' '}
                <span className="text-white font-medium">emerging security fields</span>,{' '}
                <span className="text-white font-medium">ethical hacking</span>,{' '}
                <span className="text-white font-medium">network security</span>,{' '}
                <span className="text-white font-medium">secure application development</span>,{' '}
                <span className="text-white font-medium">machine learning</span>,{' '}
                <span className="text-white font-medium">generative AI</span>. My current focus is to build a great knowledge base in{' '}
                <strong className="text-white font-semibold">cybersecurity</strong> and learn to{' '}
                <strong className="text-white font-semibold">make systems secure</strong> and gain further knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET LAYOUT (< lg) — Clean Vertical Flow in frosted glass container */}
      <div className="lg:hidden w-full h-full relative">
        {/* Top Heading */}
        <div className="absolute top-16 sm:top-18 left-4 sm:left-6 pointer-events-none z-20">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-4xl sm:text-5xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Skills
            </span>
          </h1>
        </div>

        {/* Content Card (Positioned beneath character face) */}
        <div className="absolute top-[46dvh] bottom-14 left-4 right-4 sm:left-6 sm:right-6 bg-black/65 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 overflow-y-auto no-scrollbar pointer-events-auto z-20 flex flex-col space-y-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {/* Section 1: What I Know */}
          <div className="flex flex-col items-start w-full text-left">
            <h2 className="text-lg sm:text-xl font-light tracking-tight flex items-baseline gap-1.5 flex-wrap mb-2.5">
              <span className="text-[#e8702a] font-medium">What I Know</span>
              <span className="text-xs sm:text-sm text-white/70 font-light">
                ( Technical &amp; Soft Skills )
              </span>
            </h2>

            <div className="space-y-2.5 text-xs sm:text-sm text-white/85 leading-relaxed font-light w-full">
              <div className="flex items-start gap-2">
                <span className="text-[#e8702a] font-bold text-sm leading-none mt-1">•</span>
                <p>
                  <strong className="text-white font-medium">Languages:</strong>{' '}
                  Python, Java, C, JavaScript, HTML, CSS, React.js, Node.js
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#e8702a] font-bold text-sm leading-none mt-1">•</span>
                <p>
                  <strong className="text-white font-medium">Tools &amp; Platforms:</strong>{' '}
                  Git, GitHub, Netlify, Vercel, Supabase, Firebase
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#e8702a] font-bold text-sm leading-none mt-1">•</span>
                <p>
                  <strong className="text-white font-medium">Concepts:</strong>{' '}
                  OOP, DSA, Operating Systems, Basic Cybersecurity, Basic IoT
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#e8702a] font-bold text-sm leading-none mt-1">•</span>
                <p>
                  <strong className="text-white font-medium">Soft Skills:</strong>{' '}
                  Leadership &amp; Teamwork, Communication &amp; Coordination, Time Management, Problem-Solving, Presentation Skills
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/10 pt-1" />

          {/* Section 2: Future Interests & Skills */}
          <div className="flex flex-col items-start w-full text-left">
            <h2 className="text-lg sm:text-xl font-light tracking-tight flex items-baseline gap-1.5 flex-wrap mb-2">
              <span className="text-[#e8702a] font-medium">Future Interests &amp; Skills</span>
              <span className="text-xs sm:text-sm text-white/70 font-light">
                ( What I want to Learn )
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
              I want to expand my knowledge beyond the fundamentals and explore the intersection of{' '}
              <strong className="text-white font-semibold">
                software development, cybersecurity, AI, and emerging technologies
              </strong>
              . I am particularly interested in learning{' '}
              <span className="text-white font-medium">emerging security fields</span>,{' '}
              <span className="text-white font-medium">ethical hacking</span>,{' '}
              <span className="text-white font-medium">network security</span>,{' '}
              <span className="text-white font-medium">secure application development</span>,{' '}
              <span className="text-white font-medium">machine learning</span>,{' '}
              <span className="text-white font-medium">generative AI</span>. My current focus is to build a great knowledge base in{' '}
              <strong className="text-white font-semibold">cybersecurity</strong> and learn to{' '}
              <strong className="text-white font-semibold">make systems secure</strong> and gain further knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
