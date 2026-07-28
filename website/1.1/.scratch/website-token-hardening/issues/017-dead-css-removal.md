## Parent

Implements audit Critical row C3 (~200 lines of dead CSS in `style.css`). Adds a maintenance tool that catches future dead-rule drift.

## What to build

`css/style.css` contains classes that are no longer referenced by any HTML or JS file:

- `.hero-pill`, `.hero-pill-label`, `.hero-pill-divider`, `.hero-pill-btn`, `@keyframes float`, `.wave-bar`, `@keyframes wavePulse`
- `.bento-pocket`, `.bento-pocket-dark`
- All `.faq-*` selectors and the `#faq-section` block

The deliverable is:

- Add a helper script `scratch/check_unused_css.js` that scans every class defined in `css/*.css` and reports any class not referenced in any `*.html` or `*.js` file under the repo root. Output: a list of `(file, line, selector)` tuples.
- Run the helper and confirm the dead-rule list. Manually delete every confirmed-dead rule from `css/style.css`.
- Add a linter rule `dead-css` to `scratch/verify_design_system.js` that runs the same scan and reports any class that has zero references. The rule runs in `--mode=report` for this ticket; flip to enforce in a later ticket.
- Document the helper in `docs/specs/DEVELOPMENT_GUIDE.md` § 4.

## Acceptance criteria

- [ ] All confirmed-dead rules removed from `css/style.css`.
- [ ] `scratch/check_unused_css.js` runs and exits 0 on the cleaned codebase.
- [ ] Linter rule added and reports zero findings on the cleaned code.
- [ ] `scratch/verify_static_site.js` still passes.
- [ ] `docs/specs/DEVELOPMENT_GUIDE.md` § 4 documents the new helper.
- [ ] No visual regression — no current page references the deleted classes.

## Blocked by

- #45 (009: Add scratch/verify_design_system.js skeleton)
- Ticket 010 (token reconciliation — confirms which Material-era CSS rules can also be removed)

## Notes

Some classes may be referenced only by inline JS (e.g. `js/liquid-glass.js` toggles `scrolled` on `#navbar`). The helper must scan JS as well as HTML. If a class appears to be dead but is in fact JS-toggled, do not delete; document the exception.

The `.spec-card` class is currently unused but reserved for future spec sections per `docs/specs/COMPONENT_LIBRARY.md` § 8. Keep it.