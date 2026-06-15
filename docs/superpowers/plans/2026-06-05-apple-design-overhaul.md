# PRD: Apple Design System Overhaul

## 1. Overview
The Aura website requires a complete visual overhaul to adhere strictly to the `Apple-design-analysis` guidelines. The goal is a photography-first, edge-to-edge museum gallery aesthetic that lets the hardware shine without decorative chrome.

## 2. Goals
- Shift the visual language to a strict alternating light/dark tile system.
- Implement the "Apple tight" typographic hierarchy using SF Pro Display/Text.
- Reduce interactive elements to a single Action Blue (`#0066cc`) accent.
- Fix the double-navbar bug by implementing the strict `global-nav` and `sub-nav-frosted` component architecture.

## 3. Scope
- **CSS:** Complete rewrite of `global.css` and `nav.css`. Refactor of specific page stylesheets (`home.css`, `ai.css`, etc.) to use the new utility classes.
- **HTML:** Restructuring all pages (`index.html`, `ai.html`, `docs.html`, etc.) to remove nested elements and adopt edge-to-edge `.product-tile-light` and `.product-tile-dark` containers.
- **Nav:** Addition of "Dilemma" and "Join Waitlist" items using the new `sub-nav-frosted`.

## 4. Acceptance Criteria
1. **Typography:** All headers must use SF Pro Display with negative tracking (-0.28px for hero, -0.374px for display-md). Body text must be 17px.
2. **Elevation:** Zero shadows on any UI chrome. The only shadow permitted is the system product-shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) on product images.
3. **Buttons:** Primary buttons must be pill-shaped with Action Blue. Utility buttons must be 8px radius.
4. **Layout:** No gradients. Visual separation is achieved exclusively through tile color alternation (`#ffffff`, `#f5f5f7`, `#272729`).

## 5. Technical Implementation
- Strip all existing CSS variables and replace them with the exact hex codes from the spec.
- Refactor DOM elements to flat `<section>` tags using the tile utility classes.
- Implement responsive breakpoints as defined in the spec (collapsing nav at 834px, tight padding below 640px).
