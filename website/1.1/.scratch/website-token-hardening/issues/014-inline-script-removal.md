## Parent

Closes the inline-script drift found in audit Medium row M6. Two `<script>` blocks live inside HTML files doing what `js/reveal.js` should own.

## What to build

Two HTML files contain inline `<script>` blocks:

- `index.html` lines 380–387 — a link-prevent script that adds `e.preventDefault()` to any `href="#"` anchor. Audit confirmed no link on the page has `href="#"` except `aria-disabled="true"` footer items, which already have `pointer-events: none`. The script is dead.
- `manifesto.html` lines 115–128 — a smooth-scroll script that adds `scrollIntoView({behavior:'smooth'})` to all `a[href^="#"]` anchors. The Tailwind `scroll-smooth` class on `<html>` already covers this.

The deliverable is:

- Delete both inline `<script>` blocks.
- Add a linter rule `no-inline-script` to `scratch/verify_design_system.js` that flags any `<script>` block whose body is not loaded from a `src="..."` attribute. The rule runs in `--mode=report` for this ticket; flip to enforce in a later ticket.
- Update `docs/specs/AGENT_RULES.md` § E (JavaScript Discipline) to add `no inline <script>` to the rule list.

## Acceptance criteria

- [ ] Both inline `<script>` blocks are deleted.
- [ ] No regression in smooth-scroll behavior on `manifesto.html` (Tailwind `scroll-smooth` already provides it).
- [ ] `scratch/verify_design_system.js --mode=report` reports zero new findings for the cleaned code.
- [ ] `scratch/verify_static_site.js` still passes.
- [ ] `docs/specs/AGENT_RULES.md` § E records the no-inline-script rule.

## Blocked by

None — this ticket is independent of the token reconciliation work. The pattern is structurally different from inline styles.

## Notes

If the link-prevent script on `index.html` is actually doing something subtle (e.g. handling a dynamically injected link), confirm before deleting. The audit found no such link.
