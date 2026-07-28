# Aura Component Library

> Catalog of every reusable component on the Aura marketing site. Each entry includes: anatomy, where it lives, usage rules, and an anti-pattern list. If a pattern repeats 3+ times in HTML, it belongs here.

---

## Component Index

| Component | Where | Use |
|---|---|---|
| `NavBar` | `js/nav.js` | Every page header |
| `Footer` | `js/footer.js` | Every page footer |
| `SkipLink` | `global.css` (`.skip-link`) | First focusable element |
| `PrimaryButton` | `style.css` (`.cta-primary`) | "Build Yours" CTA |
| `SecondaryButton` | `style.css` (`.cta-secondary`) | "Read the docs" CTA |
| `Section` | `style.css` (`.section--parchment`, `.section--surface`) | Section wrapper |
| `Tile` | `style.css` (`.tile`) | Spec pocket / value tile |
| `SpecCard` | `style.css` (`.spec-card`) | Hardware specs (reserved) |
| `Hero` | `index.html` | Page hero (image + headline) |
| `MetricBlock` | `ai.html` | Big-number metric |
| `TimelineItem` | `about.html` | Timeline entries |
| `FAQCard` | `style.css` (`.faq-card`) | Carousel FAQ (orphan) |
| `AppDemoBlock` | `style.css` (`#app-demo-section`) | Phone mockup section (orphan) |

---

## 1. NavBar

**Source:** `js/nav.js` (mounts into `<div id="nav-mount">`).
**Styles:** `css/nav.css` (full styling) + `css/global.css` (CSS vars).
**Data:** `js/site-data.js` (`pages` array).

### Anatomy

```html
<nav id="navbar" class="fixed top-0 w-full h-[52px] z-[100] ...">
  <div class="nav-inner">
    <a href="index.html" class="nav-wordmark">Aura</a>
    <div id="mobileMenu" class="nav-menu hidden">
      <!-- rendered by renderNavLinks() -->
    </div>
    <div class="nav-actions">
      <a href="docs.html#hardware" class="nav-cta">Build Yours</a>
      <button id="menuToggle" class="nav-menu-toggle" aria-expanded="false" aria-controls="mobileMenu">
        <i id="menuIcon" data-lucide="menu"></i>
      </button>
    </div>
  </div>
</nav>
```

### Rules

- **Always** mount via `<div id="nav-mount">` and `data-transparent="true"` for hero pages.
- **Never** hardcode a `<nav>` element in HTML.
- The `pages` array in `site-data.js` is the single source of truth for nav order.
- Active link is set by `liquid-glass.js` on `DOMContentLoaded`, not at render time.

### States

- `bg-transparent` — transparent, no blur. Only used on hero (`data-transparent="true"`).
- `.scrolled` — added by `liquid-glass.js` when `window.scrollY >= 50`.
- Mobile menu open — `.menu-open` + `.flex` on `#mobileMenu`.

---

## 2. Footer

**Source:** `js/footer.js` (mounts into `<div id="footer-mount">`).
**Styles:** `css/style.css` (`.site-footer`, `.footer-link-item`, `.footer-github-cta`, etc.).
**Data:** `js/site-data.js` (breadcrumb label).

### Anatomy

The footer template is fully inline in `footer.js`. It is **not** a class hierarchy — it is a single string of HTML rendered into the mount.

### Rules

- **Always** mount via `<div id="footer-mount">`.
- **Never** hardcode a `<footer>` element in HTML.
- Breadcrumb label comes from `window.AuraSite.getPageLabel(activePage)`.
- The "More ways to build..." row and the bottom bar are **rendered directly**, not parameterized — change the template in `footer.js` if you need to update them.

### Debt to fix

- Inline Tailwind classes with hex colors (`text-[#1d1d1f]`, `border-[#d2d2d7]/35`, `text-[#86868b]`). Replace with tokenized classes (`text-ink`, `border-outline/35`, `text-ink-tertiary`).
- `aria-disabled="true"` on `href="#"` items — these are not actually disabled. Convert to `<span>` with `aria-disabled` or use a `disabled-link` class with no href.

---

## 3. Skip Link

**Source:** `css/global.css` (`.skip-link`).

### Anatomy

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Rules

- Must be the **first focusable element** in `<body>`, before `#nav-mount`.
- Target is `<main id="main-content">`, which must wrap all page content (currently true on every page).
- Visually hidden until focused (via `:focus-visible { top: 0 }`).

---

## 4. Primary Button ("Build Yours" CTA)

**Source:** `css/style.css` (`.cta-primary` + `.cta-primary__arrow`).
**Token for easing:** `ease-apple-pill` (registered in `js/tailwind-config.js` as `transitionTimingFunction.apple-pill`).

### Anatomy

```html
<a href="docs.html#hardware" class="cta-primary">
  Build Yours
  <span class="cta-primary__arrow">
    <i data-lucide="chevron-right" class="text-sm text-white" aria-hidden="true"></i>
  </span>
</a>
```

### Rules

