# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Parent project context: [`../AGENTS.md`](../AGENTS.md)
> Design reference: [`DESIGN.md`](./DESIGN.md) — Apple-style tokens, type scale, anti-patterns

## Sub-system: Website

5-page vanilla HTML/CSS/JS marketing site for the open-source Aura AI pendant. No build step, no bundler, no framework. Deployed to GitHub Pages — all asset paths must be relative.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Hero, capabilities, how it works, thesis, research, team, FAQ |
| `about.html` | Team, mission, values, timeline |
| `ai.html` | 4-layer pipeline architecture, provider comparison |
| `docs.html` | Technical documentation with sidebar |
| `manifesto.html` | "The Third Device Hypothesis" essay |

Every page ships two mount points — `<div id="nav-mount">` and `<div id="footer-mount">` — and **no hardcoded `<nav>` or `<footer>` HTML**. The shells are rendered by:

- `js/nav.js` — frosted-glass navbar (52px, z-100), active state, mobile menu, transparent-on-hero option via `data-transparent="true"`
- `js/footer.js` — footer with breadcrumb derived from `window.location`

Both shells read page order, labels, and active-page rules from **`js/site-data.js`** (`window.AuraSite`). If you need to add/rename a page, edit the `pages` array in `site-data.js` only — `nav.js` and `footer.js` consume it.

## Stack (real, not aspirational)

- **HTML/CSS/JS** — vanilla, ES2020+
- **Tailwind** via CDN — `js/tailwind-config.js` is the theme (Apple color tokens, type scale). No build step.
- **Lucide** icons — `<i data-lucide="icon-name"></i>`, loaded from CDN, initialized by `js/icons.js` (`window.AuraIcons.refresh()`). No `icon-map.js`, no `replace-icons.js` — those are gone.
- **Motion** — Tailwind transitions + `IntersectionObserver` (`js/reveal.js`, page-specific strategy pattern) + SVG `feTurbulence` refraction (`js/glass-refraction.js`) + scroll-state on the nav (`js/liquid-glass.js`).
- **No GSAP, no Lenis, no bundler.** If a future task says "add GSAP" or "add Lenis" — push back; the site is intentionally zero-build.

## File structure

```
website/
├── index.html  about.html  ai.html  docs.html  manifesto.html
├── favicon.svg
├── css/
│   ├── global.css     — design tokens, resets, accessibility
│   ├── fonts.css      — font-face declarations
│   ├── nav.css        — navbar component
│   ├── style.css      — component patterns (auto-enforced, see below)
│   └── docs.css       — docs sidebar overrides
├── js/
│   ├── site-data.js           — page registry (edit me to add/rename pages)
│   ├── nav.js                 — navbar mount + active state + mobile menu
│   ├── footer.js              — footer mount + breadcrumb
│   ├── icons.js               — Lucide init (window.AuraIcons)
│   ├── reveal.js              — IntersectionObserver reveal strategies
│   ├── glass-refraction.js    — SVG filter + scroll-velocity distortion
│   ├── liquid-glass.js        — navbar scroll-state + a11y menu
│   └── tailwind-config.js     — Tailwind theme (Apple tokens)
├── assets/                    — hero/, product/, team/, diagrams/, app/, png/, fonts/
├── fonts/                     — SF-Pro-*.otf (also referenced as assets/fonts/sf-pro/ in CSS)
├── scratch/                   — one-off migration / verification scripts, NOT a test suite
│   ├── apply_apple_design.js  — strips shadows/borders/banned gradient from CSS
│   ├── verify_static_site.js  — structural lint (mounts, scripts, headings, paths)
│   └── (other scratch files are audit/migration leftovers)
├── skills-lock.json           — pins third-party skills (apple-design, etc.)
└── .agents/skills/            — local skills (apple-aura-frontend, aura-agentic-website, etc.)
```

## Design constraints (summary — full table in DESIGN.md)

