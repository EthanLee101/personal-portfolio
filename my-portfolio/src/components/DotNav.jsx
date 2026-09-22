export default function DotNav({ sections, activeSection, scrollToSection }) {
  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-4">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(index)}
          className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
            activeSection === index
              ? 'bg-blueprint-accent border-blueprint-accent scale-125'
              : 'border-blueprint-muted hover:border-blueprint-accent hover:scale-110'
          }`}
          aria-label={`Go to ${section.label} section`}
        />
      ))}
    </div>
  );
}
