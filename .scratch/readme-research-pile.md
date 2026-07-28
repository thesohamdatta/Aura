# README research pile (raw material — do not publish)

Source: codebase scan + readme-researcher brief. Read-only quarry for writing-shape.

## Locked decisions so far

- Primary reader: builders (clone / flash / contribute)
- Secondary skim: founders / VCs / press get thesis + images, then leave
- Tone: CONTEXT.md — certainty, no hype, no exclamation marks
- Opening: **A** — pendant first (hero written in README.MD)

## Grounded for the reader (running)

- Aura is a screenless voice-first pendant
- Open source, MIT, ~$50 BOM, XIAO ESP32-S3 Sense
- Visual: `Assets/hero/123456l.png`
- Third-device thesis (PC / phone / no-screen wearable); manifesto + website linked
- Stack cut: hardware, firmware, backend, app, website
- System diagram: `Assets/diagrams/system_architecture.png`
- Build hub → docs/guides + CONTRIBUTING
- Hardware strip + MCU table + CASE.stl
- Community links + close image
- README spine complete (opening A through close)

## Product one-liner (canonical)

Aura is an open-source, screenless, voice-first AI pendant on the XIAO ESP32-S3 Sense.
Built by a 4-person undergrad team in Pune. BOM ~$50 USD. MIT.

## Manifesto fragments (mine carefully — short only)

- Humans need a third device.
- PCs create. Phones consume and pull attention.
- Wearables failed by adding screens.
- Aura: utility + connectivity without demanding attention.
- "Less distraction. More done."
- "We were not like this before." (CONTEXT tone ref)

## Repo pillars (link targets)

| Pillar | Path | One job |
|---|---|---|
| Hardware | `hardware/CASE.stl` | 3D-printable case (no README yet) |
| Firmware | `firmware/readme.md` → `docs/guides/firmware-setup.md` | Flash / capture / BLE |
| Backend | `backend/README.md` → `docs/guides/backend-setup.md` | STT / vision / RAG / chat |
| App | `app/README.md` → `docs/guides/app-setup.md` | Android companion |
| Website | `website/` (5 pages) | Marketing + manifesto + public docs |
| Policy | `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `LICENSE` | Community |

## Nested README pattern to preserve

Signal banner → image → Quick Start → structure → DEEP DIVE blockquote to guides.

## Visual shortlist

| Role | Path |
|---|---|
| Brand hero | `Assets/hero/123456l.png` |
| System map | `Assets/diagrams/system_architecture.png` |
| Assembly / BOM | `Assets/hero/circuit assemly.png` or `ALL COMPONENTS.png` |
| Hardware strip | `aura 2.png`, `internal view 2.jpg`, `exploded view.jpg` |
| App (optional, lower) | `Assets/hero/software_mockups.jpg` |
| Close | `Assets/hero/hero image 3.png` |

## Facts to normalize

- BOM: ~$50 (not $30 badge / $60 caption)
- Pipeline: 4 layers (not root's current 3)
- Battery: website BOM — 150mAh LiPo × 6 (aligned across README, hardware, firmware guide, website/docs.html)
- Encoding: rewrite clean UTF-8
- Do not link `Assets/MAIN/` (missing)

## What belongs OUT of root README

Full setup runbooks, agent docs, ADRs, design tokens, long manifesto, AGI roadmap, duplicate BOM tables, secrets.

## Current root problems

- No website / guides / CONTRIBUTING links
- Section numbering starts at 2
- Hype roadmap ("Path to AGI Wearables")
- Use-case table duplicates website job
- Broken CONTRIBUTING anchor to mobile setup
- Mojibake throughout

## Proposed rearranged spine

1. Hero
2. Thesis (short)
3. System map + stack links
4. Build hub (guides)
5. Hardware strip + STL
6. Open source / community links
7. Close

## Audience jobs

Builder: What is it → where do I go → flash/run in 60s path.
Skim: Pendant exists → third-device thesis → open + ~$50 → website.
