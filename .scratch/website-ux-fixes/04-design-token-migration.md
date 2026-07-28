# 04 — Design Token Migration

**What to build:** Replace all inline styles and hardcoded colors with CSS custom properties (design tokens). Consistent theming across all pages.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

## Acceptance Criteria

- [ ] Audit all inline `style=""` attributes across 5 pages
- [ ] Replace hardcoded colors (#1d1d1f, #86868b, #0066cc) with tokens
- [ ] Replace hardcoded spacing (padding, margin) with token values
- [ ] Hero pill component uses tokens instead of inline styles
- [ ] FAQ section uses tokens instead of inline styles
- [ ] All sections use consistent spacing rhythm (8px base)

## Technical Notes

- Existing tokens in global.css: `--color-ink`, `--color-ink-secondary`, `--color-action-blue`, etc.
- Hero pill has extensive inline styles — move to CSS class
- FAQ section has inline styles for colors and spacing
- Use Tailwind classes where possible, CSS tokens for complex values
- Maintain Apple design philosophy: whitespace, restraint, one-idea-per-section
