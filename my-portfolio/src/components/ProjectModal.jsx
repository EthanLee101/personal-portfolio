import React from 'react';
import { Github, ExternalLink, X, Play, FileText } from 'lucide-react';
import ReflectoryDiagram from './ReflectoryDiagram';
import PrimerDiagram from './PrimerDiagram';

const DIAGRAMS = {
  Reflectory: ReflectoryDiagram,
  'The Primer': PrimerDiagram,
};

const ProjectModal = React.memo(({ project, onClose, isMobile }) => {
  const modalContent = React.useMemo(() => {
    if (!project || !project.modalContent) return null;

    return {
      title: project.title,
      description: project.modalContent.description,
      features: project.modalContent.features,
      tech: project.tech,
      github: project.github,
      demo: project.demo,
      embedUrl: project.modalContent.embedUrl,
      contentType: project.modalContent.type,
    };
  }, [project]);

  if (!modalContent) return null;

  const isDiagram = modalContent.contentType === 'diagram';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-blueprint-bg border bp-hairline max-w-6xl w-full h-[90vh] sm:h-[85vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 border-b bp-hairline flex-shrink-0">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <h2 className="font-display text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-blueprint-accent">{modalContent.title}</h2>
              <p className="text-blueprint-muted text-sm sm:text-base">{modalContent.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-blueprint-muted hover:text-blueprint-line transition-colors hover:rotate-90 transform duration-300 flex-shrink-0 p-1 sm:p-2"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 p-3 sm:p-6 overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 h-full">
            <div className="lg:col-span-1 flex flex-col h-full overflow-hidden">
              <div className="overflow-y-auto flex-1">
                <h3 className="font-label text-xs sm:text-sm tracking-widest mb-3 sm:mb-4 text-blueprint-accent">KEY FEATURES</h3>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {modalContent.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blueprint-accent mt-1.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-blueprint-line/80 text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-label text-xs sm:text-sm tracking-widest mb-3 sm:mb-4 text-blueprint-accent">TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {modalContent.tech.map((tech) => (
                    <span key={tech} className="font-label text-[10px] sm:text-xs text-blueprint-muted border bp-hairline px-2 sm:px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 flex-shrink-0">
                {modalContent.github && (
                  <a
                    href={modalContent.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border bp-hairline hover:border-blueprint-accent text-blueprint-line px-3 sm:px-4 py-2 sm:py-3 transition-all duration-200 text-xs sm:text-sm font-label"
                  >
                    <Github size={14} className="mr-1.5 sm:mr-2" />
                    View Source Code
                  </a>
                )}
                {modalContent.demo && (
                  <a
                    href={modalContent.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blueprint-accent hover:brightness-110 text-blueprint-bg px-3 sm:px-4 py-2 sm:py-3 transition-all duration-200 text-xs sm:text-sm font-label font-bold"
                  >
                    <ExternalLink size={14} className="mr-1.5 sm:mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 h-full flex flex-col">
              <div className="border bp-hairline flex flex-col h-full overflow-hidden">
                {!isDiagram && (
                  <div className="flex items-center justify-between p-3 sm:p-4 border-b bp-hairline flex-shrink-0">
                    {isMobile ? (
                      <a
                        href={modalContent.embedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full text-xs sm:text-sm text-blueprint-muted hover:text-blueprint-accent transition-colors cursor-pointer group font-label"
                      >
                        <span>
                          {modalContent.contentType === 'demo' && 'Demo Preview'}
                          {modalContent.contentType === 'slides' && 'Presentation'}
                        </span>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <ExternalLink className="text-blueprint-accent" size={14} />
                          {modalContent.contentType === 'demo' && <Play className="text-blueprint-accent" size={16} />}
                          {modalContent.contentType === 'slides' && <FileText className="text-blueprint-accent" size={16} />}
                        </div>
                      </a>
                    ) : (
                      <>
                        <h3 className="font-label text-xs sm:text-sm text-blueprint-muted">
                          {modalContent.contentType === 'demo' && 'Demo Preview'}
                          {modalContent.contentType === 'slides' && 'Presentation'}
                        </h3>
                        {modalContent.contentType === 'demo' && <Play className="text-blueprint-accent" size={16} />}
                        {modalContent.contentType === 'slides' && <FileText className="text-blueprint-accent" size={16} />}
                      </>
                    )}
                  </div>
                )}

                {isDiagram ? (
                  <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-blueprint-bg">
                    {(() => {
                      const Diagram = DIAGRAMS[modalContent.title] || ReflectoryDiagram;
                      return <Diagram className="max-w-2xl" />;
                    })()}
                  </div>
                ) : (
                  !isMobile && (
                    <div className="flex-1 bg-black overflow-hidden relative">
                      <iframe
                        key={`iframe-${modalContent.title}-${modalContent.embedUrl}`}
                        src={modalContent.embedUrl}
                        className="absolute inset-0 w-full h-full"
                        title={`${modalContent.title} Content`}
                        allow="autoplay; encrypted-media; fullscreen"
                        allowFullScreen
                        loading="lazy"
                        style={{ border: 'none', display: 'block', margin: 0, padding: 0, pointerEvents: 'auto' }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  if (!prevProps.project && !nextProps.project) return true;
  if (!prevProps.project || !nextProps.project) return false;

  return (
    prevProps.project.id === nextProps.project.id &&
    prevProps.project.modalContent?.embedUrl === nextProps.project.modalContent?.embedUrl &&
    prevProps.project.title === nextProps.project.title &&
    prevProps.isMobile === nextProps.isMobile
  );
});

export default ProjectModal;
