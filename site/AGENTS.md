# Aura Website — Agentic Engineering Context

> This file is the **static context** for every AI agent working on this codebase.
> It defines who the agent is, what it cares about, and what it is forbidden from doing.
> Treat this as code: reviewed in PRs, versioned with the project, owned by named engineers.

---

## Project Identity

**Aura** is an open-source, screenless, voice-first AI pendant worn around the neck.
This repository contains the **marketing website** — a React SPA built with Vite + Astryx.

**Stack:** React 19 · TypeScript 6 · Vite 8 · Astryx Design System · StyleX · React Router 7

**Deployment:** Vercel (static build from `dist/`)

---

## Design Philosophy

> Technology should quietly help people turn intentions into actions instead of competing for attention.

Every design, UX, copywriting, engineering, and implementation decision must align with this philosophy.

### Design Principles

1. **Certainty, not excitement.** The tone is a scientist who watched *Her* and felt something.
2. **No exclamation marks.** Facts only, measured specs, honest limitations.
3. **Screenless is the product.** The pendant image must always be the visual hero.
4. **Show, don't tell.** Hardware photography, UI screenshots, architecture diagrams — not paragraphs describing them.
5. **Trust over aesthetics.** Optimize for credibility, not awards or animations.

### Target Audience

Technical founders, AI researchers, CTOs, robotics engineers, wearable AI teams, product engineers, hiring managers, investors. The experience must communicate **engineering maturity, technical credibility, and refined design taste**.

---

## File Structure

```
site/
├── src/
│   ├── main.tsx                 # Entry: Theme provider + CSS imports
│   ├── App.tsx                  # React Router: 5 routes
│   ├── index.css                # Global styles, utility classes
│   ├── theme/
│   │   ├── auraTheme.ts         # Active theme (Inter, blue accent)
│   │   └── icons.tsx            # Lucide → Astryx icon registry
│   ├── routes/
│   │   ├── LandingPage.tsx      # / — 9 sections
│   │   ├── AiPage.tsx           # /ai — architecture, pipeline, providers
│   │   ├── ManifestoPage.tsx    # /manifesto — the essay
│   │   ├── AboutPage.tsx        # /about — timeline, team, values
│   │   └── DocsPage.tsx         # /docs — technical documentation
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopNav.tsx       # Sticky nav, 5 items + CTA
│   │   │   └── Footer.tsx       # 4-column footer
│   │   ├── landing/
│   │   │   ├── Hero.tsx
│   │   │   ├── Capabilities.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Thesis.tsx
│   │   │   ├── ProductDetails.tsx
│   │   │   ├── OpenSource.tsx
│   │   │   ├── Research.tsx
│   │   │   ├── Team.tsx
│   │   │   └── FAQ.tsx
│   │   ├── docs/
│   │   │   └── DocsLayout.tsx   # Monolithic — needs splitting
│   │   └── ui/                  # Shared primitives (TO CREATE)
│   └── hooks/                   # Shared hooks (TO CREATE)
├── public/
│   └── assets/                  # Product photos, diagrams, team photos
├── tests/                       # Test suite (TO CREATE)
├── .agents/                     # Agent skills (TO CREATE)
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── AGENTS.md                    # This file
```

---

## Coding Rules

### Component Patterns

1. **No raw `<div>` for layout.** Use Astryx components: `Section`, `Card`, `Grid`, `HStack`, `VStack`, `Layout`, `LayoutPanel`.
2. **Frame first.** Pick the shell and budget regions before writing content.
3. **Dense data = rows.** Use `Table`, `List`, `Item` edge-to-edge. Never `Card`-wrapped list items.
4. **Status → `StatusDot`/`Token`.** `Badge` only for counts and enumerated states.
5. **Custom styling:** Component props first. Else `style`/`className` with tokens: `var(--color-*|--spacing-*|--radius-*)`. No raw hex/px. Prefer StyleX for new components.
6. **No CSS-in-JS libraries** beyond StyleX (already installed via Astryx).

### Style System

- **Theme:** `auraTheme.ts` — Inter font, blue accent `#2563EB`, neutral canvas
- **Tokens:** All spacing, colors, radii, shadows use CSS custom properties from the theme
- **Radius:** Two values — `8px` for interactive/content, `12px` for cards/containers
- **Shadows:** Minimal. Only `shadow-sm` for subtle card lift.
- **Colors:** Neutral canvas with one accent. No gradients on backgrounds.

