---
name: aura-agentic-website
description: Aura website harness. Use when planning or changing the Aura vanilla HTML/CSS/JS site, writing website issues/specs, updating local agent docs/skills, or verifying static-site changes.
---

# Aura Website Harness

Keep Aura website work in a tight harness: choose the branch, load the smallest useful context, make one coherent slice, then verify it.

## Steps

1. Choose one branch:
   - Prototype: visual exploration or disposable experiment.
   - Website change: scoped HTML/CSS/JS/docs update in this repo.
   - Harness change: rules, skills, verification, issue templates, or agent workflow.
   - Completion criterion: one branch is named before implementation starts.
2. Load context for that branch:
   - Always read the governing repo instructions already in context, then inspect the touched files.
   - For visual or layout work, read `DESIGN.md` and the relevant local design skill.
   - For workflow design, read `docs/agents/agentic-sdlc.md`.
   - For validation gates, read `docs/agents/quality-gates.md`.
   - For ticket/spec writing, read `docs/agents/issue-template.md`.
   - Completion criterion: every file needed to make and verify the slice has been inspected; missing optional docs are silently skipped.
3. Define the slice:
   - Define intent and acceptance criteria.
   - Identify the files expected to change.
   - Choose deterministic verification before editing.
   - Completion criterion: the slice can be checked without relying on "looks good" alone.
4. Implement the slice:
   - Keep edits inside the chosen branch's scope.
   - Preserve existing vanilla HTML/CSS/JS architecture.
   - Completion criterion: every planned file change is made, and unrelated files are left alone.
5. Verify and review:
   - Run the checks in the Verification section.
   - Review against the acceptance criteria and Aura design rules.
   - Completion criterion: verification output is known, and any remaining risk is reported.

## Website Guardrails

- Keep the site vanilla: no bundler, framework, GSAP, Lenis, or generated dependency tree.
- Use relative paths for GitHub Pages.
- Use Lucide icons only: `<i data-lucide="icon-name"></i>` plus `lucide.createIcons()`.
- Do not hardcode shared nav or footer markup in pages. Use `js/nav.js` and `js/footer.js`.
- Preserve Apple-style restraint: no decorative shadows, card borders, gradient blobs, or noisy palettes.
- Use CSS variables from `css/global.css` instead of component-level hex values.

## Verification

Run `node scratch/verify_static_site.js` after edits. If CSS changed, also run `node scratch/apply_apple_design.js` first.

If a local server is useful, serve the folder with:

```bash
python -m http.server 8000
```

Then spot-check all five pages and the mobile nav.
