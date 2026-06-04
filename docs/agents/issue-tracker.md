# Issue Tracker — GitHub Issues

## Location

Issues live in **GitHub Issues** on the repository:
`https://github.com/thesohamdatta/Aura-Wearable-AI/issues`

## CLI

Use the `gh` CLI for all issue operations:

```bash
# Create an issue
gh issue create --title "..." --body "..." --label "..." --repo thesohamdatta/Aura-Wearable-AI

# List issues
gh issue list --repo thesohamdatta/Aura-Wearable-AI --label "website"

# View an issue
gh issue view <number> --repo thesohamdatta/Aura-Wearable-AI

# Close an issue
gh issue close <number> --repo thesohamdatta/Aura-Wearable-AI
```

## Label scoping

All website issues must carry the `website` label in addition to their triage label.
This distinguishes them from firmware, backend, and hardware issues in the same tracker.

## Issue template

Use the standard vertical-slice template from the `to-issues` skill.
Each issue must have: What to build, Acceptance criteria, Blocked by.

## Milestone

Target milestone: `Website v1.0 — GitHub Pages Launch`