- 14px+ text, medium weight.
- Pill (`border-radius: 9999px`), 5px vertical padding, 32px left padding, 10px right padding.
- `bg-accent-blue` background, white text.
- 44×44px minimum touch target via the inner `.cta-primary__arrow` circle (32px) + outer padding.
- The arrow nudges diagonally on hover via `translate(2px, -2px) scale(1.05)`.
- Active state: `transform: scale(0.95)` (visual press feedback).
- Focus-visible: applies `var(--focus-ring)`.

### Variants

- **`.cta-secondary`** — same shape, light surface (`bg-ink/5`), `text-accent-blue`. Used on parchment sections. Hover: darken to `bg-ink/10`.
- For an even more compact pill (e.g. nav CTAs), use `.nav-cta` from `css/nav.css`.

### Linter

`tile-duplicate-pattern` + `transition-duplicate-pattern` in `scratch/verify_design_system.js` flag inline chains that duplicate these classes. EXCEPTION: `docs.html` is allowlisted (TODO: extract in a follow-up).
- Chevron nudges right on hover (`group-hover:translate-x-1`).
- Press feedback: `active:scale-[0.95]`.

---

## 5. Secondary Button ("Read the docs" CTA)

**Source:** `css/style.css` (`.cta-secondary` + `.cta-secondary__arrow`).

Same shape as `.cta-primary` — pill, `pl-8 pr-2.5 py-2.5`, medium weight, 700ms hover/active — but with `bg-ink/5 text-accent-blue` instead of `bg-accent-blue text-white`. The arrow circle is also `bg-ink/5` (not `bg-white/20`). Use on parchment sections where a filled accent-blue button would dominate.

---

## 5b. Tile

**Source:** `css/style.css` (`.tile`).
**Easing:** `ease-apple-pill` (700ms cubic-bezier).

The "iOS-style outlined pocket" pattern. Used 16+ times across `index.html` (Why-build-yours spec grid, open-source / inexpensive / etc.) and `about.html` (related-products grid).

### Anatomy

```html
<div class="tile aspect-[3/4]">
  <div class="w-full bg-canvas-fog p-6 rounded-[17px] flex flex-col justify-between">
    <i data-lucide="globe" class="text-[32px] text-ink" aria-hidden="true"></i>
    <span class="font-display text-caption-strong text-ink">Adeus Key</span>
  </div>
</div>
```

### Rules

- The 5px halo (`padding: 5px`) creates the soft inner border that wraps the actual content card.
- Inner card uses `rounded-[17px]` (22px - 5px halo) to keep visual outer radius at 22px.
- Hover: `scale(1.05)` over 700ms with `cubic-bezier(0.32, 0.72, 0, 1)`.
- Active (`:active`): `scale(0.95)` for tap feedback.
- Focus-visible: `transform: scale(1.05)` + inherited focus ring on the outer element.
- Background tint is `rgba(29, 29, 31, 0.05)` (--color-ink @ 5%) — matches `bg-ink/5` Tailwind utility.

### Linter

The `tile-duplicate-pattern` rule in `scratch/verify_design_system.js` flags the inline chain
`p-[5px] bg-ink/5 rounded-[22px] border border-black/5 flex transition-transform ...`. EXCEPTION: `docs.html` is allowlisted (TODO: extract in a follow-up).

---

## 6. Section

**Source:** `css/style.css` (`.section--parchment`, `.section--surface`).

### Anatomy

```html
<section class="section--parchment">
  <div class="max-w-[var(--content-max)] mx-auto px-margin-base">
    <!-- content -->
  </div>
</section>
```

### Variants

| Class | Background | Vertical padding |
|---|---|---|
| `.section--parchment` | `var(--color-canvas-parchment)` | 60px mobile / 80px desktop |
| `.section--surface` | `var(--color-canvas-white)` | 60px mobile / 80px desktop |

For dark sections, keep the inline `bg-canvas-dark text-white text-center` chain — it is used once on `index.html` and does not justify extraction.

### Linter

Both variants are referenced from `index.html`, `about.html`, and `ai.html`. The `dead-css` rule would catch any unused variant.

### Rules

- All sections use the same inner container: `max-w-[var(--content-max)] mx-auto px-margin-base`.
- Vertical padding: `py-section-v-padding` (desktop) / `py-section-v-padding-mobile` (mobile).
- Section background is part of the section's class, not a child utility.

---

## 7. BentoTile (the most repeated pattern)

**Source:** `p-[5px] bg-ink/5 rounded-[22px] border border-black/5` outer + `bg-white p-6 rounded-[17px]` inner. Used 16+ times across `index.html`, `about.html`, `ai.html`.

### Current pattern

```html
<div class="p-[5px] bg-ink/5 rounded-[22px] border border-black/5 flex transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105 active:scale-[0.95] group">
  <div class="w-full bg-white p-6 rounded-[17px] flex flex-col gap-4 items-center text-center justify-center">
    <i data-lucide="..." class="text-ink text-4xl" aria-hidden="true"></i>
    <p class="font-body text-caption font-semibold text-ink">Label</p>
  </div>
</div>
```

### Should be

```html
<div class="tile">
  <div class="tile__inner">
    <i data-lucide="..." aria-hidden="true"></i>
    <p>Label</p>
  </div>
</div>
```

