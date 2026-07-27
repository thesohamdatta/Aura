# Aura Website Agentic SDLC

This playbook converts the "New SDLC with Vibe Coding" ideas into a practical workflow for the Aura static website. The goal is not more ceremony. The goal is fewer vague prompts, fewer unverified edits, and better agent output.

## Principle

Structure scales. Vibes do not.

Use AI for rapid implementation, but surround it with clear intent, narrow context, deterministic verification, and human review. For Aura, the harness is made of:

- `AGENTS.md`: short always-loaded project rules.
- `CLAUDE.md`, `DESIGN.md`, and local skills: task-specific operating context.
- `docs/agents/*`: deeper workflow references.
- `scratch/verify_static_site.js`: deterministic static-site checks.
- GitHub issues or local issue files: scoped work packets with acceptance criteria.

## Workflow

Use this path for website work:

```text
brainstorm -> grill -> spec -> issue -> implement -> verify -> review -> ship
```

For small changes, collapse `spec` and `issue` into a short checklist in the working turn. For broad redesigns, keep them as written artifacts.

## Modes

### Prototype

Use when the team needs to see an idea before deciding. Keep prototype code disposable. Carry forward only the decision.

Examples:

- Compare two hero compositions.
- Test a docs sidebar interaction.
- Explore a content hierarchy.

### Conductor

Use when the change is risky, visual, ambiguous, or global. The human stays close and reviews each slice.

Examples:

- Navbar behavior.
- Global CSS.
- Homepage hero.
- Accessibility or mobile layout changes.

### Orchestrator

Use when the task is well-scoped and has clear acceptance criteria. The agent can work through the files and return a diff.

Examples:

- Add a docs section.
- Replace legacy icons with Lucide.
- Update repeated copy.
- Run static verification and fix failures.

## Context Engineering

Keep static context short and stable. Put details behind dynamic references.

| Context type | Aura website source |
|---|---|
| Instructions | `AGENTS.md`, `CLAUDE.md` |
| Knowledge | `DESIGN.md`, `docs/agents/*.md`, `CONTEXT.md` if available |
| Memory | Git history, issue comments, handoff files |
| Examples | Existing page sections and component patterns |
| Tools | Shell, `apply_patch`, static server, verifier scripts |
| Guardrails | Sandbox, design rules, verification scripts, code review |

Load only what the task needs. Do not paste whole pages or large PDFs into every prompt once their lessons are captured here.

## Task Size Rules

- One page section: implement in one turn with a short checklist.
- Two or more pages: write or update an issue first.
- Global CSS, nav, footer, or shared JS: plan first and verify every page.
- New workflow, tool, or skill: document the trigger, guardrails, and validation command.

## Acceptance Criteria

Every issue or implementation prompt should state:

- User-visible outcome.
- Files likely to change.
- Constraints that cannot be broken.
- Verification command.
- Manual checks for layout or interaction.

## Definition of Done

A website change is done only when:

- The intent is captured in the issue, prompt, or final response.
- The implementation is scoped to the requested behavior.
- `node scratch/verify_static_site.js` passes.
- CSS edits have gone through `node scratch/apply_apple_design.js`.
- All five pages still load by relative paths.
- The diff has been reviewed against spec and design rules.

