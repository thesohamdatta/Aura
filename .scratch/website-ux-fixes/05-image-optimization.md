# 05 — Image Optimization

**What to build:** Responsive images with proper sizing, lazy loading, and modern formats. Reduces layout shift and improves Core Web Vitals.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

## Acceptance Criteria

- [ ] Add `width` and `height` attributes to all `<img>` tags (prevent CLS)
- [ ] Add `loading="lazy"` to below-the-fold images
- [ ] Add `srcset` and `sizes` for responsive images where beneficial
- [ ] Convert images to WebP format where possible
- [ ] Verify no Cumulative Layout Shift (CLS) on page load
- [ ] Test on 3G connection — images load progressively

## Technical Notes

- Current state: Some images have width/height, some don't
- Hero images should NOT be lazy loaded (above the fold)
- Product images in grid should have srcset for different viewports
- Consider using `<picture>` element for WebP with PNG fallback
- Image filenames have spaces — encode properly in URLs
