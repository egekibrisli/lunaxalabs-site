const W_WAVE = 560;

type Band = {
  y: number;
  amp: number;
  freq: number;
  noise: number;
  color: string;
};

const BANDS: Band[] = [
  { y: 24, amp: 7, freq: 0.13, noise: 1.5, color: '#B8352C' },
  { y: 60, amp: 10, freq: 0.08, noise: 2, color: '#4A7C3A' },
  { y: 96, amp: 14, freq: 0.05, noise: 3, color: '#2C4A7C' },
  { y: 130, amp: 4, freq: 0.22, noise: 1, color: '#1F3D2E' },
];

function pathFor(b: Band): string {
  let d = `M 0 ${b.y}`;
  for (let x = 2; x <= W_WAVE; x += 2) {
    const y =
      b.y +
      Math.sin(x * b.freq) * b.amp +
      Math.sin(x * b.freq * 2.7) * b.amp * 0.26 +
      Math.sin(x * 0.011 + b.y) * b.noise;
    d += ` L ${x} ${y.toFixed(1)}`;
  }
  return d;
}

const PATHS = BANDS.map((b) => ({ d: pathFor(b), color: b.color }));

export function Waveform() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#F5F0E4" />
      <g className="wave-scroll">
        {PATHS.map((p, i) => (
          <path
            key={i}
            d={p.d}
            stroke={p.color}
            strokeWidth="0.9"
            fill="none"
            opacity="0.82"
          />
        ))}
      </g>
      <line x1="0" y1="158" x2="280" y2="158" stroke="#181511" strokeWidth="0.4" />
      <g fontFamily="IBM Plex Mono, monospace" fontSize="6.5" fill="#6B6055" letterSpacing="0.4">
        <text x="6" y="22">α · 8–12 Hz</text>
        <text x="6" y="58">β · 13–30 Hz</text>
        <text x="6" y="95">γ · 30–80 Hz</text>
        <text x="6" y="130">signal</text>
      </g>
      <g fontFamily="IBM Plex Mono, monospace" fontSize="6.5" fill="#6B6055">
        <text x="8" y="172">t₀</text>
        <text x="90" y="172">t₁</text>
        <text x="175" y="172">t₂</text>
        <text x="260" y="172" textAnchor="end">t₃</text>
      </g>
    </svg>
  );
}
