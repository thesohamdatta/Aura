# Aura Agent Guide

## Project

Aura is an open-source, screenless, voice-first AI pendant. It combines:

- `firmware/`: XIAO ESP32-S3 Sense firmware.
- `backend/`: FastAPI AI backend.
- `app/`: Android companion app.
- `hardware/`: printable case and hardware notes.
- `website/1.2/website/`: production website.

The current maintainer is solo. Optimize workflows for one strong maintainer assisted by coding agents, while keeping the repo understandable for future contributors.

## Source Of Truth

Read [REPO_MAP.md](REPO_MAP.md) before structural work.

The production website is `website/1.2/website/`. Do not restore the old 5-page website. The current website contract is:

- `index.html`
- `manifesto.html`
- `docs.html`
- `404.html`

The old `docs/` website copy and `website/1.1/` are legacy/deleted state. Do not treat them as canonical.

## Git Boundaries

This workspace contains a nested git repo:

- Parent repo: `D:\PROJECTS\AURA`
- Website repo: `D:\PROJECTS\AURA\website\1.2`

Before commits, run `git rev-parse --show-toplevel`. Website work belongs in `website/1.2`. Parent work belongs in `D:\PROJECTS\AURA`.

Never run broad staging from the parent repo unless the goal is explicitly parent-level repo management.

## Agentic SDLC

Use [docs/agentic-sdlc.md](docs/agentic-sdlc.md) for the workflow.

Default loop:

`context -> grill -> plan -> issue/spec -> implement -> verify -> review -> document -> ship`

Rules:

- Context first. Read repo map, relevant README, `CONTEXT.md`, and local `AGENTS.md`.
- Ask decisions, not facts. Look up facts in the repo.
- Keep `AGENTS.md` short. Put longer workflows in docs or skills.
- Use skills for repeatable procedures.
- Use hooks or CI for deterministic guardrails when available.
- Record hard-to-reverse decisions as ADRs in `docs/adr/`.
- Update context docs when a durable project term or boundary changes.

## Website Design Contract

For website edits, read these in order:

1. `website/1.2/BRAND_BRIEF.md`
2. `website/1.2/DESIGN.md`
3. `website/1.2/PRODUCT.md`
4. `website/1.2/CONTEXT.md`

Website principles:

- Apple-like product page discipline.
- Photography first.
- One accent color: Action Blue.
- No hype, no fake claims, no exclamation marks.
- CSS literals belong in design tokens, not component styles.
- Keep pages static HTML/CSS/JS. No framework or build step.

## Local Skills

Use these project skills when relevant:

- `.agents/skills/aura-agentic-sdlc/`: repo workflow and AI SDLC.
- `.agents/skills/apple-aura-frontend/`: Aura website design.
- `.agents/skills/apple-design-analysis/`: Apple-style visual rules.
- `.agents/skills/karpathy-guidelines/`: small, careful engineering changes.

## Verification

Prefer the smallest verification that matches the change:

- Website static check: inspect HTML/CSS and run a local browser/server when visual changes matter.
- Harness check in `website/1.2`: `python -c "from google.antigravity import Agent"` if changing harness code.
- GitHub Pages deploy path check: `.github/workflows/deploy-website.yml` uploads `website/1.2/website`.

If no automated test exists for a touched area, say that in the final response.
this file is source of the truth for the entire aura project make sure this is well maintained . without context burn
