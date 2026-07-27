# Aura Design Specification

> The visual language, motion grammar, and accessibility contract for the Aura marketing site. This document is the "what it looks like and why" companion to `DESIGN_SYSTEM.md` (which is the "what are the exact tokens").

---

## 1. Brand Premise

Aura is an open-source, screenless, voice-first AI pendant. The site should feel:

- **Calm, not loud.** Marketing sites for hardware can easily drift into bombast. Aura's voice is a quiet claim, not a press release.
- **Engineered, not artisanal.** The site is a build spec, not a gallery. Specs, schematics, and reference materials belong on the page; flourishes do not.
- **Apple-adjacent without being an imitation.** Apple HIG gives the foundation (typography rhythm, tonal depth, motion grammar); Aura's content gives it personality (the green battery section, the hero pill, the third-device thesis).

The single most important design decision: **no shadow, no border on cards, no gradient blob.** Depth comes from tonal layering and frosted glass, applied with restraint.

---

## 2. Visual Language

### 2.1 Palette (intent)

The palette is intentionally narrow:

- **Five neutrals** (canvas-white, canvas-pearl, canvas-parchment, canvas-dark, canvas-black) and **three inks** (ink, ink-secondary, ink-tertiary).
- **Three blues** (action, focus, sky) for interactive states.
- **One green** (positive metric).
- **One reserved accent** (currently a one-off hex `#ff2d55` used for the iOS Health icon in `ai.html` — promote to a token if reused).

Total active tokens: **~13 colors**.

The absence of more colors is a feature. It enforces restraint.

### 2.2 Typography (intent)

The type system mirrors Apple's internal rule:

- **SF Pro Display** for everything ≥ 20px (headlines, big numbers).
- **SF Pro Text** for everything < 20px (body, captions, labels).
- **SF Pro Rounded** for pills, badges, CTAs.

The split is invisible to most visitors but produces the "right" rhythm: display faces have tighter tracking and slightly higher x-height, text faces have more open apertures for body reading.

Weights used: 300 (light, rare), 400 (regular), 500 (medium, labels), 600 (semibold, headlines), 700 (bold, emphasis).

**Headlines track tight** — `-0.02em` minimum for display sizes. This is the difference between Apple-feeling and generic-feeling headlines.

### 2.3 Shapes (intent)

- **Pills** for interactive CTAs (radius 9999px).
- **Cards** at 18px.
- **Bento pockets** at 28–40px for the larger feature tiles.
- **Tiles** at 0px for full-bleed alternating backgrounds.

The hierarchy is: pill < card < bento < tile. When in doubt, the right radius is the one already used by the closest visual neighbor.

### 2.4 Motion (intent)

Motion is reserved for:

- **Reveal on scroll** — sections fade and translate up as they enter the viewport. This is the page-load rhythm.
- **Hover lift on cards** — subtle scale, with an Apple spring curve `cubic-bezier(0.32, 0.72, 0, 1)` or similar.
- **Glass refraction** — the navbar's frosted background warps subtly with scroll velocity.
- **Ambient float** — the hero pill and the demo waveform pulse.

What motion is **not** for: scroll-jacking, parallax fireworks, animated backgrounds. Those would betray the "calm" premise.

**Reduced motion:** All motion scripts bail out when `prefers-reduced-motion: reduce`. Content reveals instantly without animation.

---

## 3. Section Vocabulary

Each page is composed of a vocabulary of section types. New sections should fit into one of these categories:

### 3.1 Hero

- Full-viewport image background.
- Page `<h1>` overlaid or in the next section.
- Triggers `data-transparent="true"` on `<div id="nav-mount">`.
- Variation: image + headline (e.g. `about.html`), image-only (`index.html`).

### 3.2 White / Parchment alternating sections

The page alternates `bg-canvas-white` and `bg-canvas-parchment` sections. This creates depth without shadows or borders.

Use the canvas-dark variant only for the thesis section (`index.html`) or hero. Don't use it casually.

### 3.3 Bento grid

The "feature tiles" pattern. Used for the AI page (`ai.html`) and Why Build Yours (`index.html`).

- 12-column grid on desktop.
- Each tile is a padded white card on a 5px gutter over `bg-ink/5`.
- Tiles can be `col-span-4`, `-6`, `-8`, or `-12`.
- Hover: scale 1.015–1.05 with a 600–700ms spring.

### 3.4 Spec list

Used for hardware specs. Two-column or three-column grid of label/value pairs. Apple-style.

### 3.5 Metric spotlight

Large numeric metric (e.g. "0.5s", "$50") with a small eyebrow above and a paragraph caption below.

### 3.6 CTA strip

Two pill buttons side-by-side: primary (Build Yours, accent-blue) + secondary (Read docs, ink/5).

---

## 4. Page-Specific Intent

### 4.1 `index.html` (Overview)

The most Apple-like page. Hero is a single image. The body is a series of alternating white/parchment sections ending in the dark thesis block.

