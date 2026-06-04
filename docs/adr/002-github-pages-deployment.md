# ADR 002 â€” GitHub Pages Deployment via GitHub Actions

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

1. **Single platform** â€” the code is already on GitHub. No third-party account needed.
2. **Free forever** â€” public repos get unlimited GitHub Pages with no usage limits.
3. **URL** â€” `thesohamdatta.github.io/aura` is the canonical URL.
4. **Transparency** â€” the deploy workflow is in `.github/workflows/` â€” visible to contributors.

## Implementation

- Workflow: `.github/workflows/deploy-website.yml`
- Source: `website/` directory
- Branch: deploys from `main` branch on push
- Pages source configured to: GitHub Actions (not branch deploy)

## Consequences

- All asset paths must be relative (no absolute `/` paths)
- The site root is `/aura/` not `/` â€” links between pages must use filenames, not paths
- Custom domain can be added later via CNAME file in `website/`
