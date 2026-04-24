export function ActivationMap() {
  return (
    <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="180" fill="#F5F0E4" />
      <defs>
        <radialGradient id="h-red">
          <stop offset="0%" stopColor="#E06850" stopOpacity="0.92" />
          <stop offset="50%" stopColor="#C94538" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#B8352C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="h-warm">
          <stop offset="0%" stopColor="#F0A04A" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#E0803A" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#D0602A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="h-cool">
          <stop offset="0%" stopColor="#3A5A8F" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#2C4A7C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="120" cy="92" rx="98" ry="72" fill="#EEE8DA" stroke="#181511" strokeWidth="0.7" />
      <ellipse
        cx="120" cy="92" rx="98" ry="72"
        fill="none"
        stroke="#181511"
        strokeWidth="0.4"
        strokeDasharray="2,3"
        opacity="0.4"
      />
      <line x1="120" y1="22" x2="120" y2="162" stroke="#181511" strokeWidth="0.3" strokeDasharray="1,2" />
      <circle cx="76" cy="72" r="30" fill="url(#h-red)" />
      <circle cx="158" cy="80" r="36" fill="url(#h-red)" />
      <circle cx="102" cy="118" r="24" fill="url(#h-warm)" />
      <circle cx="172" cy="130" r="20" fill="url(#h-warm)" />
      <circle cx="58" cy="125" r="16" fill="url(#h-cool)" />
      <circle cx="195" cy="60" r="12" fill="url(#h-cool)" />
      <g fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#181511" letterSpacing="0.5">
        <text x="76" y="36" textAnchor="middle">PFC</text>
        <line x1="76" y1="39" x2="76" y2="56" stroke="#181511" strokeWidth="0.4" />
        <text x="158" y="36" textAnchor="middle">LIN</text>
        <line x1="158" y1="39" x2="158" y2="60" stroke="#181511" strokeWidth="0.4" />
        <text x="172" y="160" textAnchor="middle">TEM</text>
        <line x1="172" y1="150" x2="172" y2="145" stroke="#181511" strokeWidth="0.4" />
      </g>
      <text x="10" y="175" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#6B6055" letterSpacing="0.5">
        AXIAL · z = 0
      </text>
      <text x="230" y="175" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#6B6055" letterSpacing="0.5" textAnchor="end">
        p &lt; 0.001
      </text>
    </svg>
  );
}
