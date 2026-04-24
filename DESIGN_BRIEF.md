# Lunaxa Labs — Homepage Redesign Brief (v5)

## Overview

A premium software agency homepage with a neuroscience-lab aesthetic. Editorial cream base with strategic color moments (rose, sage, butter, indigo) that signal "we're a serious, operating agency" first and "AI-native lab" second. Heavy on scientific detail and atmospheric animation, but framed as agency positioning, not academic publication.

Visual reference: `lunaxa-labs-homepage-v5.html` — self-contained, open in any browser at desktop width.

This document explains design *intent* on top of the HTML source. The HTML is the ground truth; this brief explains what matters and why.

---

## Design principles

1. **Agency-first, lab-second.** The hero sells. The trust bar proves. The Protocols are productized. The lab aesthetic is supporting evidence, not the primary frame.
2. **Color as punctuation, not theme.** Each major section carries a different tint (rose / sage / butter / indigo / dark). The cream stretches between them as the connective tissue. Never color a full page uniformly.
3. **Sentence case everywhere.** No Title Case, no ALL CAPS headings. Mono labels may use uppercase with wide tracking — that's the one exception.
4. **Two weights only.** 400 regular, 500 medium. No 600/700. The editorial feel dies if type gets heavy.
5. **The paper grain is not optional.** A body-wide SVG turbulence overlay at ~45% opacity, multiply-blend. Responsible for a lot of the atmosphere.

---

## Design tokens

### Colors

```css
/* Neutrals */
--bg:            #F5F0E4;   /* warm cream — primary page background */
--bg-alt:        #EEE8DA;   /* cream — cards, plates, trust bar */
--bg-dark:       #E6DFCD;   /* deeper cream — colophon, footer bottom */
--ink:           #181511;   /* primary text, near-black with warmth */
--ink-2:         #3D362E;   /* body copy */
--ink-3:         #6B6055;   /* meta text, secondary labels */
--ink-4:         #9E9489;   /* faint annotations */
--border:        #D8CEB9;
--border-soft:   #E2D9C5;

/* Primary brand */
--accent:        #1F3D2E;   /* deep pine — primary italic emphasis, brand */
--accent-bright: #2C5440;   /* lighter pine — Findings section */

/* Dark feature treatment */
--dark-bg:       #131E17;   /* peer review background */
--dark-surface:  #1A2620;
--dark-accent:   #8FC9A8;   /* sage — italic on dark */

/* Section color moments */
--rose-bg:       #F5E8DC;   /* Abstract section background */
--rose-accent:   #9E3D2E;   /* Abstract italic, hero eyebrow, CTA italic */
--sage-bg:       #E8EFE2;   /* Findings section background */
--butter-bg:     #F5EED3;   /* Instruments section background */
--amber-rich:    #B5751C;   /* Instruments italic, Protocol γ stripe */
--indigo-rich:   #2E467C;   /* Lab notes italic */

/* Editorial red marks */
--red:           #8B2C2C;   /* editorial marginalia */
--red-bright:    #A33838;   /* rubber stamps */
```

### Typography

Three families only. Do not add more.

```css
--serif:  'Instrument Serif', Georgia, serif;     /* display headlines, italic emphasis */
--sans:   'IBM Plex Sans', -apple-system, sans;   /* body copy, feature lists */
--mono:   'IBM Plex Mono', Menlo, monospace;      /* meta labels, nav, metadata */
```

Install:
```bash
npm install @fontsource/instrument-serif @fontsource/ibm-plex-sans @fontsource/ibm-plex-mono
```

Import in root layout:
```js
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-mono/400.css';
```

### Type scale (desktop)

