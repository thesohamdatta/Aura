# 02 — Touch Target Compliance

**What to build:** All interactive elements meet Apple HIG 44×44pt minimum touch target size. FAQ expand buttons and navigation arrows are properly sized for mobile use.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

## Acceptance Criteria

- [ ] FAQ expand buttons increased from 36px to 44px minimum
- [ ] FAQ control arrows (prev/next) increased from 36px to 44px minimum
- [ ] All interactive elements have adequate padding/margin for touch
- [ ] No horizontal scroll on mobile from oversized touch targets
- [ ] Test on 375px viewport — all buttons tappable without zoom

## Technical Notes

- FAQ expand button: `.faq-expand-btn` currently 36px → 44px
- FAQ control buttons: `.faq-control-btn` currently 36px → 44px
- Ensure visual size stays consistent by adjusting padding, not just min-width/height
- Reference: Apple HIG touch targets minimum 44×44pt
