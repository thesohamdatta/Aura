---
name: apple-aura-frontend
description: Build and style the 5-page Aura Wearable AI website following Apple design system standards and Framer aesthetics. Use when editing or creating web pages (index, about, ai, docs, manifesto) for the Aura static website.
---

# Apple Aura Frontend Design Skill

This skill enforces strict Apple-style product-page aesthetics and Framer layouts across the five core pages of the Aura Wearable AI website: **Home**, **About**, **AI**, **Docs**, and **Manifesto**.

## Quick Start

Every page must pull from the central CSS variables mapping in `global.css` and use native Apple system typography and Action Blue targets:

```css
:root {
  --primary: #0066cc; /* Action Blue */
  --ink: #1d1d1f;     /* Near-Black Text */
  --canvas-parchment: #f5f5f7; /* Apple Off-White */
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
}
```

## Workflows

### 1. Replicating the auraos.framer.ai Vibe
* **Layout Grid:** Use symmetric 1-column layouts for hero tiles and 2-column or 3-column grids for capabilities. Always center product vector SVGs with substantial whitespace (80px padding).
* **Frosted Glass:** Navbars use `backdrop-filter: blur(20px) saturate(180%); background: rgba(255,255,255,0.72)`.
* **Alternating Canvas Blocks:** Stack sections with alternating backgrounds (White $\leftrightarrow$ Parchment $\leftrightarrow$ Charcoal) to segment details without borders.

### 2. Multi-Page Structure Requirements

* **Home (`index.html`):** The catalog museum. Features the inline pendant SVG, RAG simulator widget, and isometric exploded hardware diagram.
* **About (`about.html`):** The builder story. A minimalist layout detailing the project's background from Pune, India, and open-source contribution guidelines.
* **AI (`ai.html`):** Technical context pipeline. Explains the perception layers (Deepgram Nova-3, GPT-4o, Pinecone, RAG contextual chunking) using high-contrast cards.
* **Docs (`docs.html`):** Hacker's assembly manual. Monospace lists (`font-family: var(--font-mono)`) detailing how to print the case, flash firmware, and deploy self-hosted RAG backend.
* **Manifesto (`manifesto.html`):** Anti-smartphone thesis ("The interface became the cage"). Large-format, wide-leading editorial columns focusing on calm, screenless design.

## Verification Checklist
- [ ] SF Pro native system font fallback stack is applied to body and headers.
- [ ] Underlined links or buttons utilize Action Blue (`#0066cc`) exclusively.
- [ ] No image placeholder text is present; all graphics are coded inline as SVG layers.
