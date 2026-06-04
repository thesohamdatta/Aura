# Triage Labels

## The five canonical roles

| Role | Label string | Meaning |
|---|---|---|
| Needs evaluation | `needs-triage` | Maintainer needs to evaluate before any work begins |
| Waiting on reporter | `needs-info` | Blocked on more information from the person who filed it |
| Ready for agent | `ready-for-agent` | Fully specified â€” an AFK agent can implement without human context |
| Ready for human | `ready-for-human` | Needs human judgement, design decision, or manual step |
| Won't fix | `wontfix` | Will not be actioned in this milestone |

## Additional labels in use

| Label | Meaning |
|---|---|
| `website` | Scopes issue to the GitHub Pages website (not firmware/backend) |
| `design` | Visual/UX decision needed |
| `animation` | Scroll animation or GSAP work |
| `performance` | Lighthouse / Core Web Vitals work |
| `a11y` | Accessibility improvement |
| `bug` | Something broken |
| `enhancement` | Improvement to existing feature |

## Creating labels

```bash
# Create all triage labels
gh label create "needs-triage"    --color "E4E669" --repo thesohamdatta/aura
gh label create "needs-info"      --color "D93F0B" --repo thesohamdatta/aura
gh label create "ready-for-agent" --color "0075CA" --repo thesohamdatta/aura
gh label create "ready-for-human" --color "6F42C1" --repo thesohamdatta/aura
gh label create "wontfix"         --color "FFFFFF" --repo thesohamdatta/aura
gh label create "website"         --color "00D9FF" --repo thesohamdatta/aura
gh label create "design"          --color "FF206E" --repo thesohamdatta/aura
gh label create "animation"       --color "BFD4F2" --repo thesohamdatta/aura
gh label create "performance"     --color "F9D0C4" --repo thesohamdatta/aura
gh label create "a11y"            --color "C5DEF5" --repo thesohamdatta/aura
```
