# Design Spec: AirPods-Style Hero Overhaul & Capsule Actions

This document specifies the design, layout, and implementation guidelines for upgrading the Aura homepage (`index.html`) hero section to match the AirPods 4-style visual storytelling and asymmetrical layout.

---

## 1. Visual & Layout Architecture

### A. Photographic Hero Backdrop
- **Asset**: `D:\Downlaods\ChatGPT Image Jun 15, 2026, 12_11_31 PM.png` (copied locally to `website/assets/hero/hero-purple.png`).
- **Composition**: Silhouetted dancer profile centered on a magenta/purple glowing radial eclipse, wearing the glowing round Aura pendant.
- **Backdrop Styling**:
  - Full-screen height (`h-screen`) and full-width (`w-full`), with `object-cover` and `object-center` positioning to ensure proper scaling on all viewports.
  - Linear gradient overlay at the bottom: `bg-gradient-to-t from-black/80 via-black/10 to-transparent` covering the bottom 25% of the viewport. This guarantees text and buttons remain perfectly readable.

### B. Asymmetrical Content Placement
We will implement the AirPods 4 hero layout composition:
1. **Bottom-Left (Typography Column)**:
   - Overline: `"Aura"` in uppercase, wide letter-spacing (`tracking-[0.2em]`), sized at `text-overline` in semitransparent white.
   - Main Title: **"Worn.<br>Screenless.<br>Aware."**
     - Sized responsively: `text-hero-h1-mobile` (mobile) to `text-hero-h1` (desktop).
     - Styled in bold system display font, pure white, with negative letter-spacing (`tracking-tight` / `-0.02em`) to match Apple Display style.
2. **Bottom-Right (Action Capsule Card)**:
   - A floating CTA card aligned horizontally with the text baseline on desktop.
   - **Styling**:
     - Frosted-glass backdrop blur (`backdrop-blur-md bg-white/5 border border-white/10`).
     - Soft rounded corners (`rounded-2xl` or `rounded-3xl` following Apple container rules).
     - Minimalist top label: `Open Source • ~$50 BOM` (subtle font weight, `text-white/70`).
     - Action pill button: `Build & Contribute` styled in Action Blue (`#0066cc`) with white text and `rounded-full` capsule padding.

---

## 2. Responsiveness & Scalability

The layout will dynamically scale across all screen widths:

| Viewport | Layout Mode | Sizing Details |
|---|---|---|
| **Mobile (`<md`)** | Symmetrical Column | Stacked vertically. Title centered or left-aligned on the bottom half. Action capsule spans full width or scales down cleanly with side margins. |
| **Tablet/Desktop (`>=md`)** | Asymmetric Horizontal Split | Title aligned bottom-left. Action capsule floats bottom-right, maintaining clear gutter margins. |

---

## 3. Implementation Plan (Files Impacted)

- **`website/index.html`**:
  - Surgical replacement of the `<section class="relative h-screen ...">` hero markup.
  - Map the button click to `docs.html#hardware` for the assembly instructions.

---

## 4. Verification & Testing

- Run the layout validation suite (`node scratch/run_tests.js`) to ensure:
  - Global navigation and footer remain intact and correctly configured.
  - No HTML syntax errors are introduced.
  - Page structure remains clean.
- Manually review layout scale by resizing the browser window from 320px width up to 1920px.
