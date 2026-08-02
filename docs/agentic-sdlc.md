# Aura Agentic SDLC

Aura uses a simple solo-maintainer agentic workflow. The goal is not ceremony. The goal is to give coding agents enough structure to do senior-quality work without losing the product thesis.

## Operating Model

Current mode: one maintainer, many agent sessions.

Future mode: contributors can follow the same workflow through issues, PR templates, and docs.

Default loop:

```text
context -> grill -> plan -> issue/spec -> implement -> verify -> review -> document -> ship
```

## Roles

| Role          | Job                                                              | Output                                    |
| ------------- | ---------------------------------------------------------------- | ----------------------------------------- |
| Maintainer    | Sets intent, resolves product decisions, reviews final tradeoffs | Decision, approval, merge                 |
| Context agent | Reads repo, docs, current state, and constraints                 | Short context report                      |
| Architect     | Converts intent into a small spec                                | Plan, acceptance criteria, affected files |
| Developer     | Makes the smallest coherent change                               | Patch and verification notes              |
| Reviewer      | Checks correctness, design rules, tests, and regressions         | Findings first, then residual risk        |
| Documenter    | Updates durable context                                          | ADR, glossary, guide, or issue resolution |

For now, one assistant can play all roles in sequence. Use subagents only when research, audit, or review can run in parallel without blocking the next local step.

## Context Rules

Before work:

1. Read `AGENTS.md`.
2. Read `REPO_MAP.md`.
3. Confirm the git root.
4. Read the nearest relevant `CONTEXT.md`.
5. Read the area README or design contract.
6. Inspect actual files before planning.

Ask the maintainer about decisions. Do not ask about facts that can be found in the repository.

## Work Item Shape

Good work items include:

- Problem
- Desired outcome
- Files likely involved
- Constraints
- Acceptance criteria
- Verification command or manual check
- Non-goals

Bad work items say only "fix this" or "make it better".

## Website Workflow

Website source: `website/1.2/website/`.

Before website edits, read:

1. `website/1.2/BRAND_BRIEF.md`
2. `website/1.2/DESIGN.md`
3. `website/1.2/PRODUCT.md`
4. `website/1.2/CONTEXT.md`

Website pages are fixed unless the maintainer explicitly changes the contract:

- `index.html`
- `manifesto.html`
- `docs.html`
- `404.html`

## Documentation Workflow

Use the smallest durable doc:

- `CONTEXT.md`: project language and glossary only.
- `REPO_MAP.md`: where things live and which paths are canonical.
- `docs/adr/*.md`: hard-to-reverse decisions with real tradeoffs.
- `docs/agentic-sdlc.md`: process and workflow.
- `.agents/skills/*/SKILL.md`: repeatable procedures agents should load on demand.

## ADR Rule

Create an ADR only when all are true:

- Hard to reverse.
- Surprising without context.
- Chosen from real alternatives.

Use short ADRs. A paragraph is enough when it captures the decision and why.

## Guardrails

- Never commit secrets.
- Never make broad repo cleanup while solving a narrow task.
- Never change `website/1.2/website` page contract without explicit maintainer decision.
- Never mix parent repo commits and nested website repo commits accidentally.
- Never trust stale docs over deploy config and actual file structure.

## Research Notes

Primary-source guidance used for this workflow:

- OpenAI documents `AGENTS.md` as project guidance Codex reads by scope, with nested files contributing more specific instructions.
- The AGENTS.md format positions itself as a predictable README for coding agents, separate from human README content.
- Claude Code guidance separates always-on context, skills, hooks, MCP, and subagents by job: context, repeat workflow, deterministic automation, external tools, and isolated work.
- MCP official docs define MCP as a standard for connecting AI applications to external systems, and define tools and prompts as separate server capabilities.
- GitHub docs recommend issue and PR templates for structured contributor input, branch protection for required reviews/checks, and CODEOWNERS for ownership when the project grows.

Sources:

- https://learn.chatgpt.com/docs/agent-configuration/agents-md
- https://agents.md/
- https://code.claude.com/docs/en/features-overview
- https://code.claude.com/docs/en/skills
- https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro
- https://modelcontextprotocol.io/specification/2025-06-18/server/tools
- https://modelcontextprotocol.io/specification/2025-06-18/server/prompts
- https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates
- https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule
- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
