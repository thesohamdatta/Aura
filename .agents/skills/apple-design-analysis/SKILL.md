---
name: apple-design-analysis
description: Reference guidelines for the Apple web design system, detailing colors, typography, layout, shapes, and elevation rules. Use when applying design styles from DESIGN.md to any webpage on the site.
---

# Apple Design Analysis Skill

Follow the strict branding, design tokens, and components as analyzed from Apple's official web presence.

## Colors
* **Action Blue:** `#0066cc` (universal interactive color)
* **Focus Blue:** `#0071e3` (keyboard focus rings)
* **Sky Link Blue:** `#2997ff` (in-copy links on dark surfaces)
* **Pure White:** `#ffffff` (canvas)
* **Parchment:** `#f5f5f7` (Apple off-white alternating canvas)
* **Pearl Button:** `#fafafc` (secondary ghost buttons)
* **Near-Black Tile:** `#272729` (dark section canvas)
* **Pure Black:** `#000000` (global nav bar, media player frames)
* **Text Ink:** `#1d1d1f` (text on light surfaces)
* **Text on Dark:** `#ffffff` (text on dark surfaces)

## Typography
* **Font Family:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
* **Negative Letter-Spacing:** Apply `-0.02em` or `-0.28px` tracking to headings $\geq$ 17px for the tight Apple display feel.
* **Body Copy Size:** 17px (not 16px) with a line-height of 1.47.

## Elevation & Depth
* **Shadows:** No shadows on buttons, cards, text, or nav bars.
* **Product Shadow:** Exactly one soft drop shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) applied exclusively to PNG/SVG product renders resting on a canvas surface.
* **Frosted Glass:** Pinned nav elements use `backdrop-filter: blur(20px) saturate(180%); background: rgba(255,255,255,0.72)`.

## Shape Hierarchy
* **Capsule Pill:** `border-radius: 9999px` (Primary blue buttons, search input, chips).
* **Utility Shapes:** `border-radius: 8px` (Secondary buttons, thumbnail images).
* **Grid Cards:** `border-radius: 18px` (Store cards, specifications tables).
* **Full-Bleed Tiles:** `border-radius: 0px` (Home grid tile sections alternating).
