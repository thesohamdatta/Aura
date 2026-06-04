# Issue Tracker â€” GitHub Issues

## Location

Issues live in **GitHub Issues** on the repository:
`https://github.com/thesohamdatta/aura/issues`

## CLI

Use the `gh` CLI for all issue operations:

```bash
# Create an issue
gh issue create --title "..." --body "..." --label "..." --repo thesohamdatta/aura

# List issues
gh issue list --repo thesohamdatta/aura --label "website"

# View an issue
gh issue view <number> --repo thesohamdatta/aura

# Close an issue
gh issue close <number> --repo thesohamdatta/aura
```

## Label scoping

All website issues must carry the `website` label in addition to their triage label.
This distinguishes them from firmware, backend, and hardware issues in the same tracker.

## Issue template

Use the standard vertical-slice template from the `to-issues` skill.
Each issue must have: What to build, Acceptance criteria, Blocked by.

## Milestone

Target milestone: `Website v1.0 â€” GitHub Pages Launch`
