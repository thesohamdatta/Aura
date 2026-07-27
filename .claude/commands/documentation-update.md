---
name: documentation-update
description: Workflow command scaffold for documentation-update in aura.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /documentation-update

Use this workflow when working on **documentation-update** in `aura`.

## Goal

Make targeted improvements or additions to project documentation, including troubleshooting, agent rules, and development guides.

## Common Files

- `website/docs.html`
- `website/docs/specs/AGENT_RULES.md`
- `website/docs/specs/DEVELOPMENT_GUIDE.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit relevant documentation files (e.g., website/docs.html, AGENT_RULES.md, DEVELOPMENT_GUIDE.md).
- Commit with a message referencing the section or purpose of the doc change.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.