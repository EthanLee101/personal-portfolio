import { Menu, X } from 'lucide-react';

export default function Nav({ sections, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed top-0 w-full bg-blueprint-bg/90 backdrop-blur-sm z-50 border-b bp-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-5">
          <div className="hidden md:flex gap-10 font-label text-xs tracking-[0.2em]">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className={`relative uppercase transition-colors duration-300 ${
                  activeSection === index
                    ? 'text-blueprint-accent'
                    : 'text-blueprint-muted hover:text-blueprint-line'
                }`}
              >
                §{index + 1} {section.label}
                {activeSection === index && (
                  <span className="absolute -bottom-2 left-0 w-full h-px bg-blueprint-accent" />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-blueprint-muted hover:text-blueprint-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t bp-hairline mt-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className="block w-full text-center py-3 px-2 font-label text-xs uppercase tracking-[0.2em] text-blueprint-muted hover:text-blueprint-accent transition-colors"
              >
                §{index + 1} {section.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
