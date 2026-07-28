# GitHub Pages Deployment Guide

> Operational rules for deploying the Aura static site on GitHub Pages. The site is vanilla HTML/CSS/JS with Tailwind and Lucide via CDN. This document captures every Pages-specific constraint an agent must respect.

---

## 1. Repository & Deployment Basics

| Concern | Rule |
|---|---|
| Hosting | GitHub Pages (org or user site) |
| Source branch | `main` (or whichever the Pages settings point to) |
| Build step | **None.** Pages serves the repository root directly. |
| Custom domain | Optional. If used, add a `CNAME` file at repo root. |
| HTTPS | Pages provides TLS automatically. |

### 1.1 Sub-path deployments

If the site is hosted at `https://<user>.github.io/<repo>/` rather than `https://<user>.github.io/`:

- Asset paths must remain **relative** (`assets/...`, not `/assets/...`).
- Anchor links (`href="#section"`) work without prefix because the HTML is rendered from a per-page URL.
- The Aura repo is currently set up this way.

If later migrating to a user/org root site, no HTML change is required because all paths are already relative.

---

## 2. `.nojekyll`

GitHub Pages runs Jekyll by default, which:

- Ignores files/folders starting with `_`.
- Rewrites URLs in some Markdown files.

To disable Jekyll processing, add a `.nojekyll` file at the **repo root** (or in the served directory).

**Action:** Confirm `.nojekyll` is present at `D:\PROJECTS\AURA\website\.nojekyll`. If missing, create it (empty file).

---

## 3. Case Sensitivity

GitHub Pages uses a case-sensitive filesystem (Linux). Local development on Windows is case-insensitive.

| Risk | Example |
|---|---|
| `Heros/hero.png` vs `heros/hero.png` | Works on Windows, 404 on Pages |
| `assets/Png/foo.png` vs `assets/png/foo.png` | Works on Windows, 404 on Pages |

**Rules:**

- Filenames are lowercase by convention.
- HTML `src`/`href` attributes must match exactly.
- The `scratch/verify_static_site.js` script does **not** check case on macOS-style filesystems. Consider adding case-sensitivity to the verifier if the project ever moves off Windows.

---

## 4. Asset Paths

### 4.1 The single rule

> **Every `src`, `href`, `url()`, and `import` must be a path relative to the current document or stylesheet, with no leading `/`.**

This is enforced by `scratch/verify_static_site.js` (lines 115–149). The verifier rejects:

- Absolute paths: `/assets/hero/foo.png`
- Filesystem paths: `C:\PROJECTS\...`, `file://...`, `/Users/...`, `/home/...`
- Paths that escape the repo: `../outside/foo`

### 4.2 URL encoding

Filenames with spaces or special characters must be percent-encoded in HTML:

- `assets/png/mobile and device.png` is referenced as `assets/png/mobile%20and%20device.png` in `index.html:51,84`.
- The verifier decodes before checking existence, so both forms work in code.

**Future rule:** Rename `assets/png/mobile and device.png` to `assets/png/mobile-and-device.png` to remove the URL-encoding footgun.

---

## 5. Fonts

**Canonical font path:** `assets/fonts/sf-pro/`. There is no `fonts/` directory at the repo root — any reference to a bare `fonts/` is a bug. The orphan `fonts/` directory was removed in #12; do not reintroduce it.

### 5.1 Local font hosting

Fonts are hosted at `assets/fonts/sf-pro/` — 22 `.otf` files, totaling ~3.5 MB.

**Optimization:** Only preload the 4 files that are actually used on first paint. The current preload list is correct (`Display-Regular`, `Display-Semibold`, `Text-Regular`, `Text-Semibold`).

| File | Weight |
|---|---|
| SF-Pro-Display-Regular | 400 |
| SF-Pro-Display-Semibold | 600 |
| SF-Pro-Text-Regular | 400 |
| SF-Pro-Text-Semibold | 600 |

All other weights use `font-display: swap` (declared in `css/fonts.css`), so the user sees fallback text during download — no FOIT.

### 5.2 WOFF2 conversion

`.otf` files are 2–3× larger than `.woff2`. GitHub Pages serves them with the right MIME type (`font/otf`), but file size is a real cost.

**Action:** Convert `.otf` to `.woff2` for production. Keep `.otf` only as a fallback for browsers that don't accept `.woff2` (rare). Update `css/fonts.css` to use the `src` chain:

```css
src: url('../assets/fonts/sf-pro/SF-Pro-Display-Regular.woff2') format('woff2'),
     url('../assets/fonts/sf-pro/SF-Pro-Display-Regular.otf') format('opentype');
```

### 5.3 Subsetting

For an additional ~50% reduction, subset each font to Latin-1 characters only. Tools: `glyphhanger`, `fonttools pyftsubset`.

---

## 6. Caching & Cache-Control

GitHub Pages sends `Cache-Control: max-age=600` by default. This is too short for assets that never change.

**Workaround:** Append a content hash to filenames (e.g. `style.abc123.css`) and reference the hashed filename from HTML. The hash changes only when content changes, so the browser can cache forever.

**Tooling:** `scratch/` is the right place for a small build script that:

1. Hashes each CSS/JS file.
2. Renames the file to `<basename>.<hash>.<ext>`.
3. Rewrites the HTML to reference the hashed filename.

This is the closest the Aura project should ever come to a "build step" — a single Node script that runs before `git push`.

**Alternative:** Accept GitHub's default 10-minute cache. Acceptable for this project's content-update cadence.

---

## 7. MIME Types

Pages serves files with the correct MIME type based on extension:

| Extension | MIME |
|---|---|
| `.html` | `text/html` |
| `.css` | `text/css` |
| `.js` | `application/javascript` |
| `.svg` | `image/svg+xml` |
| `.png` | `image/png` |
| `.jpg` / `.jpeg` | `image/jpeg` |
| `.otf` | `font/otf` |
| `.woff2` | `font/woff2` |

**Action items:**

- No `.webp` or `.avif` is currently used. Consider converting hero images (which are > 500 KB) to `.webp` (typical 30% size reduction for product photography).
- `.otf` is served correctly but some browsers prefer `.woff2`. See § 5.2.

---

## 8. Performance

### 8.1 Critical path

On every page load:

1. HTML (small, ~20–80 KB).
2. Tailwind CDN (`https://cdn.tailwindcss.com`) — **the largest single dependency**. ~150 KB gzipped.
3. `js/tailwind-config.js` — must run **before** Tailwind processes classes (already correct — `<script>` without `defer`).
4. Lucide CDN (`https://unpkg.com/lucide@latest`) — ~50 KB gzipped.
5. Local CSS: `fonts.css`, `global.css`, `nav.css`, `style.css`, `docs.css`.
6. Local JS: `site-data.js`, `nav.js`, `footer.js`, `icons.js`, `reveal.js`, `liquid-glass.js`, `glass-refraction.js`.

**Concern:** Tailwind via CDN scans the DOM at runtime and generates utility CSS in the browser. This blocks rendering. For a static site, **install Tailwind as a PostCSS build step** — but only if the team accepts a build step (the project intentionally avoids this).

**Alternative:** Use the **Tailwind Play CDN with the JIT flag** (`?plugins=...`) — already enabled. This generates only used utilities.

**Trade-off:** Accept the runtime cost. Document the limitation in `DEVELOPMENT_GUIDE.md`.

### 8.2 Image optimization

Hero images are the largest single transfer:

- `assets/hero/hero-purple.png` (likely > 1 MB based on use in hero `<img>` at full viewport)
- `assets/hero/about.png`
- `assets/hero/lifestyle-reading.png`

**Action:**

1. Convert to `.webp` (~30% smaller) or `.avif` (~50% smaller).
2. Serve via `<picture>` with PNG fallback.
3. Add `width`/`height` to prevent CLS (already done — all hero images have explicit dimensions).
4. Hero image: `loading="eager"`, `fetchpriority="high"`. All other images: `loading="lazy"`.

### 8.3 Font loading

See § 5. Currently the 4 preloaded fonts block render until the CSS is parsed. Consider `<link rel="preload" as="font" crossorigin>` — already done.

---

## 9. SEO

| Concern | Status |
|---|---|
| `<title>` per page | ✅ Present and unique |
| `<meta name="description">` | ✅ Present on all pages |
| `<meta name="theme-color">` | ✅ Present |
| `<meta name="viewport">` | ✅ Present |
| Open Graph tags | ❌ Missing |
| Twitter card tags | ❌ Missing |
| `robots.txt` | ❌ Missing |
| `sitemap.xml` | ❌ Missing |
| Structured data (`JSON-LD`) | ❌ Missing |

**Recommended additions:**

```html
<!-- Open Graph -->
<meta property="og:title" content="Aura | Worn. Screenless. Aware.">
<meta property="og:description" content="...">
<meta property="og:image" content="assets/hero/hero-purple.png">
<meta property="og:url" content="https://thesohamdatta.github.io/aura/">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Aura | Worn. Screenless. Aware.">
<meta name="twitter:image" content="assets/hero/hero-purple.png">
```

Add to a shared `<head>` snippet if Pages gains a templating layer; otherwise paste into each page.

**`robots.txt`** at repo root:

```
User-agent: *
Allow: /
```

---

## 10. Accessibility on Pages

GitHub Pages itself has no accessibility constraints beyond serving files with the right MIME type. The site's a11y comes from the HTML/CSS/JS choices documented in `DESIGN_SYSTEM.md` § 8 and `AGENT_RULES.md`.

---

## 11. Branch Protection & Releases

The project uses `main` as the deployment branch. Recommended workflow:

1. Feature work on a branch.
2. PR with required checks (CI — currently absent; see `DEVELOPMENT_GUIDE.md`).
3. Squash-merge to `main`.
4. GitHub Pages deploys automatically.

A `gh-pages` branch is **not** needed for project-site Pages; Pages can deploy from `main` directly.

---

## 12. Pages Limitations to Document

GitHub Pages has the following constraints the Aura site must respect:

| Limitation | Mitigation |
|---|---|
| 1 GB repo size | Trim demo/dist directories; convert images; subset fonts |
| 100 MB per file | N/A — largest asset is the hero PNG, well under |
| Soft bandwidth limit (~100 GB/mo) | Cache + lazy-load images; convert to WebP |
| No build step | Already accepted by design |
| No server-side logic | All logic is client-side JS |
| No custom HTTP headers | Cannot set CSP; rely on meta CSP tag if needed |

---

## 13. Health Check Checklist

Before pushing to `main`:

- [ ] `.nojekyll` is at repo root
- [ ] All HTML pages reference `css/global.css`, `css/nav.css`, `css/style.css`, `js/site-data.js`, `js/nav.js`, `js/footer.js`, `js/icons.js`
- [ ] Lucide CDN pinned to a specific version (not `@latest`)
- [ ] No absolute filesystem paths anywhere
- [ ] No broken local references (run `scratch/verify_static_site.js`)
- [ ] `fonts/` directory at repo root is removed or referenced
- [ ] Hero image uses `fetchpriority="high"` and is optimized to WebP
- [ ] Each page has unique `<title>` and `<meta description>`
- [ ] Open Graph and Twitter meta tags present on every page
- [ ] `robots.txt` present at repo root