**Intent:** Show the device, prove the build, leave a question open.

### 4.2 `about.html` (About)

Founder story + team + timeline. Uses the timeline-line component for the journey section.

**Intent:** Establish credibility. Show the human side.

### 4.3 `ai.html` (AI / Intelligence)

The bento grid is the centerpiece. Four tiles: Perception, Speed, Memory, Integrations.

**Intent:** Explain the technical stack without jargon. Show the four layers of the AI pipeline.

### 4.4 `docs.html` (Documentation)

The only page with a sidebar. Three-column layout on desktop (sidebar, content, optional right rail). Mobile collapses the sidebar into a TOC toggle.

**Intent:** Be the technical reference. Use `h3`/h4 headings, not hero-scale typography (enforced by `scratch/verify_static_site.js`).

### 4.5 `manifesto.html` (Dilemma)

Long-form essay. Single column. `<article>` wrapper.

**Intent:** Convince through argument, not feature lists. Reading-optimized.

---

## 5. Accessibility Contract

The site commits to:

| Property | Rule |
|---|---|
| Color contrast | Body text 4.5:1 minimum; large text 3:1 |
| Skip link | First focusable element, targets `<main id="main-content">` |
| Heading hierarchy | One `<h1>` per page, no level skips |
| Focus indicators | Visible `:focus-visible` ring (`--focus-ring`) |
| Touch targets | 44×44px minimum |
| Reduced motion | Honored in all three motion scripts |
| Alt text | Descriptive; empty for decorative images |
| ARIA | Lucide icons `aria-hidden="true"`; icon-only buttons have `aria-label` |
| Keyboard nav | Tab through all interactive elements; mobile menu trap (TODO) |

See `AUDIT_REPORT.md` H2 (missing hero h1) and L8 (mobile menu focus trap) for open a11y work.

---

## 6. Content Voice

Aura's copy follows Apple HIG's "plain verbs, sentence case, no filler" guidance, with one twist:

- **Direct claims** — "A device that combines the productive power of a computer and the connectivity of a smartphone."
- **Numbers as anchors** — "0.5s", "~$50", "80 grams".
- **Sparse emoji / icons** — only when they clarify, not decorate.
- **Sentence case** — "Worn. Screenless. Aware." not "Worn. Screenless. AWARE."
- **No exclamation marks** — even on CTAs.
- **Curly quotes** — `"` `"`, not straight quotes.
- **Ellipses** — `…`, not `...`.

---

## 7. Anti-Patterns (visual)

These are the recurring design mistakes the project has explicitly rejected. Listed for negative reference.

| Anti-pattern | Why |
|---|---|
| Gradient blob backgrounds | Generic; not Apple |
| Card shadows | Adds visual noise; tonal layering is the substitute |
| Border-framed cards | Borders separate; the design uses contrast instead |
| Marketing-speak emoji | Cheapens the voice |
| Hover effects on every element | Reduces impact of hover on key elements |
| Animated text (typing, fading, etc.) | Hurts legibility |
| Modal popups | The site doesn't need them; if added, must use `overscroll-behavior: contain` |
| Decorative dividers with content | Empty ornamentation |
| "Pill on pill" — multiple pills stacked visually | Use one prominent CTA, one secondary |
| `transition: all` | Performance footgun, hides specificity bugs |
| `user-scalable=no` | Accessibility regression |
| `font-family` overrides in component CSS | Must come from the token system |

---

## 8. Design Decisions to Reconsider

These are open questions where the current design took a side and the answer could change.

| Decision | Current | Alternative |
|---|---|---|
| Dark mode | Partial (nav only) | Full theme or remove |
| Custom font hosting | `.otf` local | WOFF2 with `.otf` fallback |
| Image format | PNG/JPG | WebP/AVIF with PNG/JPG fallback |
| Tailwind via CDN | Yes | PostCSS build step |
| Type scale | Hybrid (CSS vars + Tailwind) | Pick one source of truth |
| Bento tile outline | 5px gap + 17px/22px radius | Flat cards with tonal layering |
| Green battery section | Inline gradient | Tokenized gradient class |
| Hero image format | Full-bleed `<img>` | `<picture>` with art direction |
| Mobile menu a11y | Open/close only | Focus trap, return focus on close |

---

## 9. What Success Looks Like

A new agent or contributor should be able to:

1. Open `DESIGN_SYSTEM.md` and find every token.
2. Open `COMPONENT_LIBRARY.md` and find every reusable pattern.
3. Open `AGENT_RULES.md` and know what is forbidden.
4. Open `AUDIT_REPORT.md` and see the open debt, prioritized.
5. Open `GITHUB_PAGES_GUIDE.md` and know every Pages constraint.
6. Open `DEVELOPMENT_GUIDE.md` and run the verification commands.

…without reading any other document. If a future agent has to grep the codebase to find a token, this library has failed.