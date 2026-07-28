# 06 — Layout Consistency

**What to build:** Consistent container widths, spacing rhythm, and responsive breakpoints across all pages. Apple-style whitespace and visual hierarchy.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

## Acceptance Criteria

- [ ] Audit container widths across all pages (currently 1200px vs 980px)
- [ ] Standardize on single max-width (recommend: 1200px for hero, 980px for content)
- [ ] Verify 8px spacing rhythm throughout (padding, margins, gaps)
- [ ] Check responsive breakpoints: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on any viewport
- [ ] Consistent section padding (80px desktop, 60px mobile)

## Technical Notes

- global.css defines `--content-max: 980px` and `--hero-max: 1200px`
- Some sections use `max-w-[1200px]`, others use `max-w-[var(--content-max)]`
- FAQ section uses `max(24px, calc((100vw - 1200px) / 2))` for padding
- Standardize: hero sections = 1200px, content sections = 980px
- Ensure consistent vertical rhythm between sections