- **Typography** — SF Pro Display (≥20px) / SF Pro Text (<20px) / SF Pro Rounded (pills), preloaded from `fonts/` / `assets/fonts/`. Body 17px (not 16px). Headlines tracking `-0.02em` or tighter.
- **Color tokens** — defined in `css/global.css` and mirrored into `js/tailwind-config.js`. Use the variables (`--color-canvas-parchment` etc.) — do not hardcode hex in component CSS.
- **No shadows.** No `box-shadow`, no `drop-shadow`. Depth via tonal layering (white on parchment, parchment on white).
- **No borders on cards.** Contrast comes from background only. Borders are tolerated only on full-bleed separators.
- **Radius** — cards 18px, bento pockets 28px, utility 8px, full-bleed 0, pill buttons 9999px.
- **Navbar** — exactly 52px tall, `backdrop-filter: blur(20px) saturate(180%)`, transparent on hero then `scrolled` state via `liquid-glass.js`. Do not break this.
- **Reduced motion** — `reveal.js`, `glass-refraction.js`, and `liquid-glass.js` all check `prefers-reduced-motion`. New motion code must too.
- **Auto-enforcement** — `scratch/apply_apple_design.js` strips shadows, borders, and a banned red/orange gradient from `style.css` / `global.css`. If you re-introduce them, fix the source — don't bypass the script. Re-run it after editing those CSS files.

## Active skills (actually installed)

Use these — they are available in this session:

- `grilling` — before any layout, design, or navigation change
- `frontend-design` — Apple-style product page decisions
- `design-an-interface` — interface-level design work
- `diagnosing-bugs` — for scroll / reveal / glass-refraction regressions
- `tdd` — only when there are tests; this project has none currently
- `code-review` / `qa` — before merging
- `simplify` — post-change review for reuse and altitude
- Local `.agents/skills/`: `apple-aura-frontend`, `apple-design-analysis`, `minimalist-ui`, `aura-agentic-website`, `apple-hig`

**Do not invoke** `brainstorming`, `writing-plans`, or `verification-before-completion` — they are not in this project's installed set, despite what older docs may have claimed.

## Workflow

```
brainstorm → grill → plan → implement → verify → commit
```

## Verification

There is no test runner. The site is verified by linting structure and serving it.

```bash
# From D:\PROJECTS\AURA\website
node scratch/verify_static_site.js      # structural lint: mounts, scripts, headings, asset paths
node scratch/apply_apple_design.js      # only after editing css/style.css or css/global.css

# Then serve & curl (allowlisted in .claude/settings.local.json):
python -m http.server 8000
curl -sI  http://127.0.0.1:8000/
curl -sf  http://127.0.0.1:8000/index.html
curl -sI  http://127.0.0.1:8000/css/style.css
```

`verify_static_site.js` enforces (and will fail on):
- Exactly one `<h1>` per page, no heading-level skips
- Both `#nav-mount` and `#footer-mount` present, with `js/site-data.js` loaded **before** `js/nav.js`
- Lucide CDN loaded **before** `js/icons.js` if `data-lucide` is used
- No inline `<svg>` (use Lucide or image assets), no `material-symbol` / `sf-symbol` legacy markup
- No absolute local filesystem paths, no broken local asset refs

Or open in `chromium-cli` / a real browser to spot-check motion, navbar transparency, and mobile menu. Re-run `node scratch/apply_apple_design.js` after any `style.css` or `global.css` edit, then re-verify. Commit only when every page returns 200 and a manual scan shows no shadows / borders / banned gradients re-introduced.

## Things to avoid

- Hardcoding `<nav>` or `<footer>` in any HTML — edit `js/nav.js` / `js/footer.js`, or just `js/site-data.js` for page order.
- Inline styles. Use CSS variables from `css/global.css` and Tailwind classes.
- Adding shadows, borders, or the red/orange gradient — the migration script strips them, and they violate `DESIGN.md`.
- Changing the 52px navbar height or its frosted-glass treatment without a plan.
- Adding GSAP, Lenis, Material Symbols (use Lucide), or any build step.
- Editing the parent `AGENTS.md` from inside this directory — it is a shared project file.
- Re-introducing `js/icon-map.js` or `js/replace-icons.js` — the Lucide flow is `data-lucide` + `js/icons.js` only.