| Element          | Size                         | Family          | Line-height |
|------------------|------------------------------|-----------------|-------------|
| Hero h1          | `clamp(64px, 8.5vw, 120px)`  | Instrument Serif | 0.98        |
| Section title    | `clamp(40px, 5vw, 64px)`     | Instrument Serif | 1.06        |
| CTA h2           | `clamp(56px, 7vw, 96px)`     | Instrument Serif | 1.04        |
| Quote            | `clamp(26px, 3vw, 38px)`     | Instrument Serif italic | 1.28 |
| Stat numeral     | `clamp(56px, 5vw, 76px)`     | Instrument Serif | 1           |
| Method step title| 21px italic                  | Instrument Serif | 1.3         |
| Trust logo       | 19px italic                  | Instrument Serif | 1           |
| Body             | 15–18.5px                    | IBM Plex Sans   | 1.55–1.65   |
| Lede             | 16.5px                       | IBM Plex Sans   | 1.65        |
| Hero eyebrow     | 10.5px, 0.2em tracking       | IBM Plex Mono   | —           |
| Meta labels      | 10–11px, 0.14–0.2em tracking | IBM Plex Mono   | 1.4         |

### Spacing

- Container max-width: `1320px`
- Section padding: `110px` top/bottom desktop, `72px` below 900px
- Horizontal padding: `56px` desktop, `28px` mobile
- Aside column: `180px` wide, `56px` gap to content
- Aside sticky offset: `top: 120px`

---

## Section architecture

Every content section below the hero uses a **marginalia layout**:

```
┌────────────────┬──────────────────────────────────┐
│  § 01          │  Section title (display serif)    │
│  Abstract      │                                   │
│  — 001         │  Section lede (body sans)         │
│                │                                   │
│                │  Main content                     │
└────────────────┴──────────────────────────────────┘
```

Preserve this on every section at desktop. Aside is `position: sticky; top: 120px;`.

**Important:** the v5 aside is slim. Label and section number only. No running italic note, no red marginalia. These were what made earlier versions read as a blog; they are intentionally removed.

### Section sequence

| #   | Section      | Background      | Italic accent    | Notes                                        |
|-----|--------------|-----------------|------------------|----------------------------------------------|
| —   | Colophon     | `--bg-dark`     | —                | Tagline middle, locations left/right         |
| —   | Nav          | `--bg`          | `--accent`       | Logo + mono sub, mono links                  |
| —   | Ticker       | `--bg-dark`     | —                | Slowly scrolling lab-status strip            |
| —   | Hero         | `--bg`          | `--rose-accent`  | Big italic headline + Fig. 01 plate          |
| —   | Trust bar    | `--bg-alt`      | —                | "Trusted by teams at" + italic wordmarks     |
| § 01 | Abstract    | `--rose-bg`     | `--rose-accent`  | Positioning statement + pulled italic quote  |
| § 02 | Translation | `--bg-alt`      | `--accent`       | **Canvas animation** — neurons → code rain   |
| § 03 | Methods     | `--bg`          | `--accent`       | 4-phase editorial numbered list              |
| § 04 | Protocols   | cream gradient  | rose/green/amber | 3 cards with colored top stripes (α/β/γ)     |
| § 05 | Findings    | `--sage-bg`     | `--accent-bright`| Stats + Fig. 02 connectome ring              |
| § 06 | Instruments | `--butter-bg`   | `--amber-rich`   | 4-figure specimen plate (Figs. 04–07)        |
| § 07 | Case file   | `--bg`          | `--accent`       | Report layout + Fig. 03 + red stamp          |
| § 08 | Lab notes   | `--bg`          | `--indigo-rich`  | 3 article teasers, indigo hover              |
| § 09 | Peer review | `--dark-bg`     | `--dark-accent`  | **Dark feature section**, red stamp          |
| § 10 | CTA         | `--bg`          | `--rose-accent`  | "Let's ship something ambitious"             |
| —   | Footer       | `--bg-alt`      | —                | 4-col w/ rotating laboratory seal            |

---

## SVG assets

Seven custom SVGs. Generation logic is in the HTML's `<script>` — port it, don't redraw.

### Fig. 01 — Brain connectome (hero)

~60 manually-placed nodes, edges computed by proximity (< 30 units) plus hand-specified long-range connections, 5 pulsing hub nodes in forest green (staggered animation delays), 5 region labels (I–V) with lead lines, faint dashed brain silhouette. ViewBox `0 0 320 300`.

