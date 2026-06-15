# Aura Website Architecture & Context

This document provides context, design standards, and technical specifications for the Aura Wearable AI public marketing website.

## Technology Stack
- **Architecture**: Static website, no build step. Served via GitHub Pages.
- **Styling**: Tailwind CSS (loaded via CDN with custom configuration in `js/tailwind-config.js`) + Vanilla CSS files in `css/`.
- **Interactions**: GSAP for animations + Lenis for smooth scrolling.
- **Dynamic Icons**: Apple SF Symbols mapped and rendered client-side using native SVG outlines via `js/sf-symbols.js`.

---

## Directory Structure

```
website/
├── index.html          # Homepage (Overview, key highlights, Exploded View diagram)
├── about.html          # About Page (Builder story, values, team members)
├── ai.html             # AI Pipeline (Deepgram -> Groq/GPT-4o -> Pinecone)
├── docs.html           # Documentation (Assembly guide, firmware flashing, RAG setup)
├── manifesto.html      # Manifesto (The Third Device hypothesis, calm technology)
├── favicon.svg         # Site favicon
├── css/
│   ├── global.css      # Core HSL color variables, fonts, and reset styles
│   ├── nav.css         # Frosted-glass navbar custom classes
│   ├── docs.css        # Documentation-specific layout rules
│   └── style.css       # Layout helper classes (.btn-primary, .spec-card, etc.)
└── js/
    ├── liquid-glass.js # Interactive navigation bar material simulation
    ├── sf-symbols.js   # Client-side dynamic Material Symbols -> SF Symbols SVGs mapper
    └── tailwind-config.js # Custom configuration extensions for Tailwind
```

---

## Design Token Reference

The design tokens are defined as CSS variables in [global.css](file:///D:/PROJECTS/2026/aura/website/css/global.css) and mirrored in the Tailwind configuration:

| Token | CSS Variable | Value | Description |
|---|---|---|---|
| **Action Blue** | `--color-action-blue` | `#0066cc` | Universal interactive button/link color |
| **Ink (Light)** | `--color-ink` | `#1d1d1f` | Body text on light canvases |
| **Parchment** | `--color-canvas-parchment` | `#f5f5f7` | Apple-style off-white section background |
| **White** | `--color-canvas-white` | `#ffffff` | Primary clean card/body background |
| **Charcoal** | `--color-canvas-dark` | `#272729` | Premium dark mode canvas section |
| **Display Font** | `--font-display` | `-apple-system...` | SF Pro Display typeface stack |
| **Text Font** | `--font-text` | `-apple-system...` | SF Pro Text typeface stack |

---

## Premium Apple-Style Conventions

1. **Typography**: Always use Apple's native system stack. Apply `-0.02em` letter-spacing (`tracking-tight`) to headings $\geq$ 17px.
2. **Buttons & Links**: Primary actions use the pill capsule (`rounded-full`) styled in Action Blue (`#0066cc`).
3. **No Shadows**: Avoid generic card/button box-shadows. Use alternating section canvases (White $\leftrightarrow$ Parchment $\leftrightarrow$ Charcoal) to create visual division.
4. **Frosted Glass (Liquid Glass)**: The global navbar (`#navbar`) utilizes backdrop filters for a poured-glass effect (`backdrop-filter: blur(20px) saturate(180%)`) with dynamic scroll-velocity adjustments via `js/liquid-glass.js`.

---

## Dynamic SF Symbols (`js/sf-symbols.js`)

To maintain clean HTML templates and fast initial page loads, Google Material Icon tags (e.g. `<span class="material-symbols-outlined">settings</span>`) are intercepted client-side on `DOMContentLoaded` and replaced with beautiful, custom-designed SVG representations of Apple's official SF Symbols:
- Consistently styled at **1.5px stroke width** to match the SF Pro typography weight.
- Use `stroke="currentColor"` so they automatically inherit active Tailwind color classes (like `text-accent-blue`).
- Scalable naturally alongside text sizes using classes like `text-3xl` or `text-6xl`.

---

## TDD & Layout Validation

All modifications must run against the test suite located in `scratch/`. To run the validation suite:

```powershell
node scratch/run_tests.js
```

The validation suite verifies:
1. Exact presence of exactly **one** navbar and footer per page.
2. Frosted glass CSS height properties (exactly `52px`).
3. Alignment rules and typography limits in the docs sidebar and headers.
4. Absence of unresolved image placeholder strings.
