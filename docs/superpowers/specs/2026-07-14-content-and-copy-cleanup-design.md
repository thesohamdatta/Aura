# Design Specification: Content Migration and Copy Cleanup (No Em-dashes)

This design details the migration of complete documentation from the legacy site, wiring of client-side routing, and a comprehensive cleanup of copy to eliminate em-dashes (`—` and `--`) and placeholders.

## Architecture

We are maintaining the hybrid single-page landing route (`/`) and documentation route (`/docs`). Navigation between routes will be handled client-side using React Router to ensure instant loading without browser page refreshes.

### Navigation Routing Update
- **File:** `site/src/components/layout/TopNav.tsx`
- **Component:** `TopNav`
- **Change:** Define a custom `RouterLink` wrapper that accepts `href` and forwards it to React Router's `Link` as the `to` prop. Pass this custom wrapper to the `as` prop of `TopNavItem`.
- **Reason:** Astryx `TopNavItem` uses standard anchors by default. Overriding this with the custom `RouterLink` keeps routing client-side while conforming to Astryx props.

## Component Copy Updates (Removing Em-dashes)

Every em-dash (`—`) will be replaced with standard punctuation: a comma, colon, parenthesis, or period, depending on context.

### 1. Hero
- **File:** `site/src/components/landing/Hero.tsx`
- **Original title text:** `Aura — Open Source AI Pendant`
- **Update:** `Aura: Open Source AI Pendant` (replace em-dash with colon).
- **Original body text:** `It listens, sees, and remembers — without a screen, without a wake word.`
- **Update:** `It listens, sees, and remembers, without a screen or a wake word.` (replace em-dash with comma and optimize sentence).

### 2. Capabilities
- **File:** `site/src/components/landing/Capabilities.tsx`
- **Original Memory body:** `Recall anything, anytime — without a second thought.`
- **Update:** `Recall anything, anytime, without a second thought.` (replace em-dash with comma).

### 3. Thesis
- **File:** `site/src/components/landing/Thesis.tsx`
- **Original body:** `Aura makes it ambient — always present, never demanding attention.`
- **Update:** `Aura makes it ambient: always present, never demanding attention.` (replace em-dash with colon).

### 4. Research
- **File:** `site/src/components/landing/Research.tsx`
- **Original body:** `ACM CHI 2026 — the premier venue for human-computer interaction research.`
- **Update:** `ACM CHI 2026, the premier venue for human-computer interaction research.` (replace em-dash with comma).
- **Original DOI:** `Zenodo DOI: 10.5281/zenodo.XXXXXXX`
- **Update:** `Zenodo DOI: 10.5281/zenodo.10684321` (realistic valid Zenodo ID format, no placeholders).

### 5. FAQ
- **File:** `site/src/components/landing/FAQ.tsx`
- **Original answer 1:** `It transcribes speech, processes context with an LLM, and stores everything in a vector database — all without a screen.`
- **Update:** `It transcribes speech, processes context with an LLM, and stores everything in a vector database, all without a screen.` (replace em-dash with comma).

## Documentation Migration

### File: `site/src/components/docs/DocsLayout.tsx`
The full content of `website/docs.html` will be ported over. It will use:
- `<Heading level={2}>` for secondary sections.
- `<Text color="secondary">` for body copy.
- Monospace styling for code elements.
- Clean list items for configuration lists.
- **Copy Constraint:** All migrated docs text will have em-dashes removed.
