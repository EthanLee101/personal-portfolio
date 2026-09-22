import { useMemo, useState, useCallback } from 'react';
import Nav from './components/Nav';
import DotNav from './components/DotNav';
import BlueprintBackground from './components/BlueprintBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import useActiveSection from './lib/useActiveSection';
import { sections } from './data/content';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleModalClose = useCallback(() => setSelectedProject(null), []);

  const { activeSection, isMobile, isMenuOpen, setIsMenuOpen, scrollToSection } = useActiveSection(
    sections.length,
    { onEscape: handleModalClose }
  );

  const projectsIndex = useMemo(() => sections.findIndex((s) => s.id === 'projects'), []);

  return (
    <div className="text-blueprint-line overflow-x-hidden">
      <BlueprintBackground />

      <Nav
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <DotNav sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />

      <Hero onViewWork={() => scrollToSection(projectsIndex)} onScrollNext={() => scrollToSection(1)} />
      <About />
      <Experience />
      <Projects isMobile={isMobile} onSelectProject={setSelectedProject} />
      <Skills />
      <Contact />

      {selectedProject && (
        <ProjectModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={handleModalClose}
          isMobile={isMobile}
        />
      )}
    </div>
  );
}
