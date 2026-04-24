export function Tractography() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#F5F0E4" />
      <g strokeLinecap="round" fill="none">
        <path d="M 15 78 Q 70 68 140 72 Q 210 76 265 82" stroke="#B8352C" strokeWidth="1.9" opacity="0.82" />
        <path d="M 18 92 Q 75 82 140 88 Q 205 92 262 98" stroke="#C94538" strokeWidth="1.4" opacity="0.78" />
        <path d="M 22 106 Q 80 96 140 100 Q 200 104 258 110" stroke="#A82B25" strokeWidth="1.3" opacity="0.8" />
        <path d="M 16 120 Q 70 112 140 116 Q 210 120 266 126" stroke="#D8584C" strokeWidth="1.1" opacity="0.72" />
        <path d="M 24 134 Q 85 126 140 130 Q 195 134 254 140" stroke="#B8352C" strokeWidth="1.5" opacity="0.78" />
        <path d="M 65 18 Q 70 80 74 162" stroke="#4A7C3A" strokeWidth="1.7" opacity="0.82" />
        <path d="M 100 15 Q 104 82 108 165" stroke="#5E8F46" strokeWidth="1.4" opacity="0.78" />
        <path d="M 140 12 Q 143 88 147 168" stroke="#3F6B2F" strokeWidth="1.8" opacity="0.85" />
        <path d="M 178 15 Q 180 85 184 165" stroke="#5E8F46" strokeWidth="1.3" opacity="0.75" />
        <path d="M 213 18 Q 214 82 218 162" stroke="#4A7C3A" strokeWidth="1.5" opacity="0.8" />
        <path d="M 48 25 Q 88 75 128 128" stroke="#2C4A7C" strokeWidth="1.4" opacity="0.78" />
        <path d="M 82 22 Q 122 78 162 135" stroke="#3A5A8F" strokeWidth="1.2" opacity="0.72" />
        <path d="M 158 22 Q 182 78 202 135" stroke="#2C4A7C" strokeWidth="1.3" opacity="0.76" />
        <path d="M 198 25 Q 220 82 232 145" stroke="#3A5A8F" strokeWidth="1.1" opacity="0.7" />
        <path d="M 35 45 Q 100 65 165 55 Q 225 45 262 65" stroke="#C94538" strokeWidth="0.8" opacity="0.5" />
        <path d="M 40 150 Q 110 138 170 152 Q 225 166 260 160" stroke="#B8352C" strokeWidth="0.9" opacity="0.55" />
        <path d="M 30 60 Q 80 110 140 90 Q 200 72 255 115" stroke="#4A7C3A" strokeWidth="0.7" opacity="0.48" />
      </g>
      <text x="10" y="175" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#6B6055" letterSpacing="0.5">
        DIRECTIONAL · RGB
      </text>
      <text x="270" y="175" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#6B6055" letterSpacing="0.5" textAnchor="end">
        LR · AP · SI
      </text>
    </svg>
  );
}
