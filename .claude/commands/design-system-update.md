---
name: design-system-update
description: Workflow command scaffold for design-system-update in aura.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /design-system-update

Use this workflow when working on **design-system-update** in `aura`.

## Goal

Update or extend the design system, including CSS utility classes and related documentation or linter rules.

## Common Files

- `website/css/global.css`
- `website/index.html`
- `website/docs.html`
- `website/docs/specs/AGENT_RULES.md`
- `website/docs/specs/DEVELOPMENT_GUIDE.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit or add CSS utility classes in website/css/global.css (or related CSS files).
- Update HTML files (e.g., index.html, docs.html) to use new or migrated classes.
- Optionally update or reference verification/linter rules in documentation (e.g., AGENT_RULES.md, DEVELOPMENT_GUIDE.md).
- Verify changes using local or documented linter/verification scripts.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.