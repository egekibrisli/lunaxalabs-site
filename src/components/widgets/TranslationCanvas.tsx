import { useEffect, useRef } from 'react';

const TOKENS = [
  '0', '1', '0', '1', '01', '10', 'fn', '=>', '{}', '[]', 'if', 'for',
  '()', '//', '&&', '||', 'n=', 'σ', 'α', 'β', 'γ', 'λ', '∇', 'Δ', 'φ', '∑',
];

type Neuron = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  bx: number;
  by: number;
  fire: number;
  size: number;
};

type Edge = { a: number; b: number };

type Signal = { src: number; tgt: number; t: number };

type Falling = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  t: number;
  char: string;
  life: number;
  morph: number;
  phase: 'emerge' | 'fall';
};

export function TranslationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const DPR = window.devicePixelRatio || 1;

    let W = 0;
    let H = 0;
    let neurons: Neuron[] = [];
    let edges: Edge[] = [];
    let signals: Signal[] = [];
    let falling: Falling[] = [];
    let playing = true;
    let rafId = 0;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let lastT = 0;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function initNeurons() {
      neurons = [];
      edges = [];
      const target = 52;
      const leftX = W * 0.06;
      const rightX = W * 0.38;
      let attempts = 0;
      while (neurons.length < target && attempts < 600) {
        attempts++;
        const x = leftX + Math.random() * (rightX - leftX);
        const y = 30 + Math.random() * (H - 60);
        let ok = true;
        for (let i = 0; i < neurons.length; i++) {
          const dx = neurons[i].x - x;
          const dy = neurons[i].y - y;
          if (dx * dx + dy * dy < 460) {
            ok = false;
            break;
          }
        }
        if (ok) {
          neurons.push({
            x, y,
            vx: 0, vy: 0,
            bx: x, by: y,
            fire: 0,
            size: 1.6 + Math.random() * 1.3,
          });
        }
      }
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          if (dx * dx + dy * dy < 7200) edges.push({ a: i, b: j });
        }
      }
    }

    function fire(idx: number) {
      if (idx < 0 || idx >= neurons.length) return;
      neurons[idx].fire = 1;
      const cands: number[] = [];
      for (let i = 0; i < edges.length; i++) {
        if (edges[i].a === idx) cands.push(edges[i].b);
        else if (edges[i].b === idx) cands.push(edges[i].a);
      }
      const n = Math.min(3, cands.length);
      for (let i = 0; i < n; i++) {
        const pi = Math.floor(Math.random() * cands.length);
        signals.push({ src: idx, tgt: cands.splice(pi, 1)[0], t: 0 });
      }
    }

    function releaseChar(x: number, y: number) {
      falling.push({
        x, y,
        vx: 2 + Math.random() * 2,
        vy: 0.3 + Math.random() * 0.5,
        t: 0,
        char: TOKENS[Math.floor(Math.random() * TOKENS.length)],
        life: 1,
        morph: 0,
        phase: 'emerge',
      });
    }

    function update() {
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i];
        n.vx += (n.bx - n.x) * 0.002;
        n.vy += (n.by - n.y) * 0.002;
        n.vx *= 0.94;
        n.vy *= 0.94;
        n.x += n.vx;
        n.y += n.vy;
        if (n.fire > 0) n.fire -= 0.018;
      }
      if (Math.random() < 0.05) fire(Math.floor(Math.random() * neurons.length));

      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.t += 0.02;
        if (s.t >= 1) {
          const tgt = neurons[s.tgt];
          if (tgt && tgt.x > W * 0.33) {
            releaseChar(tgt.x, tgt.y);
          } else if (tgt) {
            tgt.fire = 1;
            if (Math.random() < 0.22) fire(s.tgt);
          }
          signals.splice(i, 1);
        }
      }

      for (let i = falling.length - 1; i >= 0; i--) {
        const c = falling[i];
        if (c.phase === 'emerge') {
          c.morph = Math.min(1, c.morph + 0.05);
          c.x += c.vx * 0.7;
          c.y += (Math.random() - 0.5) * 0.4;
          if (c.x > W * 0.54) {
            c.phase = 'fall';
            c.vx = 0;
            c.vy = 0.8 + Math.random() * 1.2;
          }
        } else {
          c.x += c.vx;
          c.y += c.vy;
          c.vy += 0.035;
          c.life -= 0.003;
        }
        if (c.y > H + 20 || c.life <= 0) falling.splice(i, 1);
      }

      if (Math.random() < 0.3) {
        const rx = W * 0.55 + Math.random() * (W * 0.43);
        falling.push({
          x: rx,
          y: -12,
          vx: 0,
          vy: 1 + Math.random() * 1.8,
          t: 0,
          char: TOKENS[Math.floor(Math.random() * TOKENS.length)],
          life: 1,
          morph: 1,
          phase: 'fall',
        });
      }
    }

    function draw() {
      ctx!.fillStyle = 'rgba(245, 240, 228, 0.12)';
      ctx!.fillRect(0, 0, W, H);

      ctx!.strokeStyle = 'rgba(31, 61, 46, 0.14)';
      ctx!.lineWidth = 0.5;
      ctx!.beginPath();
      for (let i = 0; i < edges.length; i++) {
        const a = neurons[edges[i].a];
        const b = neurons[edges[i].b];
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
      }
      ctx!.stroke();

      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i];
        if (n.fire > 0) {
          ctx!.fillStyle = `rgba(31, 61, 46, ${n.fire * 0.38})`;
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, n.size + 5 * n.fire, 0, Math.PI * 2);
          ctx!.fill();
        }
        ctx!.fillStyle = n.fire > 0.3 ? '#1F3D2E' : '#181511';
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (let i = 0; i < signals.length; i++) {
        const s = signals[i];
        const src = neurons[s.src];
        const tgt = neurons[s.tgt];
        if (!src || !tgt) continue;
        const x = src.x + (tgt.x - src.x) * s.t;
        const y = src.y + (tgt.y - src.y) * s.t;
        const tx = src.x + (tgt.x - src.x) * Math.max(0, s.t - 0.18);
        const ty = src.y + (tgt.y - src.y) * Math.max(0, s.t - 0.18);
        const g = ctx!.createLinearGradient(tx, ty, x, y);
        g.addColorStop(0, 'rgba(31, 61, 46, 0)');
        g.addColorStop(1, 'rgba(31, 61, 46, 0.85)');
        ctx!.strokeStyle = g;
        ctx!.lineWidth = 1.4;
        ctx!.beginPath();
        ctx!.moveTo(tx, ty);
        ctx!.lineTo(x, y);
        ctx!.stroke();
        ctx!.fillStyle = '#1F3D2E';
        ctx!.beginPath();
        ctx!.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (let i = 0; i < falling.length; i++) {
        const c = falling[i];
        const size = c.phase === 'emerge' ? 7 + c.morph * 5 : 12;
        ctx!.font = `${size}px "IBM Plex Mono", monospace`;
        const alpha = c.phase === 'emerge' ? c.morph : c.life;
        ctx!.fillStyle = `rgba(31, 61, 46, ${alpha})`;
        ctx!.fillText(c.char, c.x, c.y);
        if (c.phase === 'fall' && c.vy > 1.3) {
          ctx!.fillStyle = `rgba(184, 53, 44, ${alpha * 0.35})`;
          ctx!.beginPath();
          ctx!.arc(c.x + 3, c.y - 4, 1.1, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    function loop(t: number) {
      if (playing && t - lastT > 16) {
        update();
        draw();
        lastT = t;
      }
      rafId = requestAnimationFrame(loop);
    }

    function start() {
      resize();
      initNeurons();
      rafId = requestAnimationFrame(loop);
    }

    if (canvas.getBoundingClientRect().width > 0) {
      start();
    } else {
      const t = setTimeout(start, 200);
      return () => clearTimeout(t);
    }

    function onResize() {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        initNeurons();
      }, 250);
    }
    window.addEventListener('resize', onResize);

    const io = 'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              playing = e.isIntersecting;
            });
          },
          { threshold: 0 }
        )
      : null;
    if (io) io.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      if (resizeTimer) clearTimeout(resizeTimer);
      if (io) io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="translation-canvas" />;
}
