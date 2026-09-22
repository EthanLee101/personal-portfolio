export default function SectionHeading({ figure, title, accent, subtitle, align = 'center' }) {
  return (
    <div className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <div className="inline-flex items-center gap-2 font-label text-xs sm:text-sm tracking-[0.25em] text-blueprint-accent mb-3 sm:mb-4">
        <span>⊕</span>
        <span>FIG. {figure}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blueprint-line leading-tight">
        {title}
        {accent && <span className="text-blueprint-accent"> {accent}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 font-label text-sm sm:text-base text-blueprint-muted tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}
