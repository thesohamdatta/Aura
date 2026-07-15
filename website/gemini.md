# GEMINI.md — aura/website (Antigravity / Gemini CLI)

# Load the parent project context
@../AGENTS.md

# Load the website design reference
@CONTEXT.md

---

# Sub-system: Website

Stack: **Vanilla HTML/CSS/JS + Tailwind CDN + GSAP + Lenis** → GitHub Pages

## Workflow (website)

```
brainstorm → grill → plan → implement → test → commit
```

## Active Skills (website context only)

- `grilling` — before any layout, design, or navigation change
- `brainstorming` — before adding new pages or major sections
- `frontend-design` — Apple-style design decisions, typography, color tokens
- `diagnosing-bugs` — GSAP scroll-scrub and Lenis smooth-scroll failures
- `tdd` — run `node scratch/run_tests.js` after every change
- `writing-plans` — before touching the navbar or global CSS (high blast radius)
- `verification-before-completion` — tests must pass before every commit

## Key Reminders

- **Tests:** `node scratch/run_tests.js` — run after every change, before committing
- **Design:** Apple-style — SF Pro fonts, no box shadows, alternating section canvases
- **Navbar:** frosted glass, exactly `52px` height — do not break this
- **Tailwind:** loaded via CDN, config in `js/tailwind-config.js` — no build step
- **No inline styles** — use CSS variables from `css/global.css` and Tailwind classes
- **Design tokens:** see `CONTEXT.md` for the full token reference table
