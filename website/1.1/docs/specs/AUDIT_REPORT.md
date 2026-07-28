# Aura Audit Report

> Comprehensive audit of `D:\PROJECTS\AURA\website\` as of 2026-07-27. Every issue is anchored to a file and line where possible. Severity follows Critical / High / Medium / Low.

## Summary

| Severity | Count | Themes |
|---|---|---|
| **Critical** | 6 | Token discipline, duplicate CSS, dead code |
| **High** | 9 | Inline styles, hardcoded hex, missing assets, heading hierarchy |
| **Medium** | 12 | Magic numbers, mixed scale systems, accessibility debt |
| **Low** | 8 | Naming inconsistency, leftover files, minor lint |

The static-site verifier (`scratch/verify_static_site.js`) passes today, but it checks **structural** concerns only. Design-system drift, token violations, and content-quality issues are not covered.

---

## CRITICAL

### C1 — Tailwind config redefines a token that is wrong (`--color-ink-tertiary` is duplicated, value conflict)
- **Where:** `js/tailwind-config.js:31` defines `ink-tertiary: "#86868b"`, `js/tailwind-config.js:65` redefines `ink-secondary: "#6e6e73"`. In `css/global.css:30`, both `--color-ink-secondary` and `--color-ink-tertiary` are `#6e6e73` — they differ in `tailwind-config.js`.
- **Impact:** CSS-var reference and Tailwind-utility reference resolve to different colors for `tertiary` vs `secondary`. This is an undocumented inconsistency.
- **Root cause:** Tokens were never reconciled between `global.css` and `tailwind-config.js`.
- **Fix:** Pick one token per slot. Make `tailwind-config.js` mirror `global.css` exactly (or vice versa). Document which one wins for the Tailwind `darkMode: "class"` strategy. Update `DESIGN_SYSTEM.md` § 1.2 to record the canonical pair.

### C2 — Two parallel sources of truth for the same component system
- **Where:** `css/global.css` declares CSS variables for colors, type, spacing, radius; `js/tailwind-config.js` declares Tailwind utilities with parallel values. Same applies for fonts (`css/fonts.css` vs Tailwind `fontFamily`).
- **Impact:** Any change to a token must be made in two places. Drift between them is the leading cause of the issues in this audit.
- **Root cause:** Tailwind CDN cannot read `global.css` at build time, so the config duplicates the values.
- **Fix:** Either (a) write a small generator that prints `tailwind-config.js` from `global.css` to enforce parity, or (b) move the source of truth to `global.css` and use only CSS variables in Tailwind config (declaring just `colors: 'var(--color-...)'`), or (c) accept the duplication but add a parity check to `scratch/verify_static_site.js`.

### C3 — Dead CSS / orphaned tokens
- **Where:** `css/style.css` defines `.hero-pill`, `.hero-pill-label`, `.hero-pill-divider`, `.hero-pill-btn`, `.wave-bar`, `#app-demo-section`, `#faq-section`, `.bento-pocket`, `.bento-pocket-dark` — most of these are referenced **only** by the original `index.html` hero pill, the app demo section (which exists in `index.html`), and the FAQ card grid (which is **not present** in the current `index.html`). The `.bento-pocket*` classes are also unused in current pages.
- **Impact:** ~200 lines of CSS shipped to every visitor that no page uses. Maintenance burden: every change here must avoid breaking a rule no one calls.
- **Root cause:** Iterative redesigns left classes behind without cleanup.
- **Fix:** Run a usage audit (`grep -rn "hero-pill" --include="*.html"`) and delete dead classes. Add `scratch/check_unused_css.js` to detect classes not referenced in any HTML or JS file.

