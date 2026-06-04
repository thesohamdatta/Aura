# ADR 001 — Static Site: No Build Step

**Date:** 2026-06  
**Status:** Accepted  
**Deciders:** Soham Datta

## Context

We needed to choose a tech stack for the Aura marketing website. Options considered:
- React + Next.js (Vercel)
- Astro
- Vanilla HTML/CSS/JS (static)

## Decision

Vanilla HTML/CSS/JS with GSAP + Lenis from CDN. No bundler, no framework, no build step.

## Rationale

1. **GitHub Pages compatibility** — GitHub Pages serves static files natively. No CI build required.
2. **Longevity** — Vanilla HTML does not rot. No npm audit failures in 6 months.
3. **Simplicity** — 4 engineers, no frontend specialists. Zero config means faster iteration.
4. **GSAP CDN** — GSAP and Lenis both have official CDN builds. No installation needed.

## Consequences

- No component reuse via JSX/templates — HTML is duplicated across pages (nav, footer)
- No hot reload — manual browser refresh during development
- No TypeScript — vanilla JS only
- All animation via GSAP + Lenis — no Framer Motion
