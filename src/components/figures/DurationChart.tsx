export function DurationChart() {
  return (
    <svg
      viewBox="0 0 280 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', width: '100%', height: 'auto' }}
    >
      <text x="0" y="22" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#6B6055" letterSpacing="0.5">
        PROJECTED
      </text>
      <rect x="0" y="30" width="252" height="10" fill="#D8CEB9" />
      <text x="258" y="39" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#181511">
        14 mo
      </text>
      <text x="0" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#6B6055" letterSpacing="0.5">
        ACTUAL
      </text>
      <rect x="0" y="68" width="90" height="10" fill="#1F3D2E" />
      <text x="96" y="77" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#1F3D2E">
        5 mo
      </text>
      <line x1="0" y1="95" x2="270" y2="95" stroke="#181511" strokeWidth="0.5" />
      <g fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#9E9489">
        <line x1="0" y1="95" x2="0" y2="99" stroke="#181511" strokeWidth="0.5" />
        <text x="0" y="110">0</text>
        <line x1="90" y1="95" x2="90" y2="99" stroke="#181511" strokeWidth="0.5" />
        <text x="87" y="110">5</text>
        <line x1="180" y1="95" x2="180" y2="99" stroke="#181511" strokeWidth="0.5" />
        <text x="174" y="110">10</text>
        <line x1="252" y1="95" x2="252" y2="99" stroke="#181511" strokeWidth="0.5" />
        <text x="246" y="110">14</text>
        <text x="125" y="118" fontStyle="italic" fill="#6B6055">
          months from kick-off
        </text>
      </g>
    </svg>
  );
}
