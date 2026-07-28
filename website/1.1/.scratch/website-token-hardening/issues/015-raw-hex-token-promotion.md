## Parent

Implements audit Critical row C6 (~17 raw hex literals in HTML bypassing the token system). After this ticket, no production HTML file contains a color hex literal — every color resolves to a token.

## What to build

The audit identified the following distinct hex literals in HTML that need promotion to tokens:

- `#1c1c1e` (3× in `index.html` thesis cards) → `--color-canvas-deep`
- `#ebebeb` (3× in `about.html` open-source cards) → `--color-canvas-fog`
- `#ff2d55` (1× in `ai.html` integrations iOS Health) → `--color-ios-red`
- `#00a389` (1× in `ai.html` integrations Search) → `--color-search-teal`
- `#0066cc` text color references in `footer.js` (5+ instances) → already covered by `text-accent-blue`; the literal in the JS template is the violation
- `#d2d2d7` border references in `footer.js` (5+ instances) → `--color-outline-soft` token, Tailwind `border-outline-soft`
- `#86868b` text references in `footer.js` (3+ instances) → `text-ink-tertiary`
- `#1c1c1e` (additional in `footer.js`) → `text-ink` or `text-canvas-deep` depending on context

The deliverable is:

- Add new tokens to `css/global.css` and mirror them in `js/tailwind-config.js`.
- Document each new token in `docs/specs/DESIGN_SYSTEM.md` § 1.4 (Neighborhood/auxiliary tokens).
- Replace every raw hex literal in all five HTML files and in `footer.js` with the tokenized class or `var(--token)` reference.
- Add a linter rule `no-raw-hex` to `scratch/verify_design_system.js` that scans HTML/JS files for any literal matching `#RRGGBB` and flags it unless wrapped in an allowlist comment.
- Update `docs/specs/AGENT_RULES.md` § A (Token Discipline) to record the no-raw-hex rule.

## Acceptance criteria

- [ ] Zero matches of `#[0-9a-fA-F]{3,6}` in any HTML file or in `footer.js` that is not inside an allowlist comment.
- [ ] Linter rule added and runs in `--mode=report` without findings on the migrated code.
- [ ] `scratch/verify_static_site.js` still passes.
- [ ] New tokens documented in `docs/specs/DESIGN_SYSTEM.md` § 1.4.
- [ ] `docs/specs/AGENT_RULES.md` § A records the no-raw-hex rule.
- [ ] No visual regression — every replaced color renders identically.

## Blocked by

- #45 (009: Add scratch/verify_design_system.js skeleton)
- Ticket 010 (token reconciliation — the new tokens must conform to the canonical source pattern)

## Notes

The `#f25134` legacy red/orange gradient is already stripped by `apply_apple_design.js`. This ticket does not re-flag it.
