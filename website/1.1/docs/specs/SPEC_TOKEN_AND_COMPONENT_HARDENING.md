# Spec — Token Discipline and Component Hardening

> Issue label: **`ready-for-agent`**

## Problem Statement

The Aura marketing site has a working five-page implementation and a passing static-site verifier, but the codebase has accumulated design-system drift that no existing check catches. Today, a future AI agent (or a hurried human contributor) can introduce colors, sizes, animations, and patterns that contradict `DESIGN.md` and `css/global.css` without any verification flagging it. Within a few more feature cycles, the design language will look like a different project.

A contributor reading the existing files sees **two parallel sources of truth** for tokens (`css/global.css` + `js/tailwind-config.js`), **~17 hardcoded hex literals** in HTML, **~200 lines of dead CSS**, an **orphaned legacy `fonts/` directory** (~600 KB) at the repo root, **~30 inline instances** of the same animation easing chain, and **16+ inline duplications** of the same "tile outline" component pattern. They have no way to tell which is canonical and which is debt.

The user (the project owner and future AI agents operating on their behalf) needs a single linter surface that guarantees the existing design language cannot be silently violated, and a one-time migration that brings the live code into compliance with that linter.

## Solution

A two-part deliverable:

1. **A new linter, `scratch/verify_design_system.js`**, that fails the build on any token violation, dead CSS, raw hex literal, inline style, forbidden shadow/border/gradient, or anti-pattern detected in `AUDIT_REPORT.md`. This becomes the single seam through which every future change is gated.
2. **A migration** that brings the live codebase into compliance with the new linter:
   - Reconcile the two token sources into one.
   - Promote repeated inline patterns to component classes.
   - Promote every distinct raw hex literal to a named token.
   - Delete dead CSS and the orphaned `fonts/` directory.
   - Extract inline styles and inline scripts into shared files.
   - Wire the linter into the existing `verify_static_site.js` chain (run both together).

After the migration, **a passing `node scratch/verify_static_site.js && node scratch/verify_design_system.js` guarantees the site is structurally sound and design-system compliant.** No future agent can reintroduce the patterns flagged in `AUDIT_REPORT.md` without the build failing.

## User Stories

### Linter and verification

1. As the project owner, I want a single linter command to fail on any design-system violation, so that I can reject PRs with a clear, actionable error.
2. As a future AI agent, I want the linter to tell me exactly which file and which pattern violated, so that I can fix it without re-reading the audit report.
3. As a future AI agent, I want the linter to detect raw hex literals like `#0066cc` in HTML and force me to use a token, so that no color value can be re-themed silently.
4. As a future AI agent, I want the linter to detect inline `style="..."` design attributes and inline `<script>` blocks, so that all styling and JS lives in shared files.
5. As a future AI agent, I want the linter to detect Tailwind utilities like `shadow-sm`, `border-black/5`, `bg-gradient-*` that violate the no-shadow/no-border/no-blob-gradient rules, so that the Apple-style restraint holds.
6. As a future AI agent, I want the linter to flag dead CSS classes (defined in `style.css` but never referenced in any HTML or JS file), so that I do not waste review effort on rule-removal PRs.
7. As the project owner, I want `node scratch/verify_static_site.js` to chain both checks (structural + design-system) and fail as a unit, so that contributors run one command.
8. As a CI maintainer, I want the verification command to be a single line I can paste into a GitHub Actions step, so that I do not need to maintain a custom matrix.
9. As a future AI agent, I want the linter to ignore false positives via an allowlist mechanism (specific line comment + reason), so that I am not blocked from intentional exceptions like the green battery gradient.

### Token reconciliation

