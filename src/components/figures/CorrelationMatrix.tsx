const N = 14;
const GRID_W = 140;
const GRID_H = 140;
const CW = GRID_W / N;
const CH = GRID_H / N;
const OX = 30;
const OY = 16;

function colorFor(v: number): string {
  if (v < 0.5) {
    const t = v * 2;
    return `rgb(${Math.round(44 + 201 * t)},${Math.round(74 + 166 * t)},${Math.round(124 + 104 * t)})`;
  }
  const t = (v - 0.5) * 2;
  return `rgb(${Math.round(245 - 61 * t)},${Math.round(240 - 187 * t)},${Math.round(228 - 184 * t)})`;
}

// Seeded PRNG — matches HTML script order exactly
function computeCells() {
  let seed = 42;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const cells: { x: number; y: number; fill: string }[] = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const dist = Math.abs(i - j);
      const base = Math.exp(-dist * 0.32);
      const noise = (rnd() - 0.5) * 0.22;
      let val = Math.max(0, Math.min(1, base + noise));
      if (
        (i < 5 && j < 5) ||
        (i >= 5 && i < 10 && j >= 5 && j < 10) ||
        (i >= 10 && j >= 10)
      ) {
        val = Math.min(1, val + 0.22);
      }
      if (i === j) val = 1;
      cells.push({
        x: OX + j * CW,
        y: OY + i * CH,
        fill: colorFor(val),
      });
    }
  }
  return cells;
}

const CELLS = computeCells();

const AXIS_LABELS = (() => {
  const xs: { x: number; y: number; text: number }[] = [];
  const ys: { x: number; y: number; text: number }[] = [];
  for (let i = 0; i < N; i += 2) {
    xs.push({ x: OX + i * CW + CW / 2, y: OY + GRID_H + 10, text: i });
    ys.push({ x: OX - 4, y: OY + i * CH + CH / 2 + 2, text: i });
  }
  return { xs, ys };
})();

const COLORBAR = Array.from({ length: 13 }, (_, k) => ({
  y: OY + 4 + k * 10,
  fill: colorFor(1 - k / 12),
}));

const COLORBAR_LABELS: [string, number][] = [
  ['+1', 10],
  ['0', 68],
  ['−1', 126],
];

export function CorrelationMatrix() {
  return (
    <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="180" fill="#F5F0E4" />
      <g>
        {CELLS.map((c, i) => (
          <rect
            key={i}
            x={c.x}
            y={c.y}
            width={CW - 0.4}
            height={CH - 0.4}
            fill={c.fill}
          />
        ))}
        {AXIS_LABELS.xs.map((l, i) => (
          <text
            key={`x${i}`}
            x={l.x}
            y={l.y}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="6.5"
            fill="#6B6055"
            textAnchor="middle"
          >
            {l.text}
          </text>
        ))}
        {AXIS_LABELS.ys.map((l, i) => (
          <text
            key={`y${i}`}
            x={l.x}
            y={l.y}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="6.5"
            fill="#6B6055"
            textAnchor="end"
          >
            {l.text}
          </text>
        ))}
        {COLORBAR.map((b, k) => (
          <rect
            key={k}
            x={OX + GRID_W + 10}
            y={b.y}
            width={8}
            height={10}
            fill={b.fill}
          />
        ))}
        {COLORBAR_LABELS.map(([label, dy], i) => (
          <text
            key={i}
            x={OX + GRID_W + 22}
            y={OY + dy}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="6.5"
            fill="#6B6055"
          >
            {label}
          </text>
        ))}
        <text
          x={OX + GRID_W + 10}
          y={OY - 2}
          fontFamily="Instrument Serif, serif"
          fontSize="11"
          fontStyle="italic"
          fill="#1F3D2E"
        >
          ρ
        </text>
      </g>
    </svg>
  );
}
