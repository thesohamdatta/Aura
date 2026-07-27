# Aura Design System

> Canonical reference for every color, type, spacing, and component primitive used on the Aura marketing site.
> **Single source of truth.** Any token used in HTML/CSS/JS must be defined here. If it is not in this document, do not introduce it.

---

## External Dependencies

External libraries that the site loads at runtime. Versions are pinned (never `@latest`) — see `lucide-version-pinned` in `scratch/verify_design_system.js`.

| Library | Pinned version | Source |
|---|---|---|
| Lucide (icons) | `1.27.0` | `https://unpkg.com/lucide@1.27.0` (all 5 HTML pages) |

If you need to upgrade, update this table first, then bump every `<script src="...">` in the HTML pages. The linter will reject any version mismatch.

Recommended follow-up (not yet implemented): add `integrity` and `crossorigin` attributes to the Lucide `<script>` for Subresource Integrity (SRI). Trade-off: every version bump requires recomputing the hash.

---

## 1. Color Tokens

### 1.1 Canvas (backgrounds)

| Token | Hex | CSS var | Tailwind class | Usage |
|---|---|---|---|---|
| White | `#ffffff` | `--color-canvas-white` | `bg-canvas-white`, `bg-white` | Primary canvas |
| Parchment | `#f5f5f7` | `--color-canvas-parchment` | `bg-canvas-parchment` | Alternating sections |
| Pearl | `#fafafc` | `--color-canvas-pearl` | `bg-canvas-pearl` | Ghost-button bg |
| Dark | `#272729` | `--color-canvas-dark` | `bg-canvas-dark` | Dark sections |
| Black | `#000000` | `--color-canvas-black` | `bg-black` | Full-bleed photo backgrounds |

### 1.2 Ink (text)

| Token | Hex | CSS var | Tailwind class | Usage |
|---|---|---|---|---|
| Primary ink | `#1d1d1f` | `--color-ink` | `text-ink` | Body & headlines |
| Secondary ink | `#6e6e73` | `--color-ink-secondary` | `text-ink-secondary` | Captions, metadata |
| Tertiary ink | `#86868b` | `--color-ink-tertiary` | `text-ink-tertiary` | Eyebrows, overlines, footnotes |
| Ink on dark | `#ffffff` | `--color-ink-dark` | (use `text-white`) | Body on dark sections |

**Rule:** `text-ink-tertiary` and `text-ink-secondary` are **the same hex** (`#6e6e73`) in `tailwind-config.js` but differ in `global.css`. Always reference by token name, not hex.

### 1.3 Action / Interactive

| Token | Hex | CSS var | Tailwind class | Usage |
|---|---|---|---|---|
| Action blue | `#0066cc` | `--color-action-blue` | `bg-accent-blue`, `text-accent-blue` | Links, primary CTAs |
| Focus blue | `#0071e3` | `--color-focus-blue` | `bg-focus-blue`, `text-focus-blue` | Focus rings |
| Sky blue | `#2997ff` | `--color-sky-blue` | `text-sky-blue` | In-copy links on dark surfaces |
| Green | `#00a854` | `--color-green` | `text-green` | Battery metrics, positive indicators |

**Rule:** A `#0066cc` link is always the **action-blue** token, never a raw hex. Action-blue is for CTAs; focus-blue is reserved for focus rings and hover-on-dark.

### 1.4 Forbidden patterns (auto-stripped by `scratch/apply_apple_design.js`)

- `box-shadow` on any element except `var(--focus-ring)`
- `filter: drop-shadow(...)` on images
- `bg-gradient-to-*` containing `#f25134` (legacy red/orange)
- Solid-color card borders (allowed only on full-bleed separators and outlines)

---

## 2. Type System

### 2.1 Font Families

| Family | Role | CSS var | Tailwind class |
|---|---|---|---|
| SF Pro Display | Headlines, type ≥ 20px | `--font-display` | `font-display` |
| SF Pro Text | Body, type < 20px | `--font-text` | `font-body` |
| SF Pro Rounded | Pills, CTAs, badges | `--font-rounded` | `font-rounded` |
| SF Mono | Code, terminal | `--font-mono` | `font-mono` |

Local `.otf` files are served from `assets/fonts/sf-pro/`. The legacy `fonts/` directory at the root is **orphaned** — do not reference it.

### 2.2 Type Scale

The full Apple-inspired scale is declared as both CSS variables (`--type-*`) and Tailwind utilities (`text-*`). **Pick one system per token; never mix on the same element.**

