# Aura Agent Rules

> Strict implementation rules for any AI coding agent or human contributor working on the Aura marketing site. These rules are non-negotiable. Violations are bugs.

---

## A. Token Discipline

1. **Never invent a color.** Every color used must be one of the 13 declared tokens in `DESIGN_SYSTEM.md` § 1.1–1.3. If a value is not in that table, you do not need it.
2. **Never use a raw hex in HTML or component CSS.** All color values must reference `--color-*` CSS variables (via `var()`) or the corresponding Tailwind class (`bg-accent-blue`, `text-ink-secondary`).
3. **Never invent typography.** Every font, weight, size, and line-height must come from the type scale in `DESIGN_SYSTEM.md` § 2.2.
4. **Never invent spacing.** Every gap, padding, and margin must use the spacing tokens (margin-base 32px, gutter 24px, section-padding 80/60px) or Tailwind's standard 4/8px rhythm.
5. **Never invent a radius.** Use the four declared radii: pill (9999px), card (18px), bento (28–40px), utility (8px).
6. **If a token is missing, add it to `DESIGN_SYSTEM.md` first**, then use it. Do not introduce one-offs.

## B. Shadow & Border Discipline

7. **No shadows.** Never add `box-shadow` or `filter: drop-shadow` to any element except the global focus ring.
8. **No borders on cards.** Cards derive contrast from background only (`bg-canvas-white` on `bg-canvas-parchment`).
9. **Borders are allowed only on:** full-bleed separators (`border-t border-black/5`), the nav bottom edge (`border-b border-black/[0.08]`), and explicit outline rings on focus.
10. **No gradients except as documented exceptions:** the dark hero overlay (`from-black/80 via-black/20 to-transparent`), the radial ambient glow (`from-focus-blue via-[#8a2be2] to-[#ff2a6d]` — should become a token), the green battery block gradient, and the Omi AI card gradient. No new gradients without adding a token first.

## C. Architecture Discipline

11. **Nav and footer are JS-mounted, never hardcoded.** All pages ship `<div id="nav-mount">` and `<div id="footer-mount">`. The actual `<nav>` and `<footer>` are rendered by `js/nav.js` and `js/footer.js`.
12. **Page data lives in one file.** `js/site-data.js` is the single source of truth for page order, labels, and IDs. Never add a page without editing `pages` in that file.
13. **Icons are Lucide, via `data-lucide`.** Never inline `<svg>`. Never reintroduce `material-symbol` / `sf-symbol` / `icon-map.js` / `replace-icons.js`.
14. **The Lucide CDN script must load before `js/icons.js`.** The static verifier enforces this — do not break the script order.
15. **No framework, no bundler, no build step.** Do not add React, Vue, Svelte, Astro, Vite, esbuild, or webpack. The site is intentionally zero-build.
16. **No GSAP, Lenis, Framer Motion.** Tailwind transitions + `IntersectionObserver` + the SVG refraction are the entire motion system.

## D. CSS Discipline

17. **No inline `style="..."` for design values.** Inline styles are only permitted for the three current exceptions (`docs.html` TOC overlay opacity, the green battery block background, the radial companion-app background) — and these are debt to be migrated.
18. **No `transition: all`.** Specify the property: `transition: transform 0.6s ease, opacity 0.6s ease`.
19. **No `outline: none`** without a focus-visible replacement.
20. **Do not duplicate CSS.** If a rule belongs in `global.css`, put it there. If it belongs in `style.css`, put it there. Do not redefine `:root` variables in component CSS.
21. **No specificity battles.** Tailwind utility classes win over `style.css` component classes by design. If a component class is being overridden by a utility, the component class is wrong.
22. **Animation defaults belong in `global.css`.** Per-page animation tweaks (like `demo-phone-img.animate-in`) belong in `style.css`.

## E. JavaScript Discipline

