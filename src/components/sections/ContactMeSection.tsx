import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

interface ContactMeSectionProps {
  onNavigate?: (section: string) => void;
}

export const ContactMeSection: React.FC<ContactMeSectionProps> = () => {
  return (
    <div className="w-screen h-full flex-shrink-0 relative select-none">
      {/* DESKTOP LAYOUT (lg & above) — 100% UNTOUCHED */}
      <div className="hidden lg:block w-full h-full relative">
        {/* HEADING: Positioned at top-left like every other section */}
        <div className="absolute top-16 sm:top-18 md:top-20 left-4 sm:left-5 md:left-6 pointer-events-none z-20">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl whitespace-nowrap"
              style={{ letterSpacing: '-0.04em' }}
            >
              Contact Me
            </span>
          </h1>
        </div>

        {/* CONTENT: Positioned on the right side, with comfortable space from character and laptop */}
        <div className="absolute top-36 sm:top-40 md:top-[158px] lg:top-[165px] xl:top-[172px] left-4 sm:left-[52vw] md:left-[54vw] lg:left-[55.5vw] xl:left-[56vw] right-4 sm:right-6 md:right-8 lg:right-10 xl:right-14 max-w-[480px] xl:max-w-[530px] max-h-[calc(100dvh-12rem)] overflow-y-auto no-scrollbar pointer-events-auto z-20 flex flex-col drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
          {/* Lead Pill Badge (styled like the orange pill badge, non-button) */}
          <div className="mb-3.5 sm:mb-4 w-fit">
            <span className="inline-flex items-center bg-[#e8702a] text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md shadow-[#e8702a]/25 select-none tracking-tight">
              Let’s Connect
            </span>
          </div>

          {/* Question */}
          <p className="text-sm sm:text-base md:text-lg font-medium text-white tracking-tight leading-snug mb-3 sm:mb-3.5">
            Have an idea, a project, or something interesting to build?
          </p>

          {/* Narrative Paragraph (Styled like About Me page) */}
          <p className="text-xs sm:text-sm md:text-base text-white/85 leading-relaxed font-light mb-3 sm:mb-3.5">
            I’m always open to connecting, discussing new ideas, collaborating on projects, and learning from interesting challenges. Whether it’s{' '}
            <span className="text-white font-medium">software development</span>,{' '}
            <span className="text-white font-medium">cybersecurity</span>,{' '}
            <span className="text-white font-medium">AI</span>, or an{' '}
            <span className="text-white font-medium">emerging technology</span>, feel free to reach out.
          </p>

          {/* Closing Callout */}
          <p className="text-xs sm:text-sm md:text-base text-white font-medium italic tracking-wide mb-5 sm:mb-5.5">
            Let’s build something meaningful.
          </p>

          {/* PREMIUM MINIMAL CONTACT LINKS: 4 small monochrome icons inline before each detail */}
          <div className="flex flex-col space-y-3 sm:space-y-3.5 pt-1">
            {/* 1. Email */}
            <a
              href="mailto:utsavsalot@gmail.com"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group cursor-pointer w-fit"
              aria-label="Send email to utsavsalot@gmail.com"
            >
              <Mail
                className="w-4.5 h-4.5 text-white/70 group-hover:text-[#e8702a] transition-colors flex-shrink-0"
                strokeWidth={1.75}
              />
              <span className="text-xs sm:text-sm md:text-[15px] font-light tracking-wide group-hover:underline decoration-white/30 underline-offset-4">
                utsavsalot@gmail.com
              </span>
            </a>

            {/* 2. Phone / WhatsApp */}
            <a
              href="https://wa.me/919372897199"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group cursor-pointer w-fit"
              aria-label="WhatsApp or Call 9372897199"
            >
              <Phone
                className="w-4.5 h-4.5 text-white/70 group-hover:text-[#e8702a] transition-colors flex-shrink-0"
                strokeWidth={1.75}
              />
              <span className="text-xs sm:text-sm md:text-[15px] font-light tracking-wide group-hover:underline decoration-white/30 underline-offset-4">
                9372897199
              </span>
            </a>

            {/* 3. GitHub */}
            <a
              href="https://github.com/utsavsalot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group cursor-pointer w-fit"
              aria-label="GitHub profile: github.com/utsavsalot"
            >
              <Github
                className="w-4.5 h-4.5 text-white/70 group-hover:text-[#e8702a] transition-colors flex-shrink-0"
                strokeWidth={1.75}
              />
              <span className="text-xs sm:text-sm md:text-[15px] font-light tracking-wide group-hover:underline decoration-white/30 underline-offset-4">
                github.com/utsavsalot
              </span>
            </a>

            {/* 4. LinkedIn */}
            <a
              href="https://www.linkedin.com/in/utsav-salot-24458a395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group cursor-pointer w-fit"
              aria-label="LinkedIn profile: utsav-salot-24458a395"
            >
              <Linkedin
                className="w-4.5 h-4.5 text-white/70 group-hover:text-[#e8702a] transition-colors flex-shrink-0"
                strokeWidth={1.75}
              />
              <span className="text-xs sm:text-sm md:text-[15px] font-light tracking-wide group-hover:underline decoration-white/30 underline-offset-4">
                www.linkedin.com/in/utsav-salot-24458a395
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET LAYOUT (< lg) — Dedicated Contact Card with non-overflowing items */}
      <div className="lg:hidden w-full h-full relative">
        {/* Top Heading */}
        <div className="absolute top-16 sm:top-18 left-4 sm:left-6 pointer-events-none z-20">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-4xl sm:text-5xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Contact Me
            </span>
          </h1>
        </div>

        {/* Contact Info Card (Positioned beneath character face) */}
        <div className="absolute top-[46dvh] bottom-14 left-4 right-4 sm:left-6 sm:right-6 bg-black/65 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 overflow-y-auto no-scrollbar pointer-events-auto z-20 flex flex-col drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {/* Badge */}
          <div className="mb-3 w-fit">
            <span className="inline-flex items-center bg-[#e8702a] text-white text-xs sm:text-sm font-semibold px-4.5 py-1.5 rounded-full shadow-md shadow-[#e8702a]/25 select-none tracking-tight">
              Let’s Connect
            </span>
          </div>

          <p className="text-xs sm:text-sm font-medium text-white tracking-tight leading-snug mb-2 text-left">
            Have an idea, a project, or something interesting to build?
          </p>

          <p className="text-[11.5px] sm:text-xs text-white/80 leading-relaxed font-light mb-2 text-left">
            I’m always open to connecting, discussing new ideas, collaborating on projects, and learning from interesting challenges. Whether it’s{' '}
            <span className="text-white font-medium">software development</span>,{' '}
            <span className="text-white font-medium">cybersecurity</span>,{' '}
            <span className="text-white font-medium">AI</span>, or an{' '}
            <span className="text-white font-medium">emerging technology</span>, feel free to reach out.
          </p>

          <p className="text-[11.5px] sm:text-xs text-white font-medium italic tracking-wide mb-3.5 text-left">
            Let’s build something meaningful.
          </p>

          {/* Contact Details List */}
          <div className="flex flex-col space-y-2.5 pt-1 border-t border-white/10">
            {/* Email */}
            <a
              href="mailto:utsavsalot@gmail.com"
              className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors group cursor-pointer w-full text-left"
              aria-label="Send email to utsavsalot@gmail.com"
            >
              <Mail
                className="w-4 h-4 text-white/70 group-hover:text-[#e8702a] transition-colors flex-shrink-0"
                strokeWidth={1.75}
              />
              <span className="text-xs font-light tracking-wide group-hover:underline decoration-white/30 truncate">
                utsavsalot@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="https://wa.me/919372897199"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors group cursor-pointer w-full text-left"
              aria-label="WhatsApp or Call 9372897199"
            >
              <Phone
                className="w-4 h-4 text-white/70 group-hover:text-[#e8702a] transition-colors flex-shrink-0"
                strokeWidth={1.75}
              />
              <span className="text-xs font-light tracking-wide group-hover:underline decoration-white/30 truncate">
                9372897199
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/utsavsalot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors group cursor-pointer w-full text-left"
              aria-label="GitHub profile: github.com/utsavsalot"
            >
              <Github
                className="w-4 h-4 text-white/70 group-hover:text-[#e8702a] transition-colors flex-shrink-0"
                strokeWidth={1.75}
              />
              <span className="text-xs font-light tracking-wide group-hover:underline decoration-white/30 truncate">
                github.com/utsavsalot
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/utsav-salot-24458a395"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors group cursor-pointer w-full text-left"
              aria-label="LinkedIn profile: utsav-salot-24458a395"
            >
              <Linkedin
                className="w-4 h-4 text-white/70 group-hover:text-[#e8702a] transition-colors flex-shrink-0"
                strokeWidth={1.75}
              />
              <span className="text-xs font-light tracking-wide group-hover:underline decoration-white/30 break-all leading-snug">
                linkedin.com/in/utsav-salot-24458a395
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
