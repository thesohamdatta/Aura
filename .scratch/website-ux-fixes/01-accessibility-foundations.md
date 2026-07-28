# 01 — Accessibility Foundations

**What to build:** Keyboard users can navigate the site efficiently. Screen readers encounter proper heading hierarchy and meaningful alt text across all 5 pages.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

## Acceptance Criteria

- [ ] Add skip link to all 5 HTML files (index, about, ai, docs, manifesto)
- [ ] Skip link targets `<main>` or first heading after nav
- [ ] Fix heading hierarchy in about.html (h1 → h3 skips h2)
- [ ] Review all images for descriptive alt text (not just "Product shot wide")
- [ ] Verify skip link works with Tab key navigation
- [ ] Verify heading hierarchy is sequential (h1→h2→h3) on all pages

## Technical Notes

- Skip link should be first element in `<body>`, visually hidden until focused
- Use `<a href="#main-content" class="skip-link">Skip to main content</a>`
- Add corresponding `id="main-content"` to main content area
- about.html Mission/Vision section uses h3 for "Our Mission" / "Our Vision" — should be h2
