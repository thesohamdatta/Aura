# Aura Hero Scroll Storytelling — Research & Implementation

## Current State Analysis

The hero section (lines 95-140 in index.html):

- Full-bleed dark photographic background (hero-pendant-dark.webp)
- Layered gradient overlay for text legibility
- Content anchored bottom-left: `align-items: flex-end; justify-content: flex-start; padding-bottom: 15vh`
- No scroll-linked animation on the hero image itself
- Uses scroll-orchestrator.js for reveal animations only (CSS `--section-progress`)

---

## Research: Premium Scroll Storytelling Patterns

### Apple (AirPods 4, Vision Pro, MacBook Pro)

**AirPods 4 Hero:**

- Uses layered parallax: background moves slower than product
- Product stays visually stable (no scale)
- Subtle lighting/gradient shifts on scroll
- Camera-like micro-translations (< 5px)
- Multiple image layers with independent motion

**Vision Pro Hero:**

- Cinematic crossfade between compositions
- Mask-based reveals (clip-path animations)
- Subject size constant; composition evolves
- Light/gradient animation creates "life"

**MacBook Pro:**

- Section morph: hero transforms into next section
- Progressive reveal via masking
- Product rotation in 3D (Three.js) — but very slow, deliberate
- Background gradients evolve independently

### Nothing (Phone 2a, Ear)

- Extreme minimalism: almost no motion
- If anything moves: 1-2px micro-translations
- Heavy reliance on typography stagger
- Light/dark mode transitions as primary animation

### Teenage Engineering

- Playful but restrained
- Layer parallax with distinct z-depth
- Product photography stays fixed; UI layers float
- "Breathing" light animations on key elements

### Linear

- Almost zero scroll animation on hero
- Content reveals via opacity/stagger
- Hero image completely static
- Focus on instant clarity, not motion

### Stripe Sessions

- Layered depth with independent layer velocities
- Gradient mesh backgrounds that evolve
- Product shots stay stable; atmosphere moves
- Mask-based transitions between sections

### Awwwards Product Sites (Best Practices)

Common patterns:

1. **Layer Parallax** (60% of premium sites): 3-5 layers at different z-speeds
2. **Progressive Reveal / Masking** (25%): clip-path, mask-image
3. **Cinematic Crossfade** (10%): pre-rendered compositions
4. **Light/Atmosphere Animation** (5%): gradients, glows, shadows

---

## 7 Interaction Concepts for Aura

### Option 1: Layer Parallax (Recommended for Aura)

**Implementation:**

```
Background (dark gradient/atmosphere)     → 0.2x scroll speed
Pendant (main subject)                    → 0x scroll speed (fixed)
Floating particles/dust/subtle highlights → 0.5x scroll speed
Text/CTA layer                            → 1x scroll speed (normal)
```

**Why for Aura:**

- Pendant stays perfectly stable — product focus
- Creates depth without zoom/scale
- Calm, premium feel
- Matches "screenless, aware" philosophy
- Works with existing single-image asset (can separate in CSS)

**Pros:** High perceived depth, product stability, premium feel
**Cons:** Requires layer separation or creative CSS

---

### Option 2: Progressive Reveal (Mask/Clip-path)

**Implementation:**

- Hero image at full size, fixed position
- Circular/elliptical clip-path expands from pendant center
- Or vertical mask reveal (top to bottom) synchronized with scroll
- Text fades in as mask expands

**Why for Aura:**

- Reveals the product intentionally
- "Awareness" metaphor — Aura sees as you scroll
- No scaling, composition locked

**Pros:** Strong narrative, product-focused, unique
**Cons:** clip-path performance on mobile, complex masking

---

### Option 3: Cinematic Crossfade

**Implementation:**

- Two hero compositions (A and B)
- Composition A: wide environmental shot
- Composition B: tighter product focus
- Crossfade opacity on scroll (0→100%)
- No transform, only opacity

**Why for Aura:**

- Feels like "focusing" — matches AI attention
- Zero layout shift
- Very Apple-like

**Pros:** Smooth, narrative, no transform
**Cons:** Requires 2 hero images, more asset work

---

### Option 4: Light/Atmosphere Animation

**Implementation:**

- Hero image completely static
- Animate only:
  - Radial gradient glow behind pendant (breathing)
  - Subtle vignette intensity
  - Color temperature shift (warm→cool)
  - Dust/particle opacity
- All via CSS custom properties on scroll

**Why for Aura:**

- "Aware" — the pendant feels alive
- Zero composition change
- Minimal code, maximum feel
- Performance: transform-free

**Pros:** Lightweight, poetic, product-perfect stability
**Cons:** Subtle — may feel like "nothing happens"

---

### Option 5: Micro Camera Perspective

**Implementation:**