### Rules

- The outer 5px gutter + inner white panel + 22px/17px radius ring is the "tile outline" treatment.
- Border `border-black/5` is the **only** border color allowed on tiles.
- Hover scale: `hover:scale-105`. Press: `active:scale-[0.95]`. Easing: `cubic-bezier(0.32, 0.72, 0, 1)`.
- On dark sections (`section--dark`), use a dark variant (`tile--dark`).

---

## 8. SpecCard

**Source:** Inline pattern + `.spec-card` in `style.css` (currently unused).

### Anatomy

```html
<div class="spec-card">
  <img class="spec-card__media" src="..." alt="...">
  <h3>Title</h3>
  <p>Body</p>
</div>
```

### Rules

- 18px radius, white background, 32px internal padding.
- No borders.
- Tonal layering: white card on `bg-canvas-parchment` section.

---

## 9. Hero

**Source:** `index.html:34-36` (image-only hero), `about.html:34-49` (image + headline).

### Rules

- Full-bleed background image (`bg-black` or `bg-canvas-dark`).
- Always sets `bg-transparent` on `<div id="nav-mount">`.
- Hero must contain the page's `<h1>` (currently missing in `index.html` — see Audit H2).
- Height: `min-h-screen` or `min-h-[100dvh]` for full-viewport.

---

## 10. MetricBlock

**Source:** `ai.html:96-100, 207-227` (large numbers).

### Pattern

```html
<div class="flex flex-col items-center text-center">
  <p class="font-body text-[12px] font-semibold text-ink mb-0">Up to</p>
  <p class="font-display text-[48px] md:text-[56px] font-semibold text-green leading-[1.05] mb-1 tracking-tight whitespace-nowrap">4 hours</p>
  <p class="font-body text-[13px] text-ink leading-snug">of active listening time<br>on a single charge</p>
</div>
```

### Rules

- Eyebrow: 12px caption.
- Number: 48–96px, font-semibold, `text-green` (positive metrics) or `text-ink`.
- Caption: 13px.
- Mobile-first: `text-[48px]` then `md:text-[56px]` etc.

---

## 11. TimelineItem

**Source:** `about.html:167-252` (8 items).

### Anatomy

```html
<div class="flex flex-col md:flex-row items-center mb-16 md:mb-24 relative z-10">
  <div class="md:w-1/2 md:pr-16 text-center md:text-right mb-8 md:mb-0">
    <div class="font-body text-caption text-accent-blue font-semibold mb-2">June 2025</div>
    <h3 class="font-display text-lead text-ink">Title</h3>
    <p class="text-ink-secondary mt-2">Description.</p>
  </div>
  <div class="w-4 h-4 rounded-full bg-accent-blue border-4 border-surface shadow-sm"></div>
  <div class="hidden md:block md:w-1/2 md:pl-16"></div>
</div>
```

### Debt

- `border-surface` should be `border-canvas-parchment` (Audit H3).
- `shadow-sm` violates the no-shadow rule (Audit H5). Replace with a 2px `ring` or just a 4px width border.

---

## 12. FAQCard (orphan — not currently rendered)

**Source:** `style.css` `#faq-section`, `.faq-card`, `.faq-expand-btn`, `.faq-controls`. **Not present in current HTML.**

### Action

Either delete the CSS (it's dead code) or wire it back into `index.html`.

---

## 13. AppDemoBlock (orphan — partially used)

**Source:** `style.css` `#app-demo-section`, `.demo-phone-img`, `.demo-caption-label`, `.demo-caption-body`. Used in `index.html` `<section id="app-demo-section">` but the JS reveal strategy and CSS are tightly coupled.

### Action

Keep, but document the coupling and ensure future edits preserve it.

---

## Anti-Patterns in Current Components

These are recurring violations seen in the current codebase:

| Pattern | Count | Fix |
|---|---|---|
| `p-[5px] bg-ink/5 rounded-[22px] border border-black/5 ... bg-white rounded-[17px]` | 16+ | Extract `.tile` class |
| `transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]` | 30+ | Extract `.btn-primary` or shorthand `ease-apple-spring` |
| `<a href="#" aria-disabled="true" class="footer-disabled-link">` | 3+ | Use `<span>` with `aria-disabled` |
| Inline hex (`text-[#1c1c1f]`, `border-[#d2d2d7]/35`) | 17+ | Use tokenized classes |
| `shadow-sm`, `shadow-md`, `shadow-lg` | 13+ | Ban via Tailwind config |
| `class="light"` on `<html>` of `about.html` | 1 | Remove |
| `inline style="..."` for design values | 3 | Extract to CSS |
| Inline `<script>` doing what `reveal.js` should do | 2 | Delete |

---

## What This Library Does Not Cover

- **Forms** — there are no form components in the site. If forms are added, see Apple HIG for input styling.
- **Modals** — none.
- **Tabs / accordions** — the FAQ has a card-expand interaction but it's not currently rendered.
- **Carousels** — none.

Future agents adding these should pattern-match against Apple HIG, not invent new shapes.