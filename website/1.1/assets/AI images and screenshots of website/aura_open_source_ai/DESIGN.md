---
name: Aura Open-Source AI
colors:
  surface: '#fcf8fb'
  surface-dim: '#dcd9dc'
  surface-bright: '#fcf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7ea'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#444748'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#747878'
  outline-variant: '#c4c7c8'
  surface-tint: '#5d5f5f'
  primary: '#5d5f5f'
  on-primary: '#ffffff'
  primary-container: '#ffffff'
  on-primary-container: '#747676'
  inverse-primary: '#c6c6c7'
  secondary: '#5d5e60'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe1'
  on-secondary-container: '#616365'
  tertiary: '#005cba'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffffff'
  on-tertiary-container: '#2474db'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e2e2e4'
  secondary-fixed-dim: '#c6c6c8'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#d7e3ff'
  tertiary-fixed-dim: '#aac7ff'
  on-tertiary-fixed: '#001b3e'
  on-tertiary-fixed-variant: '#00458e'
  background: '#fcf8fb'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
  text-secondary: '#6e6e73'
  accent-blue: '#0066cc'
  bg-parchment: '#f5f5f7'
typography:
  hero-h1:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.028em
  hero-h1-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  section-h2:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.028em
  section-h2-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  section-h3:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.47'
    letterSpacing: -0.022em
  overline:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.08em
  label:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-v-padding: 140px
  section-v-padding-mobile: 80px
  prose-max-width: 680px
  headline-max-width: 800px
  gutter: 24px
  margin-base: 32px
---

## Brand & Style

The brand personality is characterized by precision, openness, and effortless sophistication. It aims to evoke a sense of high-end hardware engineering combined with the accessibility of open-source software. The target audience includes tech enthusiasts, early adopters, and developers who value both aesthetic purity and functional transparency.

The design style is strictly **Minimalist** and **Corporate/Modern**, heavily inspired by the Apple "Product Page" aesthetic. It relies on massive, high-quality photography, generous white space, and a rhythmic alternation between white and parchment surfaces. Depth is achieved through color blocking rather than shadows or borders, creating a UI that feels architectural and structural.

## Colors

The palette is highly restrained to maintain a premium hardware feel. 

- **Primary Canvas:** Use `#ffffff` for the main page flow.
- **Alternating Sections:** Use `#f5f5f7` (Parchment) for full-width background blocks and internal card surfaces to create visual rhythm.
- **Typography:** Primary body text and headlines use `#1d1d1f` (Near-black). For subheads, captions, and non-essential metadata, use `#6e6e73` (Secondary Gray).
- **Interactive Elements:** Blue (`#0066cc`) is reserved strictly for text links and the primary "Build Yours" call-to-action.
- **Background Blends:** For specific software/app sections, use a subtle radial wash transitioning from a warm cream to a neutral light gray to simulate screen glow.

## Typography

The typography uses a systematic, humanist sans-serif approach (System Fonts/Inter) to convey a clean, functionalist voice.

- **Scale:** High contrast between Hero H1 and body text creates a sense of scale.
- **Kerning:** Tracking is tightened on larger headlines (-0.028em) to ensure the heavy weights feel cohesive and intentional.
- **Overlines:** Always used in uppercase with generous letter spacing to introduce sections.
- **Alignment:** Large headlines are typically centered or left-aligned within specific 800px containers. Body prose is restricted to 680px for optimal readability.

## Layout & Spacing

This design system uses a **Fixed Grid** philosophy centered around a maximum content width, though backgrounds bleed edge-to-edge.

- **Vertical Rhythm:** A strict 140px vertical padding separates major narrative sections, providing the "breathing room" characteristic of premium tech sites.
- **Grid:** On desktop, use a 12-column grid with a max-width of 1200px.
- **Containment:** Headlines are capped at 800px width and body text at 680px to prevent long line lengths and maintain a "storytelling" feel.
- **Mobile Adaptation:** At the 768px breakpoint, reduce vertical section padding to 80px and shift to a single-column layout with 20px side margins.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and flat surfaces.

- **Zero Shadows:** Do not use shadows of any kind. Depth is created by placing white elements on parchment backgrounds or vice versa.
- **Layering:** The UI is purely flat. If a component needs to feel "above" the background, it should be a card with a contrasting background color from the palette.
- **Z-Index:** High-level navigation is a sticky, frosted blur (Glassmorphism), but all other page elements remain grounded on the base canvas.

## Shapes

The shape language is "Squircle-adjacent," mirroring hardware industrial design.

- **Cards:** All cards must have a border-radius of 18px.
- **Buttons:** Primary buttons use a pill-shaped (fully rounded) geometry.
- **Containers:** No borders or strokes are permitted. Contrast is defined solely by the change in background color.

## Components

- **Buttons:**
  - *Primary (Build Yours):* Blue (`#0066cc`) background, white text, pill-shaped, no shadow.
  - *Secondary:* Text-only with a trailing chevron, using the Blue (`#0066cc`) accent color.
- **Cards:**
  - Use `#f5f5f7` when placed on a white background.
  - Use `#ffffff` when placed on a parchment background.
  - 18px radius, 32px internal padding.
- **Icons:**
  - Icons should be SF Symbols style: thin/regular weights, outlined, and always `#1d1d1f`.
- **Input Fields:**
  - Subtle parchment backgrounds with no borders. Focus states should be indicated by a thin blue ring or high-contrast text change.
- **Lists:**
  - Clean, borderless list items separated by whitespace or alternating row colors.
- **Product Feature Grid:**
  - Large-scale imagery on one side with H3 headlines and body text on the other, following the 680px prose constraint.