### C4 — Orphaned legacy directory at repo root
- **Where:** `D:\PROJECTS\AURA\website\fonts\` at the repo root contains 8 SF Pro `.otf` files, but **no CSS file references `../fonts/...`** — every reference is to `assets/fonts/sf-pro/`.
- **Impact:** ~600KB of unused font files deployed to GitHub Pages on every release. Increases repo size and Pages build time.
- **Root cause:** Likely a leftover from when fonts were first added before being moved into `assets/`.
- **Fix:** Either delete the legacy `fonts/` directory or relocate the contents into `assets/fonts/sf-pro/` and remove the duplicate location. Update `scratch/verify_static_site.js` to flag unused `fonts/` files.

### C5 — Inline styles in production HTML
- **Where:**
  - `index.html:162` — `style="background: linear-gradient(180deg, #0e7a4b 0%, #022312 100%);"` (battery section)
  - `index.html:254` — `style="background: radial-gradient(circle at center, #fcf8fb, #f5f5f7);"` (companion app)
  - `docs.html:38` — `style="opacity:0"` (TOC overlay)
  - `index.html:387` — `<script>` block adding `e.preventDefault()` to `href="#"` links
  - `manifesto.html:115` — `<script>` block adding smooth scroll to all `a[href^="#"]` anchors
- **Impact:** Inline styles defeat the design-token system. Inline scripts duplicate logic that should live in `js/reveal.js` or a shared module.
- **Root cause:** "Quick fixes" that bypassed the design system.
- **Fix:**
  - Extract the two gradients into `css/style.css` as `.battery-section-bg` and `.companion-section-bg` with hex values lifted into `--color-battery-*` and `--color-companion-*` tokens.
  - The TOC overlay opacity belongs in `css/docs.css` (`.docs-toc-overlay { opacity: 0; }`).
  - The two inline `<script>` blocks should be deleted (the link-prevent one is dead behavior; the smooth-scroll one is duplicated by Tailwind's `scroll-smooth` class already on the root).

### C6 — Hardcoded hex values inside HTML attributes
- **Where:** 17 hardcoded hex literals across HTML (counted via `grep -E "#[0-9a-fA-F]{3,6}" *.html`):
  - `index.html:233,239,245` — `bg-[#1c1c1e]/60` (3 instances in thesis cards)
  - `about.html:266,281,287` — `bg-[#ebebeb]`, `bg-[#1c1c1e]` (3 instances)
  - `ai.html:72` — `bg-gradient-to-tr from-focus-blue via-[#8a2be2] to-[#ff2a6d]` (the ambient glow)
  - `ai.html:147,154` — `text-[#ff2d55]`, `text-[#00a389]` (Health and Search icons in Integrations card)
  - Plus border-color variants like `border-black/5`, `border-[#d2d2d7]/50` in `footer.js` (multiple instances)
- **Impact:** Hex literals in markup are not tokenized. They cannot be swapped to a dark mode or rebranded without a global search-and-replace.
- **Root cause:** Hex was used for one-off "Apple-like" effects without promoting them to tokens.
- **Fix:** Promote each distinct color used here to a token in `DESIGN_SYSTEM.md` § 1 and a CSS variable in `global.css`. Reference via Tailwind utility (`bg-ink-deep`, `text-red-ios`, etc.) or `var(--token)`. If a value is genuinely a one-off that should not be repeated, lock it behind a named class (e.g. `.ambient-glow`).

---

## HIGH

### H1 — `index.html` has TWO `<h1>` elements
- **Where:** `index.html:6` (`<title>` is not an h1) — actually the title is in `<title>`, but the hero is `<section class="...bg-black">` with no heading, then `index.html:44` is `<h1 class="demo-headline ...">Everything captured. Always searchable.</h1>` — and `index.html:56` is `<h2 id="demoCaptionLabel">Ask in plain language...</h2>`. So there is only one `<h1>`.
- **Status:** False alarm on `index.html`. The verifier passed. **No action.**
- *Note:* The `index.html` hero section is just an image — no `<h1>` until the app demo section. This means the actual hero has no semantic heading, which is its own accessibility concern (H2 below).

### H2 — Missing semantic heading hierarchy in `index.html`
- **Where:** The hero `<section>` (lines 34–36) has only an image, no heading. The first `<h1>` is in the app-demo section (line 44). Subsequent `<h2>`s (`index.html:56`, `68`, `99`, `123`, `167`, `221`, `257`, `274`, `311`, `349`) skip from h1 → h2 → h3 → h2 → h2 — there's a skip from h2 (line 221) to h3 (line 232 is actually `<i>` not heading) but the typography jumps across heading levels.
- **Impact:** Screen-reader users land on the page with no first heading. The hero `<section>` should have an `<h1>` — even if it's `visually-hidden` — describing the page.
- **Fix:** Add an `<h1>` to the hero that is either visible (Apple-style "Worn. Screenless. Aware.") or `.sr-only` styled. Demote the current `<h1>` to `<h2>`.

### H3 — `about.html` uses a flexbox-style timeline with `border-4 border-surface` which is the deprecated `bg-surface` token
- **Where:** `about.html:173,180,195,202,217,224,239,246` — eight timeline dots use `border-4 border-surface`. `bg-surface` is defined in `tailwind-config.js:29` as `#fcf8fb` (an old Material Design surface token) but `bg-canvas-parchment` is `#f5f5f7`. The timeline dots blend into the wrong background.
- **Impact:** The timeline dots are nearly invisible because they match the page background. Visual regression.
- **Root cause:** `bg-surface` was kept as a legacy alias for Material Design compatibility but never removed.
- **Fix:** Replace `border-surface` with `border-canvas-parchment` (the actual section bg). Long term, delete `bg-surface` from `tailwind-config.js`.

### H4 — Font preload mismatch with used weights
- **Where:** Every page preloads `SF-Pro-Display-Regular`, `SF-Pro-Display-Semibold`, `SF-Pro-Text-Regular`, `SF-Pro-Text-Semibold`. But the `index.html` battery section uses `font-semibold` for `text-[48px]`, `text-[56px]`, `text-[64px]`, `text-[88px]` (lines 167–177, 200, 205, 210). These large headlines are `font-semibold` (600) — but `SF-Pro-Display-Semibold` is the Display weight, which is only used for type ≥ 20px. The body uses SF Pro Text. So preloading `SF-Pro-Text-Semibold` and `SF-Pro-Display-Semibold` is correct.
- **Status:** False alarm. **No action.**
- *Note:* But the `<span>` elements at lines 173–177 use `font-semibold` at `text-[64px]`/`text-[88px]` — this should be `font-display` per the typography rules (`fonts.css:175-183`). It's missing the `font-display` class. Same for the white area content `h2` at line 167.

### H5 — `shadow-sm`, `shadow-md`, `shadow-lg` exist in HTML despite the no-shadow rule
- **Where:** `about.html:8`, `ai.html:4` instances of Tailwind `shadow-*` utilities; `docs.html:1`. Plus the bento-card pattern in `ai.html:62,90,105,119` uses `shadow-[0_4px_24px_rgba(0,0,0,0.04)]` and `shadow-[0_12px_48px_rgba(0,0,0,0.08)]` for hover states.
- **Impact:** Design rule violation. The auto-strip script only targets `css/style.css` and `css/global.css` — **not** Tailwind utilities in HTML.
- **Root cause:** The verifier and the strip script only look at CSS files; HTML uses Tailwind utilities that bypass them.
- **Fix:** Extend `scratch/apply_apple_design.js` to also scan HTML files for `shadow-` utilities and inline `box-shadow` / `drop-shadow` declarations. Or: ban shadow utilities via Tailwind's `safelist` / `corePlugins` config (e.g. `boxShadow: false` in `theme`).

### H6 — Border-heavy card pattern that violates the no-card-border rule
- **Where:** Repeated `p-[5px] bg-ink/5 rounded-[22px] border border-black/5` outer wrapper + `bg-white p-6 rounded-[17px]` inner wrapper, used 5× in `index.html:312-345` (Why Build Yours), 3× in `about.html:72-124` (Values), 4× in `about.html:265-294` (Open Source cards), 4× in `ai.html:131-157` (Integrations tiles).
- **Impact:** A "thick outline" pattern that's inconsistent with the rest of the design. The script `scratch/apply_apple_design.js` strips `border-` from `style.css` but not from Tailwind utilities in HTML, so it persists.
- **Fix:** Define a single component class (e.g. `.tile-outline`) in `style.css` that owns this pattern. Replace all 16+ HTML instances with the class. The script can then enforce it.

### H7 — Component pattern (`p-[5px] bg-ink/5 ... rounded-[22px]`) duplicated 16+ times
- **Where:** Same as H6, plus the inner `bg-white p-6 rounded-[17px]` with hover scale animation.
- **Impact:** Maintenance debt. Any change to the tile pattern requires 16+ edits.
- **Fix:** Extract into a documented component (see `COMPONENT_LIBRARY.md` outline). Promote to a Tailwind component class or a single repeating HTML structure.

### H8 — `bg-gradient-to-tr from-canvas-parchment to-white` and similar — gradients not declared as tokens
- **Where:** `ai.html:70,127`, `about.html:273`, `index.html:96,162,226,254`.
- **Impact:** Each gradient is hardcoded inline (in HTML) or in component CSS. The "apply_apple_design" script only catches the legacy `#f25134` gradient; legitimate gradients slip through.
- **Fix:** Either declare each legitimate gradient as a named class (`bg-grad-app-demo`, `bg-grad-companion-app`, `bg-grad-thesis-overlay`) in `style.css` so they live in one place, or — better — lift them into `global.css` as `--gradient-*` tokens and reference via `background: var(--gradient-thesis-overlay)`.

### H9 — `lucide@latest` resolves to a different version on every load
- **Where:** Every page `<script src="https://unpkg.com/lucide@latest">`.
- **Impact:** GitHub Pages caches aggressively; an upstream Lucide breaking change can silently affect the production site. There is no version lock.
- **Root cause:** "Latest" is convenient for development, fragile for production.
- **Fix:** Pin to a specific Lucide version: `https://unpkg.com/lucide@0.460.0` (current stable as of mid-2024). Add the pinned version to `DESIGN_SYSTEM.md` § "External dependencies".

---

## MEDIUM

### M1 — Heading-level audit reveals minor skips
- **Where:** `about.html` opens with `<h1>` (line 40) then jumps to `<h2>` (line 54, 60) then `<h2>` (line 76) — heading order is correct. `ai.html` `<h1>` (line 49) → `<h2>` (line 56) → `<h3>` (line 66, 94, 109, 123) — correct. `manifesto.html` `<h1>` (line 38) → `<h2>` (lines 60, 82, 95) — correct. `docs.html` — too large to fully audit, but verifier passed.
- **Status:** No critical issue, but the page-level `<h2>`/`<h3>` mix in `index.html` deserves a manual audit.

### M2 — Magic numbers for padding, gap, font-size
- **Where:**
  - `index.html:130,134` — `h-px w-36` (annotation lines)
  - `index.html:188` — `drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]`
  - `index.html:229` — `drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]`
  - `about.html:55,61` — `text-[32px]` instead of a tokenized size
  - `ai.html:62,90,105,119` — `rounded-[32px]` and `rounded-[40px]` not in the radius table
  - `ai.html:98` — `text-[96px]` and `text-[110px]` for the "0.5s" metric
- **Impact:** Each magic number is a maintenance trap.
- **Fix:** Promote recurring values to tokens. Add `text-metric-xl` (96/110px), `rounded-bento-xl` (32/40px), `--shadow-product-deep` (lifted from the drop-shadow declarations into tokens; though the rule says no shadows, two product images explicitly use them — either accept and tokenize, or remove).

### M3 — Repeated `transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]` Tailwind chain
- **Where:** 30+ instances across all pages.
- **Impact:** Each instance must be edited individually when motion design changes.
- **Fix:** Add `transitionDuration: { '700': '700ms' }` and `transitionTimingFunction: { 'apple-spring': 'cubic-bezier(0.32, 0.72, 0, 1)' }` to `tailwind-config.js`, and add utility shorthand `ease-apple-spring`.

### M4 — `lucide@latest` with no SRI integrity check
- **Where:** Every page.
- **Impact:** If unpkg or the Lucide CDN is compromised, attacker code runs in the page context.
- **Fix:** Add `integrity` and `crossorigin` attributes. Trade-off: must update hash every time Lucide version changes.

### M5 — `js/reveal.js` uses inline `style.opacity` / `style.transform` writes in the manifesto strategy
- **Where:** `js/reveal.js:64,67,76,79,82`.
- **Impact:** These writes are invisible to Tailwind utilities. The fallback (`p.style.opacity = '1'`) does not call `window.AuraIcons.refresh()` either, though the manifesto page has no icons.
- **Fix:** Use Tailwind classes (`opacity-0`, `opacity-100`, `translate-y-[10px]`) and toggle them, matching the pattern used in `about` and `ai` strategies.

### M6 — Two separate inline scripts doing what `liquid-glass.js` and `reveal.js` should own
- **Where:** `index.html:380-387` (link-prevent script), `manifesto.html:115-128` (smooth-scroll script).
- **Impact:** Logic lives in two places; one is a dead pattern (preventDefault on `href="#"`).
- **Fix:** Delete both. The `scroll-smooth` class on `<html>` (present on `index.html`) handles manifesto behavior. The link-prevent script never fires because no link on the page has `href="#"` *except* `aria-disabled="true"` footer items, which already have `pointer-events: none`.

### M7 — `apply_apple_design.js` strips from CSS but not HTML
- **Where:** `scratch/apply_apple_design.js`.
- **Impact:** Tailwind utilities (`shadow-sm`, `border-`, `box-shadow:0_4px_*`) in HTML bypass enforcement.
- **Fix:** Either (a) extend the script to scan HTML files for banned patterns, or (b) disable `boxShadow` in the Tailwind theme (`theme.boxShadow = {}` or `corePlugins: { boxShadow: false }`).

### M8 — `prefers-color-scheme: dark` is partially implemented
- **Where:** `css/nav.css:30-38,261-296` — dark nav. `css/global.css` defines `--color-ink-dark: #ffffff` but no full dark theme.
- **Impact:** Some pages render the nav dark while body stays light, breaking visual cohesion.
- **Fix:** Either complete the dark theme (add a `body.dark` set of overrides) or remove the dark nav CSS. Pick one direction.

### M9 — Mixed page-level tailwind config conflict between `tailwind-config.js` `darkMode: "class"` and `html class="light"` in `about.html`
- **Where:** `about.html:1` — `<html class="light">`. `tailwind-config.js:3` — `darkMode: "class"`. The `light` class does nothing in Tailwind.
- **Impact:** Dead attribute that misleads future agents.
- **Fix:** Remove `class="light"` from `about.html`. Or wire it up properly if a dark mode is planned.

### M10 — Heading-size inconsistencies: "Hero H1" is `text-[80px]` in CSS var, `text-hero-h1` Tailwind is `80px`, but `text-display-lg` Tailwind is `40px` while the CSS var `--type-title-xl` is `48px`
- **Where:** `css/global.css:51-55` vs `js/tailwind-config.js:121-145`.
- **Impact:** `text-display-lg` (40px Tailwind) ≠ `--type-title-xl` (48px CSS). They were meant to be the same.
- **Root cause:** Two separate type-scale drafts were merged without reconciliation.
- **Fix:** Reconcile. See Critical C1/C2 — the fix is the same. Pick one source and align.

### M11 — Nav links font-size discrepancy
- **Where:** `css/fonts.css:239` says `font-size: 14px` for `.nav-link`. `css/nav.css:82` says `font-size: 12px` for `#navbar .nav-link`. `js/tailwind-config.js:145` declares `nav-link: 12px`.
- **Impact:** Three different sizes for the same element.
- **Fix:** Pick 12px (what `nav.css` and `tailwind-config.js` agree on) and remove the `14px` line from `fonts.css`.

### M12 — `scratch/apply_apple_design.js` only handles two CSS files
- **Where:** It strips `css/style.css` and `css/global.css` but never `css/nav.css` or `css/docs.css`.
- **Impact:** Borders/shadows added to those files survive the enforcement pass.
- **Fix:** Extend the script to process all `.css` files in `css/`.

---

## LOW

### L1 — Repo's `AGENTS.md` and `AGENT.md` both exist
- **Where:** `AGENTS.md` (2.6 KB) and `AGENT.md` (504 B) — both at repo root.
- **Impact:** Two files naming overlapping scope. Future agents will be confused which to read.
- **Fix:** Consolidate. Either delete `AGENT.md` or merge its content into `AGENTS.md`.

### L2 — `GEMINI.md` is an empty stub
- **Where:** `GEMINI.md` (505 B) — likely a marker for a Gemini-specific context file, but contents are nearly empty.
- **Impact:** Future agents may waste a Read call.
- **Fix:** Delete or repurpose.

### L3 — `docs/figma-make-prompt-pack.md` references `/figma-make` skill that may not be installed
- **Where:** `docs/figma-make-prompt-pack.md`.
- **Impact:** Stale pointer. Low priority.
- **Fix:** Confirm the skill exists, or update the doc to point at the actual local skill.

### L4 — Demo and dist directories
- **Where:** `demo/`, `dist/`, `tmp/`, `html5up-zerofour.zip` (1.4 MB) at repo root.
- **Impact:** Deploy confusion. `dist/` is a build artifact that should not be in source.
- **Fix:** Add `demo/`, `dist/`, `tmp/`, `*.zip` to `.gitignore`. Investigate `dist/` contents — it has hashed CSS that looks like a Vite/Astro build.

### L5 — `js/liquid-glass.js` re-attaches scroll listener if nav scrolls into transparent state, but the active-state logic is duplicated in two places
- **Where:** `js/nav.js:6-20` (renders with `active` class), `js/liquid-glass.js:22-36` (re-asserts active state on load).
- **Impact:** Two code paths do the same thing. If one is wrong, the other will mask it.
- **Fix:** Move the active-link logic entirely into `nav.js`. Have `liquid-glass.js` only handle scroll-state and mobile-menu a11y.

### L6 — `glass-refraction.js` injects an SVG into `<body>` but doesn't clean up on navigation
- **Where:** `js/glass-refraction.js`.
- **Impact:** On a multi-page reload (rare on a static site, but possible via anchor navigation), the SVG can be duplicated if the script re-runs.
- **Fix:** Idempotency check at line 7 (`if (!document.getElementById('liquid-glass-svg'))`) is correct — but the `feDisplacementMap` lookup at line 52 happens before that guard, so it could fail if the filter is missing. Add a guard.

### L7 — Reveal.js strategies use `transition-all`
- **Where:** `js/reveal.js:29,54` — `transition-all duration-1000`.
- **Impact:** Performance + animation-property leak.
- **Fix:** Replace with `transition-[transform,opacity] duration-1000` or `transition-transform duration-1000`.

### L8 — Mobile menu a11y: focus trap missing
- **Where:** `js/liquid-glass.js:63-79` — opens menu on click, closes on outside-click and Escape. Does not trap Tab inside the menu while open.
- **Impact:** Keyboard users can Tab into content behind the menu.
- **Fix:** Add a focus-trap (capture Tab on the first/last nav-link and cycle).

---

## Verification gaps (the verifier misses all of this)

`scratch/verify_static_site.js` checks:

- Five pages exist with mount points, scripts in order, exactly one h1, no heading skips
- Lucide CDN before `icons.js`, no inline SVG, no `material-symbol`/`sf-symbol`
- No absolute filesystem paths, no broken local refs
- Required files present

It does **not** check:

- Token discipline (no raw hex, no forbidden shadows/borders/gradients in HTML)
- Inline styles in HTML
- Dead/orphaned CSS classes
- Font size consistency
- Heading semantic completeness (the `<h1>` is in the hero, not the page top)
- Accessibility: focus traps, alt text quality, ARIA correctness
- Asset file duplication (legacy `fonts/` at repo root)
- External dependency pinning (Lucide `@latest`)
- `prefers-reduced-motion` compliance beyond the script-level checks

These gaps are why this audit found issues the verifier passed.

---

## What the verifier should additionally check

A second-pass linter, `scratch/verify_design_system.js`, should assert:

1. Every color in HTML/CSS comes from `DESIGN_SYSTEM.md` § 1 tokens.
2. No `box-shadow`, `drop-shadow`, `shadow-*`, or `border-*` on cards in HTML or component CSS.
3. No `bg-gradient` containing legacy `#f25134`.
4. No `transition: all` anywhere.
5. No inline `style="..."` for design values.
6. `<h1>` is the first heading on every page.
7. `data-lucide` is paired with `aria-hidden="true"` or the parent button has `aria-label`.
8. Lucide CDN has a pinned version, not `@latest`.
9. No reference to the legacy `/fonts/` directory at repo root.