| Role | Size | Line | Tracking | Weight | CSS var | Tailwind |
|---|---|---|---|---|---|---|
| Hero H1 (mobile) | 48px | 1.10 | -0.02em | 600 | `--type-hero-mobile` (use raw) | `text-hero-h1-mobile` |
| Hero H1 (desktop) | 80px | 1.10 | -0.028em | 600 | `--type-hero` | `text-hero-h1` |
| Display (mobile) | 36px | 1.10 | -0.02em | 600 | — | `text-section-h2-mobile` |
| Display (desktop) | 56px | 1.07 | -0.28px | 600 | `--type-display` | `text-section-h2`, `text-hero-display` |
| Display lg | 40px | 1.10 | 0 | 600 | `--type-title-xl` | `text-display-lg` |
| Display md | 34px | 1.47 | -0.374px | 600 | `--type-title-lg` | `text-display-md` |
| Lead | 28px | 1.14 | 0.196px | 400 | `--type-title-md` | `text-lead` |
| Tagline / Card title | 21px | 1.19 | 0.231px | 600 | `--type-title-sm` | `text-tagline` |
| Body | 17px | 1.47 | 0 | 400 | `--type-body` | `text-body` |
| Body strong | 17px | 1.24 | -0.374px | 600 | — | `text-body-strong` |
| Caption | 13px | 1.4 | 0 | 400 | `--type-caption` | `text-caption` |
| Caption strong | 14px | 1.29 | -0.224px | 600 | — | `text-caption-strong` |
| Label | 14px | 1.2 | 0 | 500 | `--type-label` | `text-label` |
| Fine print | 12px | 1.0 | -0.12px | 400 | — | `text-fine-print` |
| Micro legal | 10px | 1.3 | -0.08px | 400 | — | `text-micro-legal` |

**Rule:** Headlines (≥ 20px) use `font-display`. Body (< 20px) uses `font-body` (text). Pills/buttons use `font-rounded`.

### 2.3 Weight Scale

| Weight | Use |
|---|---|
| 300 (Light) | Lead-airy, low-emphasis display |
| 400 (Regular) | Body, captions |
| 500 (Medium) | Labels, nav links |
| 600 (Semibold) | Headlines, card titles |
| 700 (Bold) | Headline accent (rare) |
| 800–900 (Heavy/Black) | Reserved for metric numbers — **sparingly** |

---

## 3. Spacing Rhythm

8px base rhythm. Every vertical rhythm value must be a multiple of 4 or 8.

| Token | Value | CSS var | Tailwind class |
|---|---|---|---|
| Section padding (desktop) | 80px | `--section-padding` | `py-section-v-padding` |
| Section padding (mobile) | 60px | `--section-padding-mobile` | `py-section-v-padding-mobile` |
| Gutter | 24px | `--gutter` | `gap-gutter` |
| Margin base | 32px | (in Tailwind only) | `px-margin-base` |
| Content max-width | 980px | `--content-max` | `max-w-[var(--content-max)]` |
| Hero max-width | 1200px | `--hero-max` | `max-w-[1200px]` |
| Prose max-width | 680px | `--prose-max` | `max-w-prose-max-width` |
| Headline max-width | 800px | (in Tailwind only) | `max-w-headline-max-width` |
| Bento narrow padding | 12–16px | — | `p-3`, `p-4` |
| Card internal padding | 32px | — | `p-8` |

**Rule:** Cards use **32px internal padding** (`p-8`). Sections separate with **80px / 60px** vertical padding. No magic numbers like `py-[47px]` or `mb-[23px]`.

---

## 4. Shape / Border Radius

| Element | Radius | CSS var | Tailwind class |
|---|---|---|---|
| Pill button | 9999px | `--radius-pill` | `rounded-full` |
| Card | 18px | `--radius-card` | `rounded-[18px]`, `rounded-card` |
| Bento pocket | 28px | (in Tailwind) | `rounded-[28px]` |
| Bento pocket xl | 32px / 40px | — | `rounded-[32px]`, `rounded-[40px]` |
| Utility (button-secondary, thumbnail) | 8px | `--radius-utility` | `rounded-utility`, `rounded-md` |
| Full-bleed tile | 0px | `--radius-tile` | `rounded-none`, `rounded-tile` |

**Rule:** No borders on cards. Borders only on full-bleed separators (`border-t border-black/5`) and outlines (`outline`).

---

## 5. Elevation & Glass

**No shadows.** Depth is created by tonal layering (white on parchment, parchment on white) and by frosted glass.

### 5.1 Frosted Glass Tokens

| Token | Value | CSS var | Usage |
|---|---|---|---|
| Nav blur | `blur(20px) saturate(180%)` | `--blur-glass` | Nav only |
| Bento blur | `blur(30px) saturate(190%)` | (in `style.css`) | Bento pockets |
| Nav bg (light) | `rgba(255, 255, 255, 0.72)` | `--bg-glass` | Default nav |
| Nav bg (dark) | `rgba(39, 39, 41, 0.72)` | (in `nav.css`) | Dark nav |
| Mobile menu bg | `rgba(255, 255, 255, 0.95)` | (in `nav.css`) | Open mobile menu |

