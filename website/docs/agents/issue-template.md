# Aura Website Issue Template

Use this template for agent-ready website issues.

```markdown
# Title

## Intent

What should be true for a visitor or maintainer when this is done?

## Scope

- Pages:
- CSS:
- JS:
- Docs:

## Constraints

- Vanilla HTML/CSS/JS only.
- Relative paths for GitHub Pages.
- Lucide icons only.
- Preserve shared nav/footer mounts.
- Use existing design tokens and Apple-style restraint.

## Acceptance Criteria

- [ ] 
- [ ] 
- [ ] 

## Verification

- [ ] `node scratch/verify_static_site.js`
- [ ] `node scratch/apply_apple_design.js` if CSS changed
- [ ] Manual responsive spot-check if layout changed

## Blocking Edges

List any issues that must land first.
```

## Sizing

- Small: one section, one page, no global behavior.
- Medium: multiple sections or one shared component.
- Large: nav, footer, global CSS, page architecture, or content model. Split large work into smaller issues.

