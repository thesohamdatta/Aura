# 03 — Icon System Consolidation

**What to build:** Single consistent icon system across all pages. Eliminate triple icon system (Material Symbols + SF Symbols JS replacement + Aura Icons) in favor of one approach.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

## Acceptance Criteria

- [ ] Audit all icon usage across 5 pages
- [ ] Choose single icon system (recommend: Aura Icons or inline SVGs)
- [ ] Replace all Material Symbols `<span class="material-symbols-outlined">` with chosen system
- [ ] Remove or deprecate sf-symbols.js runtime replacement
- [ ] Verify all icons render correctly on all pages
- [ ] Ensure icon sizing is consistent (24px default, scale variants)

## Technical Notes

- Current state: Material Symbols loaded via CDN, then replaced at runtime by sf-symbols.js
- Also have aura-icons.js with 48 Lucide-based icons
- Triple system causes: FOUT (flash of unstyled text), inconsistent sizing, extra JS overhead
- Recommendation: Use inline SVGs directly (no runtime replacement needed)
- Keep Material Symbols CDN as fallback only if needed