**Plus live signal pulses** — small circles travel continuously along random edges, fading in/out. Up to 5 active at a time, spawning at ~9% probability per frame. JS in the v4 additions block.

### Fig. 02 — Circular connectome (Findings)

30 nodes on a circle, chord connections via quadratic béziers through center. Every 7th node larger and colored. Inner dashed circle. ViewBox `0 0 220 220`.

### Fig. 03 — Duration bar chart (Case file)

Two horizontal bars — Projected (14 months, neutral) vs Actual (5 months, accent). X-axis with 0/5/10/14 ticks.

### Figs. 04–07 — Instruments plate

- **Fig. 04 Tractography** — colored fiber tracts (R/G/B directional encoding). Static SVG paths.
- **Fig. 05 Correlation matrix** — 14×14 heatmap, diverging colormap (deep blue → cream → deep red), colorbar, `ρ` label. Generated in script with seeded PRNG.
- **Fig. 06 Activation map** — brain silhouette w/ red/orange/blue radial-gradient hotspots, labeled regions.
- **Fig. 07 EEG waveform** — 4 bands (α/β/γ/signal), multi-component sine waves, CSS-scrolled -280px over 14s, drawn double-wide for seamless loop.

### Laboratory seal (footer)

Circular stamp with text on curved paths (`textPath` with `<defs><path id="ctop">` / `id="cbot">`). Outer text ring wrapped in `<g class="seal-rotating">` rotating 360° every 200s. Central italic "L" stays static.

---

## The Translation canvas (§ 02)

The centerpiece animation. Full-width canvas, 540px tall (420px mobile), showing the metaphor literally: biological → computational.

**Left side (~38% width):**
- ~52 neurons placed via rejection sampling
- Edges connect neurons closer than ~85 units apart
- Neurons spontaneously fire (5% prob/frame), emit visible green glow
- Firing propagates via traveling signal dots to up to 3 connected neighbors
- 22% chance a signal triggers the target to re-fire (chained activation)

**Boundary at ~54% width:**
- Signals reaching a neuron past the boundary "release" a character at that position

**Right side (~46% width):**
- Released characters grow (size 7→12), fade in, drift right
- Past 54% width they start falling with gravity
- Ambient characters also spawn at the top (~30% prob/frame) for density
- Trailing red-orange particle at terminal velocity
- Token set: `['0','1','0','1','01','10','fn','=>','{}','[]','if','for','()','//','&&','||','n=','σ','α','β','γ','λ','∇','Δ','φ','∑']`

**Performance:**
- DPR-aware canvas
- Paused via IntersectionObserver when off-screen
- requestAnimationFrame loop, 16ms gating
- Debounced (250ms) re-init on resize

---

## Animations

### Motion tokens

- Standard ease: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Hover: 0.3–0.7s
- Reveal: 1.1s
- Hub pulse: 2.8s; ticker/eyebrow pulse: 2s
- Ticker scroll: 95s; waveform scroll: 14s; seal rotation: 200s

### Key specs

**Scroll reveal** (`[data-reveal]` → `.in`):
- Initial: `opacity: 0; transform: perspective(1500px) rotateX(6deg) translateY(32px);`
- Active: `opacity: 1; transform: perspective(1500px) rotateX(0) translateY(0);`
- IntersectionObserver, `threshold: 0.12, rootMargin: '0px 0px -60px 0px'`

**Plate hover** (`.plate`):
- Base: paper-stack shadow — two offset pages (+6/+6 and +12/+12) + soft drop
- Hover: `transform: perspective(1400px) translateY(-6px) rotateX(1.8deg) rotateY(-1.4deg);` + deeper shadows

**Protocol card hover** (`.proto`):
- Colored top stripe (`::before`) grows 5px → 8px
- Background brightens to `#FFFCF2`
- Border darkens

**Hub pulse** (brain figures):
- `@keyframes pulse-node { 0%,100% { opacity: 0.45; transform: scale(1); } 50% { opacity: 1; transform: scale(1.25); } }`
- Staggered delays (0 / 0.7 / 1.4 / 2.1 / 2.8s)
- Requires `transform-origin: center; transform-box: fill-box;`

