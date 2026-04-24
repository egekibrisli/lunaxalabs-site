const CX = 110;
const CY = 110;
const RR = 88;
const N = 30;

const PAIRS: [number, number][] = [
  [0, 8], [0, 15], [2, 11], [2, 19], [3, 14], [5, 17], [5, 22], [6, 13],
  [8, 20], [9, 18], [10, 23], [11, 25], [13, 24], [15, 26], [16, 2],
  [19, 27], [1, 12], [4, 21], [7, 16], [20, 28], [22, 4],
];

type Point = { x: number; y: number };

const POINTS: Point[] = Array.from({ length: N }, (_, k) => {
  const a = (k / N) * Math.PI * 2 - Math.PI / 2;
  return { x: CX + RR * Math.cos(a), y: CY + RR * Math.sin(a) };
});

const TICKS = POINTS.map((_, i) => {
  const ang = (i / N) * Math.PI * 2 - Math.PI / 2;
  return {
    x1: CX + 95 * Math.cos(ang),
    y1: CY + 95 * Math.sin(ang),
    x2: CX + 100 * Math.cos(ang),
    y2: CY + 100 * Math.sin(ang),
  };
});

export function ConnectomeRing() {
  return (
    <svg id="ring-svg" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <circle cx={CX} cy={CY} r={RR} fill="none" stroke="#D8CEB9" strokeWidth="0.5" />
      <circle
        cx={CX}
        cy={CY}
        r={78}
        fill="none"
        stroke="#D8CEB9"
        strokeWidth="0.5"
        strokeDasharray="1,3"
      />
      <g className="ring-chords" stroke="#1F3D2E" strokeWidth="0.5" strokeOpacity="0.32" fill="none">
        {PAIRS.map(([ai, bi], i) => {
          const a = POINTS[ai];
          const b = POINTS[bi];
          return (
            <path
              key={i}
              d={`M ${a.x} ${a.y} Q ${CX} ${CY} ${b.x} ${b.y}`}
            />
          );
        })}
      </g>
      <g className="ring-nodes" fill="#181511">
        {POINTS.map((p, i) => {
          const isAccent = i % 7 === 0;
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={isAccent ? 3.5 : 2.2}
              fill={isAccent ? '#1F3D2E' : undefined}
            />
          );
        })}
      </g>
      <g className="ring-ticks" stroke="#181511" strokeWidth="0.5">
        {TICKS.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
        ))}
      </g>
    </svg>
  );
}
