# Aura — Agent Configuration

## Project overview

Aura is an open-source, screenless wearable AI pendant built on the XIAO ESP32-S3 Sense.
Voice-first. No screen. Always ambient. Built by a 4-person undergrad team in Pune for ~$50 USD.

Primary artifact for this session: **the public marketing website**, deployed via GitHub Pages.

## Agent skills

### Issue tracker

Issues live in GitHub Issues on `thesohamdatta/Aura-Wearable-AI`. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical labels, default names. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — `CONTEXT.md` at repo root + `docs/adr/`. See `docs/agents/domain.md`.

## Website

- **Source:** `website/` directory in this repo
- **Hosting:** GitHub Pages via GitHub Actions (workflow in `.github/workflows/deploy-website.yml`)
- **Pages:** index.html, about.html, ai.html, docs.html, manifesto.html
- **Tech stack:** Vanilla HTML/CSS/JS + GSAP + Lenis (no build step, static files)
- **Design system:** `website/css/global.css` — all CSS variables defined there

## Key domain terms

| Term | Meaning |
|---|---|
| Pendant | The physical Aura wearable hardware device |
| AI Pipeline | The 4-layer cloud AI: Deepgram → Groq/GPT-4o → Pinecone |
| BOM | Bill of Materials — the hardware component list and costs |
| Scroll-scrub | Canvas frame animation synced to scroll position (Apple-style) |
| Lenis | Smooth scroll library (darkroomengineering/lenis) |

## Workflow (Matt Pocock)

`brainstorm → grill → prd → to-issues → tdd → ship`

All issues are tagged `website` to distinguish from firmware/backend issues.
