# Aura Development Guide

> Local development, contribution workflow, and verification commands for the Aura marketing site.

---

## 1. Prerequisites

- **Node.js** — required for the `scratch/*.js` scripts (no build step; Node is just the runtime).
- **Python 3** — only needed for `python -m http.server 8000` during manual browser checks. Any static server works.
- **A modern browser** — Chrome / Edge / Safari / Firefox. For best fidelity to the design, use Safari or Chrome on macOS / Windows respectively.

There is no Node project to install. There are no `npm install` steps. The `js/` and `css/` files are loaded directly by the browser.

---

## 2. Local File Layout

```
website/
├── index.html  about.html  ai.html  docs.html  manifesto.html
├── favicon.svg
├── css/        global.css  fonts.css  nav.css  style.css  docs.css
├── js/         site-data.js  nav.js  footer.js  icons.js
│               reveal.js  liquid-glass.js  glass-refraction.js
│               tailwind-config.js
├── assets/     hero/  product/  team/  diagrams/  app/  png/  fonts/sf-pro/
├── fonts/      ← ORPHANED; do not reference
├── docs/       agents/  specs/
├── scratch/    verify_static_site.js  apply_apple_design.js  audit.js  ...
└── .nojekyll   ← required for GitHub Pages
```

---

## 3. Running a Local Server

The site is static. Open any HTML file in a browser and it will run, except that `<script src="js/...">` with `defer` requires a real `http://` URL (not `file://`) to behave correctly in some browsers.

```bash
# From D:\PROJECTS\AURA\website\
python -m http.server 8000
```

Then visit `http://127.0.0.1:8000/`.

For multi-page testing without a server, some browsers (Chrome with `--allow-file-access-from-files` flag) will allow `file://` to load sibling files. Don't depend on this.

---

## 4. Verification

Two scripts enforce the contract:

### 4.1 `scratch/verify_static_site.js`

**Run:** `node scratch/verify_static_site.js`

**Checks:**

- All five pages exist.
- Each page has `#nav-mount` and `#footer-mount`.
- Script load order: `site-data.js` **before** `nav.js`; Lucide CDN **before** `icons.js`.
- No inline `<svg>`, no `material-symbol`/`sf-symbol`.
- Exactly one `<h1>` per page, no heading-level skips.
- `docs.html` does not use hero-scale typography on section h2s.
- No absolute filesystem paths.
- No broken local `src`/`href` references.
- All required `css/` and `js/` files exist.

**Passes today.** Extend it (see `AUDIT_REPORT.md` § "What the verifier should additionally check").

### 4.2 `scratch/apply_apple_design.js`

**Run:** `node scratch/apply_apple_design.js`

**Effect:** Strips `box-shadow`, `drop-shadow`, card borders, and the legacy `#f25134` gradient from `css/style.css` and `css/global.css`. **Does not touch HTML.**

**When to run:** Only after editing `style.css` or `global.css`. The script is destructive; do not run it just to "clean up" — run it intentionally.

### 4.3 Manual checks

After verification passes, do a manual browser pass for any change to:

- `css/nav.css` → check nav transparent/scrolled transition.
- `js/nav.js` / `js/footer.js` → check active state, mobile menu open/close.
- `js/reveal.js` → check section reveal timing, scroll-triggered animations.
- `js/glass-refraction.js` → check distortion animation feels right; verify `prefers-reduced-motion` bypass.
- `js/liquid-glass.js` → check scroll-state toggle at the threshold.

### 4.4 `scratch/verify_design_system.js` and the chain wrapper

The design-system linter catches audit findings that `verify_static_site.js` does not — primarily token and component drift. Today it enforces exactly one rule (`no-inline-style`). New rules are added by appending to the `rules` array in `verify_design_system.js`.

**Run a single linter:**

```bash
node scratch/verify_design_system.js                 # report mode (always exit 0)
node scratch/verify_design_system.js --mode=enforce  # exit 1 on findings
node scratch/verify_design_system.js --root=. --file=index.html   # scope to one file
```

**Allowlist.** Intentional exceptions live in `.verifyignore` at the repo root — a JSON array of `{ file, pattern, reason }`. A malformed `.verifyignore` is itself a violation (silently swallowing it would hide bugs).

**Run all verifiers in one command.** This is the single line CI should run:

```bash
# macOS / Linux / WSL:
./scratch/verify.sh

# Windows (cmd.exe or PowerShell):
scratch\verify.cmd
```

Both wrappers run `verify_static_site.js` followed by `verify_design_system.js`, print a per-script PASS/FAIL, and exit 1 if either fails. Set `DESIGN_SYSTEM_MODE=report` to run the design-system linter without gating the exit.

**Fixture-driven TDD.** Linter rules are developed red → green under `scratch/fixtures/linter/`. Each fixture has a sidecar `*.expected.json` describing what the linter should do. The harness is `node scratch/run-fixtures.js`. To add a new rule, write a fixture that violates it (red), append the rule, watch the harness pass (green).

---

## 5. Contribution Workflow

The project follows `brainstorm → grill → plan → implement → verify → commit` (from `AGENTS.md`).

