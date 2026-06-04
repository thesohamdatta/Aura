# Aura — Project Context

## What this is

Aura is an open-source, screenless, voice-first AI pendant. Worn around the neck.
Built by a 4-person undergraduate team (Soham Datta — AI Lead, Laxman Pujari — Hardware Lead) in Pune, India.
Total bill of materials: ~$50 USD. MIT licensed.

## Domain Glossary

| Term | Definition |
|---|---|
| **Pendant** | The physical Aura hardware — a ~42mm sphere worn on a lanyard |
| **AI Pipeline** | The 4-layer cloud processing: Deepgram (STT) → Groq Llama-3 (LLM) → GPT-4o (vision) → Pinecone (RAG memory) |
| **BOM** | Bill of Materials — the list of hardware components and their costs |
| **MCU** | Microcontroller Unit — the XIAO ESP32-S3 Sense that runs the firmware |
| **Scroll-scrub** | Canvas-based image sequence animation tied to scroll position (Apple's technique) |
| **Lenis** | `darkroomengineering/lenis` — the smooth scroll library used on the website |
| **Overline** | The small monospace label above section headings (e.g. "WHAT IS AURA") |
| **Section-black** | A full-bleed `background: #000` section used for contrast and drama |
| **Manifesto** | The essay page — "The Third Device Hypothesis" — not a dilemma page |
| **The Website** | The 5-page marketing site in `website/` — separate from `docs/` (technical docs) |

## Design Principles

1. **Apple philosophy** — generous whitespace, editorial typography, product as protagonist
2. **Certainty, not excitement** — the tone is a scientist who watched *Her* and felt something
3. **No exclamation marks** — facts only, measured specs, honest limitations
4. **Screenless is the product** — the pendant image must always be the visual hero
5. **Open source as identity** — MIT, GitHub links, OSS acknowledgements are first-class

## Architecture Constraints

- Website is static vanilla HTML/CSS/JS — no build step, no bundler, no framework
- GSAP and Lenis loaded from CDN
- All specs cited on the website are measured, not aspirational
- GitHub Pages deployment — all paths must be relative, no server-side features
- One CSS file per page + shared global.css and nav.css

## Tone Reference

> "We were not like this before."
> — The Manifesto

The voice is direct, slow, certain. Never hype. Never startup-speak.
