# Aura — Agent Configuration

## Project overview

Aura is an open-source, screenless wearable AI pendant built on the XIAO ESP32-S3 Sense.
Voice-first. No screen. Always ambient. Built by a 4-person undergrad team in Pune for ~$50 USD.

## Website v2 (in progress)

Full React rewrite of the marketing site. Astryx (Meta OSS) as component foundation. Apple design philosophy (whitespace, restraint) + Apple color palette. No Apple fonts or proprietary elements.

### Architecture decisions (locked)

| Decision | Chosen |
|---|---|
| Tech stack | Vite + React 19 + StyleX + Astryx |
| New source | `site/` directory (old `website/` preserved) |
| Page structure | Hybrid: one long-scroll landing page (`/`) + separate `/docs` route |
| Routing | React Router (two top-level routes, nested docs routes later) |
| Theme | Astryx neutral theme with Apple color tokens swapped via `defineTheme()` |
| Icons | Astryx's `lucide-react` (no SF Symbols port) |
| Animation | Port `reveal.js` -> `useScrollReveal()` hook, `liquid-glass.js` -> `<LiquidGlass>` component |
| Docs page | Astryx `SideNav` + `Layout` + `Text`/`Heading`/`CodeBlock` |
| Deployment | Vercel free tier (static Vite output, `dist/`) |
| Copy tone | Minimal, punchy, every word earns its place. Current site copy as reference. |

### Landing page sections

1. Hero — "Worn. Screenless. Aware." (full-bleed image + headline)
2. Core Capabilities — Voice / Vision / Memory (3-column grid)
3. How It Works — 3-step pipeline (Transcribe -> Reason -> Remember)
4. Thesis — "The third device" (dark canvas section)
5. Research — CHI '26 paper, credibility
6. Open Source — GitHub link, contributor invite
7. Team — Sam + Laxman
8. FAQ — Accordion/collapsible
9. Footer — Links, copyright

### Design identity

- **Astryx components** carry all visual structure
- **Apple colors** mapped into Astryx theme tokens: parchment `#f5f5f7`, ink `#1d1d1f`, action blue `#0066cc`
- **Apple philosophy** applied through layout decisions: whitespace, one-idea-per-section, restraint
- **No SF Pro** — Astryx's default font (Figtree/system stack)
- **No decorative shadows** — canvas alternation for visual separation

## Website v1 (legacy, preserved in `website/`)

The original site: 5 vanilla HTML/CSS/JS pages, Tailwind CDN, SF Pro fonts, GitHub Pages.
Kept for reference during rewrite. Not deployed from `site/` yet.

- **Source:** `website/` directory
- **Hosting:** GitHub Pages via `.github/workflows/deploy-website.yml`
- **Pages:** index.html, about.html, ai.html, docs.html, manifesto.html
- **Design tokens:** `website/css/global.css` — Apple color values to extract for v2 theme
- **Copy reference:** Current site has tight, punchy copy — "Worn. Screenless. Aware." / "Sub-second thoughts." / "Never forgets." / "Connected to your world."

## Dev commands

All commands run from `site/` directory:

```bash
cd site
npm install            # install dependencies
npm run dev            # dev server at http://localhost:5173/
npm run build          # tsc -b && vite build -> dist/
npm run preview        # preview production build
npm run lint           # oxlint
```

**Important:** There are two `package.json` files. Root `package.json` has Astryx packages but is NOT the app. `site/package.json` is the actual Vite + React app. Always run commands from `site/`.

## Astryx CLI

v0.1.5, 149 components. Run every command as `npx astryx <cmd>` from `site/`:

```bash
astryx build "<idea>"          # returns kit (closest template + blocks + components)
astryx template <name>         # scaffold or study layout reference
astryx component <Name>        # props + examples for a component
astryx search "<query>"        # find component / hook / doc / template / block
astryx component --list        # 149 components by category
astryx template --list         # page + block recipes
astryx docs <topic>            # color, layout, motion, tokens, typography, etc.
astryx swizzle <Name>          # eject component source for deep customization
astryx theme                   # theme tools
astryx upgrade --apply         # run after any @astryxdesign/core bump
```

### Astryx rules

- No `<div>` — components do all layout/spacing. Full page -> AppShell; sidebar nav -> SideNav.
- Frame first: pick the shell and budget regions in px BEFORE writing content (`astryx docs layout`).
- Dense data = rows (Table, List/Item) edge-to-edge — never Card-wrapped list items.
- Custom styling: component props first; else style/className with tokens — `var(--color-*|--spacing-*|--radius-*)`. No raw hex/px.
- Tokens for every value (`astryx docs tokens`). Brand/accent via `astryx theme` — never override `--color-*` in `:root`.

