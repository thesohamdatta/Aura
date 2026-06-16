# Design Spec: Apple-Style off-white footer overhaul

## Overview
Overhaul the footers across all 5 pages of the Aura Wearable AI website (`index.html`, `about.html`, `ai.html`, `manifesto.html`, `docs.html`) to identically match the typography, spacing, hairline dividers, off-white background (#f5f5f7), and layout structure of Apple.com.

---

## 1. Visual Aesthetics & Background (Parchment/Off-White)
* **Background Color:** `#f5f5f7` (our global `--color-canvas-parchment` / `bg-canvas-parchment`).
* **Top Hairline Border:** `1px solid #d2d2d7` (`border-t border-[#d2d2d7]/50` or raw style override).
* **Typography:**
  * Brand wordmark uses SF Pro Display (`font-display` class).
  * Column headers, links, legal text, and breadcrumbs use SF Pro Text (`font-body` class).
* **Text Colors:**
  * Headers: `#1d1d1f` (near-black, font-weight: 600, font-size: 11px, letter-spacing: 0.08em).
  * Links: `#515154` (medium gray, font-size: 12px), hover color: `#1d1d1f` (near-black, transition-colors duration-150).
  * Tagline / Retailer line / Copyright: `#86868b` (light gray).

---

## 2. Layout & Content Sections

### Section A: Breadcrumb Row
At the top of the footer, immediately following the top hairline divider:
* **Format:** `Aura  ›  [Current Page]`
* **Chevrons:** Styled with `mx-2 text-[10px] text-[#86868b]`.
* **Current Pages:**
  * `index.html`: `Overview`
  * `about.html`: `About`
  * `ai.html`: `AI`
  * `manifesto.html`: `Dilemma`
  * `docs.html`: `Docs`
* **Spacing:** `py-4 mb-6 border-b border-[#d2d2d7]/35`.

### Section B: Main Grid (5 columns)
* **Desktop Grid:** `grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-8 md:gap-gutter`.
* **Column 1 (Brand/Intro):**
  * Brand wordmark: **Aura** (`text-[21px] font-semibold text-[#1d1d1f] mb-2`).
  * Tagline: `"The third device. Built in the open."` (`text-[13px] text-[#86868b] mb-6 leading-normal`).
  * GitHub Star CTA:
    * Pill button styled for light background.
    * Text: `⭐ Star on GitHub`.
    * Styling: `inline-flex items-center gap-[6px] text-[13px] text-[#515154] border border-[#d2d2d7] px-[14px] py-[6px] rounded-[20px] hover:border-[#86868b] hover:text-[#1d1d1f] hover:bg-black/5 transition-all duration-200 no-underline`.
* **Column 2 (BUILD):**
  * "Build Yours" → `docs.html#hardware`
  * "Firmware" → `docs.html#firmware`
  * "SDK" → `docs.html#backend`
* **Column 3 (LEARN):**
  * "How It Works" → `ai.html`
  * "The Dilemma" → `manifesto.html`
  * "Docs" → `docs.html`
* **Column 4 (COMMUNITY):**
  * "GitHub" → `https://github.com/thesohamdatta/aura` (target="_blank")
  * "Discord" → `#` (disabled: `aria-disabled="true" class="opacity-40 pointer-events-none"`)
  * "Ethics" → `#` (disabled: `aria-disabled="true" class="opacity-40 pointer-events-none"`)
* **Column 5 (PROJECT):**
  * "About" → `about.html`
  * "Intelligence" → `ai.html`
  * "Manifesto" → `manifesto.html`
  * "Overview" → `index.html`

### Section C: Retailer/Footnote Row
* **Text:** `More ways to build: Fork the GitHub repo or read our assembly guides. Need help? Contact thesohamdatta@gmail.com.`
* **Links:** "GitHub repo" (to `https://github.com/thesohamdatta/aura`), "assembly guides" (to `docs.html`), and "thesohamdatta@gmail.com" (to `mailto:thesohamdatta@gmail.com`) are styled as blue links: `text-[#0066cc] hover:underline`.
* **Spacing:** `pt-6 pb-4 border-t border-[#d2d2d7]/35 mt-8 text-[12px] text-[#86868b]`.

### Section D: Bottom Bar
* **Layout:** Flex row with space-between:
  * Left: `Copyright © 2026 Aura Project. MIT Licensed.` (text-[12px] text-[#86868b]).
  * Center/Links: `MIT License  |  Privacy  |  GitHub` (separated by inline vertical bars `|` with gap, styled at 12px, color `#86868b`, hover `#1d1d1f`).
  * Right (Location): `Pune, India` (acknowledging the team's origin in Pune).
* **Divider:** Above bottom bar `border-t border-[#d2d2d7]/35 pt-5 pb-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left mt-8`.

---

## 3. Mobile Responsiveness (< 768px)
* **Grid:** Collapses to 2 columns.
  * Brand column: spans 2 columns (`col-span-2`), with `mb-10`.
  * Nav columns: 2x2 grid.
* **Breadcrumbs / Retailer row / Bottom bar:** Centered alignment, stacked vertically on mobile.

---

## 4. Verification Criteria
* [ ] Background is off-white (#f5f5f7) across all pages.
* [ ] All dead link placeholders `#` carry `aria-disabled="true"`.
* [ ] Breadcrumb chevrons show correct navigation hierarchy.
* [ ] Bottom bar includes Pune, India on the right side.
* [ ] Footer fits mobile screen sizes without horizontal scroll.
