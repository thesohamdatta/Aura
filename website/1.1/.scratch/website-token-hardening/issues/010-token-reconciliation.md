## Parent

Implements audit Critical rows C1 and C2 (see `docs/specs/AUDIT_REPORT.md` § Critical). The reconciliation is a hard prerequisite for tickets 013–017 which depend on a canonical token source.

## What to build

Right now `css/global.css` and `js/tailwind-config.js` are two parallel sources of truth for tokens and they disagree on at least two values already (`--color-ink-tertiary` differs from Tailwind `ink-tertiary`; nav-link font-size is defined three different ways). Every later migration in this spec depends on a single canonical source.

The deliverable is:

- `css/global.css` declared the **canonical** source. `docs/specs/DESIGN_SYSTEM.md` § 9 (source-of-truth map) is updated to make this explicit.
- `js/tailwind-config.js` rewritten so that every `theme.extend.colors[key]` value matches the corresponding `--color-*` value in `global.css` byte-for-byte. Material-Design-era tokens (`bg-surface`, `on-tertiary`, the long list in lines 7–53) that are not used in any HTML file are removed.
- The `theme.extend.fontSize` scale is reconciled against `--type-*` CSS variables in `global.css`. Where they disagree, the CSS variable wins; the Tailwind utility is updated to match.
- The nav-link font-size inconsistency (`fonts.css` says 14px, `nav.css` says 12px, `tailwind-config.js` says 12px) collapses to 12px.
- A parity check rule is added to `scratch/verify_design_system.js` (built in ticket 009) that fails if any `--color-*` value in `global.css` disagrees with the same key in `tailwind-config.js`. This rule runs in `--mode=report` for this ticket; enforcement is added in a later ticket.

## Acceptance criteria

- [ ] Every `--color-*` value in `css/global.css` matches the same key in `js/tailwind-config.js` under `theme.extend.colors`.
- [ ] Material-Design-era tokens not used in any HTML file are removed from `js/tailwind-config.js`.
- [ ] `theme.extend.fontSize` utilities match the canonical `--type-*` CSS variables.
- [ ] Nav-link font-size is consistent at 12px (or whatever single value is chosen — no value disagreement).
- [ ] `scratch/verify_design_system.js --mode=report` flags no parity failures on the updated codebase.
- [ ] `scratch/verify_static_site.js` still passes.
- [ ] `docs/specs/DESIGN_SYSTEM.md` § 9 explicitly records `global.css` as canonical.

## Blocked by

- #45 (009: Add scratch/verify_design_system.js skeleton)

## Notes

Do not introduce a build step to generate one from the other. The parity check in the linter is sufficient enforcement.