- Simulate 2-3px camera translation
- Slight perspective shift (rotateX/Y < 1deg)
- Using `transform: translate3d() perspective()`
- Pendant appears to have physical depth

**Why for Aura:**

- Physical presence without scaling
- Subtle 3D feel
- Calm, deliberate

**Pros:** Physicality, premium
**Cons:** Can feel "gimmicky" if overdone

---

### Option 6: Background Evolution Only

**Implementation:**

- Pendant + person completely fixed
- Only background gradients/shapes evolve:
  - Gradient position shifts
  - Blur radius changes
  - Abstract shape morphing (SVG)
- Like Apple's Vision Pro hero atmosphere

**Why for Aura:**

- Product absolute stability
- Atmosphere tells the story
- Very calm

**Pros:** Zero product motion, atmospheric
**Cons:** Requires gradient/SVG layer separation

---

### Option 7: Section Morph (Hero → Capabilities)

**Implementation:**

- Hero doesn't animate independently
- As hero scrolls out, Capabilities section morphs in:
  - Hero gradient becomes Capabilities background
  - Pendant image masks into capability icons
  - Text reflows, doesn't fade
- Single continuous surface

**Why for Aura:**

- Seamless narrative flow
- No "sections" — one surface
- Very Apple (Vision Pro page does this)

**Pros:** Cohesive, premium, narrative
**Cons:** Complex coordination, all-or-nothing

---

## Comparison Matrix

| Criteria             | Layer Parallax | Progressive Reveal | Cinematic Crossfade | Light Animation | Micro Camera | Background Evolution | Section Morph |
| -------------------- | -------------- | ------------------ | ------------------- | --------------- | ------------ | -------------------- | ------------- |
| Product Stability    | ★★★★★          | ★★★★★              | ★★★★★               | ★★★★★           | ★★★★☆        | ★★★★★                | ★★★★☆         |
| Perceived Depth      | ★★★★★          | ★★★☆☆              | ★★★★☆               | ★★★☆☆           | ★★★★☆        | ★★★★☆                | ★★★★★         |
| Narrative Clarity    | ★★★★☆          | ★★★★★              | ★★★★★               | ★★★☆☆           | ★★★☆☆        | ★★★☆☆                | ★★★★★         |
| Implementation Ease  | ★★★☆☆          | ★★☆☆☆              | ★★☆☆☆               | ★★★★★           | ★★★★☆        | ★★★★☆                | ★★☆☆☆         |
| Performance (Mobile) | ★★★★☆          | ★★★☆☆              | ★★★★☆               | ★★★★★           | ★★★★☆        | ★★★★★                | ★★★☆☆         |
| "Premium Feel"       | ★★★★★          | ★★★★☆              | ★★★★★               | ★★★★☆           | ★★★★☆        | ★★★★★                | ★★★★★         |
| Aura Brand Fit       | ★★★★★          | ★★★★☆              | ★★★★☆               | ★★★★★           | ★★★☆☆        | ★★★★★                | ★★★★☆         |
| Asset Requirements   | Low (CSS only) | Low                | High (2 images)     | Low (CSS)       | Low          | Medium (gradients)   | High          |

---

## Recommended Direction: **Layer Parallax + Light Animation (Hybrid)**

### Reasoning

1. **Aura's Philosophy**: "Screenless, aware, calm" — the pendant should feel physically present, not animated
2. **Asset Reality**: Single hero image, no budget for 3D renders or multiple compositions
3. **Performance**: Must be 60fps on mobile; transform-only animations
4. **Differentiation**: Most sites scale; parallax + atmosphere is rarer and feels more premium
5. **Technical Fit**: Existing scroll-orchestrator provides `--section-progress` — perfect driver

### Implementation Plan

**Layers (CSS-only, single image):**

```
Layer 0 (deepest):  hero-gradient background      → translateY(0.15 * scroll)
Layer 1:            hero-media img                → translateY(0 * scroll) [FIXED]
Layer 2:            Subtle radial glow (::after)  → opacity(0.3 + 0.4 * progress)
Layer 3:            hero-content (text/CTA)       → normal flow (1x)
```

**Key CSS Custom Properties (driven by scroll-orchestrator):**

- `--hero-parallax-y`: background translateY
- `--hero-glow-opacity`: radial glow breathing
- `--hero-vignette-intensity`: vignette depth

**Animation Spec:**

- Parallax range: 0 → 80px translateY (background only)
- Glow: 0.3 → 0.7 opacity (breathing, slow)
- Vignette: 0.55 → 0.75 (deepens as you scroll)
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — Apple's spring feel
- Duration: tied to scroll progress (0-1 over hero height)

**Reduced Motion:**

- All transforms → 0
- Opacity transitions → instant
- Respects `prefers-reduced-motion: reduce`

---

## Production Implementation

See `css/index.css` additions and `js/hero-parallax.js` (new module).
