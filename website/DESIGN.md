# Aura Website — Design Guidelines

Apple-inspired minimalist design for a 5-page vanilla HTML/CSS/JS marketing site.

## Colors

| Token | Value | Usage |
|---|---|---|
| `--color-canvas-white` | `#ffffff` | Primary canvas |
| `--color-canvas-parchment` | `#f5f5f7` | Alternating sections |
| `--color-canvas-dark` | `#272729` | Dark sections |
| `--color-ink` | `#1d1d1f` | Headlines, body text |
| `--color-ink-secondary` | `#6e6e73` | Captions, metadata |
| `--color-ink-tertiary` | `#86868b` | Labels, footnotes |
| `--color-action-blue` | `#0066cc` | Links, CTAs |
| `--color-focus-blue` | `#0071e3` | Focus rings |

**Rules:**
- No shadows on buttons, cards, text, or nav bars
- Depth via tonal layering (white on parchment), not elevation
- Frosted glass: `backdrop-filter: blur(20px) saturate(180%)` on nav only

## Typography

| Role | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|
| Hero H1 | 80px / 48px mobile | 700 | 1.05 | -0.005em |
| Section H2 | 56px / 36px mobile | 700 | 1.05 | -0.003em |
| Card H3 | 21px | 600 | 1.2 | -0.002em |
| Body | 17px | 400 | 1.47 | 0 |
| Label | 14px | 500 | 1.2 | 0 |
| Caption | 13px | 400 | 1.4 | 0 |

**Rules:**
- Font: SF Pro Display (≥20px), SF Pro Text (<20px), SF Pro Rounded (pills)
- Body is 17px, not 16px — Apple standard
- Headings use tight tracking (-0.02em minimum)
- Prose max-width: 680px
- Headline max-width: 800px

## Layout

| Token | Desktop | Mobile |
|---|---|---|
| Section padding | 80px | 60px |
| Content max-width | 980px | 100% |
| Hero max-width | 1200px | 100% |
| Gutter | 24px | 16px |

**Rules:**
- Fixed grid: 12-column desktop, single-column mobile
- Breakpoints: 375px, 768px, 1024px, 1440px
- No horizontal scroll on any viewport
- 8px spacing rhythm throughout

## Shapes

| Element | Radius |
|---|---|
| Cards | 18px |
| Pill buttons | 9999px |
| Utility | 8px |
| Full-bleed tiles | 0px |

**Rules:**
- No borders on cards — contrast via background color only
- Capsule pills for primary CTAs
- Squircle-adjacent language mirroring hardware design

## Components

### Buttons
- **Primary:** `#0066cc` bg, white text, pill-shaped, no shadow
- **Secondary:** Text-only with chevron, `#0066cc` accent

### Cards
- White on parchment, parchment on white
- 18px radius, 32px internal padding
- No shadows — tonal layering only

### Navigation
- Fixed, 52px height, z-index 100
- Frosted glass backdrop blur
- Transparent on hero, solid on scroll

## Accessibility (Web Interface Guidelines)

### Required
- Skip link on all pages
- Heading hierarchy: h1 → h2 → h3 (no skips)
- All form controls labeled
- Icon buttons have `aria-label`
- Images have descriptive `alt`
- Decorative icons: `aria-hidden="true"`
- Focus-visible rings on all interactive elements
- 44×44px minimum touch targets

### Focus States
- Use `:focus-visible` not `:focus`
- Never `outline: none` without replacement
- Group focus with `:focus-within`

### Animation
- Honor `prefers-reduced-motion`
- Animate `transform`/`opacity` only
- Never `transition: all`
- Interruptible animations

### Images
- Explicit `width` and `height` (prevent CLS)
- `loading="lazy"` on below-fold
- WebP/AVIF with PNG fallback

### Content
- `…` not `...`
- Curly quotes `"` `"`
- Non-breaking spaces: `10&nbsp;MB`
- Loading states end with `…`
- `font-variant-numeric: tabular-nums` for numbers

### Touch
- `touch-action: manipulation` (no double-tap delay)
- `-webkit-tap-highlight-color` set intentionally
- `overscroll-behavior: contain` in modals

### Performance
- `<link rel="preconnect">` for CDN domains
- Critical fonts: `<link rel="preload" as="font">` with `font-display: swap`
- No layout reads in render
- Batch DOM reads/writes

## Anti-Patterns (Flag These)

- `user-scalable=no` or `maximum-scale=1`
- `transition: all`
- `outline-none` without focus-visible replacement
- `<div onClick>` instead of `<button>`
- Images without dimensions
- Form inputs without labels
- Icon buttons without `aria-label`
