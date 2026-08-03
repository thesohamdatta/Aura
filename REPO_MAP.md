# Aura Repository Map

## Repositories

| Path                           | Git root    | Purpose                                                                         |
| ------------------------------ | ----------- | ------------------------------------------------------------------------------- |
| `D:\PROJECTS\AURA`             | parent repo | Aura hardware, firmware, backend, Android app, deployment, top-level agent docs |
| `D:\PROJECTS\AURA\website\1.2` | nested repo | Current Aura website and agent harness experiments                              |

Always confirm the git root before committing:

```powershell
git rev-parse --show-toplevel
```

## Product Areas

| Area                   | Path                                                                             | Current role                                        |
| ---------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------- |
| Website                | `website/1.2/website/`                                                           | Production static website served by GitHub Pages    |
| Website design sources | `website/1.2/BRAND_BRIEF.md`, `website/1.2/DESIGN.md`, `website/1.2/PRODUCT.md`  | Design and product contract for website agents      |
| Website harness        | `website/1.2/agent_harness.py`, `website/1.2/workflows/`, `website/1.2/prompts/` | Agentic Architect -> Developer -> Reviewer workflow |
| Firmware               | `firmware/`                                                                      | Pendant firmware                                    |
| Backend                | `backend/`                                                                       | AI backend                                          |
| Android app            | `app/`                                                                           | Companion app                                       |
| Hardware               | `hardware/`                                                                      | Case and physical build notes                       |
| Agent docs             | `AGENTS.md`, `docs/agentic-sdlc.md`, `docs/adr/`                                 | How agents should navigate and change the repo      |

## Website Truth

The live website source is:

```text
D:\PROJECTS\AURA\website\1.2\website
```

GitHub Pages deploys this directory from:

```text
.github/workflows/deploy-website.yml
```

Current page contract:

- `index.html`
- `manifesto.html`
- `docs.html`
- `404.html`

Do not treat `website/1.1/` or deleted files under parent `docs/` as active website source.

## Documentation Truth

- Top-level project context: `CONTEXT.md`
- Website/harness context: `website/1.2/CONTEXT.md`
- Agentic workflow: `docs/agentic-sdlc.md`
- Architecture decisions: `docs/adr/`

Keep `CONTEXT.md` glossary-like. Put workflows in docs. Put hard-to-reverse decisions in ADRs.
