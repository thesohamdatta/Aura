---
name: minimalist-ui
description: Minimalist UI principles for the Aura website. Use when building or reviewing UI components, layouts, or interactions for the Aura website. Enforces restraint, whitespace, and calm aesthetics.
---

# Minimalist UI

Build with **restraint**. Every element earns its place through function, not decoration.

## Leading word: restraint

When in doubt, remove. The best interface is the one that doesn't need to exist.

## Core principles

### 1. Space is content

Whitespace is not empty — it is the primary structural element. Use generous spacing to create hierarchy without borders, shadows, or backgrounds.

- Section padding: minimum 80px vertical
- Between elements: 24-48px
- Within elements: 16-24px
- Never use borders to separate — use space

### 2. One idea per section

Each section communicates exactly one concept. If you need to explain two things, create two sections with space between them.

### 3. Typography as structure

Use type scale and weight to create hierarchy, not color or decoration.

- Headlines: tight tracking (-0.02em), bold weight
- Body: 17px, 1.47 line-height
- Labels: 14px, uppercase, wide tracking
- Never use more than 2 weights per page

### 4. Color as signal

Color communicates state, not decoration. Use the Apple palette:

- Action Blue `#0066cc` — interactive elements only
- Ink `#1d1d1f` — text on light surfaces
- Parchment `#f5f5f7` — alternating canvas
- White `#ffffff` — primary canvas
- Never use color for decoration

### 5. Motion with purpose

Animation communicates change, not decoration. Every animation must answer: what state change does this communicate?

- Duration: 200-400ms for micro-interactions
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94) for natural feel
- Never animate layout properties (width, height, margin)
- Always respect `prefers-reduced-motion`

### 6. Icons as text

Icons are text, not decoration. Use consistent iconography:

- One icon library per project (Lucide for Aura)
- Same stroke weight as body text (1.5px)
- Same color as surrounding text
- Never use icons purely for visual interest

## Completion criteria

- [ ] Every element has a functional purpose
- [ ] Whitespace creates clear visual hierarchy
- [ ] No decorative borders, shadows, or backgrounds
- [ ] Typography carries structural weight
- [ ] Color is used only for state/signal
- [ ] Animations communicate state changes
- [ ] Icons are consistent and purposeful
