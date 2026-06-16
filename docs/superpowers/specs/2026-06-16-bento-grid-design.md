# Bento Grid Specification (Approach A)

## Metadata
* **Topic:** Core Capabilities Bento Grid Overhaul
* **Date:** 2026-06-16
* **Status:** Approved
* **Reference Images:** 
  - `Screenshot 2026-06-14 235153.png` (AirPods Pro Carousel captions/visual styles)
  - `b28ee5205b8ec0fd9fb09a4ed4bf42c7.jpg` (iPhone 15 Bento Grid)
  - `90eb02787ec594683c2f912b2bf3c479.jpg` (MacBook Pro Bento Grid)
  - `2f75114f065504290071e9cf95b6b79f.jpg` (iPhone 16 Bento Grid with 3D inset pockets)

---

## 1. Goal
Overhaul the "Core capabilities" section in `index.html` into a highly-polished, Apple-standard specs Bento Grid. Replace the simple three-card grid with a rich multi-size grid highlighting both core software capabilities (Voice, Vision, Memory) and hardware specs (Processor, Battery, Weight, Case, Connectivity).

---

## 2. Grid Structure (Desktop/Tablet/Mobile)
* **Desktop Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
* **Card Geometry:**
  * **Card 1: Voice** -> `lg:col-span-2 h-[400px]` (Row 1, Cols 1-2)
  * **Card 2: Vision** -> `lg:col-span-2 h-[400px]` (Row 1, Cols 3-4)
  * **Card 3: Memory** -> `lg:col-span-2 h-[380px]` (Row 2, Cols 1-2)
  * **Card 4: ESP32-S3 Chip** -> `lg:col-span-1 h-[180px]` (Row 2, Col 3)
  * **Card 5: Battery** -> `lg:col-span-1 h-[180px]` (Row 2, Col 4)
  * **Card 6: Weight (17g)** -> `lg:col-span-1 h-[180px]` (Row 3, Col 1)
  * **Card 7: Enclosure** -> `lg:col-span-1 h-[180px]` (Row 3, Col 2)
  * **Card 8: Connectivity (BLE / USB-C)** -> `lg:col-span-2 h-[180px]` (Row 3, Cols 3-4)
  * **Card 9: Built for Builders** -> `lg:col-span-4 h-[500px]` (Row 4, Cols 1-4)

---

## 3. Styling Tokens (3D Pocket Look)
* **Bento Grid Container Section:** Background color is Parchment (`#f5f5f7`).
* **Card Outer container class:**
  * Background: White (`#ffffff`) or Charcoal (`#1d1d1f`).
  * Corners: `rounded-[28px]` or `rounded-3xl` (`rounded-[32px]` for larger cards).
  * Inner border: `border border-[#d2d2d7]/30`.
  * 3D Inset Shadows: `shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]`.
  * Focus ring: `outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`.
* **Expander Circle `+` Button:**
  * Inline SVG circular plus button positioned in the bottom-right corner.
  * Interactive states: expands slightly and scales on card hover.

---

## 4. Card Component Definitions

### Card 1: Voice (Purple/Pink Siri Orb)
* **Text:** Title "Voice" (size `text-caption` in gray), Bold header "Captures every detail" (size `text-display-sm`), description "0.5s transcription. Every word stored as meaning, not just text."
* **Visual:** Concentric radial gradients in purple/pink pulsing behind a glassmorphic circular microphone emblem.

### Card 2: Vision (Camera Lens Render)
* **Text:** Title "Vision", Bold header "Understands your world", description "2MP OV2640 with on-command capture. Processes scenes in under 2s."
* **Visual:** Multi-ring metal lens casing vector with blue/green glare reflections and shadow depth.

### Card 3: Memory (RAG Vector Nodes)
* **Text:** Title "Memory", Bold header "Never forgets", description "Vector-based retrieval. Search your life by context and meaning."
* **Visual:** Inset perspective-rotated dot grid representing pinecone memory nodes.

### Card 4: ESP32-S3 Processor Chip (Square Card)
* **Styling:** Dark background (`bg-[#1d1d1f]`), text color `#f5f5f7`.
* **Content:** XIAO micro-chip render, labeled "ESP32-S3".

### Card 5: Battery (Square Card)
* **Content:** Horizontal green capsule progress indicator showing "10h continuous streaming".

### Card 6: Weight (Square Card)
* **Content:** Stylized large "17g" typographic visual indicating ultra-light weight.

### Card 7: Enclosure (Square Card)
* **Content:** 3D printer nozzle vector or casing silhouette indicating PLA/PETG open enclosure.

### Card 8: Connectivity (Horizontal Card)
* **Content:** Dual specs for "BLE 5.0" and "USB-C" side-by-side with minimal icons.

### Card 9: Built for Builders (Large Card)
* **Text:** Spans left side (50% width), "Open Architecture", "Built for builders.", "Aura is a manifesto for the open-source hardware movement."
* **Visual:** VS Code/Xcode compiler window (50% width) showing ESP32 compilation stream.

---

## 5. Acceptance Criteria
1. Grid fits perfectly into 4 columns on large screens.
2. Layout is responsive down to tablet (2 columns) and mobile (1 column).
3. No console layout errors or broken assets.
4. Pass validation suite `run_tests.js`.