10. As a future AI agent, I want `css/global.css` and `js/tailwind-config.js` to agree on every color value, so that `--color-ink-tertiary` and the Tailwind `ink-tertiary` utility resolve to the same hex.
11. As a future AI agent, I want one file to be the **declared** source of truth and the other to be a generated or mirrored artifact, so that I know which to edit.
12. As a future AI agent, I want type-scale values to agree between CSS variables (`--type-title-xl`, `--type-display`, etc.) and Tailwind utilities (`text-display-lg`, `text-section-h2`, etc.), so that `text-display-lg` and `var(--type-title-xl)` resolve to the same size.
13. As a future AI agent, I want nav-link font-size to be defined once, so that `css/fonts.css`, `css/nav.css`, and `tailwind-config.js` all resolve to the same value (currently 12px vs 14px).

### Component class promotion

14. As a future AI agent, I want the "tile outline" pattern (`p-[5px] bg-ink/5 rounded-[22px] ... bg-white rounded-[17px]`) to be a single class `.tile` (with `.tile--dark` variant), so that I do not duplicate the rule 16+ times.
15. As a future AI agent, I want the "primary pill button" pattern (accent-blue, white text, chevron-in-circle nudge on hover) to be a class `.btn-primary`, so that the 5+ HTML instances stay in sync.
16. As a future AI agent, I want the "secondary pill button" pattern (`bg-ink/5`, accent-blue text) to be `.btn-secondary`.
17. As a future AI agent, I want a `ease-apple-spring` Tailwind shorthand for `cubic-bezier(0.32, 0.72, 0, 1)`, so that the 30+ inline animation chains collapse.
18. As a future AI agent, I want the section wrapper pattern (`bg-canvas-parchment py-section-v-padding` + inner container) to be a `.section` class with `.section--parchment` and `.section--dark` variants, so that sections are tokenized.

### Token promotion (raw hex cleanup)

19. As a future AI agent, I want every distinct raw hex in HTML to have a name in `docs/specs/DESIGN_SYSTEM.md`, so that even "one-off" colors are documented.
20. As a future AI agent, I want the green battery gradient (`#0e7a4b` → `#022312`) to be a named class `.bg-grad-battery`, so that the inline `style="..."` can be deleted.
21. As a future AI agent, I want the companion-app radial gradient to be a named class, so that the inline `style="..."` can be deleted.
22. As a future AI agent, I want the thesis-card hex (`#1c1c1e` x 3) to be `--color-canvas-deep` or similar, so that the three `bg-[#1c1c1e]/60` literals collapse.
23. As a future AI agent, I want the open-source-card hex (`#ebebeb` x 3) to be a token, so that the three `bg-[#ebebeb]` literals collapse.
24. As a future AI agent, I want the iOS Health red (`#ff2d55`) and the Search teal (`#00a389`) in `ai.html` to be tokens (or removed) so they are documented.

### Dead code & file cleanup

25. As a future AI agent, I want the orphaned `fonts/` directory at the repo root to be deleted, so that the repo and Pages deploys shrink by ~600 KB.
26. As a future AI agent, I want the dead CSS rules in `style.css` (`.hero-pill`, `.hero-pill-label`, `.wave-bar`, `.bento-pocket`, `.bento-pocket-dark`, `.faq-*`) deleted, so that every line in `style.css` is justified.
27. As a future AI agent, I want the obsolete `bg-surface`, `on-tertiary`, and other Material-Design-era tokens in `tailwind-config.js` removed, so that contributors do not confuse Material tokens with Apple tokens.
28. As a future AI agent, I want the inline `<script>` block in `index.html` (link-prevent) and `manifesto.html` (smooth-scroll) deleted, so that all JS lives in shared files.
29. As a future AI agent, I want the inline `style="..."` blocks in `index.html` (battery background, companion-app background) and `docs.html` (TOC overlay opacity) migrated to named CSS classes.

### Dependency pinning

30. As a future AI agent, I want Lucide CDN pinned to a specific version (e.g. `0.460.0`), so that Pages cannot serve a different icon set on every reload.
31. As a future AI agent, I want the pinned version recorded in `docs/specs/DESIGN_SYSTEM.md` § External dependencies, so that contributors update the document when they update the version.

### Accessibility (drive-by fixes the migration enables)

