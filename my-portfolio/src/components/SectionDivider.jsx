export default function SectionDivider({ label = 'SCALE 1:1', className = '' }) {
  return (
    <div
      className={`flex items-center gap-2 sm:gap-3 font-label text-[10px] sm:text-xs tracking-[0.3em] text-blueprint-muted ${className}`}
    >
      <span>|</span>
      <span className="h-px flex-1 bg-blueprint-muted/40" />
      <span>{label}</span>
      <span className="h-px flex-1 bg-blueprint-muted/40" />
      <span>|</span>
    </div>
  );
}
