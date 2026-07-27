# Aura: Project Context

## What this is

Aura is an open-source, screenless, voice-first AI pendant. Worn around the neck. Built by a 4-person undergraduate team (Soham Datta, AI Lead; Laxman Pujari, Hardware Lead) in Pune, India. Total bill of materials: about $50 USD. MIT licensed.

## Domain Glossary

| Term | Definition |
|---|---|
| **Pendant** | The physical Aura hardware, a roughly 42mm sphere worn on a lanyard. |
| **AI Pipeline** | The 4-layer cloud processing: Deepgram (STT), Groq Llama-3 (LLM), GPT-4o (vision), Pinecone (RAG memory). |
| **BOM** | Bill of Materials, the list of hardware components and their costs. |
| **MCU** | Microcontroller Unit, the XIAO ESP32-S3 Sense that runs the firmware. |
| **Overline** | The small monospace label above section headings (e.g. "WHAT IS AURA"). |
| **Section-black** | A full-bleed `background: #000` section used for contrast. |
| **Manifesto** | The essay page, "The Third Device Hypothesis". |
| **The Website** | The 5-page marketing site in `website/`. |

## Design Principles

1. Apple philosophy. Generous whitespace, editorial typography, product as protagonist.
2. Strict light mode. Pure white (#ffffff) is the primary canvas; parchment (#f5f5f7) is the alternating section. No dark canvas background sections anywhere.
3. Liquid glass navigation. A fixed frosted glass navbar (blur 20px, transparent over hero) and a floating pill CTA.
4. Certainty, not excitement. The tone is a scientist who watched *Her* and felt something.
5. No exclamation marks. Facts only, measured specs, honest limitations.
6. Screenless is the product. The pendant image is always the visual hero.
7. Open source as identity. MIT, GitHub links, and OSS acknowledgements are first-class.

## Architecture

- Single codebase: Vanilla HTML/CSS/JS in the `website/` directory.
- No build step. No bundler, no framework, no React.
- CDN dependencies: Tailwind CSS and Lucide icons.
- Deployment: GitHub Pages via `.github/workflows/deploy-website.yml`.
- Five pages: `index.html`, `about.html`, `ai.html`, `docs.html`, `manifesto.html`.

## Technical Decisions

### Icon System (ADR-0001)

**Decision:** Lucide is the single icon system for the HTML website.

**Rationale:** Lucide has a vanilla JS package that works without React. It is tree-shakeable, has no font-loading overhead, and replaces the broken Material Symbols system.

**Status:** Accepted.

### CSS Organization (ADR-0002)

**Decision:** Refactor CSS into component files. Split `style.css` into focused modules. Remove `!important` usage and deduplicate code.

**Rationale:** `style.css` (510 lines) mixes components, animations, layout, and overrides. Splitting improves maintainability.

**Status:** Accepted.

### Dead Code Cleanup (ADR-0003)

**Decision:** Delete `sf-symbols.js`, `aura-icons.js`, and the icon utility classes in `global.css`.

**Rationale:** These files are never loaded by any page. They add confusion without value.

**Status:** Accepted.

## Tone Reference

> "We were not like this before."
> — The Manifesto

The voice is direct, slow, certain. Never hype. Never startup-speak.
