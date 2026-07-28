---
name: stitch-wireframe-prompt
description: Generate high-fidelity Google Stitch wireframe prompts for Aura website pages. Use when asked to generate a Stitch prompt, create wireframe prompts, or prepare website designs for Google Stitch.
---

# Stitch Wireframe Prompt Generator

Generate high-fidelity Google Stitch wireframe prompts grounded in Aura's design axioms and current codebase structure.

## Core Axioms (Single Source of Truth)

Inline reference loaded for all branches:

- **Palette**: `#ffffff` canvas (primary), `#f5f5f7` parchment (alternating). Zero dark sections.
- **Typography**: SF Pro Display (headings, -0.02em tracking), SF Pro Text 17px (body). Hero H1: 80px, H2: 56px, Card H3: 21px.
- **Tonal Layering**: Background contrast only (white on parchment, parchment on white). Zero box-shadows, zero card borders.
- **Shapes**: Pills (9999px radius) for CTAs. Cards: 18px radius.
- **Leading Anchors**:
  - `liquid glass`: Fixed frosted glass navbar (`blur(20px)`, transparent top) and floating hero pill CTA.
  - `bento`: 3-column white card grid on parchment background.
  - `pill`: Action blue (`#0066cc`) rounded button.

---

## Execution Steps

### 1. Extract Target Page Structure
Read the target HTML file (e.g., `index.html`, `about.html`, `ai.html`, `docs.html`, `manifesto.html`).
List all section headers, content blocks, and layout columns in exact document order.

### 2. Prune No-Ops
Remove implementation-specific artifacts that Stitch cannot render visually:
- `aria-*` attributes and accessibility tags
- CSS transition/animation keyframe details
- Internal event listeners or script imports

### 3. Apply Design Axioms
Map every extracted section to the co-located design axioms:
- Set background to pure white `#ffffff` or parchment `#f5f5f7`
- Replace card shadows/borders with **tonal layering**
- Insert **liquid glass** nav and hero pill anchors

### 4. Format Prompt Output
Structure the output artifact with:
1. Design Axioms summary table
2. Page-by-page section breakdown (Desktop 1440px & Mobile 375px)
3. Required deliverables (Wireframe screens + Component reference panel)

---

## Completion Criteria

The step is complete ONLY when all conditions pass:
1. Every section in the source HTML file is represented in the prompt output.
2. Zero dark-mode background sections exist in the prompt.
3. Leading anchor words (`liquid glass`, `bento`, `tonal layering`, `pill`) are used consistently throughout.
4. Output is saved to `stitch_prompt.md` in the artifact directory.