23. **All JS is ES2020+, vanilla, defer-loaded.** No TypeScript, no JSX, no transpilation.
24. **No inline `<script>` bodies.** All script logic lives in `js/*.js` files loaded via `<script src="..."></script>`. The `no-inline-script` rule in `scratch/verify_design_system.js` flags inline bodies.
25. **Reveal animation is handled by `js/reveal.js`.** Use the strategy pattern: add a new strategy in the `strategies` array with `match`, `setup`, `fallback`. Do not sprinkle reveal logic in inline `<script>` blocks.
26. **Lucide icons are initialized via `window.AuraIcons.refresh()`.** Call this after any DOM injection that adds `data-lucide` elements (e.g. mobile menu icon swap).
27. **Reduced-motion users:** All three motion scripts (`reveal.js`, `glass-refraction.js`, `liquid-glass.js`) check `prefers-reduced-motion`. New motion code must too.
28. **Avoid `style.opacity` / `style.transform` writes** — use Tailwind classes (`opacity-100`, `translate-y-0`) so the fallback path can run.

## F. Asset Discipline

28. **All asset paths must be relative** (no leading `/`, no absolute filesystem paths). The static verifier rejects absolute paths.
29. **All images must declare `width` and `height`.** Prevents CLS.
30. **Images above the fold get `loading="eager"`** (hero only). Everything else is `loading="lazy"`.
31. **Image alt text is required and must describe the image**, not the layout. Decorative images get `alt=""`.
32. **All Lucide icons must be `aria-hidden="true"`** unless they are the only label for a control (in which case the parent `<button>` or `<a>` gets `aria-label`).
33. **Fonts preloaded: 4 files** (`SF-Pro-Display-Regular`, `SF-Pro-Display-Semibold`, `SF-Pro-Text-Regular`, `SF-Pro-Text-Semibold`). Do not preload every weight; this is the performance budget.
34. **No reference to the orphaned `fonts/` directory at the repo root.** All font URLs are `assets/fonts/sf-pro/`.
35. **External CDN libraries must be pinned to a specific version.** `@latest` is forbidden. The pinned version lives in `docs/specs/DESIGN_SYSTEM.md` § External Dependencies. The `lucide-version-pinned` rule in `scratch/verify_design_system.js` rejects `@latest` and any version drift. Bump the spec first, then the HTML pages.

## G. Page Discipline

35. **Each page has exactly one `<h1>`.** No heading-level skips. Enforced by `scratch/verify_static_site.js`.
36. **Each page has `<a href="#main-content" class="skip-link">` as the first focusable element.**
37. **Each page includes `<main id="main-content">`** as the skip-link target.
38. **Touch targets are minimum 44×44px.** Enforced in `css/style.css` (`#navbar button`, `.nav-link` padding trick).
39. **No JS runs before DOMContentLoaded without a guard.** `js/nav.js` and `js/footer.js` correctly handle both `loading` and `interactive`/`complete` states — match that pattern.
40. **Anchor links to sections inside the page must work.** The subnav in `ai.html` and the FAQ card in `index.html` both rely on this. Use `scroll-margin-top: 80px` (already on `h1..h6` in `global.css`).

## H. Verification Discipline

Before handing off any change, run the chain wrapper (it runs both verifiers and exits 1 if either fails):

```bash
./scratch/verify.sh                 # macOS / Linux / WSL
scratch\verify.cmd                  # Windows (cmd.exe or PowerShell)
```

Or the individual steps:

```bash
node scratch/verify_static_site.js   # structural lint — mounts, scripts, headings, asset paths
node scratch/verify_design_system.js # design-system lint — no-inline-style, token-parity, lucide-version-pinned, no-inline-script
node scratch/run-fixtures.js         # HTML fixture harness for rule dev (red → green)
node scratch/test_parity.js          # parity-rule fixture harness
node scratch/apply_apple_design.js   # only after editing style.css or global.css
```

Then serve and curl:

```bash
python -m http.server 8000
curl -sf http://127.0.0.1:8000/index.html
```

The chain must pass. Manual browser checks are required for motion changes.

## I. Anti-Pattern Self-Check

Before any commit, ask:

- [ ] Did I introduce a color, type, or spacing value that isn't in `DESIGN_SYSTEM.md`?
- [ ] Did I add `box-shadow`, `border-*`, `drop-shadow`, or a red gradient?
- [ ] Did I inline a style for something a token could express?
- [ ] Did I hardcode a page route in `nav.js` or `footer.js` instead of editing `site-data.js`?
- [ ] Did I add inline SVG, a new icon library, or a build tool?
- [ ] Did I touch `js/site-data.js` without checking `nav.js`, `footer.js`, and the static verifier?
- [ ] Did I skip `scratch/verify.sh` (or `verify.cmd`)?

If any answer is yes, revert and fix the source.