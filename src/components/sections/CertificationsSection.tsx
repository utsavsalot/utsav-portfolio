import React from 'react';
import { Users, Shield, BarChart3, Lightbulb } from 'lucide-react';

interface Certification {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    number: '01',
    icon: Users,
    title: "SBMP's Spectrum Hackathon",
    description:
      'Collaborated in a competitive team environment to develop innovative technical solutions in full-stack development domain under 24 hours.',
  },
  {
    number: '02',
    icon: Shield,
    title: 'CISCO Networking Academy Cybersecurity Certification',
    description:
      'Gained foundational knowledge of network security, cyber threats and protection practices.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Coursera Cybersecurity Analyst Certification',
    description:
      'Developed skills in cybersecurity analysis, risk assessment, and incident response fundamentals.',
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'IGNITE 8.0 Hackathon',
    description:
      'Participated in an 18-hour hackathon, collaborating with a team to develop solutions for real-world problems.',
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <div className="w-screen h-full flex-shrink-0 relative select-none">
      {/* DESKTOP LAYOUT (lg & above) — 100% UNTOUCHED */}
      <div className="hidden lg:block w-full h-full relative">
        {/* HEADING: Positioned on the line of Career, Skills etc. with proper breathing space */}
        <div className="absolute top-16 sm:top-18 md:top-20 left-4 sm:left-5 md:left-6 pointer-events-none z-20">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl whitespace-nowrap"
              style={{ letterSpacing: '-0.04em' }}
            >
              Certifications
            </span>
          </h1>
        </div>

        {/* CERTIFICATIONS: Positioned one below the other on left side with proper breathing space */}
        <div className="absolute top-44 sm:top-48 md:top-[200px] lg:top-[214px] xl:top-[224px] left-4 sm:left-5 md:left-6 pointer-events-auto z-20 max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] max-h-[calc(100dvh-14.5rem)] overflow-y-auto no-scrollbar drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
          <div className="flex flex-col items-start space-y-3.5 sm:space-y-4 lg:space-y-4.5">
            {CERTIFICATIONS.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.number}
                  className="flex items-start gap-3 sm:gap-3.5 w-full"
                >
                  {/* Large Serif Number in Orange Accent (#e8702a) */}
                  <span
                    className="font-playfair italic font-normal text-2xl sm:text-3xl text-[#e8702a] select-none flex-shrink-0 leading-none pt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {cert.number}
                  </span>

                  {/* Rounded Icon Container */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]">
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white/90" strokeWidth={1.8} />
                  </div>

                  {/* Details (Tags removed, no divider lines) */}
                  <div className="flex flex-col items-start text-left flex-1 min-w-0 pt-0.5">
                    <h3 className="text-sm sm:text-[15px] font-semibold text-white leading-snug tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-white/80 font-light leading-relaxed mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET LAYOUT (< lg) — Clean Vertical List in Frosted Card */}
      <div className="lg:hidden w-full h-full relative">
        {/* Top Heading */}
        <div className="absolute top-16 sm:top-18 left-4 sm:left-6 pointer-events-none z-20">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-4xl sm:text-5xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Certifications
            </span>
          </h1>
        </div>

        {/* Scrollable Certifications Feed (Positioned beneath character face) */}
        <div className="absolute top-[46dvh] bottom-14 left-4 right-4 sm:left-6 sm:right-6 bg-black/65 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 overflow-y-auto no-scrollbar pointer-events-auto z-20 space-y-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {CERTIFICATIONS.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.number}
                className="flex items-start gap-3 sm:gap-3.5 w-full text-left"
              >
                {/* Large Serif Number in Orange Accent (#e8702a) */}
                <span
                  className="font-playfair italic font-normal text-2xl sm:text-3xl text-[#e8702a] select-none flex-shrink-0 leading-none pt-0.5"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {cert.number}
                </span>

                {/* Rounded Icon Container */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/20 bg-white/[0.06] backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-white">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/90" strokeWidth={1.8} />
                </div>

                {/* Details */}
                <div className="flex flex-col items-start text-left flex-1 min-w-0 pt-0.5">
                  <h3 className="text-xs sm:text-sm font-semibold text-white leading-snug tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-xs text-white/80 font-light leading-relaxed mt-0.5">
                    {cert.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
