## Parent

Implements audit High row H9 (Lucide CDN uses `@latest`, fragile for production). Self-contained dependency pinning ticket.

## What to build

Every HTML page loads `https://unpkg.com/lucide@latest`. Pages serves a long-cached version, but `@latest` resolves on every CDN request, so the served version can drift without warning. A breaking Lucide release can silently affect production.

The deliverable is:

- Pin every `<script src="https://unpkg.com/lucide@latest">` in all five HTML pages to a specific version. Choose a current stable (e.g. `0.460.0` as of the audit date; confirm at implementation time).
- Record the pinned version in `docs/specs/DESIGN_SYSTEM.md` § External dependencies (a new section under § 1).
- Add a linter rule `lucide-version-pinned` to `scratch/verify_design_system.js` that fails if any HTML file contains `lucide@latest` or a version that does not match the one recorded in `DESIGN_SYSTEM.md`. The rule runs in `--mode=report` for this ticket; flip to enforce in a later ticket.
- Update `docs/specs/AGENT_RULES.md` § F (Asset Discipline) to record the pin requirement.

## Acceptance criteria

- [ ] All five HTML pages load `lucide@<pinned-version>` instead of `lucide@latest`.
- [ ] Pinned version recorded in `docs/specs/DESIGN_SYSTEM.md` § External dependencies.
- [ ] Linter rule added and reports zero findings on the migrated code.
- [ ] `scratch/verify_static_site.js` still passes.
- [ ] `docs/specs/AGENT_RULES.md` § F records the pin requirement.
- [ ] Icon rendering identical to current state (sanity-check by visiting each page).

## Blocked by

None — this ticket is independent of the token reconciliation work.

## Notes

Consider adding `integrity` and `crossorigin` attributes to the Lucide script tag for SRI protection. Trade-off: every version bump requires recomputing the hash. If you skip SRI for this ticket, leave a note in the linter rule's `description` recommending it for a future ticket.