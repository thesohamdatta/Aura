# Skill: Aura Deployment & DevOps

> Load this skill when deploying, configuring CI/CD, or managing infrastructure.

## Deployment Target

**Platform:** Vercel (free tier)
**Domain:** Auto-generated Vercel domain (e.g., `aura-website.vercel.app`)
**Build:** Static Vite output from `dist/`

## Vercel Configuration

### vercel.json
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {"source": "/((?!assets/).*)", "destination": "/index.html"}
  ]
}
```

The rewrite rule handles SPA client-side routing — all non-asset requests serve `index.html` so React Router handles the path.

### Environment Variables
No runtime environment variables needed. All content is static.

## CI Pipeline (GitHub Actions)

### Triggers
- Push to `main`
- Pull request to `main`

### Pipeline Steps
```
1. Checkout
2. Setup Node.js 22
3. npm ci
4. TypeScript type-check (tsc --noEmit)
5. Lint (oxlint)
6. Build (vite build)
7. Unit tests (vitest)
```

### Failure Policy
Any step failure blocks the merge. No exceptions.

## Pre-Commit Hooks (Husky + lint-staged)

### Pre-commit
```
→ lint-staged runs on staged files:
  - *.{ts,tsx}: oxlint --fix
  - *.{ts,tsx}: tsc --noEmit (type-check only)
```

### Commit Message Format
```
<type>: <description>

Types: feat, fix, refactor, style, docs, test, chore
Examples:
  feat: add product image grid to landing page
  fix: correct FAQ answer privacy detail
  refactor: split DocsLayout into 15 section components
  style: migrate Hero to StyleX
  docs: update AGENTS.md coding rules
  test: add accessibility tests for landing page
  chore: update dependencies
```

## Branch Strategy

```
main          ← production, auto-deploys to Vercel
  └── feat/*  ← feature branches, PR to main
  └── fix/*   ← bug fix branches, PR to main
```

## Local Development
```bash
npm run dev      # Start dev server on localhost:5173
npm run build    # Production build
npm run preview  # Preview production build locally
npm run test     # Run tests
npm run lint     # Run linter
```

## Performance Budget
| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| JS Bundle Size (gzipped) | ≤ 200KB |
| First Contentful Paint | ≤ 1.5s |
| Largest Contentful Paint | ≤ 2.5s |