**Seal rotation**:
- `@keyframes seal-rotate { to { transform: rotate(360deg); } }`
- `transform-origin: 50% 50%; transform-box: view-box;`

**Button hover** (`.btn-primary`):
- Background transitions `--ink` → `--rose-accent`
- `::after` arrow translates 4px right

---

## Atmosphere

### Paper grain

Fixed `body::before` with inline SVG turbulence (`feTurbulence` + `feColorMatrix` for brown tone), 45% opacity, `mix-blend-mode: multiply`. Data URI in the HTML.

### Background color wash

```css
body {
  background:
    radial-gradient(ellipse 900px 600px at 12% 6%, rgba(31, 61, 46, 0.055), transparent 55%),
    radial-gradient(ellipse 820px 520px at 88% 94%, rgba(139, 44, 44, 0.04), transparent 55%),
    radial-gradient(ellipse 700px 500px at 50% 50%, rgba(200, 160, 80, 0.025), transparent 72%),
    #F5F0E4;
}
```

### Rubber stamps

1. `.case-shipped` — red `"✓ Shipped on time"` in case file, `rotate(3.5deg)`
2. `.stamp` in peer review — red `"✓ Verified engagement"`, `rotate(-2.2deg)`

---

## Responsive

Breakpoint: **900px**. Below:

- Nav links hide — add hamburger
- Hero stacks
- Aside collapses above content (not sticky)
- Trust bar: label stacks above logos
- Method rows: 2-col grid
- All multi-col grids → single column
- Footer: 2 → 1 columns
- Translation canvas: 420px height
- Case stamp: static, centered, untilted

---

## Component suggestions (React / Next.js)

```
components/
  layout/
    Colophon.tsx
    Nav.tsx
    Footer.tsx
    Seal.tsx                # rotating SVG text ring
  marketing/
    Hero.tsx
    TrustBar.tsx
    CTA.tsx
  sections/
    Abstract.tsx            # rose bg
    Translation.tsx         # full-width canvas
    Methods.tsx
    Protocols.tsx           # colored stripes per card
    Findings.tsx            # sage bg
    Instruments.tsx         # butter bg, 4 figures
    CaseFile.tsx            # + red rubber stamp
    LabNotes.tsx            # indigo accent
    PeerReview.tsx          # dark feature
  primitives/
    Section.tsx             # marginalia layout; { tag, number, children, tone? }
    Aside.tsx
    Plate.tsx               # figure plate w/ corners, caption, legend
    ProtocolCard.tsx
    MethodRow.tsx
    StatRow.tsx
    RevealOnScroll.tsx
  widgets/
    Ticker.tsx              # scrolling strip
    TranslationCanvas.tsx   # neurons → code
  figures/
    BrainConnectome.tsx     # Fig. 01 + live pulses
    ConnectomeRing.tsx      # Fig. 02
    DurationChart.tsx       # Fig. 03
    Tractography.tsx        # Fig. 04
    CorrelationMatrix.tsx   # Fig. 05
    ActivationMap.tsx       # Fig. 06
    Waveform.tsx            # Fig. 07
```

Define all color tokens as CSS variables (or extend `tailwind.config.js` theme). The HTML uses vanilla CSS with variables — cleanest Tailwind port is to extend the theme.

---

## Preserve exactly / free to change

**Preserve:**
- All color tokens and section-by-section color assignments
- Typography specs and the three-family system
- Marginalia layout on all sections
- All seven SVG figures (generation logic)
- Translation canvas animation (all parameters and behavior)
- Ticker and its timing
- Seal and its rotation
- Paper grain and color wash
- Animation timings and easing
- Dark peer-review treatment
- Colored top stripes on Protocols (rose / green / amber)
- Two red rubber stamps

**Free to change:**
- All copy (headlines, body, case file, peer review quote, ticker items)
- Trust bar client names (currently placeholders)
- Stat values and notation
- Lab note article titles, dates, excerpts
- Section order if strictly necessary

Text content in the reference is placeholder. Swap for real copy before launch.
