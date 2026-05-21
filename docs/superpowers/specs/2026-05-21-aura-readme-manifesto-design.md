# AURA README "Vision-Manifesto" Design Spec

**Goal:** Transform the root README.MD into a high-impact, cinematic "Single-Page Manifesto" that balances a premium product vision with a raw, industrial technical manual.

**Aesthetic:** **Brutalist Signal (Raw Precision)**
- **Palette:** Paper White (`#F5F3EE`), Signal Red (`#E63B2E`), Deep Black (`#111111`).
- **Typography Concept:** High-contrast scale. Bold Sans for headers, Massive Serifs for "Vision" statements, and Monospace for technical data.
- **Imagery:** High-resolution renders from `Assets/`, stylized with concrete/industrial textures.

---

## 1. Structure & Layout

### A. The Hero Section (The "Vision")
- **Visual:** A full-width banner using `Assets/MAIN/hero mockup of the applicatoin .webp` or a custom composite.
- **Headline:** 
  - `AURA` (Massive, Bold)
  - `Open-source AI wearable pendant. Sees it. Hears it. Remembers it.` (Serif Italic)
- **Badges:** A clean, horizontal line of monochrome badges (License, Tech Stack, Cost).

### B. The Manifesto (The "Why")
- **Concept:** A short, punchy section with high-contrast typography.
- **Key Statement:** 
  - "Most AI focuses on **screens**. We focus on **presence**."
  - "Most AI is a **tool**. AURA is a **sense**."
- **Visual:** A high-contrast macro shot of the hardware (e.g., `Assets/MAIN/hw-front.png`).

### C. The Artifacts (The "How It Works")
- **Layout:** Three high-impact cards or sections.
- **1. The Hardware:** Detailed exploded view render with callouts.
- **2. The Software:** Minimalist UI mocks of the Android app showing "Searchable Memories".
- **3. The Intelligence:** A raw ASCII-style or SVG diagram of the data pipeline (Local vs. Cloud).

### D. The Manual (The "Manifesto-Manual" Bridge)
- **Transition:** A massive "TECHNICAL SPECIFICATION" header in brutalist red.
- **Bill of Materials:** A clean, grid-based table with direct purchase links.
- **Build Guide:** Streamlined, numbered steps with collapsible "Deep Dives" for Firmware, App, and Backend.

---

## 2. Component Design

### The "Status" Indicator
- A monospace "SYSTEM OPERATIONAL" badge with a pulsing green dot at the top of the technical section.

### Interactive Elements (Markdown-compatible)
- Collapsible `<details>` blocks for troubleshooting to keep the main view clean.
- "Buy Now" styled buttons (using markdown links + image badges) for components.

---

## 3. Implementation Details

- **File:** Overwrite root `README.MD`.
- **Assets:** Utilize existing high-quality images from the newly renamed `Assets/` folder.
- **Formatting:** Use HTML tags within Markdown for advanced layout control (centering, image widths, spacing).

---

## 4. Success Criteria

- The README feels like a "digital instrument" rather than a standard GitHub page.
- A visitor understands the *vision* of the project in 5 seconds.
- A builder can find the *first step* of construction in 15 seconds.
