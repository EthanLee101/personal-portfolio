import { Github, ExternalLink, Eye } from 'lucide-react';
import { Reveal, RevealItem } from './Reveal';
import SectionHeading from './SectionHeading';
import ReflectoryDiagram from './ReflectoryDiagram';
import PrimerDiagram from './PrimerDiagram';
import { projects } from '../data/content';

const demoLabel = (url) => (url.includes('devpost.com') ? 'Devpost' : 'Live');

const DIAGRAMS = {
  Reflectory: ReflectoryDiagram,
  'The Primer': PrimerDiagram,
};

export default function Projects({ isMobile, onSelectProject }) {
  const techLimit = isMobile ? 2 : 3;

  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-start justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center w-full">
        <SectionHeading figure="03" title="Featured" accent="Projects" subtitle="Applications I've built from the ground up" />

        <Reveal as="div" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 flex-1 content-center">
          {projects.map((project) => (
            <RevealItem
              key={project.id}
              className="border bp-hairline hover:border-blueprint-accent/60 transition-all duration-300 h-fit"
            >
              <div className="h-32 sm:h-40 bg-blueprint-bg flex items-center justify-center overflow-hidden border-b bp-hairline p-2">
                {project.visualType === 'diagram' && DIAGRAMS[project.title] ? (
                  (() => {
                    const Diagram = DIAGRAMS[project.title];
                    return <Diagram />;
                  })()
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 border border-dashed border-blueprint-muted/30">
                    <span className="font-label text-[10px] tracking-widest text-blueprint-muted">
                      NO. {String(project.id).padStart(2, '0')}
                    </span>
                    <span className="font-display text-sm text-blueprint-line/70">{project.title}</span>
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="font-display text-base sm:text-lg font-bold text-blueprint-line">{project.title}</h3>
                  <span className="font-label text-[10px] sm:text-xs text-blueprint-accent border border-blueprint-accent/40 px-2 py-1 flex-shrink-0">
                    {project.category}
                  </span>
                </div>
                <p className="text-blueprint-line/70 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                  {project.tech.slice(0, techLimit).map((tech) => (
                    <span key={tech} className="font-label text-[10px] text-blueprint-muted border bp-hairline px-2 py-1">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > techLimit && (
                    <span className="font-label text-[10px] text-blueprint-muted">+{project.tech.length - techLimit}</span>
                  )}
                </div>

                <div className="font-label text-[10px] sm:text-xs text-blueprint-accent mb-2 sm:mb-3 text-center border bp-hairline py-1.5 sm:py-2 px-2">
                  {project.stats}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blueprint-muted hover:text-blueprint-accent text-xs sm:text-sm font-label transition-colors"
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center text-xs sm:text-sm font-label transition-colors ${
                          project.github ? 'text-blueprint-muted hover:text-blueprint-accent' : 'text-blueprint-accent hover:brightness-110'
                        }`}
                      >
                        <ExternalLink size={14} className="mr-1" />
                        {demoLabel(project.demo)}
                      </a>
                    )}
                  </div>

                  {project.modalContent && (
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center text-blueprint-bg text-xs bg-blueprint-accent hover:brightness-110 px-2 py-1 transition-all duration-300 font-label font-bold flex-shrink-0"
                    >
                      <Eye size={12} className="mr-1" />
                      Details
                    </button>
                  )}
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
