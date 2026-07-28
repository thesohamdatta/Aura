## Parent

Implements audit Critical row C4 (orphaned `fonts/` directory at repo root, ~600 KB of unused SF Pro files).

## What to build

The repo root contains a `D:\PROJECTS\AURA\website\fonts\` directory that holds 8 SF Pro `.otf` files. No CSS or HTML file references `fonts/` — every font URL is `assets/fonts/sf-pro/`. The directory is a leftover from an earlier organization scheme and is shipped to GitHub Pages on every deploy.

The deliverable is:

- Confirm via `grep -rn "fonts/"` (excluding `assets/fonts/`) that nothing references the orphaned root directory.
- Delete the `fonts/` directory at `D:\PROJECTS\AURA\website\fonts\`.
- Add a one-line note to `docs/specs/GITHUB_PAGES_GUIDE.md` § 5 (Fonts) clarifying that fonts live exclusively at `assets/fonts/sf-pro/`.

## Acceptance criteria

- [ ] `D:\PROJECTS\AURA\website\fonts\` directory does not exist.
- [ ] No committed reference to `fonts/` (outside `assets/fonts/`) exists in any HTML/CSS/JS file.
- [ ] `scratch/verify_static_site.js` still passes.
- [ ] `scratch/verify_design_system.js` (if available) passes.
- [ ] `docs/specs/GITHUB_PAGES_GUIDE.md` § 5 clarifies the canonical font path.
- [ ] Repo size reduced by approximately 600 KB.

## Blocked by

None — can start immediately. This is a self-contained file-system action that does not depend on the linter tickets.

## Notes

This is the cheapest Critical issue. Land it first if you want a quick win before tackling the larger linter+token work.
