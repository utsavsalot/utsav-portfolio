import React from 'react';

interface Project {
  number: string;
  title: string;
  description: string;
  tech: string[];
}

// Left column projects (Rows 1, 2, 3)
const LEFT_PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Jarvis – Voice Controlled Virtual Assistant',
    description:
      'Developed an AI-based desktop assistant using Python, Ollama & Whisper that performs voice commands like opening applications, playing YouTube, calculator operations, setting reminders and answering queries.',
    tech: ['Python', 'Ollama', 'Whisper', 'Automation'],
  },
  {
    number: '03',
    title: 'Tasveerio – Memory Timeline WebApp',
    description:
      'Created a secure web application using JavaScript, HTML & CSS to store and organize personal text messages, voice notes and images in a date-wise timeline with password protection.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
  },
  {
    number: '05',
    title: 'NOVA – Smart Mirror AI (Ongoing)',
    description:
      'Conceptualizing and developing an AI powered smart mirror that allows customers to virtually select clothes using gesture controls and real-time display, with an AI model for try-on and data integration for billing counters.',
    tech: ['Python', 'Computer Vision', 'AI', 'AR/VR'],
  },
];

// Right column projects (Rows 1, 2, 3)
const RIGHT_PROJECTS: Project[] = [
  {
    number: '02',
    title: 'Hand and Face Recognition & Tracking System',
    description:
      'Built a computer vision system using Python, OpenCV & Tkinter to recognize and track hand & facial features for touchless user interfaces and smart automation applications.',
    tech: ['Python', 'OpenCV', 'Tkinter', 'Computer Vision'],
  },
  {
    number: '04',
    title: 'Alumni Connection Website',
    description:
      'Developed a web platform in a 24-hour hackathon for alumni & students featuring profiles, chat, connection requests, job posts and networking tools to strengthen alumni engagement.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Real-time Chat'],
  },
  {
    number: '06',
    title: 'CrisisConnect – Real-Time Emergency Assistance Platform',
    description:
      'Developed a web-based emergency response platform using React, Firebase, Vite & Tailwind CSS featuring SOS alerts, live crisis mapping, direct emergency SMS and NGO coordination.',
    tech: ['React', 'Firebase', 'Vite', 'Tailwind CSS'],
  },
];

// Sequential order for mobile layout (01 to 06)
const ALL_PROJECTS: Project[] = [
  LEFT_PROJECTS[0],  // 01
  RIGHT_PROJECTS[0], // 02
  LEFT_PROJECTS[1],  // 03
  RIGHT_PROJECTS[1], // 04
  LEFT_PROJECTS[2],  // 05
  RIGHT_PROJECTS[2], // 06
];

interface ProjectsSectionProps {
  onNavigate?: (section: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  return (
    <div className="w-screen h-full flex-shrink-0 relative select-none">
      {/* DESKTOP LAYOUT (lg & above): 3 Horizontal Pairs (1-2, 3-4, 5-6) flanking the centered character */}
      <div className="hidden lg:block w-full h-full relative">
        {/* TOP-LEFT: Heading only (subtitle removed, lifted slightly for breathing space) */}
        <div className="absolute top-9 sm:top-10 md:top-12 lg:top-12 left-4 sm:left-6 md:left-10 lg:left-12 pointer-events-none z-20">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-6xl sm:text-7xl md:text-8xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Projects
            </span>
          </h1>
        </div>

        {/* LEFT COLUMN: Projects 01, 03, 05 */}
        <div className="absolute top-40 sm:top-44 md:top-[165px] lg:top-[170px] left-4 sm:left-6 md:left-10 lg:left-12 max-w-[440px] xl:max-w-[480px] z-20 pointer-events-auto space-y-6 sm:space-y-7 xl:space-y-8">
          {LEFT_PROJECTS.map((project) => (
            <div
              key={project.number}
              className="flex items-start gap-4 sm:gap-5"
            >
              {/* Large Serif Number in Orange Accent (#e8702a) */}
              <span
                className="font-playfair italic font-normal text-3xl sm:text-4xl text-[#e8702a] select-none flex-shrink-0 leading-none pt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                style={{ letterSpacing: '-0.03em' }}
              >
                {project.number}
              </span>

              {/* Details */}
              <div className="flex flex-col items-start text-left flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-medium text-white leading-snug tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/80 font-light leading-relaxed mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs text-white/80 bg-white/[0.07] border border-white/10 backdrop-blur-sm font-normal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Projects 02, 04, 06 (aligned horizontally across with 01, 03, 05) */}
        <div className="absolute top-40 sm:top-44 md:top-[165px] lg:top-[170px] right-4 sm:right-6 md:right-10 lg:right-12 max-w-[440px] xl:max-w-[480px] z-20 pointer-events-auto space-y-6 sm:space-y-7 xl:space-y-8">
          {RIGHT_PROJECTS.map((project) => (
            <div
              key={project.number}
              className="flex items-start gap-4 sm:gap-5"
            >
              {/* Large Serif Number in Orange Accent (#e8702a) */}
              <span
                className="font-playfair italic font-normal text-3xl sm:text-4xl text-[#e8702a] select-none flex-shrink-0 leading-none pt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                style={{ letterSpacing: '-0.03em' }}
              >
                {project.number}
              </span>

              {/* Details */}
              <div className="flex flex-col items-start text-left flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-medium text-white leading-snug tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/80 font-light leading-relaxed mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs text-white/80 bg-white/[0.07] border border-white/10 backdrop-blur-sm font-normal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE / TABLET LAYOUT (< lg): Vertical feed of projects in frosted cards with clear top spacing */}
      <div className="lg:hidden w-full h-full relative">
        {/* Top Heading */}
        <div className="absolute top-16 sm:top-18 left-4 sm:left-6 pointer-events-none z-20">
          <h1 className="text-white leading-[0.95] text-left">
            <span
              className="block font-playfair italic font-normal text-4xl sm:text-5xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Projects
            </span>
          </h1>
        </div>

        {/* Scrollable Project Cards Feed (Positioned beneath character face) */}
        <div className="absolute top-[46dvh] bottom-14 left-4 right-4 sm:left-6 sm:right-6 overflow-y-auto no-scrollbar pointer-events-auto z-20 space-y-3.5 pb-2">
          {ALL_PROJECTS.map((project) => (
            <div
              key={project.number}
              className="bg-black/65 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-4.5 flex items-start gap-3.5 text-left drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
            >
              <span
                className="font-playfair italic font-normal text-2xl sm:text-3xl text-[#e8702a] select-none flex-shrink-0 leading-none pt-0.5"
                style={{ letterSpacing: '-0.03em' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col items-start text-left flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-medium text-white leading-snug tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-white/80 font-light leading-relaxed mt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full text-[10.5px] sm:text-xs text-white/80 bg-white/[0.08] border border-white/10 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
