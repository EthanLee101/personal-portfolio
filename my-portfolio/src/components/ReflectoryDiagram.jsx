const STEPS = [
  { x: 20, label: '01 ENTRY' },
  { x: 180, label: '02 EMBED' },
  { x: 340, label: '03 RETRIEVE', caption: 'pgvector · similarity search' },
  { x: 500, label: '04 REFLECT', caption: 'gemini api' },
];

const BOX_WIDTH = 120;
const BOX_HEIGHT = 64;
const BOX_Y = 50;
const BOX_MID_Y = BOX_Y + BOX_HEIGHT / 2;

export default function ReflectoryDiagram({ className = '' }) {
  return (
    <svg
      viewBox="0 0 640 220"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label="Diagram: a journal entry is embedded, retrieved via pgvector similarity search, then reflected on with the Gemini API"
    >
      <defs>
        <marker id="bp-arrow-muted" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#5f7a94" />
        </marker>
        <marker id="bp-arrow-accent" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#ff6b35" />
        </marker>
      </defs>

      {/* frame */}
      <rect x="4" y="4" width="632" height="212" fill="none" stroke="#5f7a94" strokeOpacity="0.4" strokeWidth="1" />

      {/* ruler ticks */}
      <line x1="20" y1="20" x2="620" y2="20" stroke="#5f7a94" strokeOpacity="0.5" strokeWidth="1" />
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={i}
          x1={20 + i * 40}
          y1="14"
          x2={20 + i * 40}
          y2="20"
          stroke="#5f7a94"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
      ))}

      {/* connecting arrows */}
      <line x1={20 + BOX_WIDTH} y1={BOX_MID_Y} x2="180" y2={BOX_MID_Y} stroke="#5f7a94" strokeWidth="1.5" markerEnd="url(#bp-arrow-muted)" />
      <line x1={180 + BOX_WIDTH} y1={BOX_MID_Y} x2="340" y2={BOX_MID_Y} stroke="#5f7a94" strokeWidth="1.5" markerEnd="url(#bp-arrow-muted)" />
      <line x1={340 + BOX_WIDTH} y1={BOX_MID_Y} x2="500" y2={BOX_MID_Y} stroke="#ff6b35" strokeWidth="2.5" markerEnd="url(#bp-arrow-accent)" />

      {/* step boxes */}
      {STEPS.map((step) => (
        <g key={step.label}>
          <rect
            x={step.x}
            y={BOX_Y}
            width={BOX_WIDTH}
            height={BOX_HEIGHT}
            rx="2"
            fill="none"
            stroke="#e8f1f8"
            strokeWidth="1"
          />
          <text
            x={step.x + BOX_WIDTH / 2}
            y={BOX_MID_Y + 4}
            textAnchor="middle"
            fontFamily="'Space Mono', ui-monospace, monospace"
            fontSize="11"
            fill="#e8f1f8"
            letterSpacing="0.05em"
          >
            {step.label}
          </text>
          {step.caption && (
            <text
              x={step.x + BOX_WIDTH / 2}
              y={BOX_Y + BOX_HEIGHT + 18}
              textAnchor="middle"
              fontFamily="'Space Mono', ui-monospace, monospace"
              fontSize="8.5"
              fill="#5f7a94"
              letterSpacing="0.03em"
            >
              {step.caption}
            </text>
          )}
        </g>
      ))}

      {/* divider */}
      <line x1="20" y1="165" x2="620" y2="165" stroke="#5f7a94" strokeOpacity="0.3" strokeWidth="1" />

      {/* annotation */}
      <text
        x="320"
        y="190"
        textAnchor="middle"
        fontFamily="'Space Mono', ui-monospace, monospace"
        fontSize="10"
        fill="#ff6b35"
        letterSpacing="0.04em"
      >
        ⊕ GROUNDED IN YOUR OWN PAST ENTRIES — NEVER A GENERIC REPLY
      </text>
    </svg>
  );
}