32. As a screen-reader user, I want every page to have an `<h1>` *as the first semantic content after the nav*, so that I land on the page and immediately know its topic. Today `index.html` has no `<h1>` in the hero (only in the app-demo section).
33. As a keyboard user, I want the mobile menu to trap focus while open and return focus on close, so that Tab does not escape into the page behind.
34. As a screen-reader user, I want timeline dots in `about.html` to be visible (currently `border-surface` blends into the parchment background).

### Verifier scope expansion

35. As a future AI agent, I want `scratch/apply_apple_design.js` to scan every CSS file in `css/`, not just `style.css` and `global.css`, so that borders or shadows added to `nav.css` or `docs.css` are stripped too.
36. As a future AI agent, I want the verifier to check that `lucide@latest` is not used (and that the version matches the one documented in `DESIGN_SYSTEM.md`).
37. As a future AI agent, I want the verifier to detect a heading hierarchy skip anywhere on a page, not just at the first h1.

## Implementation Decisions

### Single seam — `scratch/verify_design_system.js` (new)

A new Node script that runs alongside `scratch/verify_static_site.js`. It is the **only** file any agent touches when adding or changing a verification rule. Both scripts can be invoked by a single chain command and CI step.

- **Module shape:** Plain CommonJS, like `verify_static_site.js`. No external deps.
- **Input:** Files under `*.html`, `css/*.css`, `js/*.js`. Config files (`tailwind-config.js`) read for cross-reference.
- **Output:** Structured `PASS` / `FAIL` lines. Exit code 1 on any failure.
- **Allowlist:** A `.verifyignore` JSON file at the repo root listing `{ file, pattern, reason }` entries. Patterns are strings or regexes. Defaults to empty.

### Verifier chain

- Add a thin wrapper `scratch/verify.sh` (or `verify.cmd` for Windows) that runs both scripts in sequence and reports the combined result.
- `scratch/verify_static_site.js` is **unchanged in behavior** — it is the structural check.
- The new `scratch/verify_design_system.js` is the design-system check.
- A combined exit code (any failure) replaces the single-script exit.

### Token source-of-truth decision

- `css/global.css` is declared the canonical source. `js/tailwind-config.js` is updated to match `global.css` exactly.
- A parity test runs on every verification: for each `--color-*` key in `:root`, the corresponding Tailwind key under `theme.extend.colors` must equal the same hex (modulo case).
- This is implemented as a check inside `verify_design_system.js`, not as a build-step generator (avoid adding a build step).

### Component class extraction

- `.tile` and `.tile--dark` go in `css/style.css`. They own the `p-[5px]` outer + `rounded-[22px]` ring + 5px gutter + hover scale + active scale patterns. The linter flags any HTML occurrence of the inline pattern.
- `.btn-primary` and `.btn-secondary` go in `css/style.css`. They own the pill-radius, padding, color, chevron-in-circle span, and hover translate behavior. The linter flags the inline chevron `<span>` pattern when it appears outside an element with class `btn-primary`/`btn-secondary`.
- A new Tailwind utility `ease-apple-spring` is registered via `theme.extend.transitionTimingFunction` in `tailwind-config.js`. The linter flags inline `ease-[cubic-bezier(0.32,0.72,0,1)]`.
- `.section`, `.section--parchment`, `.section--dark` go in `css/style.css`. They collapse the section wrapper pattern.
- `transitionDuration: { '700': '700ms' }` is also added so the `duration-700` chain becomes a one-word shorthand via `duration-apple`.

### Hex token promotion

- Each distinct raw hex literal found in HTML gets a name. Names are documented in `docs/specs/DESIGN_SYSTEM.md` § 1.4 (extended) and added to `css/global.css` as `--color-*` variables. The Tailwind config mirrors them.
- Hexes promoted (preliminary list, refined during implementation):
  - `#1c1c1e` → `--color-canvas-deep` (used 3× in `index.html` thesis cards)
  - `#ebebeb` → `--color-canvas-fog` (used 3× in `about.html` open-source cards)
  - `#ff2d55` → `--color-ios-red` (used once in `ai.html` integrations)
  - `#00a389` → `--color-search-teal` (used once in `ai.html` integrations)
  - The gradient stops `#0e7a4b` / `#022312` are not hex tokens — the whole gradient is promoted to a class.
  - The `from-[#8a2be2]` / `to-[#ff2a6d]` ambient glow stops in `ai.html` get named tokens or collapse into the class.

