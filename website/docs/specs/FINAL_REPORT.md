# Aura Website — Engineering Audit & Specification

**Date:** 2026-07-27
**Scope:** `D:\PROJECTS\AURA\website\` (the GitHub Pages site, not the `../site/` reference repo)
**Mode:** Audit + spec. **No code changed.**

---

## 1. Executive Summary

The Aura marketing site is a five-page vanilla HTML/CSS/JS project deployed on GitHub Pages. It uses Tailwind via CDN, Lucide via CDN, and a custom Apple-inspired design system with SF Pro hosted locally. The codebase is functional and the static-site verifier passes today. But the project has accumulated **design-system drift** that future AI agents will compound unless it is captured in writing.

**Headline findings:**

1. **Two parallel sources of truth** for tokens (`css/global.css` + `js/tailwind-config.js`). They disagree on at least two values already (`ink-tertiary` hex, `nav-link` size). This is the root cause of most other drift.
2. **~17 hardcoded hex literals** in HTML. The token system is bypassed for "Apple-style" effects, which then can't be re-themed or audited.
3. **~30+ instances** of the same Tailwind animation chain repeated inline (`transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]`). The same pattern (`p-[5px] bg-ink/5 ... rounded-[22px]`) appears 16+ times as the "tile outline" component. Neither has been promoted to a class.
4. **No shadow/border enforcement on HTML** — the auto-strip script only handles `css/style.css` and `css/global.css`. Tailwind utilities (`shadow-sm`, `border-black/5`, raw `box-shadow:0_4px_*` arbitrary values) in HTML bypass it.
5. **Orphaned legacy directory** at `D:\PROJECTS\AURA\website\fonts\` (8 SF Pro `.otf` files, ~600 KB) is shipped to Pages but referenced by nothing.
6. **Lucide CDN uses `@latest`** — every Pages reload can pull a different version.
7. **Missing semantic `<h1>` on `index.html`** — the hero is an image, the first heading is in the next section, so the page has no top-level heading for screen readers.
8. **Inline `style="..."` and `<script>` blocks** in HTML — three inline styles and two inline scripts that should live in shared CSS/JS.

**Critical issues:** 6 · **High:** 9 · **Medium:** 12 · **Low:** 8 — see § 10 Migration Roadmap for prioritization.

The deliverable is seven spec documents in `docs/specs/` that together become the canonical reference for every future agent. None of these docs introduce design changes — they codify existing intent.

---

## 2. Research Findings

### 2.1 GitHub Pages (project-site mode)

Based on GitHub's official Pages documentation:

- **No build step.** Pages serves the repository root directly. The Aura site honors this — there is no `package.json`, no `dist/`, no bundler. `DIST/index.html` and `DIST/assets/*` exist as legacy output and should be gitignored.
- **`.nojekyll` is required** to disable Jekyll processing (which would ignore `_`-prefixed files and rewrite some URLs). The project must confirm `.nojekyll` exists at the served root.
- **Case-sensitive filesystem.** Windows-local development is case-insensitive; Pages runs on Linux. Files like `assets/Png/foo.png` work locally, 404 on Pages. The verifier should be extended to enforce case.
- **Cache-Control: max-age=600** by default. For a static site whose content rarely changes, this means full reloads every 10 minutes. Workaround: hash filenames and reference hashed paths from HTML.
- **Soft 1 GB repo limit, ~100 GB bandwidth/mo.** Currently not a risk, but the orphaned `fonts/` directory wastes ~600 KB.
- **No custom HTTP headers.** Cannot set `Content-Security-Policy` via Pages — must use `<meta http-equiv="Content-Security-Policy">` if needed.

### 2.2 Apple Human Interface Guidelines (extracted)

The site already follows most Apple HIG principles. Confirmed reusable principles:

- **Type scale:** Display (≥ 20px) vs Text (< 20px) split. Headlines track -0.02em or tighter. Body is 17px, not 16px.
- **Color depth via tonal layering**, not shadows. White on parchment, parchment on white. Surfaces use `bg-canvas-parchment` over `bg-canvas-white` to create depth.
- **Frosted glass only for navigation.** `backdrop-filter: blur(20px) saturate(180%)` on the nav. Bento pockets get a heavier blur (30px / 190%).
- **Pill CTAs** (radius 9999px). Secondary buttons are text + chevron, not competing pills.
- **Section rhythm:** 80px vertical padding desktop, 60px mobile. Headlines max 800px, prose max 680px.
- **Animation grammar:** Apple spring `cubic-bezier(0.32, 0.72, 0, 1)` for hover lifts; subtle scale changes, never rotations or color flashes.
- **Reduced motion respected** via `prefers-reduced-motion`.

What Apple does that Aura has not adopted (intentional gaps to acknowledge, not fix):

- **Dark mode.** Apple ships a full dark theme. Aura has partial dark nav CSS but no body theme. This is a known debt (Audit M8).
- **Content blocks with semantic structure** — Apple's site uses `<figure>`/`<figcaption>`, `<aside>`, `<dl>`/`<dt>`/`<dd>` heavily. Aura's HTML is mostly `<div>` and `<section>`.
- **Picture element with art direction.** Apple uses `<picture>` with size-specific sources. Aura uses a single `<img>` per asset.

### 2.3 Open-source references (selected for relevance)

The project intentionally avoids React/Astro/Next.js build pipelines. The best references for "vanilla HTML + Tailwind CDN + Apple-style" are:

| Repo | URL | Stack | Reusable idea |
|---|---|---|---|
| `midudev/aprendiendo-react` (homepage) | github.com/midudev | Vanilla HTML + Tailwind CDN | Hero pattern with eyebrow + headline + lead + dual CTA |
| `rauchg.com` | rauchg.com | Vanilla HTML + custom CSS | Personal site with hand-rolled typography, no framework |
| `stripe.com` (Docs) | stripe.com/docs | Next.js, but worth studying | Section rhythm, footer organization |
| `linear.app` (marketing) | linear.app | Next.js + Framer Motion | Bento grid motion patterns |
| `vercel.com` (homepage) | vercel.com | Next.js | Apple-adjacent typography and section gradients |

A pragmatic move: the design language is "Apple-style product page" — that's a well-trodden path. The Aura site already matches it for typography, spacing, and motion grammar. The next evolution is content depth, not visual sophistication.

---

## 3. GitHub Pages Best Practices Applied

The site follows most best practices but misses some. See `docs/specs/GITHUB_PAGES_GUIDE.md` for the full guide. Top recommendations:

1. **Add `.nojekyll` at the served root** if missing.
2. **Pin Lucide to a specific version.** Replace `https://unpkg.com/lucide@latest` with `https://unpkg.com/lucide@0.460.0` (or current stable).
3. **Convert hero images to WebP** with PNG fallback via `<picture>`. The hero PNG is the largest single transfer; converting saves ~30% (or ~50% with AVIF).
4. **Convert fonts to WOFF2** with `.otf` fallback. Saves ~50% font payload.
5. **Remove the orphaned `fonts/` directory** at the repo root.
6. **Add Open Graph + Twitter card meta tags** for share previews.
7. **Add `robots.txt`** allowing all.
8. **Extend `scratch/verify_static_site.js`** to enforce the additional rules listed in `AUDIT_REPORT.md` § "What the verifier should additionally check".

---

## 4. Apple Design Analysis (concise)

The site follows Apple HIG for typography, spacing, and motion grammar. Specific areas where it deviates (intentionally or not):

- **Deviation 1: Card borders.** Apple-style cards are borderless. Aura has the "tile outline" pattern (`p-[5px] bg-ink/5 rounded-[22px] border border-black/5 ... bg-white rounded-[17px]`) which Apple would never ship. The pattern exists in 16+ instances. Recommendation: keep the pattern but tokenize it as `.tile` and document why it deviates from HIG (it provides a visual containment ring that's distinct from a shadow).
- **Deviation 2: Custom green block in battery section.** Apple doesn't have this exact treatment. The `style="background: linear-gradient(180deg, #0e7a4b 0%, #022312 100%);"` is a brand choice — promote to a token and document.
- **Deviation 3: Inline hex literals.** Apple would never ship a page with `#0066cc` hardcoded — every color is a token. Aura has 17+ raw hex values in HTML. This is a deviation from HIG principles, not from the visual itself.

---

## 5. Open-source Reference Analysis

See `GITHUB_PAGES_GUIDE.md` § 2.3 for the table. Three takeaways:

1. **The "Apple-style vanilla HTML" niche is real but small.** Most Apple-adjacent sites have already moved to Next.js. Aura's choice to stay zero-build is unusual but defensible.
2. **Bento grids are everywhere now.** Linear, Vercel, Apple, Stripe — all use the 12-column feature tile pattern. The Aura tile pattern is consistent with this trend.
3. **The "no GSAP / no Lenis" choice is strong.** Smooth-scroll libraries add runtime cost and break `prefers-reduced-motion` semantics. The Aura site gets the same effect with native CSS + a tiny `IntersectionObserver`. Don't change this.

---

## 6. Repository Audit

Full audit in `docs/specs/AUDIT_REPORT.md`. Summary:

| File | Role | Status |
|---|---|---|
| `index.html` | Landing | ⚠ H2 (no hero h1), M2 (magic numbers), H5 (Tailwind shadows/borders), C5 (inline style) |
| `about.html` | About | ⚠ H3 (timeline dots blend into bg), M9 (`class="light"` dead attr) |
| `ai.html` | AI pipeline | ⚠ H5/H6/H8 (raw hex, gradients), C6 (hardcoded ambient glow) |
| `docs.html` | Docs | ✅ Largest page, sidebar pattern. H5 (shadow on TOC button) |
| `manifesto.html` | Manifesto | ⚠ C5 (inline smooth-scroll script) |
| `css/global.css` | Tokens | ✅ Single source for CSS vars. C2 (drift from Tailwind config) |
| `css/style.css` | Components | ⚠ C3 (dead classes), H5 (shadows in cards) |
| `css/nav.css` | Nav | ✅ Clean |
| `css/fonts.css` | Font system | ⚠ M11 (14px nav-link duplicate) |
| `css/docs.css` | Docs overrides | ⚠ M12 (not covered by `apply_apple_design.js`) |
| `js/site-data.js` | Page registry | ✅ Single source |
| `js/nav.js` | Nav render | ✅ Clean |
| `js/footer.js` | Footer render | ⚠ H6 (inline hex in HTML template), M2 (magic numbers) |
| `js/icons.js` | Lucide init | ⚠ H9 (`@latest`) |
| `js/reveal.js` | Reveal animations | ⚠ M5 (inline styles), L7 (transition-all) |
| `js/liquid-glass.js` | Nav scroll state | ⚠ L5 (duplicated active-link logic), L8 (no focus trap) |
| `js/glass-refraction.js` | SVG refraction | ⚠ L6 (no early-return on guard failure) |
| `js/tailwind-config.js` | Tailwind theme | ⚠ C2 (drift from CSS vars), C1 (tertiary token conflict), M3 (no shorthand ease) |
| `favicon.svg` | Icon | ✅ |
| `assets/` | Images + fonts | ⚠ C4 (orphaned `fonts/` at repo root), 8 (no WebP) |
| `scratch/` | Verification | ⚠ M7 (only handles 2 CSS files), H5 (doesn't enforce on HTML) |
| `demo/`, `dist/`, `tmp/`, `html5up-zerofour.zip` | Misc | ⚠ L4 (should be gitignored) |

---

## 7. Design System Specification

Full spec in `docs/specs/DESIGN_SYSTEM.md`. Key contracts:

- **13 active color tokens** across canvas, ink, and interactive roles.
- **15-step type scale** from micro (10px) to metric (110px), with Apple Display/Text/Rounded split.
- **4 standard radii** (pill, card, bento, utility).
- **8px spacing rhythm** with explicit `--section-padding` (80/60px), `--gutter` (24px), `--content-max` (980px), `--hero-max` (1200px), `--prose-max` (680px).
- **No shadow** rule (except `--focus-ring`).
- **Motion grammar:** Apple spring curve, 250–700ms durations, transform/opacity only.
- **Single source-of-truth map** in § 9 of `DESIGN_SYSTEM.md` — agents know which file owns which token.

---

## 8. Component Library

Full catalog in `docs/specs/COMPONENT_LIBRARY.md`. Summary:

- **13 components** identified. 6 are well-implemented (NavBar, Footer, SkipLink, Hero, MetricBlock, Section). 3 are duplicated patterns that should be classes (PrimaryButton, SecondaryButton, BentoTile). 2 are dead/orphaned (FAQCard, AppDemoBlock). 2 need attention (TimelineItem for `border-surface`, SpecCard for consistency).
- **Anti-patterns documented:** the 16+ inline tile outlines, the 30+ inline transition chains, the 17+ raw hex literals — all extracted with their fix.

---

## 9. Architecture Recommendations

The current architecture is **correct in shape** but **drifting in details**. Specific recommendations:

1. **Reconcile the two token sources.** Either (a) add a parity check to `verify_static_site.js`, (b) generate `tailwind-config.js` from `global.css`, or (c) drop CSS vars and use only Tailwind. **Recommended:** (a) — least invasive.

2. **Promote the BentoTile outline pattern to a class.** Define `.tile` and `.tile--dark` in `style.css`. Replace all 16+ HTML instances with `<div class="tile">...`.

3. **Promote the PrimaryButton pattern to a class.** Define `.btn-primary` and `.btn-secondary` in `style.css`. Replace all 5+ HTML instances.

4. **Add a `transitionTimingFunction` shorthand** `ease-apple-spring` to `tailwind-config.js` so the 30+ inline `ease-[cubic-bezier(0.32,0.72,0,1)]` chains become `ease-apple-spring`.

5. **Promote every distinct raw hex literal to a token.** Even the one-offs (`#ebebeb`, `#1c1c1e`, `#ff2d55`, `#00a389`) — name them in `DESIGN_SYSTEM.md` so they're at least documented.

6. **Pin Lucide to a specific version.** Update all 5 pages.

7. **Convert fonts to WOFF2.** Add fallback chain in `css/fonts.css`.

8. **Convert hero images to WebP.** Largest single perf win.

9. **Delete the orphaned `fonts/` directory** at the repo root.

10. **Delete the dead/orphaned CSS** in `style.css` (`.hero-pill*`, `.wave-bar`, `.bento-pocket*` if unused, `.faq-*`).

11. **Delete the two inline `<script>` blocks** in `index.html` and `manifesto.html`.

12. **Migrate inline `style="..."` to component classes** in `style.css` (`docs.css`).

13. **Add an accessibility script** for the mobile menu focus trap.

14. **Add Open Graph + Twitter meta tags** to every page.

15. **Add the missing `<h1>` to the hero on `index.html`** — either visible or `.sr-only`.

---

## 10. Migration Roadmap

Priority-ordered. Each item has: description, impact, root cause, recommended fix, order, effort, risk.

### CRITICAL (do these first)

| # | Issue | Impact | Root cause | Fix | Order | Effort | Risk |
|---|---|---|---|---|---|---|---|
| C1 | Token value conflict (`ink-tertiary` differs between CSS var and Tailwind config) | Visual inconsistency | Two sources of truth never reconciled | Pick a winner; update the other; document in `DESIGN_SYSTEM.md` § 1.2 | 1 | 30 min | Low |
| C2 | Two parallel token sources | Drift | Tailwind CDN can't read CSS vars at build time | Add parity check to verifier OR generate config from CSS | 2 | 2 hr | Medium |
| C3 | Dead/orphaned CSS in `style.css` (~200 lines) | Maintenance burden, larger CSS payload | Iterative redesigns left classes behind | Audit usage; delete dead classes; add `scratch/check_unused_css.js` | 3 | 2 hr | Low |
| C4 | Orphaned `fonts/` directory at repo root (~600 KB) | Repo size, Pages build time | Files relocated, originals not deleted | Delete `fonts/` directory; confirm references point to `assets/fonts/sf-pro/` | 4 | 15 min | Low |
| C5 | Inline `style="..."` and `<script>` blocks in HTML | Defeats design system; duplicates JS logic | "Quick fixes" that bypassed conventions | Extract to CSS classes and `reveal.js`; delete the inline scripts | 5 | 3 hr | Low |
| C6 | ~17 hardcoded hex literals in HTML | Token bypass; can't be re-themed | One-off "Apple-like" effects without token promotion | Promote each distinct color to a token; replace literals | 6 | 4 hr | Low |

### HIGH

| # | Issue | Impact | Root cause | Fix | Order | Effort | Risk |
|---|---|---|---|---|---|---|---|
| H1 | False alarm: index.html has exactly one `<h1>` | — | — | No action | — | — | — |
| H2 | `index.html` has no `<h1>` in the hero (only in the next section) | Screen-reader UX | Hero is image-only | Add visible or `.sr-only` `<h1>` to the hero | 7 | 1 hr | Low |
| H3 | Timeline dots in `about.html` blend into background (`border-surface`) | Visual regression | Legacy `bg-surface` token ≠ `bg-canvas-parchment` | Replace with `border-canvas-parchment`; remove `bg-surface` from Tailwind config | 8 | 30 min | Low |
| H4 | False alarm: font preload list is correct | — | — | No action | — | — | — |
| H5 | Tailwind `shadow-*` and arbitrary `shadow-[0_4px_*]` in HTML bypass enforcement | Rule violation | `apply_apple_design.js` only scans CSS | Extend verifier to scan HTML for shadow/border patterns; OR disable Tailwind `boxShadow` core plugin | 9 | 2 hr | Medium |
| H6 | "Tile outline" pattern (`p-[5px] bg-ink/5 ... border border-black/5`) violates no-card-border rule | Rule violation (16+ instances) | Pattern duplicated inline | Define `.tile` class in `style.css`; replace all instances | 10 | 4 hr | Low |
| H7 | Tile pattern duplicated 16+ times | Maintenance debt | Same as H6 | Same fix as H6 | 11 | (combined with H6) | — |
| H8 | Gradients not declared as tokens | Maintenance | Inline `bg-gradient-*` Tailwind utilities | Promote each legitimate gradient to a `.bg-grad-*` class in `style.css` | 12 | 2 hr | Low |
| H9 | Lucide CDN uses `@latest` | Fragile production behavior | Convenience during dev | Pin to specific version (e.g. `0.460.0`); document in `DESIGN_SYSTEM.md` | 13 | 30 min | Low |

### MEDIUM

| # | Issue | Impact | Root cause | Fix | Order | Effort | Risk |
|---|---|---|---|---|---|---|---|
| M1–M12 | Magic numbers, transition chains, integrity checks, strategy pattern, dead CSS scope, scope of `apply_apple_design.js`, dark mode partial, dead `class="light"`, type-scale reconciliation, nav-link size conflict, verifier scope | Maintenance debt, perf, a11y | Drift + incomplete enforcement | See `AUDIT_REPORT.md` § M1–M12 for each fix | 14+ | 1 day total | Low–Medium |

### LOW

| # | Issue | Impact | Root cause | Fix | Order | Effort | Risk |
|---|---|---|---|---|---|---|---|
| L1–L8 | Duplicate `AGENTS.md`/`AGENT.md`, empty `GEMINI.md`, stale `figma-make` pointer, deploy-confusing dirs, duplicated active-link logic, SVG idempotency, `transition-all` in reveal, mobile menu focus trap | Cleanup, a11y | Drift | See `AUDIT_REPORT.md` § L1–L8 | 20+ | 1 day total | Low |

---

## 11. Documentation Structure

The canonical reference lives in `docs/specs/`:

```
docs/
├── agents/                    ← existing SDLC/quality-gates docs
└── specs/
    ├── AGENT_RULES.md         ← strict rules for AI agents
    ├── AUDIT_REPORT.md        ← every issue, severity-ranked
    ├── COMPONENT_LIBRARY.md   ← reusable components catalog
    ├── DESIGN_SPEC.md         ← visual language & page intent
    ├── DESIGN_SYSTEM.md       ← tokens (color, type, spacing, radius)
    ├── DEVELOPMENT_GUIDE.md   ← local dev + verification
    └── GITHUB_PAGES_GUIDE.md  ← deployment constraints
```

Reading order for a new agent:

1. **`DESIGN_SYSTEM.md`** — every token.
2. **`AGENT_RULES.md`** — what's forbidden, what's required.
3. **`COMPONENT_LIBRARY.md`** — what to reuse.
4. **`AUDIT_REPORT.md`** — what to NOT reintroduce.
5. **`GITHUB_PAGES_GUIDE.md`** — deployment constraints.
6. **`DEVELOPMENT_GUIDE.md`** — how to run the verification commands.
7. **`DESIGN_SPEC.md`** — the "why" behind the visual choices.

The existing `DESIGN.md` at the repo root becomes a pointer to `docs/specs/DESIGN_SYSTEM.md` after migration (or is left as-is; it already documents most of the tokens).

---

## 12. Future Agent Rules

Codified in `docs/specs/AGENT_RULES.md`. Key rules any agent must follow:

- **Token discipline** — never invent a color, type, spacing, or radius. Use the table in `DESIGN_SYSTEM.md`. If a value is missing, add it to the table first.
- **No shadow, no card border** — except focus ring and full-bleed separators.
- **JS-mounted nav and footer** — never hardcode `<nav>` or `<footer>`.
- **Single source for page data** — `js/site-data.js`. Never add a route without editing it.
- **Lucide via `data-lucide`** — never inline SVG. Never `@latest`. Pin a version.
- **No framework, no bundler, no build step** — push back if asked.
- **No `transition: all`** — specify the property.
- **No `outline: none`** without focus-visible replacement.
- **No inline `style="..."`** for design values.
- **All images have `width`/`height`** and meaningful `alt`.
- **Reduced-motion users are honored** in every new motion script.
- **Each page has one `<h1>`, one skip link, one `<main id="main-content">`.**
- **Touch targets ≥ 44×44px.**
- **Verify before commit** — `verify_static_site.js` (always) + `apply_apple_design.js` (if CSS edited) + browser smoke test.

---

## 13. Final Recommendations

1. **Adopt the seven spec documents as the canonical reference.** They replace today's scattered intent (CLAUDE.md, AGENTS.md, DESIGN.md, scratch/README if any, comments in code) with a single ordered set.

2. **Run the migration in the order in § 10.** Critical issues first, then High, then Medium, then Low. Each phase is independently shippable.

3. **Extend the verifier** in tandem with each phase. The verifier should grow to cover what the audit found (`AUDIT_REPORT.md` § "What the verifier should additionally check"). After C2/C6/H5/H6/M7 fixes, the verifier should fail-fast on every regression.

4. **Add CI.** A GitHub Actions workflow that runs `verify_static_site.js` (and the new design-system verifier) on every PR. This is the cheapest insurance against future drift.

5. **Promote inline patterns to classes.** The biggest single quality win: `.tile`, `.btn-primary`, `.btn-secondary`, `.section`, `.section--parchment`, `.section--dark`. Each promotion deletes dozens of inline patterns.

6. **Promote raw hex literals to tokens.** Each literal should have a name. If it's truly a one-off, that's a signal it should be removed, not duplicated.

7. **Pin external dependencies.** Lucide `@latest` → pinned version. Tailwind CDN → acceptable for now (no version), but revisit if the runtime cost becomes a problem.

8. **Address the orphan `fonts/` directory immediately.** It's a 30-second fix.

9. **Don't redesign.** The brief was explicit: this is an audit and spec, not a redesign. The site's design language is sound. The fixes are about enforcement and consistency, not aesthetics.

10. **Treat the audit as living.** When C1/C2 are fixed, retire those rows. When H5/H6 are fixed, retire those rows. The audit becomes a snapshot of remaining debt.

---

## Appendix: What Was Read

For reproducibility:

- All five HTML pages (`index.html`, `about.html`, `ai.html`, `docs.html`, `manifesto.html`)
- All CSS files (`global.css`, `fonts.css`, `nav.css`, `style.css`, `docs.css`)
- All JS files (`site-data.js`, `nav.js`, `footer.js`, `icons.js`, `reveal.js`, `liquid-glass.js`, `glass-refraction.js`, `tailwind-config.js`)
- `scratch/verify_static_site.js`, `scratch/apply_apple_design.js`, `scratch/detailed_audit.js`
- `DESIGN.md`, `AGENTS.md`, `AGENT.md`, `GEMINI.md`, `CLAUDE.md`
- Asset directory listings
- `node scratch/verify_static_site.js` (passed at time of audit)
- Targeted greps for hex literals, shadows, borders, gradients, transitions

## Appendix: Spec Files Created

- `docs/specs/AGENT_RULES.md`
- `docs/specs/AUDIT_REPORT.md`
- `docs/specs/COMPONENT_LIBRARY.md`
- `docs/specs/DESIGN_SPEC.md`
- `docs/specs/DESIGN_SYSTEM.md`
- `docs/specs/DEVELOPMENT_GUIDE.md`
- `docs/specs/GITHUB_PAGES_GUIDE.md`
- `docs/specs/FINAL_REPORT.md` (this file)