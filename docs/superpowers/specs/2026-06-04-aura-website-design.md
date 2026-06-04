# Design Spec: Aura Wearable AI Website Overhaul

**Date:** 2026-06-04  
**Status:** Draft / Pending Review  
**Aesthetic Theme:** Apple-style Minimalist Tech (Reverent minimalism, strict grids, native typography, monochrome canvas)

---

## 1. Objectives & Scope
The objective is to completely overhaul the homepage (`web/index.html`) of the Aura Wearable AI project. The current landing page is a placeholder and lacks the visual polish, premium feel, and interactive elements expected of a cutting-edge open-source hardware product.

We will restructure the landing page to follow Apple's web design system rules as analyzed in `DESIGN.md`, prioritizing clean layout, high-contrast monochrome surfaces, native typography, and fluid micro-interactions.

---

## 2. Design System & Tokens
Derived directly from the Apple-style analysis:

### A. Colors
* **Action Blue** (`#0066cc`): The single brand interactive color. Used for text links, primary pill buttons, and focused borders.
* **Canvas Background** (`#ffffff`): For light-themed rows and card elements.
* **Canvas Parchment** (`#f5f5f7`): Apple signature off-white, used for alternating sections and the footer.
* **Dark Tile Surface** (`#272729`): Default charcoal background for alternating dark sections.
* **Pure Black** (`#000000`): Pinned for top navbar, media sections, and deep background layers.
* **Text Ink** (`#1d1d1f`): Near-black ink color for headlines and body text on light canvases (reduces visual harshness).
* **Text on Dark** (`#ffffff`): For headers and paragraphs in dark sections.
* **Body Muted** (`#86868b`): For secondary copy, footnotes, and descriptions.

### B. Typography
* **Headings (Display):** `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif`. Display sizes utilize negative letter-spacing (e.g., `-0.02em` or `-0.28px`) for Apple's tight typographic hierarchy.
* **Body & UI:** `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif`.
  * Display sizes: 40px–56px, weight 600.
  * Body copy: 17px, weight 400, line-height 1.47.
  * Captions/Labels: 12px–14px, weight 600/400.

### C. Shapes & Elevation
* **Pill Radius** (`9999px`): Used for primary action buttons, search, and chips.
* **Utility Radius** (`8px`): For secondary buttons, smaller cards, and media thumbs.
* **Card Radius** (`18px`): For store grid items, comparison panels.
* **Borders:** `1px solid #d2d2d7` (light mode) or `1px solid #333336` (dark mode).
* **Shadows:** No shadows on buttons, navigation, or text. Exactly one soft drop shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) is applied to product imagery/renders resting on surfaces.

---

## 3. Page Structure & Alternating Rhythm
The homepage (`index.html`) will be built as a stack of edge-to-edge content "tiles." Section transitions are defined by color breaks rather than borders:

1. **Top Nav (Black, 44px):** Fixed header displaying "AURA" and key navigation options.
2. **Sub Nav (Frosted Parchment, 52px):** Frosted glass effect, featuring the edition name and a "Build Yours" primary Action Blue button.
3. **Tile 1: Hero (Parchment background):** Large geometric layout. A custom SVG vector graphic of the Aura wearable fading in, framed by a tight display headline and clean description.
4. **Tile 2: The Dilemma (Pure Black background):** Philosophical contrast section highlighting phone screen time vs ambient intelligence. Displays animated statistics counters (e.g., "96x unlocks", "4 hrs staring").
5. **Tile 3: Features & Capabilities (White background):** 3-column minimalist layout explaining voice capabilities, always-on perception, and open-source nature.
6. **Tile 4: Live Memory Chat Simulator (Dark Tile background):** Custom interactive widget mimicking memory retrieval. The user clicks preset queries or triggers typing prompts to see the RAG flow. Includes SVG waveforms.
7. **Tile 5: Hardware Exploded View (Parchment background):** An interactive schematics container allowing hover-expansion of case layers, XIAO microcontroller, and LiPo battery specs.
8. **Tile 6: Comparison (White background):** Sleek, flat table contrasting Aura's specifications against Humane AI Pin, Limitless, and Omi.
9. **Footer (Parchment background):** Apple-dense footer layout with relaxed leading columns (`line-height: 2.41`) for links, ending with fine-print licensing text.

---

## 4. Interactive Components & Animations
* **GSAP ScrollTrigger reveals:** Sections and copy reveal sequentially on scroll. Hero elements fade and lift vertically.
* **Audio Waveforms:** CSS-animated bars simulating live speech capture in the chat emulator.
* **Exploded View Hover:** CSS transitions separating SVG components on the Y-axis to illustrate modularity.
* **Dark/Light Mode Toggle:** Swapping variables smoothly across the layout.

---

## 5. Implementation Steps
1. **Design Tokens:** Define CSS variables in `web/css/global.css` based on the Apple theme.
2. **HTML Cleanup:** Restructure `web/index.html` with clean semantic tags and exact typography classes.
3. **Styles Overhaul:** Create `web/css/home.css` containing custom grid systems and interactive elements.
4. **Animations & Interactive Logic:** Implement ScrollTrigger triggers and chat simulator code in `web/js/home.js`.
5. **SVG Illustration:** Code inline SVGs for the product hero render and hardware layers.