### Dead code deletion

- A new helper `scratch/check_unused_css.js` scans each class in `style.css` against all `*.html` and `*.js` files via regex. Output: list of unused classes.
- The agent runs it, reviews the list, and deletes confirmed-dead rules manually. The linter does not auto-delete (safety).

### Dependency pinning

- The Lucide CDN URL changes from `https://unpkg.com/lucide@latest` to `https://unpkg.com/lucide@0.460.0` (current stable as of audit). The exact version is added to `DESIGN_SYSTEM.md` § External dependencies. The linter verifies the URL matches that file's record.

### Migration strategy (sequencing)

The migration executes in phases described in `AUDIT_REPORT.md` § 10 in this order, each phase as a separate PR:

1. **Critical 1–6**: Token reconciliation + dead CSS + orphaned directory + inline styles + hex promotion. (Today these pass the structural verifier; the new design-system linter is introduced alongside.)
2. **High 1–9**: Hero `<h1>`, timeline bg, HTML-level shadow/border enforcement, tile class extraction, gradient classes, Lucide pinning.
3. **Medium 1–12**: Magic numbers, transition shorthand, integrity checks, focus-visible completeness, dark mode decision, type-scale reconciliation, nav-link reconciliation, verifier scope.
4. **Low 1–8**: Duplicate agent docs, focus trap, deploy hygiene.

Each phase is independently shippable. The linter goes live with phase 1 (in "report-only" mode initially) and is enforced from phase 2 onwards.

### What stays unchanged

- `js/site-data.js`, `js/nav.js`, `js/footer.js`, `js/icons.js`, `js/reveal.js`, `js/liquid-glass.js`, `js/glass-refraction.js` — no logic changes. Only the inline tailwind classes they inject (`footer.js` hex literals) are tokenized.
- `DESIGN.md`, `AGENTS.md`, `CLAUDE.md` — not modified by this spec. The new `docs/specs/` directory remains the canonical reference; existing markdown at the repo root may be updated to point to it.
- No new frameworks. No new dependencies. No build step.

### Testing Decisions

#### What makes a good test

- Test the **external behavior** of the verifier (its exit code and printed messages), not its internal parsing.
- Test the **external behavior** of the migration (the rendered HTML still loads, the CSS class applies, the JS still mounts nav and footer), not the exact byte sequence of source files.
- A "test" for this spec is overwhelmingly a `node scratch/verify_design_system.js` invocation against a fixture: a known-bad file with raw hex, inline style, dead CSS, etc., expecting `exit 1` with the expected `FAIL <reason>` lines.

#### Modules that get tested

- `scratch/verify_design_system.js` — every rule gets a fixture test.
- `scratch/verify.sh` / `.cmd` — chain behavior.
- The migration outputs (HTML after substitution, CSS classes, JS behavior unchanged) are smoke-tested by running `verify_static_site.js` (which already loads every page and checks for broken references).

#### Prior art (existing)

- `scratch/verify_static_site.js` is the closest prior art — it's a plain Node script that prints PASS/FAIL and exits 1 on failure. The new linter follows the exact same shape and convention.
- `scratch/apply_apple_design.js` is destructive and runs only on explicit intent — the new linter is non-destructive by default and runs in `verify` chain.
- No Jest/Vitest is set up; the project intentionally has no test framework. The verification scripts are the test suite. New tests follow the same style: plain Node, no deps.

#### Concrete test fixtures (added under `scratch/fixtures/`)