### Astryx Vite setup (verified working)

Astryx ships as raw TypeScript + StyleX source. Requires `@astryxdesign/build` (not just `@stylexjs/unplugin`):

```ts
// vite.config.ts — copy from site/vite.config.ts
import {astryxStylex} from '@astryxdesign/build/vite';
// astryxStylex() is spread (...) because it returns an array of plugins
// react() must come AFTER astryxStylex
```

Key requirements:
1. `astryxStylex()` spread as plugin array, `react()` after it
2. `optimizeDeps.exclude`: `['@astryxdesign/core', '@astryxdesign/theme-neutral']`
3. Resolve alias: `@astryxdesign/core` -> `node_modules/@astryxdesign/core/src`
4. Browserslist in `package.json`: `"last 1 Chrome version"`
5. CSS order in `main.tsx`: `reset.css` -> `theme-neutral/theme.css` -> `index.css`

### Astryx component prop conventions (verified)

These differ from what you'd guess:

| Component | Common mistake | Correct prop |
|---|---|---|
| `Heading` | `size="display-2"` | `level={2} type="display-2"` |
| `Text` | `variant="label"` | `type="label"` |
| `VStack`/`HStack` | `gap="spacing-4"` | `gap={4}` (number literal) |
| `Grid` | `import from Layout` | `import {Grid} from '@astryxdesign/core/Grid'` |
| `TopNav` | `wordmark=` | `heading=` |
| `TopNavItem` | `selected=` | `isSelected=` |
| `SideNavHeading` | `children` | `heading` prop (string) |
| `SideNavItem` | `children` | `label` prop (string) |
| `SideNavSection` | no title | `title` prop (string) |
| `Collapsible` | `<Trigger>` / `<Content>` children | `trigger` prop (ReactNode) |
| `LayoutFooter` | `@astryxdesign/core/LayoutFooter` | `@astryxdesign/core/Layout` |

### Astryx imports (verified)

```tsx
// Components — per-category subpath imports
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Heading';
import {Card} from '@astryxdesign/core/Card';
import {TopNav, TopNavItem} from '@astryxdesign/core/TopNav';
import {VStack, HStack, Layout, LayoutPanel, LayoutFooter} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {SideNav, SideNavItem, SideNavSection} from '@astryxdesign/core/SideNav';
import {Collapsible} from '@astryxdesign/core/Collapsible';
import {Avatar} from '@astryxdesign/core/Avatar';

// Theme
import {Theme} from '@astryxdesign/core/theme';
import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';

// CSS (in main.tsx — order matters)
import '@astryxdesign/core/reset.css';
import '@astryxdesign/theme-neutral/theme.css';
```

## File structure

```
site/src/
  main.tsx                    — Theme provider + CSS imports
  App.tsx                     — React Router: / + /docs
  theme/appleTheme.ts         — defineTheme() with Apple color tokens
  routes/
    LandingPage.tsx            — Scroll narrative (all sections)
    DocsPage.tsx               — Astryx SideNav + Layout
  components/
    layout/TopNav.tsx          — Astryx TopNav
    layout/Footer.tsx          — Astryx LayoutFooter
    landing/Hero.tsx           — Full-bleed hero
    landing/Capabilities.tsx   — Voice/Vision/Memory grid
    landing/HowItWorks.tsx     — 3-step pipeline
    landing/Thesis.tsx         — "The third device"
    landing/Research.tsx       — CHI '26 paper
    landing/OpenSource.tsx     — GitHub CTA
    landing/Team.tsx           — Sam + Laxman
    landing/FAQ.tsx            — Collapsible FAQ
    docs/DocsLayout.tsx        — SideNav + content
```

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

## Key domain terms

| Term | Meaning |
|---|---|
| Pendant | The physical Aura wearable hardware device |
| AI Pipeline | The 4-layer cloud AI: Deepgram -> Groq/GPT-4o -> Pinecone |
| BOM | Bill of Materials — the hardware component list and costs |
| Astryx | Meta's open-source React + StyleX design system (149 components) |

## Workflow

`brainstorm -> grill -> prd -> to-issues -> tdd -> ship`

All issues are tagged `website` to distinguish from firmware/backend issues.
