import { Reveal, RevealItem } from './Reveal';
import SectionHeading from './SectionHeading';
import SectionDivider from './SectionDivider';
import CornerMarks from './CornerMarks';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-start justify-center relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center w-full">
        <SectionHeading figure="02" title="Work" accent="Experience" subtitle="REV. 2026" />

        <Reveal as="div" className="space-y-8">
          {experience.map((job) => (
            <RevealItem key={job.id} className="relative border bp-hairline p-6 sm:p-8">
              <CornerMarks />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6 pb-4 border-b bp-hairline">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-blueprint-line">
                    {job.role}
                  </h3>
                  <p className="text-blueprint-accent font-label text-sm tracking-wide mt-1">
                    {job.company} — {job.location}
                  </p>
                </div>
                <span className="font-label text-xs sm:text-sm text-blueprint-muted whitespace-nowrap">
                  {job.dates}
                </span>
              </div>

              <ul className="space-y-3">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-blueprint-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-blueprint-line/85 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </Reveal>

        <SectionDivider className="mt-10 sm:mt-12" />
      </div>
    </section>
  );
}