- `scratch/fixtures/has-raw-hex.html` — contains `style="color: #0066cc"` (raw hex outside the allowlist) — must produce `FAIL ... raw hex #0066cc`.
- `scratch/fixtures/has-inline-style.html` — contains `style="background: linear-gradient(...)"` — must FAIL on the inline-style rule.
- `scratch/fixtures/has-shadow-class.html` — contains `<div class="shadow-sm">` — must FAIL.
- `scratch/fixtures/has-tile-pattern.html` — contains `class="p-[5px] bg-ink/5 rounded-[22px] border border-black/5"` — must FAIL unless wrapped in `<div class="tile">`.
- `scratch/fixtures/lucide-latest.html` — contains `unpkg.com/lucide@latest` — must FAIL.
- `scratch/fixtures/token-drift.html` — references `text-ink-tertiary` while `--color-ink-tertiary` is `#86868b` and Tailwind config is `#6e6e73` — must FAIL on parity check.

These fixtures are deleted after the migration is verified (they exist only for the migration itself).

### Out of Scope

- **Visual redesign** — the brief is explicit that this is not a redesign. The migration does not change colors, type, spacing, radius, or motion grammar.
- **New pages** — no page is added in this migration.
- **Dark mode** — the partial dark nav CSS is left as-is. A separate spec would be required to commit to (or remove) a full dark theme.
- **WOFF2 font conversion** — recommended in `GITHUB_PAGES_GUIDE.md` § 5.2 but a separate task.
- **WebP/AVIF image conversion** — recommended in `GITHUB_PAGES_GUIDE.md` § 8.2 but a separate task.
- **CI workflow** — `GITHUB_PAGES_GUIDE.md` § 7 and `DEVELOPMENT_GUIDE.md` § 7 both recommend adding a GitHub Actions workflow. The verifier command is CI-ready, but writing the workflow YAML is a separate task.
- **Component refactor of JS** — the active-link logic duplicated between `nav.js` and `liquid-glass.js` (audit L5) is left for a follow-up. The migration does not change JS architecture.
- **Open Graph / Twitter card meta tags** — recommended in `GITHUB_PAGES_GUIDE.md` § 9 but a separate task.
- **Mobile menu focus trap** — flagged as audit L8; deferred to a separate a11y pass.

## Further Notes

### Relationship to existing docs

- `docs/specs/AUDIT_REPORT.md` is the source of truth for *what* is broken. This spec defines *how* it gets fixed.
- `docs/specs/DESIGN_SYSTEM.md` is the canonical token list. The migration updates it where raw hexes are promoted.
- `docs/specs/AGENT_RULES.md` is the rule list. It already documents the rules the linter enforces; this spec adds the enforcement mechanism.
- `docs/specs/COMPONENT_LIBRARY.md` already documents the `.tile`/`.btn-primary`/`.section` plan as "should-be". This spec turns that into a shipping requirement.

### What "ready-for-agent" means here

Once published with the `ready-for-agent` label, the next agent's job is to:

1. Open a PR titled `chore(lint): introduce scratch/verify_design_system.js (report-only)`.
2. Implement the linter with all rules from the spec, defaulting to `--mode=report` (prints warnings, does not fail).
3. Land a fixture-test PR that demonstrates each rule works.
4. Switch the verifier to `--mode=enforce` once phase 1 migration is complete.

The audit's "Critical" rows are the linter's first-required rules. Medium and Low rules are added incrementally as phases land.

### Acceptance criteria

Phase 1 (Lint + Critical fixes) is accepted when:

- `node scratch/verify_design_system.js` runs and reports every rule from `AUDIT_REPORT.md` § C1–C6.
- All Critical audit rows are fixed and the linter passes on the resulting codebase.
- A combined `scratch/verify.sh` runs both verifiers and exits 0 on the migrated code, exits 1 if either fails.
- `docs/specs/DESIGN_SYSTEM.md` reflects every new token.
- `docs/specs/AGENT_RULES.md` references the new linter.

Subsequent phases follow the same pattern, each landing as its own PR with a checkable diff against the audit.