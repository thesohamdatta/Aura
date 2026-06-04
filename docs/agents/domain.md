# Domain Docs

## Layout

**Single-context** — one `CONTEXT.md` + `docs/adr/` at the repo root.

## CONTEXT.md

The root `CONTEXT.md` (to be created) holds:
- Domain glossary (Pendant, AI Pipeline, BOM, Scroll-scrub, etc.)
- Architectural decisions and constraints
- Key design principles (Apple philosophy, screenless, open source)

## ADRs

Architectural Decision Records live in `docs/adr/`.
Format: `docs/adr/NNN-short-title.md`

Current ADRs:
- `docs/adr/001-static-site-no-build.md` — Why we chose vanilla HTML/CSS/JS over React/Next.js
- `docs/adr/002-github-pages-deployment.md` — Why GitHub Pages + Actions over Vercel/Netlify
- `docs/adr/003-gsap-lenis-animation.md` — Why GSAP + Lenis over CSS-only or other libraries

## Reading rules for skills

- Always read `CONTEXT.md` before making domain-level decisions
- Check `docs/adr/` before proposing architectural changes — don't contradict existing ADRs
- Use domain glossary terms in issue titles, PR descriptions, and code comments
- The website uses the `website/` subdirectory — never confuse it with `docs/` (technical docs)
