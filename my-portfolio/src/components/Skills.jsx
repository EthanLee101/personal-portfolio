import { Code, Monitor, Server, Brain } from 'lucide-react';
import { Reveal, RevealItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { skills, exploringTech } from '../data/content';

const ICONS = { Code, Monitor, Server, Brain };

export default function Skills() {
  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-start justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center w-full">
        <SectionHeading figure="04" title="Technical" accent="Skills" subtitle="Technologies I work with daily" />

        <Reveal as="div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 flex-1 content-center">
          {skills.map((skillGroup) => {
            const Icon = ICONS[skillGroup.icon];
            return (
              <RevealItem
                key={skillGroup.category}
                className="border bp-hairline hover:border-blueprint-accent/60 p-4 sm:p-6 text-center transition-all duration-300 h-fit"
              >
                <div className="text-blueprint-accent mb-4 sm:mb-6 flex justify-center">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-blueprint-line">{skillGroup.category}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="text-blueprint-line/80 py-1.5 sm:py-2 px-3 sm:px-4 border bp-hairline text-xs sm:text-sm font-label">
                      {skill}
                    </div>
                  ))}
                </div>
              </RevealItem>
            );
          })}
        </Reveal>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-blueprint-muted text-base sm:text-lg mb-4 sm:mb-6 px-4 sm:px-0">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 font-label text-xs sm:text-sm text-blueprint-muted px-4 sm:px-0">
            {exploringTech.map((tech) => (
              <span key={tech} className="px-2.5 sm:px-3 py-1 border bp-hairline">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
