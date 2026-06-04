# Aura Website â€” KARPATHY.md
## How the Karpathy Guidelines apply to this specific codebase.
## Read this before writing any file. It is the code discipline contract.

---

## 1. Think Before Coding

### Our explicit assumptions (state these, don't hide them)

| Assumption | Risk if wrong |
|---|---|
| GitHub Pages serves from `website/` root | All asset paths break â€” test with local server first |
| `defer` scripts load after DOM is ready | GSAP/Lenis init must happen inside `DOMContentLoaded` or at script body |
| `prefers-color-scheme` works for initial theme | Flash of wrong theme â€” use `data-theme` on `<html>` set inline before body |
| Three.js import maps work on target browsers | Falls back gracefully â€” add `<noscript>` static image |
| CDN URLs are stable at pinned versions | Pin exact versions (already done in RESOURCES.md) |
| Pendant photos will be shot eventually | Three.js sphere is placeholder â€” don't architect around photos existing |

### When to stop and ask (don't guess)
- Any change to `global.css` variables â€” confirm scope first
- Adding a new CSS file â€” check if an existing one should be extended
- Any animation that touches the hero section â€” performance implications
- Changing the `website/` folder structure â€” breaks GitHub Pages paths

---

## 2. Simplicity First

### File budget â€” max lines per file
| File | Max lines | Why |
|---|---|---|
| `css/global.css` | 300 | Design tokens + reset + utilities only |
| `css/[page].css` | 250 | One page's styles only |
| `js/animations.js` | 120 | GSAP + Lenis init + shared reveals only |
| `js/nav.js` | 80 | Scroll state + dark mode + hamburger only |
| `js/home.js` | 150 | Three.js pendant + scroll home logic only |
| `js/docs.js` | 60 | Scroll spy + mobile select only |
| `[page].html` | 200 | Semantic structure, no inline styles |

If a file grows past budget â†’ split or simplify, don't just expand.

### What we do NOT build in v1
```
âŒ Search bar (docs page)
âŒ Cookie/analytics banner
âŒ Contact form
âŒ Blog / changelog
âŒ Video background
âŒ Particle effects
âŒ Custom cursor
âŒ Loading screen / splash
âŒ Service worker
âŒ i18n / translations
```
Every one of these can be a GitHub issue for v2.

### CSS specificity rules â€” keep it flat
- No `!important` except `prefers-reduced-motion` override
- No nesting deeper than 2 levels (`.nav-inner .nav-logo` is max)
- No ID selectors in CSS (IDs are for JS only)
- Use CSS custom properties, never magic numbers

### JS rules â€” keep it procedural
- No classes unless state is genuinely complex
- No event delegation when direct binding is simpler
- No utility libraries (lodash, etc.) â€” use native browser APIs
- All functions named for what they do, not what they are

---

## 3. Surgical Changes

### The one-file-one-job rule
Every file touches exactly one concern. If you need to touch two files to implement one feature, that's fine. If you need to touch five, stop and question the design.

| Need | Touch only |
|---|---|
| Nav background on scroll | `js/nav.js` + `css/nav.css` |
| Dark mode colours | `css/global.css` (the `[data-theme="dark"]` block) |
| Hero headline size | `css/home.css` (the `.hero-headline` rule) |
| Pendant rotation speed | `js/home.js` (the `tick()` function) |
| Docs sidebar active link | `js/docs.js` (the `updateActiveLink()` fn) |
| Code block theme | `docs.html` `<link>` tag only |

### Shared vs page-specific
- `global.css` â€” shared. Touch if changing design tokens, reset, or shared utilities
- `nav.css` â€” shared. Touch only for nav behaviour
- `[page].css` â€” isolated. Changes only affect that page
- `animations.js` â€” shared. Only GSAP/Lenis setup + `.reveal` pattern

### Don't touch the manifesto text
The essay is the founder's voice. Do not rewrite, condense, or "improve" it.
HTML structure around it: fine. The words: not your call.

---

## 4. Goal-Driven Execution

### Verifiable success criteria for each page

**index.html**
- [ ] Opens in browser without console errors
- [ ] Nav becomes frosted glass after 80px scroll
- [ ] Dark mode toggle works, persists on refresh
- [ ] Three.js pendant renders, rotates with mouse
- [ ] All 9 sections visible and correctly styled
- [ ] Lighthouse performance â‰¥ 85 on mobile
- [ ] No horizontal scroll on 375px viewport

**about.html**
- [ ] Team cards show both members with avatar and tags
- [ ] Origin story prose is readable at 17px line-height 1.6
- [ ] OSS acknowledgement links to BasedHardware/omi

**ai.html**
- [ ] Pipeline diagram shows 8 nodes in two rows
- [ ] 4 AI cards visible with correct engine names and metrics
- [ ] Honesty box lists all 4 limitations

**docs.html**
- [ ] Sidebar scroll spy highlights active section
- [ ] Mobile: sidebar hidden, select dropdown visible
- [ ] BOM table shows all 8 components with prices
- [ ] Code blocks have Prism.js syntax highlighting
- [ ] All internal anchor links work

**manifesto.html**
- [ ] All 4 essay sections present word-for-word
- [ ] Blockquote styled with rose left border
- [ ] Closing quote in rose italic
- [ ] Reading width â‰¤ 720px, comfortable

**GitHub Pages deployment**
- [ ] Push to `main` triggers GitHub Actions workflow
- [ ] `thesohamdatta.github.io/aura` loads
- [ ] All 5 pages accessible from deployed URL
- [ ] No broken image links on deployed site

---

## 5. The Build Order

This is the dependency graph. Build in this sequence:

```
1. global.css        â†’ no dependencies
2. nav.css           â†’ depends on: global.css variables
3. nav.js            â†’ depends on: nav.css classes
4. animations.js     â†’ depends on: GSAP, Lenis (CDN)
5. home.css          â†’ depends on: global.css
6. index.html        â†’ depends on: global.css, nav.css, home.css, nav.js, animations.js
7. home.js           â†’ depends on: Three.js (CDN), index.html canvas element
8. about.css + about.html
9. ai.css + ai.html + ai.js
10. docs.css + docs.html + docs.js
11. manifesto.css + manifesto.html
12. Copy assets â†’ Test paths â†’ GitHub Pages deploy
```

Never skip steps. Never build a page before its CSS is done.

---

## The Test Before Any Commit

Run this mental checklist on every change:

```
â–¡ Does every changed line trace to the user's request?
â–¡ Is there a simpler way to do this?
â–¡ Did I touch anything I wasn't supposed to?
â–¡ Does it work with dark mode on?
â–¡ Does it work at 375px wide?
â–¡ Are all console errors cleared?
â–¡ Did I remove any orphaned CSS/JS I created?
```

If any box is unchecked â€” fix it before committing.
