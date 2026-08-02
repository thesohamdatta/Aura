# Aura workflow

This portable workflow works with Codex, Claude Code, Cursor and Gemini CLI. It does not require a particular plugin, agent framework or issue tracker.

## The loop

`grill → plan → spec → tickets → implement → review → pre-commit → commit → deploy → maintain`

| Stage      | Required output                                                   | Gate                                                      |
| ---------- | ----------------------------------------------------------------- | --------------------------------------------------------- |
| Grill      | Decision summary: outcome, risks and non-goals.                   | Do not implement while a material decision is unresolved. |
| Plan       | Smallest viable approach and verification method.                 | State assumptions and affected files.                     |
| Spec       | Goal, non-goals and testable acceptance criteria.                 | Claims must be verifiable.                                |
| Tickets    | Small, independently reviewable tasks.                            | Every task has an acceptance criterion.                   |
| Implement  | Focused diff for one task.                                        | Preserve unrelated user changes.                          |
| Review     | Findings or explicit approval.                                    | A fresh pass reviews shipping changes.                    |
| Pre-commit | Commands, screenshots or manual-inspection evidence.              | Fix failures or document the limitation.                  |
| Commit     | Small, scoped checkpoint.                                         | Confirm the repository boundary first.                    |
| Deploy     | Deployment result and published status.                           | Human approval is required.                               |
| Maintain   | Follow-up issue, ADR or context update when durable facts change. | Do not encode temporary facts as permanent rules.         |

## First reliable agent routine

Start with **change discovery**: research an idea, grill it, and draft a spec and ticket list. It may not edit production code, commit or deploy. Broaden automation only after this routine is useful and repeatable.

## Evidence is the contract

- Behavioural changes need a focused automated test or documented manual test.
- Website visual changes need desktop and mobile inspection, keyboard check, and reduced-motion check when motion changes.
- Public claims need an Aura-owned source or must be removed.
- Deployment changes need the deployment path and published result verified.

## Website route

For `website/1.2/`, read `website/1.2/AGENTS.md`, then `BRAND_BRIEF.md`, `DESIGN.md`, `PRODUCT.md`, `CONTEXT.md`, and relevant reference research before planning. The production site is static; do not add a framework or build step without an approved spec.

## Keep the harness small

- Put durable cross-tool rules in `AGENTS.md`.
- `CLAUDE.md` and `GEMINI.md` import shared rules.
- Add a skill, command, hook or plugin only after a repeated workflow proves its inputs, outputs and verification gate.
- Keep deployment authority human-controlled until checks are reliable.
