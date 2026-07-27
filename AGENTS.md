# Aura — Agent Configuration

## Project overview

Aura is an open-source, screenless, voice-first AI pendant built on the XIAO ESP32-S3 Sense.
Voice-first. No screen. Always ambient. Built by a 4-person undergrad team in Pune for ~$50 USD.

## The Website

5-page vanilla HTML/CSS/JS marketing site. No build step, no bundler, no framework.

### Pages

| Page | File | Purpose |
|---|---|---|
| Home | `website/index.html` | Landing page — hero, capabilities, how it works, thesis, research, open source, team, FAQ |
| About | `website/about.html` | Team, mission, values, timeline |
| AI | `website/ai.html` | 4-layer pipeline architecture, provider comparison |
| Docs | `website/docs.html` | Technical documentation with sidebar navigation |
| Manifesto | `website/manifesto.html` | "The Third Device Hypothesis" essay |

### File structure

```
website/
├── index.html
├── about.html
├── ai.html
├── docs.html
├── manifesto.html
├── css/
│   ├── global.css          — Design tokens, resets, accessibility
│   ├── fonts.css           — Font declarations
│   ├── nav.css             — Navigation, mobile menu
│   ├── style.css           — Component patterns (to be refactored)
│   └── docs.css            — Docs sidebar overrides
├── js/
│   ├── reveal.js           — Scroll-reveal animations
│   ├── liquid-glass.js     — SVG refraction filter + nav behavior
│   └── tailwind-config.js  — Tailwind theme configuration
├── assets/
│   ├── hero/               — Hero images
│   ├── product/            — Product photos
│   ├── team/               — Team photos
│   └── fonts/              — Font files
└── favicon.svg
```

### Design tokens

Defined in `website/css/global.css`:

| Token | Value | Usage |
|---|---|---|
| `--color-canvas-white` | `#ffffff` | Primary canvas |
| `--color-canvas-parchment` | `#f5f5f7` | Alternating canvas |
| `--color-canvas-dark` | `#272729` | Dark sections |
| `--color-ink` | `#1d1d1f` | Text on light |
| `--color-ink-secondary` | `#6e6e73` | Secondary text |
| `--color-ink-tertiary` | `#86868b` | Tertiary text |
| `--color-action-blue` | `#0066cc` | Interactive elements |
| `--color-focus-blue` | `#0071e3` | Keyboard focus |
| `--color-sky-blue` | `#2997ff` | Links on dark |

### Icon system

**Decision:** Lucide vanilla JS is the single icon system.
- CDN: `https://unpkg.com/lucide@latest`
- Usage: `<i data-lucide="icon-name"></i>`
- Initialize: `lucide.createIcons()`

### CSS architecture

- `global.css` — Design tokens, resets, accessibility utilities
- `fonts.css` — Font-face declarations
- `nav.css` — Navigation component styles
- `style.css` — All other component patterns (being refactored)
- `docs.css` — Docs-specific overrides

### Deployment

GitHub Pages via `.github/workflows/deploy-website.yml`. All paths must be relative.

## Agent skills

### Issue tracker

Issues live in GitHub Issues on `thesohamdatta/aura`. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical labels, default names. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — `CONTEXT.md` at repo root + `docs/adr/`. See `docs/agents/domain.md`.

### Local Skills
- **`apple-aura-frontend`** — Enforces strict Apple-style product-page aesthetics. Located at `.agents/skills/apple-aura-frontend/`.
- **`apple-design-analysis`** — Governs color values, typography tracking/scaling, shape hierarchies, shadow/blur depth limits. Located at `.agents/skills/apple-design-analysis/`.
- **`minimalist-ui`** — Minimalist UI principles: restraint, whitespace, calm aesthetics. Located at `website/.agents/skills/minimalist-ui/`.

## Key domain terms

| Term | Meaning |
|---|---|
| Pendant | The physical Aura wearable hardware device |
| AI Pipeline | The 4-layer cloud AI: Deepgram → Groq/GPT-4o → Pinecone |
| BOM | Bill of Materials — the hardware component list and costs |
| Overline | Small monospace label above section headings |
| Section-black | Full-bleed `background: #000` section |

## Workflow

`brainstorm → grill → prd → to-issues → tdd → ship`

All issues are tagged `website` to distinguish from firmware/backend issues.
