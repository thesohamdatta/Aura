# Design Spec: Global Apple Design & Layout Enhancements

This document specifies the global visual, layout, and typographic improvements to make the Aura website align perfectly with Apple's official AirPods 4/Pro product presentation standards.

---

## 1. Visual & Layout Refactors

### A. Values Grid Refactor (`about.html`)
- **Current State**: Symmetrical centered box layout with static icons.
- **Apple Style Target**: Left-aligned, high-radius rounded cards.
- **Specifications**:
  - Replace the 3 centered cards with left-aligned card containers.
  - **Classes**: `bg-surface-container-lowest p-8 rounded-[28px] flex flex-col justify-between min-h-[320px]` (no shadows, pure off-white canvas contrast).
  - **Elements Hierarchy**:
    1. **SVG SF Symbol**: Positioned at the top-left with a stroke of `1.5px` and color `text-accent-blue` (size `w-9 h-9`).
    2. **Bold Header**: E.g., *"Open Hardware. Built for all."* or *"Privacy. That's Aura."* (styled in bold SF Pro Display, size `text-section-h3`).
    3. **Description Paragraph**: Styled in standard grey body copy (`text-text-secondary`, line-height `1.4`).
    4. **Action Link**: A blue text link at the bottom: `Learn more about [Topic] >` using Action Blue (`#0066cc`) text.

### B. Big Typography Metrics Segment (`ai.html`)
- **Target**: High-contrast, large-format statistic callouts showcasing processing speed and hardware efficiency.
- **Specifications**:
  - Add a dedicated full-width metrics row (alternating canvas).
  - Each metric column consists of:
    1. **Top Overline Label**: E.g. *"Response latency"* in small, uppercase text (`text-[12px]`, `tracking-wider`, grey).
    2. **Huge Value Text**: Sized at `text-[56px] md:text-[72px]` (font weight `font-extrabold`, color `text-on-surface`, line-height `1`).
    3. **Brief Description**: Sized at `text-body` (`text-text-secondary`) explaining the metric context.
    4. **Asterisk/Footnote Link**: Points to a footnote section at the bottom of the page in small `text-[11px]` grey text.

---

## 2. Global Styling & Responsive Constraints

- **Spacing**: Apply standard margin intervals of `80px` (`py-20` in Tailwind) on desktop viewports and `48px` (`py-12`) on mobile.
- **Radius Consistency**: Alternating Bento cards must use `rounded-[28px]` or `rounded-[32px]`. Small interactive controls use pill-capsule `rounded-full`.
- **Text Letter-Spacing**: Heading elements `>= 17px` must utilize the `tracking-tight` (-0.02em) class for that compact, premium Apple typographic feel.

---

## 3. Files Impacted

1. **`website/about.html`**: Update values container cards to the new left-aligned link cards.
2. **`website/ai.html`**: Integrate the big statistics metrics block.

---

## 4. Verification

- Verify layout with `node scratch/run_tests.js`.
- Manually audit both pages across responsive resolutions (mobile to wide desktop).
