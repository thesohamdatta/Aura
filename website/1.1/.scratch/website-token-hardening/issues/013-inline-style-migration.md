## Parent

Implements audit Critical row C5 (inline `style="..."` in HTML). Related to existing issue #36 (008: Inline style audit). This ticket is the migration that catches every current instance and adds the linter rule that prevents regression.

## What to build

Three production HTML files contain inline `style="..."` attributes that defeat the design system:

- `index.html` battery section — `background: linear-gradient(180deg, #0e7a4b 0%, #022312 100%);`
- `index.html` companion-app section — `background: radial-gradient(circle at center, #fcf8fb, #f5f5f7);`
- `docs.html` TOC overlay — `style="opacity:0"`

The deliverable is:

- Add named classes to `css/style.css`:
  - `.bg-grad-battery` → the green gradient
  - `.bg-grad-companion` → the radial cream gradient
  - `.docs-toc-overlay` → `opacity: 0` (with `.is-open` variant for visible state)
- Replace the three inline `style="..."` attributes with `class="..."` references.
- Add a linter rule `no-inline-style` to `scratch/verify_design_system.js` that flags any `style="..."` attribute in any HTML file under the website root. The rule runs in `--mode=report` for this ticket; flip to enforce in a later ticket.
- Update `docs/specs/AGENT_RULES.md` § D (CSS Discipline) to add `no inline style for design values` to the explicit rule list.

## Acceptance criteria

- [ ] All three inline `style="..."` attributes in HTML are replaced with named CSS classes.
- [ ] No visual regression — the gradient and overlay render identically.
- [ ] `scratch/verify_design_system.js --mode=report` reports zero new findings for the migrated code.
- [ ] `scratch/verify_static_site.js` still passes.
- [ ] `docs/specs/AGENT_RULES.md` § D records the no-inline-style rule.

## Blocked by

- #45 (009: Add scratch/verify_design_system.js skeleton)
- Ticket 010 (token reconciliation — ensures the new classes use canonical tokens)

## Notes

The TOC overlay inline style has dynamic semantics. Confirm that the JS that toggles its visibility (`docs.html` script tag) updates the class list, not the inline style. If not, refactor that JS in this ticket too.
