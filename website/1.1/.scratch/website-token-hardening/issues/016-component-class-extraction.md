## Parent

Implements audit High rows H6, H7, H8 (16+ tile outlines, 5+ primary buttons, 4+ secondary buttons, 30+ inline transition chains). Closes the most-duplicated anti-pattern in the codebase.

## What to build

The audit found four repeated inline patterns that should be component classes:

1. **`.tile` and `.tile--dark`** — the 5px-gutter + 22px ring + 17px inner card pattern. Appears 16+ times across `index.html`, `about.html`, `ai.html`. Doc reference: `docs/specs/COMPONENT_LIBRARY.md` § 7.
2. **`.btn-primary`** — pill button with accent-blue background, white text, chevron-in-circle, hover translate. Appears 5+ times. Doc reference: `COMPONENT_LIBRARY.md` § 4.
3. **`.btn-secondary`** — same shape with `bg-ink/5` and accent-blue text. Appears 4+ times. Doc reference: `COMPONENT_LIBRARY.md` § 5.
4. **`.section`, `.section--parchment`, `.section--dark`** — section wrapper pattern. Doc reference: `COMPONENT_LIBRARY.md` § 6.

Plus a Tailwind shorthand registration:

5. **`ease-apple-spring`** — registered in `theme.extend.transitionTimingFunction` as `cubic-bezier(0.32, 0.72, 0, 1)`. Replaces the 30+ inline `ease-[cubic-bezier(0.32,0.72,0,1)]` chains.

The deliverable is:

- Add the five classes to `css/style.css` (tile, btn-primary, btn-secondary, section, section variants).
- Register `ease-apple-spring` in `tailwind-config.js`.
- Replace every duplicate inline pattern in HTML with the class or shorthand.
- Add the same patterns to `docs/specs/COMPONENT_LIBRARY.md` as the canonical implementation.
- Add linter rules to `scratch/verify_design_system.js`:
  - `tile-duplicate-pattern` — flag any HTML element whose class list contains the inline tile pattern instead of `class="tile"`.
  - `transition-duplicate-pattern` — flag any `ease-[cubic-bezier(0.32,0.72,0,1)]` outside the new shorthand.
- Rules run in `--mode=report` for this ticket; flip to enforce in a later ticket.

## Acceptance criteria

- [ ] Zero occurrences of the inline tile outline pattern in HTML.
- [ ] Zero occurrences of the inline primary button pattern in HTML.
- [ ] Zero occurrences of the inline secondary button pattern in HTML.
- [ ] Zero occurrences of `ease-[cubic-bezier(0.32,0.72,0,1)]` in HTML.
- [ ] Linter rules added and report zero findings on the migrated code.
- [ ] `scratch/verify_static_site.js` still passes.
- [ ] `scratch/verify_design_system.js --mode=report` passes.
- [ ] `docs/specs/COMPONENT_LIBRARY.md` records the actual implemented classes.
- [ ] No visual regression — all hover and active behaviors render identically.

## Blocked by

- #45 (009: Add scratch/verify_design_system.js skeleton)
- #46 (010: token reconciliation — the new classes must use canonical tokens)

## Notes

This is the largest single ticket by volume of HTML edits (~50+ substitutions across 4 files). Consider batching by pattern (all tiles first, then buttons, then transitions) within the PR. Do not split into multiple tickets; the linter rule is the contract and it must apply to the entire codebase.
