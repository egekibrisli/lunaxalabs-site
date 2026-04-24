const NODES: [number, number][] = [
  [70, 88], [84, 72], [100, 58], [136, 52], [152, 54],
  [78, 108], [93, 92], [112, 82], [128, 76], [146, 78],
  [88, 132], [106, 118], [123, 110], [168, 48], [188, 50],
  [208, 58], [220, 72], [160, 72], [180, 74], [200, 82],
  [218, 95], [165, 98], [184, 98], [204, 102], [230, 82],
  [244, 96], [252, 118], [250, 140], [240, 158], [218, 114],
  [232, 128], [242, 140], [228, 155], [84, 150], [104, 145],
  [126, 140], [146, 138], [166, 140], [188, 138], [208, 138],
  [94, 175], [115, 170], [136, 165], [176, 160], [198, 160],
  [98, 200], [122, 205], [145, 200], [168, 195], [190, 188],
  [210, 193], [216, 186], [232, 192], [248, 198], [254, 218],
  [242, 235], [222, 222], [235, 216], [150, 200], [153, 225],
  [158, 250],
];

// [cx, cy, r, animation-delay seconds]
const HUBS: [number, number, number, number][] = [
  [136, 52, 5, 0],
  [188, 50, 5, 0.7],
  [230, 128, 5.5, 1.4],
  [156, 118, 6, 2.1],
  [232, 216, 5, 2.8],
];

// [x, y, letter]
const LABELS: [number, number, string][] = [
  [50, 40, 'I'],
  [178, 25, 'II'],
  [285, 108, 'III'],
  [50, 170, 'IV'],
  [272, 250, 'V'],
];

// [x1, y1, x2, y2]
const LEADS: [number, number, number, number][] = [
  [58, 44, 95, 62],
  [184, 30, 160, 50],
  [278, 110, 246, 120],
  [58, 172, 90, 155],
  [268, 245, 238, 215],
];

// Long-range connections between hubs and distant nodes
const LONG_RANGE: [number, number, number, number][] = [
  [136, 52, 156, 118],
  [188, 50, 156, 118],
  [230, 128, 156, 118],
  [156, 118, 232, 216],
  [100, 58, 136, 52],
  [208, 58, 188, 50],
  [230, 128, 240, 158],
  [106, 118, 146, 138],
  [188, 50, 218, 95],
  [156, 118, 146, 138],
  [230, 128, 208, 138],
];

type Edge = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  strokeOpacity?: number;
  strokeWidth?: number;
};

function computeProximityEdges(): Edge[] {
  const all: [number, number][] = [
    ...NODES,
    ...HUBS.map((h): [number, number] => [h[0], h[1]]),
  ];
  const edges: Edge[] = [];
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      const dx = all[i][0] - all[j][0];
      const dy = all[i][1] - all[j][1];
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 30) {
        const edge: Edge = {
          x1: all[i][0], y1: all[i][1],
          x2: all[j][0], y2: all[j][1],
        };
        if (d < 18) {
          edge.strokeOpacity = 0.52;
          edge.strokeWidth = 0.5;
        }
        edges.push(edge);
      }
    }
  }
  return edges;
}

const PROXIMITY_EDGES = computeProximityEdges();

// Edges eligible for live signal pulses — interior region only
type SimpleEdge = { x1: number; y1: number; x2: number; y2: number };
const ANIMATED_EDGES: SimpleEdge[] = [
  ...PROXIMITY_EDGES.map((e) => ({ x1: e.x1, y1: e.y1, x2: e.x2, y2: e.y2 })),
  ...LONG_RANGE.map((e) => ({ x1: e[0], y1: e[1], x2: e[2], y2: e[3] })),
  ...LEADS.map((e) => ({ x1: e[0], y1: e[1], x2: e[2], y2: e[3] })),
].filter(
  (e) =>
    e.x1 > 50 && e.x1 < 260 &&
    e.x2 > 50 && e.x2 < 260 &&
    e.y1 > 35 && e.y1 < 270 &&
    e.y2 > 35 && e.y2 < 270
);

import { useEffect, useRef } from 'react';