### Typography

- **Body/Headings:** Inter (loaded via Google Fonts)
- **Code:** JetBrains Mono
- **Display sizes** (≥28px): tight letter-spacing (-0.02em to -0.03em), line-height 1.05-1.2
- **Body:** 16px, line-height 1.7
- **Labels:** 12px, uppercase, letter-spacing 0.1em

### Content Rules

1. Lead with the verb. "Transcribes in 300ms" not "Aura features real-time transcription"
2. One idea per sentence. No compound sentences.
3. Specific over general. "Deepgram Nova-2" not "industry-leading STT"
4. No exclamation marks. Ever.
5. No adjectives unless measurable. "Fast" → "<300ms". "Affordable" → "$50 BOM"
6. Technical terms are fine. The audience knows Pinecone, Groq, ESP32.

### Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<h1>`-`<h6>` in order
- Alt text on every image
- Visible focus ring on all interactive elements
- Keyboard navigation: all interactive elements reachable via Tab
- Color contrast: 4.5:1 minimum for body text
- `@media (prefers-reduced-motion: reduce)` disables animations
- Skip link at page top

---

## Verification Gates

### Pre-Commit (Automated)
```
→ TypeScript type-check (tsc --noEmit)
→ Lint (oxlint)
→ Staged files only (via lint-staged)
```

### CI Pipeline (Every PR)
```
→ TypeScript type-check
→ Lint
→ Build (vite build)
→ Unit tests (vitest)
→ Accessibility tests
```

### Manual Review Checklist
- [ ] Visual matches design spec
- [ ] All images load (no broken paths)
- [ ] Responsive: mobile (320px), tablet (768px), desktop (1280px)
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] Copy follows tone guide (no exclamation marks, specific over general)

---

## Hard Rules (Never Do These)

1. **Never add a `<div>` when an Astryx component exists for the job.**
2. **Never use raw hex/px values in component code.** Always use theme tokens.
3. **Never add dependencies without checking if one already exists.**
4. **Never skip the verification gates.** Run type-check + lint before committing.
5. **Never invent product features or marketing claims.** Preserve scope discipline.
6. **Never use exclamation marks in copy.**
7. **Never add animations without `prefers-reduced-motion` support.**
8. **Never commit secrets, API keys, or tokens.**
9. **Never modify `auraTheme.ts` without understanding the full token impact.**
10. **Never skip alt text on images.**

---

## Workflow

### Starting Work
1. Read this AGENTS.md for context
2. Check `npx astryx component <Name>` for component props before writing UI
3. Run `npm run dev` to see the current state
4. Create a feature branch: `git checkout -b feat/description`

### During Work
1. Build components incrementally — verify with `npm run build` frequently
2. Follow existing patterns — look at neighboring files for conventions
3. Use StyleX for new component styles when possible
4. Write tests for new components

### Before Committing
1. `npm run build` — must pass
2. `npm run lint` — must pass
3. Review the diff — only intended changes
4. Commit with focused message: `feat: add product image grid` not `update site`

### Before Pushing
1. All CI checks must pass
2. Visual review in browser at 320px, 768px, 1280px
3. Keyboard navigation test
4. No console errors

---

## Domain Glossary

| Term | Definition |
|---|---|
| **Pendant** | The physical Aura hardware — a ~42mm sphere worn on a lanyard |
| **AI Pipeline** | 4-layer cloud processing: Deepgram (STT) → Groq (LLM) → GPT-4o (Vision) → Pinecone (RAG) |
| **BOM** | Bill of Materials — hardware components and costs (~$50 total) |
| **MCU** | Microcontroller Unit — XIAO ESP32-S3 Sense |
| **Astryx** | Meta's open-source React + StyleX design system (149 components) |
| **StyleX** | CSS-in-JS by Meta — type-safe, token-based, zero-runtime |
| **Manifesto** | The essay page — "The Third Device Hypothesis" |
| **The Website** | This repo — the 5-page marketing site (NOT the docs or backend) |

---

## Contact

- **Repository:** github.com/thesohamdatta/aura (already created this ues directory to be deployed on verecl )
- **Deploy:** Vercel (auto-deploy from main)
- **Author:** Soham Datta — thesohamdatta@gmail.com
