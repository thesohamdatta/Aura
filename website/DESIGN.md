# Aura Website — DESIGN.md
## The complete design system reference. Read before touching any CSS.

---

## 1. Typography

### Font Stack (SF Pro — exactly like Apple.com)
```css
/* Body / UI */
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text",
             "Helvetica Neue", Arial, sans-serif;

/* Display / Hero (same stack, different weight + size) */
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display",
             "Helvetica Neue", Arial, sans-serif;

/* Monospace — labels, code, specs */
font-family: "Space Mono", "SF Mono", "Fira Code", monospace;
/* CDN: https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400 */
```

### Type Scale
| Token | Size | Weight | Tracking | Line-height | Usage |
|---|---|---|---|---|---|
| `--text-hero` | `clamp(48px, 8vw, 96px)` | 700 | **-0.025em** | 1.05 | `<h1>` hero |
| `--text-xl` | `clamp(32px, 4vw, 56px)` | 700 | **-0.015em** | 1.1 | Section `<h2>` |
| `--text-lg` | `clamp(22px, 2.5vw, 32px)` | 600 | -0.01em | 1.2 | Sub-headings |
| `--text-base` | `17px` | 400 | 0 | 1.6 | Body text |
| `--text-sm` | `14px` | 400 | 0 | 1.5 | Secondary |
| `--text-xs` | `11px` | 600 | **+0.15em** | 1.4 | Overline labels (UPPERCASE) |
| `--text-mono` | `13px` | 400 | 0 | 1.7 | Code, specs |

### Critical: Tracking on Large Text
Apple tightens letter-spacing on large type. This is the most-missed detail.
- Hero at 96px → `letter-spacing: -0.025em`
- Section h2 at 56px → `letter-spacing: -0.015em`
- Overline labels → `letter-spacing: +0.15em` (opposite — wide)

---

## 2. Color Palette

### Light Mode (Default)
```css
/* Surfaces — Apple's exact values */
--bg-primary:    #FFFFFF;
--bg-secondary:  #F5F5F7;   /* Apple's off-white, NOT pure white */
--bg-tertiary:   #E8E8ED;

/* Text — Apple's exact values */
--text-primary:   #1D1D1F;   /* Apple's near-black, has warmth */
--text-secondary: #6E6E73;
--text-tertiary:  #AEAEB2;

/* Brand Accents */
--cyan:     #00D9FF;          /* Science / AI / Links */
--cyan-dim: rgba(0,217,255,0.08);
--rose:     #FF206E;          /* Manifesto / Urgency */
--rose-dim: rgba(255,32,110,0.08);

/* Always-black sections */
--black: #000000;
--white: #FFFFFF;

/* Navigation frosted glass */
--nav-bg:  rgba(255,255,255,0.72);
--border:  rgba(0,0,0,0.08);
```

### Dark Mode
```css
[data-theme="dark"] {
  --bg-primary:    #000000;
  --bg-secondary:  #111111;
  --bg-tertiary:   #1C1C1E;
  --text-primary:  #F5F5F7;
  --text-secondary:#A1A1A6;
  --text-tertiary: #6E6E73;
  --nav-bg:        rgba(0,0,0,0.72);
  --border:        rgba(255,255,255,0.08);
}
```

---

## 3. Spacing System

```css
/* Base unit: 8px */
--space-1:  8px;
--space-2:  16px;
--space-3:  24px;
--space-4:  32px;
--space-6:  48px;
--space-8:  64px;
--space-12: 96px;
--space-20: 160px;

/* Section rhythm */
--section-pad: clamp(80px, 12vw, 160px);  /* top + bottom of every section */

/* Layout widths */
--max-content: 980px;   /* Apple's content width (NOT 1200px) */
--max-text:    680px;   /* Long-form reading columns */
--max-narrow:  540px;   /* Centered CTAs, single facts */
```

---

## 4. Layout Principles

### Apple's section rhythm (in order, every product page)
```
[Hero]          Full viewport. Product centered. ONE headline. Two CTAs.
[Statement]     2–3 sentences max. Large. Answers "what is it."
[Feature-1]     Full-bleed black. Big stat or bold claim.
[Feature-2]     3-col grid. Three pillars.
[Media]         Product image, full-width, rounded corners.
[Data]          Specs strip. 4 numbers in a row.
[Proof]         Comparison table or testimonials.
[CTA]           Clean center. Two buttons.
[Footer]        Black. Three columns.
```

### Grid
- Desktop: 12-col, 24px gutters, max 980px
- Tablet: 8-col, 20px gutters
- Mobile: 4-col, 16px gutters, 16px side padding

### Breakpoints
```css
/* Mobile first */
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1200px) { /* wide */ }
```

---

## 5. Component Patterns

### Overline Label
```html
<span class="overline">SECTION LABEL</span>
```
```css
.overline {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-secondary);
  display: block;
  margin-bottom: 12px;
}
```

### Button System
```css
/* Pill buttons — Apple style */
.btn {
  height: 44px;            /* Apple's minimum touch target */
  padding: 0 22px;
  border-radius: 980px;    /* fully pill */
  font-size: 14px;
  font-weight: 500;
}

.btn-primary   { background: var(--text-primary); color: var(--bg-primary); }
.btn-secondary { background: transparent; border: 1.5px solid var(--text-primary); }
.btn-ghost     { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: white; }
```

### Nav — Frosted Glass
```css
#navbar {
  position: fixed; top: 0; height: 52px;
  background: transparent;
  transition: background 0.4s ease;
}
#navbar.scrolled {
  background: var(--nav-bg);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--border);
}
```

### Section-Black
```css
/* For dark contrast sections */
.section-black {
  background: #000;
  color: #fff;
  padding: var(--section-pad) 24px;
}
```

---

## 6. Animation Principles

### Karpathy-aware: only animate what needs animating
- Reveal on scroll: `opacity 0→1`, `translateY 24px→0`, `duration 0.7s ease`
- Stagger children: 0.1s delay between items, max 5 items staggered
- Hover: scale 1→1.02, duration 0.2s. Never more.
- NO rotation, NO color transitions on hover for body elements

### GSAP ScrollTrigger defaults
```js
// Standard reveal — reuse everywhere
gsap.fromTo(el, 
  { opacity: 0, y: 24 },
  {
    opacity: 1, y: 0,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 88%' }
  }
);
```

### Reduced motion — always respect
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}
```

---

## 7. Image Guidelines

### Pendant photos (from Assets/hero/)
- Use `loading="lazy"` on all below-fold images
- Always provide `width` and `height` attributes (prevents layout shift)
- Alt text: describe the pendant position, not "Aura pendant"
- Border radius: `border-radius: 16px` on product images in cards

### 3D Pendant (Three.js)
- Ambient light: `0xffffff, 0.6` + directional light: `0xffffff, 1.0`
- Material: `MeshStandardMaterial`, `metalness: 0.3`, `roughness: 0.4`
- Orbit: mouse parallax on hero only, not scroll-controlled (scroll-scrub is separate)
- Canvas background: transparent (`alpha: true`)

---

## 8. DO / DON'T (Karpathy applied)

| DO | DON'T |
|---|---|
| One idea per viewport section | Multiple competing headlines |
| Facts only ("0.5s latency, measured") | Marketing language ("blazing fast") |
| Negative space between elements | Fill every gap |
| `will-change: transform` on animated els | `will-change` everywhere |
| System font stack | Import Google font for body |
| `clamp()` for fluid type | Fixed pixel breakpoints for font size |
| `defer` all scripts | Scripts in `<head>` without defer |
| Test in both light + dark mode | Assume light mode only |