For small, non-controversial edits (typo, dead-code deletion, lint fix), the workflow collapses to:

1. Edit.
2. `node scratch/verify_static_site.js`.
3. If you touched `style.css` or `global.css`, also `node scratch/apply_apple_design.js`.
4. Visual browser check on at least one page.
5. Commit.

For larger changes (new page, new component, new script), follow the full workflow from `AGENTS.md`. **Always** write the spec before the code.

---

## 6. Git & Deployment

The project uses Git. GitHub Pages deploys from the configured branch (`main`).

```bash
git add -A
git commit -m "feat(css): add tile component class"
git push origin main
```

Pages deploys automatically within ~30 seconds. The Pages URL is whatever the repo settings say — for this project, `https://<user>.github.io/aura/` (or similar).

---

## 7. CI

There is currently no CI. Recommended:

- GitHub Actions workflow that runs `node scratch/verify_static_site.js` on every PR.
- Optional: Lighthouse CI for performance regression detection.

---

## 8. Debugging Tips

| Symptom | Cause | Fix |
|---|---|---|
| Nav doesn't render | `site-data.js` is loaded after `nav.js` | Reorder scripts in `<head>` |
| Icons show as `[object Object]` | `icons.js` ran before Lucide CDN loaded | Reorder, or call `window.AuraIcons.refresh()` after manual DOM changes |
| Mobile menu won't open | `mobileMenu` element not found | Check `js/nav.js` was loaded and `nav.js` is `<script defer>` |
| Hero nav doesn't go frosted | `data-transparent="true"` missing from `<div id="nav-mount">` | Add the attribute |
| Hero image is huge | `loading="eager"` + `fetchpriority="high"` missing | Add both attributes to hero `<img>` |
| Tailwind classes don't apply | `tailwind-config.js` loaded after Tailwind CDN script | `tailwind-config.js` must run **after** the CDN script tag, **before** page render |
| All fonts look like Arial | `assets/fonts/sf-pro/` path is wrong, or browser blocked font load | Check Network tab; verify the `@font-face` URL is correct |
| `prefers-reduced-motion` is ignored | A new animation script doesn't check the media query | Add the `window.matchMedia('(prefers-reduced-motion: reduce)').matches` check |

---

## 9. Browser Support

The site uses:

- CSS Grid, Flexbox, custom properties (`var(--...)`)
- `backdrop-filter: blur(...)`
- `prefers-color-scheme`
- `prefers-reduced-motion`
- `IntersectionObserver`
- `env(safe-area-inset-*)` for iOS notches

All of these are supported in:

- Safari 14+
- Chrome 90+
- Firefox 88+
- Edge 90+

For older browsers, the site degrades gracefully (no backdrop blur, animations still work via opacity, etc.). No polyfills are needed.

---

## 10. Adding a New Page

Use this checklist:

1. Add the page entry to `pages` in `js/site-data.js`.
2. Create `<newpage>.html`. Copy the `<head>` from an existing page (same scripts, same CSS, same `<body>` classes).
3. Include `<div id="nav-mount">` (no `data-transparent` unless the page has a full-bleed hero).
4. Include `<div id="footer-mount">`.
5. Wrap content in `<main id="main-content">`.
6. Add exactly one `<h1>`.
7. Add `<a href="#main-content" class="skip-link">Skip to main content</a>` as the first body element.
8. If the page uses a reveal animation, add a strategy to `js/reveal.js` (or reuse an existing one).
9. Run `node scratch/verify_static_site.js`.
10. Update `AUDIT_REPORT.md` and any navigation lists that mention the page set.
11. Update `DESIGN_SPEC.md` if the page introduces new visual patterns.

---

## 11. Adding a New Component

1. Decide where it lives (CSS class in `style.css`, page-specific class in page styles, or JS-rendered like nav/footer).
2. If it appears 3+ times, it belongs in `COMPONENT_LIBRARY.md`.
3. Add the rule to `AGENT_RULES.md` if there's a token/anti-pattern risk.
4. Run verification.

---

## 12. Performance Budget

| Resource | Budget | Notes |
|---|---|---|
| HTML (per page) | < 100 KB | Current `index.html` is 25 KB; `docs.html` is 70 KB |
| CSS (total) | < 50 KB | Current total ~30 KB |
| JS (total) | < 30 KB | Current total ~12 KB (excluding CDN) |
| Hero image | < 300 KB | Currently > 1 MB — convert to WebP |
| Fonts (initial) | 4 files | Preload list is correct |
| Tailwind runtime | ~150 KB | CDN cost; not optimizable without build step |

If a change exceeds any of these, justify it in the PR description.

---

## 13. When to Add a Build Step

**Don't.** The site is intentionally zero-build. If Tailwind runtime becomes a real problem:

1. Try pruning unused utilities first (the Tailwind CDN already does this in JIT mode).
2. Convert hero images to WebP — this is a bigger perf win than dropping Tailwind.
3. Only then consider a PostCSS Tailwind build step. This is the only build step worth accepting. Do not add Webpack, Vite, Astro, or anything else.

If asked to add a framework, push back. See `AGENTS.md` § Stack.