### 5.2 Focus Ring

```css
--focus-ring: 0 0 0 4px rgba(0, 113, 227, 0.6);
```

Applied via `:focus-visible` only. Never use `:focus` for focus styling. Never `outline: none` without this replacement.

---

## 6. Motion

| Animation | Use | Duration | Easing |
|---|---|---|---|
| Section reveal (opacity + translateY) | Page sections entering viewport | 1000ms | `ease-out` |
| Hover lift | Cards, bento pockets | 600ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Pill button hover | CTA icon nudge | 700ms | `cubic-bezier(0.32, 0.72, 0, 1)` |
| Nav scroll | Transparent → frosted on scroll | 300ms | `ease` |
| Glass refraction | SVG `feDisplacementMap` scale | rAF loop | — |
| Float (hero pill) | Idle bobbing | 4s infinite | `ease-in-out` |
| Wave pulse | App demo bars | 1.5s infinite | `ease-in-out` |
| Orb pulse | Ambient | 8s infinite | `ease-in-out` |

**Rules:**

- Animate only `transform` and `opacity`. Never `transition: all`.
- All durations ≥ 250ms feel premium. < 200ms feels janky.
- Honor `prefers-reduced-motion: reduce` (handled globally in `global.css` and per-file in `reveal.js`, `glass-refraction.js`, `liquid-glass.js`).

---

## 7. Spacing Utilities (Tailwind)

| Use | Class |
|---|---|
| Page horizontal padding | `px-margin-base` (32px) |
| Section vertical padding | `py-section-v-padding` |
| Section vertical padding mobile | `py-section-v-padding-mobile` |
| Inner gap | `gap-gutter` (24px) |
| Hero container | `max-w-[1200px]` |
| Content container | `max-w-[var(--content-max)]` |
| Prose container | `max-w-prose-max-width` |

---

## 8. Forbidden Tokens & Patterns

These are **auto-detected and stripped** by `scratch/apply_apple_design.js`. Re-introducing them is a Critical issue.

| Forbidden | Why |
|---|---|
| `box-shadow` (except focus-ring) | Apple HIG — depth via tonal layering |
| `filter: drop-shadow(...)` | Same |
| `border-*` on cards/buttons | No card borders rule |
| `bg-gradient-*` containing `#f25134` | Legacy Apple-style red/orange — explicitly banned |
| `transition: all` | Performance + specificity issues |
| `outline: none` without focus-visible replacement | Accessibility regression |
| `user-scalable=no` on viewport | Accessibility |
| Raw hex in HTML/CSS (e.g. `#0066cc` literal) | Breaks token contract |
| Inline `style="..."` for design values | Same |
| `font-family` overrides in component CSS | Typography must come from tokens |

---

## 9. Token Source-of-Truth Map

**Canonical: `css/global.css`.** Every other source must mirror it byte-for-byte. The `token-parity` rule in `scratch/verify_design_system.js` enforces parity on `--color-*` values between `css/global.css` and `js/tailwind-config.js`. Adding a token means adding it to `global.css` first, then mirroring it.

| Concern | Source | Mirrors |
|---|---|---|
| Color tokens (`--color-*`) | **`css/global.css`** | `js/tailwind-config.js` `theme.extend.colors` |
| Font families (`--font-*`) | **`css/global.css`** | `js/tailwind-config.js` `theme.extend.fontFamily` |
| Type scale (`--type-*`) | **`css/global.css`** | `js/tailwind-config.js` `theme.extend.fontSize` (semantic aliases, same px values) |
| Letter-spacing + line-height (`--tracking-*`, `--leading-*`) | **`css/global.css`** | inline utility classes in `style.css`, fontSize entries in Tailwind |
| Spacing rhythm (`--margin-base`, `--section-v-padding`, …) | **`css/global.css`** | `js/tailwind-config.js` `theme.extend.spacing` |
| Border radii (`--radius-*`) | **`css/global.css`** | `js/tailwind-config.js` `theme.extend.borderRadius` |
| Component patterns (cards, buttons) | `css/style.css` | HTML inline styles (forbidden — use named classes) |
| Nav-specific layout | `css/nav.css` | `style.css` |
| Docs-only typography overrides | `css/docs.css` | `style.css` |
| Font `@font-face` | `css/fonts.css` | Per-page `@font-face` (forbidden) |
| Page data (routes, labels) | `js/site-data.js` | `nav.js`, `footer.js` |

If you need a value that doesn't exist here, **add it to `global.css` first**. Do not invent values inline.