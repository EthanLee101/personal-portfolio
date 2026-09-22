import { Mail, Linkedin, Github } from 'lucide-react';
import { Reveal, RevealItem } from './Reveal';
import SectionHeading from './SectionHeading';
import CornerMarks from './CornerMarks';
import { about, contactLinks } from '../data/content';

export default function About() {
  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-start justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <div>
            <SectionHeading figure="01" title="About" accent="Me" align="left" />

            <Reveal className="space-y-4 sm:space-y-6 text-base sm:text-lg text-blueprint-line/80 leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
              {about.paragraphs.map((p) => (
                <RevealItem key={p} as="p">
                  {p}
                </RevealItem>
              ))}
            </Reveal>

            <Reveal as="div" className="grid grid-cols-3 gap-3 sm:gap-6 px-4 sm:px-0">
              {about.stats.map((stat) => (
                <RevealItem
                  key={stat.label}
                  className="relative border bp-hairline p-3 sm:p-6 text-center"
                >
                  <span className="text-xl sm:text-3xl font-display font-bold text-blueprint-accent block">
                    {stat.value}
                  </span>
                  <span className="text-blueprint-muted font-label text-[10px] sm:text-xs tracking-wide">
                    {stat.label}
                  </span>
                </RevealItem>
              ))}
            </Reveal>
          </div>

          <div className="flex justify-center mt-8 lg:mt-0">
            <Reveal
              as="div"
              className="relative border bp-hairline p-6 sm:p-8 w-full max-w-md mx-4 sm:mx-0"
            >
              <CornerMarks />
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-blueprint-line">
                Current Focus
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {about.focus.map((item) => (
                  <RevealItem key={item} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-blueprint-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-blueprint-line/90">{item}</span>
                  </RevealItem>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t bp-hairline">
                <p className="text-blueprint-muted font-label text-xs text-center mb-3 sm:mb-4 tracking-wide">
                  LET'S CONNECT
                </p>
                <div className="flex justify-center gap-5 sm:gap-6">
                  <a href={`mailto:${contactLinks.email}`} className="text-blueprint-muted hover:text-blueprint-accent transition-colors">
                    <Mail size={22} />
                  </a>
                  <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blueprint-muted hover:text-blueprint-accent transition-colors">
                    <Linkedin size={22} />
                  </a>
                  <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="text-blueprint-muted hover:text-blueprint-accent transition-colors">
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