export function BrainConnectome() {
  const signalsGroupRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const group = signalsGroupRef.current;
    if (!group) return;
    if (ANIMATED_EDGES.length === 0) return;
    const svgNs = 'http://www.w3.org/2000/svg';
    type Active = { el: SVGCircleElement; e: SimpleEdge; t: number };
    const active: Active[] = [];
    let rafId = 0;

    function spawn() {
      if (active.length >= 5) return;
      const e = ANIMATED_EDGES[Math.floor(Math.random() * ANIMATED_EDGES.length)];
      const c = document.createElementNS(svgNs, 'circle');
      c.setAttribute('r', '1.7');
      c.setAttribute('fill', '#1F3D2E');
      c.setAttribute('cx', String(e.x1));
      c.setAttribute('cy', String(e.y1));
      group!.appendChild(c);
      active.push({ el: c, e, t: 0 });
    }

    function tick() {
      for (let i = active.length - 1; i >= 0; i--) {
        const s = active[i];
        s.t += 0.026;
        if (s.t >= 1) {
          s.el.remove();
          active.splice(i, 1);
          continue;
        }
        const x = s.e.x1 + (s.e.x2 - s.e.x1) * s.t;
        const y = s.e.y1 + (s.e.y2 - s.e.y1) * s.t;
        s.el.setAttribute('cx', String(x));
        s.el.setAttribute('cy', String(y));
        const op = s.t < 0.2 ? s.t * 5 : s.t > 0.8 ? (1 - s.t) * 5 : 1;
        s.el.setAttribute('opacity', String(op));
      }
      if (Math.random() < 0.09) spawn();
      rafId = requestAnimationFrame(tick);
    }

    const startTimer = setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, 150);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(rafId);
      for (const a of active) a.el.remove();
    };
  }, []);

  return (
    <svg id="brain-svg" viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 65 95 C 72 55, 122 38, 172 44 C 224 50, 260 78, 258 122 C 256 148, 244 170, 228 184 C 246 194, 252 214, 236 228 C 220 238, 192 236, 178 224 C 174 244, 160 252, 148 248 C 144 262, 139 268, 134 265 C 132 258, 134 252, 132 245 C 108 248, 82 232, 67 208 C 52 182, 50 150, 59 125 Z"
        fill="#1F3D2E"
        fillOpacity="0.035"
        stroke="#1F3D2E"
        strokeOpacity="0.22"
        strokeWidth="0.6"
        strokeDasharray="2,3"
      />
      <g className="edges" stroke="#1F3D2E" strokeWidth="0.4" strokeOpacity="0.32" fill="none">
        {PROXIMITY_EDGES.map((e, i) => (
          <line
            key={`p${i}`}
            x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            strokeOpacity={e.strokeOpacity}
            strokeWidth={e.strokeWidth}
          />
        ))}
        {LONG_RANGE.map((e, i) => (
          <line
            key={`l${i}`}
            x1={e[0]} y1={e[1]} x2={e[2]} y2={e[3]}
            strokeOpacity={0.22}
            strokeWidth={0.35}
          />
        ))}
        {LEADS.map((e, i) => (
          <line
            key={`d${i}`}
            x1={e[0]} y1={e[1]} x2={e[2]} y2={e[3]}
            stroke="#181511"
            strokeWidth={0.4}
            strokeOpacity={0.55}
          />
        ))}
      </g>
      <g className="nodes" fill="#181511">
        {NODES.map((n, i) => (
          <circle key={i} cx={n[0]} cy={n[1]} r={2.6} />
        ))}
      </g>
      <g className="hubs" fill="#1F3D2E">
        {HUBS.map((h, i) => (
          <circle
            key={i}
            cx={h[0]} cy={h[1]} r={h[2]}
            className="pulse"
            style={{ animationDelay: `${h[3]}s` }}
          />
        ))}
      </g>
      <g className="rings" fill="none" stroke="#1F3D2E" strokeWidth="0.5">
        {HUBS.map((h, i) => (
          <circle
            key={i}
            cx={h[0]} cy={h[1]} r={h[2] + 6}
            strokeOpacity={0.3}
          />
        ))}
      </g>
      <g className="labels">
        {LABELS.map((lb, i) => (
          <text
            key={i}
            x={lb[0]} y={lb[1]}
            fontFamily="Instrument Serif, serif"
            fontSize="18"
            fontStyle="italic"
            fill="#1F3D2E"
            textAnchor="middle"
          >
            {lb[2]}
          </text>
        ))}
      </g>
      <g ref={signalsGroupRef} />
    </svg>
  );
}
