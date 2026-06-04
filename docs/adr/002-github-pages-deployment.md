# ADR 002 — GitHub Pages Deployment via GitHub Actions

**Date:** 2026-06  
**Status:** Accepted  
**Deciders:** Soham Datta

## Context

The Aura website needs to be publicly accessible. Options:
- Vercel (automatic deploys, generous free tier)
- Netlify (similar to Vercel)
- GitHub Pages (native to GitHub, free)

## Decision

GitHub Pages, deployed from the `website/` subfolder via GitHub Actions workflow.

## Rationale

1. **Single platform** — the code is already on GitHub. No third-party account needed.
2. **Free forever** — public repos get unlimited GitHub Pages with no usage limits.
3. **URL** — `thesohamdatta.github.io/Aura-Wearable-AI` is the canonical URL.
4. **Transparency** — the deploy workflow is in `.github/workflows/` — visible to contributors.

## Implementation

- Workflow: `.github/workflows/deploy-website.yml`
- Source: `website/` directory
- Branch: deploys from `main` branch on push
- Pages source configured to: GitHub Actions (not branch deploy)

## Consequences

- All asset paths must be relative (no absolute `/` paths)
- The site root is `/Aura-Wearable-AI/` not `/` — links between pages must use filenames, not paths
- Custom domain can be added later via CNAME file in `website/`
