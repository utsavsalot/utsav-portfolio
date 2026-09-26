import React from 'react';

interface AboutMePageProps {
  onNavigate?: (section: string) => void;
}

export const AboutMePage: React.FC<AboutMePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-screen h-full flex-shrink-0 relative flex flex-col justify-between">
      {/* DESKTOP LAYOUT (lg & above) — 100% UNTOUCHED */}
      <div className="hidden lg:block w-full h-full relative">
        {/* LEFT SIDE: Title + Paragraph 1 & Paragraph 2 */}
        <div className="absolute top-16 sm:top-18 md:top-20 left-4 sm:left-5 md:left-6 pointer-events-auto z-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
          {/* Title */}
          <h1 className="text-white leading-[0.95] text-left mb-5 sm:mb-6">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              About Me
            </span>
          </h1>

          {/* 2 Paragraphs on the Left */}
          <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed font-light">
            {/* Paragraph 1 */}
            <p className="max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[min(440px,30vw)]">
              I’m a developer with a growing focus on{' '}
              <span className="text-white font-medium">cybersecurity</span> and a
              fascination for solving problems that sit between{' '}
              <strong className="text-white font-semibold">
                software and systems
              </strong>
              . I enjoy taking an idea from{' '}
              <span className="italic text-white">“what if?”</span> to something
              real — researching, designing, building, testing, breaking, and
              rebuilding until I understand not just how something works, but{' '}
              <strong className="text-white font-semibold">why it works</strong>.
            </p>

            {/* Paragraph 2 */}
            <p className="max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[min(410px,28vw)]">
              My interests span{' '}
              <span className="text-white font-medium">
                software development
              </span>
              , <span className="text-white font-medium">cybersecurity</span>,{' '}
              <span className="text-white font-medium">AI</span>, and{' '}
              <span className="text-white font-medium">
                emerging technologies
              </span>
              . I’m especially drawn to projects that challenge me to learn
              something unfamiliar and turn that knowledge into something
              practical. I believe the best way to learn technology is to{' '}
              <strong className="text-white font-semibold">
                get your hands dirty with it
              </strong>{' '}
              — every project, bug, failed experiment, and unexpected result adds
              another piece to the bigger picture.
            </p>
          </div>
        </div>

        {/* UPPER-RIGHT SIDE: Paragraph aligned horizontally with left-side first paragraph */}
        <div className="absolute sm:top-[164px] md:top-[195px] right-5 sm:right-8 md:right-12 lg:right-14 xl:right-16 max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[min(380px,26vw)] z-10 pointer-events-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
          <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light">
            Beyond writing code, I’m interested in understanding how{' '}
            <span className="text-white font-medium">
              technology can solve real problems
            </span>
            . I enjoy{' '}
            <strong className="text-white font-semibold">
              experimenting with new tools
            </strong>
            , exploring ideas outside my comfort zone, and turning what I learn
            into projects that are{' '}
            <strong className="text-white font-semibold">
              useful, practical, and meaningful
            </strong>
            . Every challenge is an{' '}
            <span className="text-white font-medium">
              opportunity to learn something new
            </span>
            .
          </p>
        </div>

        {/* BOTTOM-RIGHT SIDE: Paragraph 3 & Career Pathway Button */}
        <div className="absolute bottom-10 sm:bottom-20 md:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[300px] md:max-w-[340px] flex flex-col items-start gap-4 sm:gap-5 z-10 pointer-events-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
          <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light">
            I’m <strong className="text-white font-medium">always learning</strong>
            , <strong className="text-white font-medium">always experimenting</strong>
            , and{' '}
            <strong className="text-white font-medium">
              always looking for the next problem worth solving
            </strong>
            .
          </p>

          {onNavigate && (
            <button
              type="button"
              onClick={() => onNavigate('Career')}
              className="ml-2.5 sm:ml-4 bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer flex items-center gap-1.5"
            >
              <span>View Career Pathway</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>

      {/* MOBILE / TABLET LAYOUT (< lg) — Dedicated Composition: TOP Heading, MIDDLE Character, BENEATH Text Card */}
      <div className="lg:hidden w-full h-full relative">
        {/* Top Heading */}
        <div className="absolute top-16 sm:top-18 left-4 sm:left-6 pointer-events-none z-20">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-4xl sm:text-5xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              About Me
            </span>
          </h1>
        </div>

        {/* Text Container Below Character (Middle remains clear for character face) */}
        <div className="absolute top-[48dvh] bottom-14 left-4 right-4 sm:left-6 sm:right-6 bg-black/65 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 overflow-y-auto no-scrollbar pointer-events-auto z-20 flex flex-col space-y-3 text-xs sm:text-sm text-white/85 leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <p>
            I’m a developer with a growing focus on{' '}
            <span className="text-white font-medium">cybersecurity</span> and a
            fascination for solving problems that sit between{' '}
            <strong className="text-white font-semibold">
              software and systems
            </strong>
            . I enjoy taking an idea from{' '}
            <span className="italic text-white">“what if?”</span> to something
            real — researching, designing, building, testing, breaking, and
            rebuilding until I understand not just how something works, but{' '}
            <strong className="text-white font-semibold">why it works</strong>.
          </p>

          <p>
            My interests span{' '}
            <span className="text-white font-medium">
              software development
            </span>
            , <span className="text-white font-medium">cybersecurity</span>,{' '}
            <span className="text-white font-medium">AI</span>, and{' '}
            <span className="text-white font-medium">
              emerging technologies
            </span>
            . I’m especially drawn to projects that challenge me to learn
            something unfamiliar and turn that knowledge into something
            practical. I believe the best way to learn technology is to{' '}
            <strong className="text-white font-semibold">
              get your hands dirty with it
            </strong>{' '}
            — every project, bug, failed experiment, and unexpected result adds
            another piece to the bigger picture.
          </p>

          <p>
            Beyond writing code, I’m interested in understanding how{' '}
            <span className="text-white font-medium">
              technology can solve real problems
            </span>
            . I enjoy{' '}
            <strong className="text-white font-semibold">
              experimenting with new tools
            </strong>
            , exploring ideas outside my comfort zone, and turning what I learn
            into projects that are{' '}
            <strong className="text-white font-semibold">
              useful, practical, and meaningful
            </strong>
            .
          </p>

          <p className="pt-1">
            I’m <strong className="text-white font-medium">always learning</strong>
            , <strong className="text-white font-medium">always experimenting</strong>
            , and{' '}
            <strong className="text-white font-medium">
              always looking for the next problem worth solving
            </strong>
            .
          </p>

          {onNavigate && (
            <div className="pt-1.5 pb-0.5">
              <button
                type="button"
                onClick={() => onNavigate('Career')}
                className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer flex items-center gap-1.5"
              >
                <span>View Career Pathway</span>
                <span>→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
