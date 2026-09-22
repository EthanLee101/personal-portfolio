import { useEffect, useState } from 'react';

export default function useActiveSection(sectionCount, { onEscape } = {}) {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = document.querySelectorAll('section');

      let currentSection = 0;
      sectionElements.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionCount]);

  useEffect(() => {
    if (!onEscape) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') onEscape();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onEscape]);

  const scrollToSection = (sectionIndex) => {
    const sectionElements = document.querySelectorAll('section');
    if (sectionElements[sectionIndex]) {
      const targetY = sectionElements[sectionIndex].offsetTop;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return { activeSection, isMobile, isMenuOpen, setIsMenuOpen, scrollToSection };
}
