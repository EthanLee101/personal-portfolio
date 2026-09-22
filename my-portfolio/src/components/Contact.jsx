import { Mail, Linkedin, Github } from 'lucide-react';
import { Reveal, RevealItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { contact, contactLinks } from '../data/content';

export default function Contact() {
  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-start justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center w-full">
        <SectionHeading figure="05" title="Let's" accent="Connect" subtitle={contact.blurb} />

        <Reveal as="div" className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <RevealItem className="border bp-hairline hover:border-blueprint-accent p-6 sm:p-8 transition-all duration-300 hover:scale-105 group">
            <a href={`mailto:${contactLinks.email}`} className="block">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blueprint-accent flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:brightness-110 transition-all">
                <Mail size={24} className="text-blueprint-bg" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blueprint-line">Email</h3>
              <p className="text-blueprint-muted text-sm sm:text-base font-label">{contactLinks.email}</p>
            </a>
          </RevealItem>

          <RevealItem className="border bp-hairline hover:border-blueprint-accent p-6 sm:p-8 transition-all duration-300 hover:scale-105 group">
            <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blueprint-accent flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:brightness-110 transition-all">
                <Linkedin size={24} className="text-blueprint-bg" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blueprint-line">LinkedIn</h3>
              <p className="text-blueprint-muted text-sm sm:text-base font-label">Professional Network</p>
            </a>
          </RevealItem>

          <RevealItem className="border bp-hairline hover:border-blueprint-accent p-6 sm:p-8 transition-all duration-300 hover:scale-105 group sm:col-span-2 md:col-span-1">
            <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blueprint-accent flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:brightness-110 transition-all">
                <Github size={24} className="text-blueprint-bg" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blueprint-line">GitHub</h3>
              <p className="text-blueprint-muted text-sm sm:text-base font-label">Code Portfolio</p>
            </a>
          </RevealItem>
        </Reveal>

        <div className="text-blueprint-muted font-label text-xs sm:text-sm">
          <p className="mb-2 sm:mb-3">© {contact.footerYear} Ethan Lee • Built with React &amp; Tailwind CSS</p>
          <p>{contact.footerNote}</p>
        </div>
      </div>
    </section>
  );
}
