# ADR 003 — GSAP + Lenis for Animation

**Date:** 2026-06  
**Status:** Accepted  
**Deciders:** Soham Datta

## Context

The Aura website requires Apple-quality scroll animations: parallax, scroll-scrub, stagger reveals, pinned sections.

## Decision

GSAP 3.x + ScrollTrigger plugin + Lenis smooth scroll, all loaded from CDN.

## Rationale

1. **GSAP ScrollTrigger** — industry standard for scroll-synced animations. Used on virtually every premium product site.
2. **Lenis** — `darkroomengineering/lenis` provides physics-based smooth scroll that makes the site feel premium. CDN available.
3. **CDN approach** — no npm, no bundler. Loaded via `<script>` tags at bottom of each page.
4. **Accessibility** — both respect `prefers-reduced-motion`. Already handled in `animations.js`.

## Integration pattern

```js
// Lenis + GSAP ScrollTrigger sync (required)
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
```

## Future consideration

If we add pendant scroll-scrub (canvas frame animation), the frame images must be pre-shot:
~50 frames of the pendant rotating 360°, on white background, in a lightbox.
This is hardware work, not a software decision. Track as separate issue.

## Consequences

- GSAP license: free for projects that are free for end users (open source MIT site ✅)
- Lenis license: MIT ✅
- CDN dependency — site requires internet for first load animation (acceptable)
