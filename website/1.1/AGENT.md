# AGENT.md Compatibility Shim

this website it archived
dont use for production

Use `AGENTS.md` as the canonical instruction file for this repo.

Key reminders:

- Build the Aura site with vanilla HTML, CSS, and JavaScript.
- Keep shared navigation in `js/nav.js` and shared footer in `js/footer.js`.
- Do not introduce frameworks, bundlers, GSAP, Lenis, or a build step.
- Use relative paths that work on GitHub Pages.
- Run `node scratch/verify_static_site.js` before handoff.
- If CSS or layout changed, also run `node scratch/apply_apple_design.js`.
