# Aura Website Quality Gates

Use these gates before finishing any website change.

## Required Checks

Run:

```bash
node scratch/verify_static_site.js
```

If `css/style.css` or `css/global.css` changed, run first:

```bash
node scratch/apply_apple_design.js
```

For visual changes, also serve the site:

```bash
python -m http.server 8000
```

Then inspect the touched pages at `http://127.0.0.1:8000/`.

## HTML Gate

- All paths are relative unless they are intentional external CDN or outbound links.
- Every page keeps `<div id="nav-mount">` and `<div id="footer-mount">`.
- No shared navbar or footer markup is duplicated inside HTML pages.
- Headings follow a readable hierarchy.
- Buttons and links have clear labels.
- Images have meaningful `alt` text unless decorative.

## CSS Gate

- Use tokens from `css/global.css`.
- Keep Action Blue for interactive elements.
- Avoid decorative shadows, borders, gradient blobs, and one-note palettes.
- Preserve the 52px frosted-glass navbar.
- Respect `prefers-reduced-motion`.
- Keep responsive constraints explicit for fixed-format UI.

## JavaScript Gate

- Keep scripts vanilla ES2020+.
- Do not add build tooling or dependencies.
- Preserve reduced-motion checks for animation.
- Keep navigation and footer behavior centralized in `js/nav.js` and `js/footer.js`.
- Re-run Lucide initialization after injecting icon markup.

## Review Gate

Review on two axes:

- Spec: Does the diff satisfy the stated intent and acceptance criteria?
- Standards: Does the diff preserve Aura's architecture, design tokens, accessibility, and zero-build constraint?

Call out unresolved risks in the final response instead of hiding them.

