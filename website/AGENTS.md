# Aura Website Agent Instructions

## Project
Aura is an open-source, screenless, voice-first AI pendant. This repo is a static GitHub Pages website for Aura. Keep it fast, calm, and easy to audit.

## Pages
- `index.html`: product landing page.
- `about.html`: mission and context.
- `ai.html`: AI agent architecture.
- `docs.html`: technical documentation hub.
- `manifesto.html`: philosophy and principles.

## Agentic SDLC
Use the project workflow as a harness: `brainstorm -> grill -> spec -> issue -> implement -> verify -> review -> ship`.

For non-trivial work:
1. Clarify intent and constraints.
2. Challenge ambiguous requirements before editing.
3. Write acceptance criteria.
4. Keep the implementation small and scoped.
5. Run deterministic verification.
6. Review output against the spec and design rules.

Load dynamic context only when needed:
- `docs/agents/agentic-sdlc.md` for the workflow.
- `docs/agents/quality-gates.md` for verification.
- `docs/agents/issue-template.md` for task handoff.
- `.agents/skills/aura-agentic-website/SKILL.md` for the local coding-agent harness.
- Existing design skills under `.agents/skills/` for visual work.

## Stack
- Vanilla HTML, CSS, and JavaScript only.
- No framework, bundler, build step, GSAP, or Lenis.
- Tailwind may be used only through the existing CDN setup.
- Lucide icons are loaded from CDN and initialized per page.
- Use relative paths that work on GitHub Pages.

## Architecture
- Shared nav lives in `js/nav.js` and mounts into `#nav-mount`.
- Shared footer lives in `js/footer.js` and mounts into `#footer-mount`.
- Global styling lives in `css/global.css`, `css/fonts.css`, `css/nav.css`, and page-specific CSS.
- Preserve the five-page site unless the user explicitly asks for a routing or structure change.

## Design Rules
- Use the existing Apple-inspired Aura visual language.
- Prefer restrained white, black, gray, and blue tokens already in the CSS.
- Avoid decorative borders, card shadows, gradient blobs, noisy palettes, and oversized marketing layouts.
- Keep copy clear and direct. Do not add instructional UI text unless it serves the user.
- Honor reduced-motion patterns when adding animation.

## Verification
Run this before handing off:
```powershell
node scratch/verify_static_site.js
```

If CSS or layout changed, also run:
```powershell
node scratch/apply_apple_design.js
```

For manual browser checks:
```powershell
python -m http.server 8000
```

## Review Standard
Shipping means the implementation matches the stated intent, shared navigation/footer still work, local asset links resolve, and any skipped verification is reported explicitly.
