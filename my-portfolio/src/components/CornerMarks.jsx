const positions = [
  'top-2 left-2 sm:top-3 sm:left-3',
  'top-2 right-2 sm:top-3 sm:right-3',
  'bottom-2 left-2 sm:bottom-3 sm:left-3',
  'bottom-2 right-2 sm:bottom-3 sm:right-3',
];

export default function CornerMarks({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {positions.map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} font-label text-blueprint-muted/50 text-xs sm:text-sm leading-none`}
        >
          ⊕
        </span>
      ))}
    </div>
  );
}
