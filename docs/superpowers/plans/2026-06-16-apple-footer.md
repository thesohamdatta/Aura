# Apple-Style Footer Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the footers across all 5 pages of the Aura website to identically match the typography, spacing, off-white background (#f5f5f7), and layout structure of Apple.com.

**Architecture:** Create responsive and typography-compliant CSS classes in `css/style.css` to handle light-canvas footer overrides, and replace the old footer markup in each of the 5 pages with the new structure. Move the footer in `docs.html` outside the sidebar flex container to match the full-width presentation.

**Tech Stack:** Vanilla HTML/CSS + Tailwind CSS (via CDN).

---

### Task 1: Add Custom CSS Rules for Footer
**Files:**
- Modify: `website/css/style.css`
- Test: Run layout tests to ensure CSS syntax is correct.

- [ ] **Step 1: Add footer override styles to `style.css`**
  Add the following classes to the end of `website/css/style.css`:
  ```css
  /* ==========================================================================
     Apple-Style Footer Overrides
     ========================================================================== */
  .site-footer {
      background-color: #f5f5f7 !important;
      color: #1d1d1f !important;
  }
  .footer-link-item {
      font-family: var(--font-text);
      font-size: 12px;
      font-weight: 400;
      color: #515154 !important;
      line-height: 2.2 !important;
      transition: color 0.15s ease !important;
      text-decoration: none !important;
      display: inline-block;
      padding: 0 !important;
      margin: 0 !important;
  }
  .footer-link-item:hover {
      color: #1d1d1f !important;
  }
  .footer-github-cta {
      font-family: var(--font-text);
      font-size: 13px;
      color: #515154 !important;
      border: 1px solid #d2d2d7 !important;
      padding: 6px 14px !important;
      border-radius: 20px !important;
      display: inline-flex !important;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease !important;
      text-decoration: none !important;
      margin: 0 !important;
      background: transparent !important;
  }
  .footer-github-cta:hover {
      border-color: #86868b !important;
      color: #1d1d1f !important;
      background-color: rgba(0, 0, 0, 0.02) !important;
  }
  .footer-disabled-link {
      font-family: var(--font-text);
      font-size: 12px;
      font-weight: 400;
      color: #515154 !important;
      line-height: 2.2 !important;
      text-decoration: none !important;
      display: inline-block;
      padding: 0 !important;
      margin: 0 !important;
      opacity: 0.4 !important;
      pointer-events: none !important;
  }
  .footer-legal-link {
      font-family: var(--font-text);
      font-size: 12px;
      color: #515154 !important;
      transition: color 0.15s ease !important;
      text-decoration: none !important;
      display: inline-block;
      padding: 0 !important;
      margin: 0 !important;
  }
  .footer-legal-link:hover {
      color: #1d1d1f !important;
  }
  .footer-legal-disabled {
      font-family: var(--font-text);
      font-size: 12px;
      color: #515154 !important;
      text-decoration: none !important;
      display: inline-block;
      padding: 0 !important;
      margin: 0 !important;
      opacity: 0.4 !important;
      pointer-events: none !important;
  }
  ```

- [ ] **Step 2: Verify tests compile and pass**
  Run: `node ../scratch/run_tests.js` (from `website/` directory).
  Expected: PASSED.

- [ ] **Step 3: Commit CSS changes**
  Run: `git add website/css/style.css; git commit -m "style: add Apple-style footer override styles"`
  Expected: Commit succeeds.

---

### Task 2: Redesign Footer on index.html
**Files:**
- Modify: `website/index.html`
- Test: Run layout validation suite.

- [ ] **Step 1: Replace footer in `index.html`**
  Modify `website/index.html` around line 777 to replace the entire `<footer>` block with the new off-white structured layout:
  ```html
  <!-- FOOTER -->
  <footer class="site-footer border-t border-[#d2d2d7]/50" style="padding: 64px 0 0 0;">
    <div class="max-w-[1200px] mx-auto px-margin-base">
      
      <!-- Breadcrumb row -->
      <div class="flex items-center text-[12px] text-[#86868b] pb-4 mb-6 border-b border-[#d2d2d7]/35 flex-wrap gap-y-2">
        <a href="index.html" class="hover:text-[#1d1d1f] transition-colors">Aura</a>
        <span class="mx-2 text-[10px] text-[#86868b]">›</span>
        <span class="text-[#1d1d1f]">Overview</span>
      </div>

      <!-- Main grid -->
      <div class="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-8 md:gap-gutter">
        
        <!-- Brand column -->
        <div class="col-span-2 md:col-span-1 mb-10 md:mb-0">
          <div class="font-display text-[21px] font-semibold text-[#1d1d1f] mb-2">Aura</div>
          <p class="font-body text-[13px] font-normal text-[#515154] mb-6 leading-normal">The third device. Built in the open.</p>
          <a href="https://github.com/thesohamdatta/aura" target="_blank" class="footer-github-cta">
            <span>⭐</span> Star on GitHub
          </a>
        </div>

        <!-- Build column -->
        <div class="col-span-1">
          <span class="font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1d1d1f]/60 mb-4 block">Build</span>
          <ul class="space-y-0 flex flex-col">
            <li><a href="docs.html#hardware" class="footer-link-item">Build Yours</a></li>
            <li><a href="docs.html#firmware" class="footer-link-item">Firmware</a></li>
            <li><a href="docs.html#backend" class="footer-link-item">SDK</a></li>
          </ul>
        </div>

        <!-- Learn column -->
        <div class="col-span-1">
          <span class="font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1d1d1f]/60 mb-4 block">Learn</span>
          <ul class="space-y-0 flex flex-col">
            <li><a href="ai.html" class="footer-link-item">How It Works</a></li>
            <li><a href="manifesto.html" class="footer-link-item">The Dilemma</a></li>
            <li><a href="docs.html" class="footer-link-item">Docs</a></li>
          </ul>
        </div>

        <!-- Community column -->
        <div class="col-span-1">
          <span class="font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1d1d1f]/60 mb-4 block">Community</span>
          <ul class="space-y-0 flex flex-col">
            <li><a href="https://github.com/thesohamdatta/aura" target="_blank" class="footer-link-item">GitHub</a></li>
            <li><a href="#" aria-disabled="true" class="footer-disabled-link">Discord</a></li>
            <li><a href="#" aria-disabled="true" class="footer-disabled-link">Ethics</a></li>
          </ul>
        </div>

        <!-- Project column -->
        <div class="col-span-1">
          <span class="font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1d1d1f]/60 mb-4 block">Project</span>
          <ul class="space-y-0 flex flex-col">
            <li><a href="about.html" class="footer-link-item">About</a></li>
            <li><a href="ai.html" class="footer-link-item">Intelligence</a></li>
            <li><a href="manifesto.html" class="footer-link-item">Manifesto</a></li>
            <li><a href="index.html" class="footer-link-item">Overview</a></li>
          </ul>
        </div>

      </div>

      <!-- Retailer/Footnote row -->
      <div class="pt-6 pb-4 border-t border-[#d2d2d7]/35 mt-8 text-[12px] text-[#86868b] leading-relaxed">
        More ways to build: <a href="https://github.com/thesohamdatta/aura" target="_blank" class="text-[#0066cc] hover:underline">Fork the GitHub repo</a> or <a href="docs.html" class="text-[#0066cc] hover:underline">read our assembly guides</a>. Need help? Contact <a href="mailto:thesohamdatta@gmail.com" class="text-[#0066cc] hover:underline">thesohamdatta@gmail.com</a>.
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-[#d2d2d7]/35 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p class="font-body text-[12px] text-[#86868b]">&copy; 2026 Aura Project. MIT Licensed.</p>
        <div class="flex gap-6 flex-row">
          <a href="#" aria-disabled="true" class="footer-legal-disabled">MIT License</a>
          <a href="#" aria-disabled="true" class="footer-legal-disabled">Privacy</a>
          <a href="https://github.com/thesohamdatta/aura" target="_blank" class="footer-legal-link">GitHub</a>
        </div>
        <span class="font-body text-[12px] text-[#86868b]">Pune, India</span>
      </div>

    </div>
  </footer>
  ```

- [ ] **Step 2: Run tests to verify**
  Run: `node ../scratch/run_tests.js`
  Expected: PASSED.

- [ ] **Step 3: Commit changes**
  Run: `git add website/index.html; git commit -m "feat: overhaul index.html footer with Apple-style design"`
  Expected: Commit succeeds.

---

### Task 3: Redesign Footer on about.html
**Files:**
- Modify: `website/about.html`
- Test: Run layout validation suite.

- [ ] **Step 1: Replace footer and adjust section padding in `about.html`**
  Modify `website/about.html` to:
  1. Change the final section (`#final-cta`) bottom padding to 80px by replacing `py-section-v-padding` with `pt-20 pb-20` or updating the class list to guarantee `pb-20` (`pb-[80px]`).
  2. Replace the footer block with the identical off-white footer, updating the breadcrumbs:
  ```html
      <!-- Breadcrumb row -->
      <div class="flex items-center text-[12px] text-[#86868b] pb-4 mb-6 border-b border-[#d2d2d7]/35 flex-wrap gap-y-2">
        <a href="index.html" class="hover:text-[#1d1d1f] transition-colors">Aura</a>
        <span class="mx-2 text-[10px] text-[#86868b]">›</span>
        <span class="text-[#1d1d1f]">About</span>
      </div>
  ```

- [ ] **Step 2: Run tests to verify**
  Run: `node ../scratch/run_tests.js`
  Expected: PASSED.

- [ ] **Step 3: Commit changes**
  Run: `git add website/about.html; git commit -m "feat: overhaul about.html footer with Apple-style design"`
  Expected: Commit succeeds.

---

### Task 4: Redesign Footer on ai.html
**Files:**
- Modify: `website/ai.html`
- Test: Run layout validation suite.

- [ ] **Step 1: Replace footer and adjust section padding in `ai.html`**
  Modify `website/ai.html` to:
  1. Verify the section above the footer ends with `pb-20` (80px bottom padding).
  2. Replace the footer block with the identical off-white footer, updating the breadcrumbs:
  ```html
      <!-- Breadcrumb row -->
      <div class="flex items-center text-[12px] text-[#86868b] pb-4 mb-6 border-b border-[#d2d2d7]/35 flex-wrap gap-y-2">
        <a href="index.html" class="hover:text-[#1d1d1f] transition-colors">Aura</a>
        <span class="mx-2 text-[10px] text-[#86868b]">›</span>
        <span class="text-[#1d1d1f]">AI</span>
      </div>
  ```

- [ ] **Step 2: Run tests to verify**
  Run: `node ../scratch/run_tests.js`
  Expected: PASSED.

- [ ] **Step 3: Commit changes**
  Run: `git add website/ai.html; git commit -m "feat: overhaul ai.html footer with Apple-style design"`
  Expected: Commit succeeds.

---

### Task 5: Redesign Footer on manifesto.html
**Files:**
- Modify: `website/manifesto.html`
- Test: Run layout validation suite.

- [ ] **Step 1: Replace footer and adjust section padding in `manifesto.html`**
  Modify `website/manifesto.html` to:
  1. Change the `<article>` tag's bottom padding from `pb-12` to `pb-20` (`pb-[80px]`) so the text connects cleanly with the footer divider.
  2. Replace the footer block with the identical off-white footer, updating the breadcrumbs:
  ```html
      <!-- Breadcrumb row -->
      <div class="flex items-center text-[12px] text-[#86868b] pb-4 mb-6 border-b border-[#d2d2d7]/35 flex-wrap gap-y-2">
        <a href="index.html" class="hover:text-[#1d1d1f] transition-colors">Aura</a>
        <span class="mx-2 text-[10px] text-[#86868b]">›</span>
        <span class="text-[#1d1d1f]">Dilemma</span>
      </div>
  ```

- [ ] **Step 2: Run tests to verify**
  Run: `node ../scratch/run_tests.js`
  Expected: PASSED.

- [ ] **Step 3: Commit changes**
  Run: `git add website/manifesto.html; git commit -m "feat: overhaul manifesto.html footer with Apple-style design"`
  Expected: Commit succeeds.

---

### Task 6: Redesign Footer on docs.html
**Files:**
- Modify: `website/docs.html`
- Test: Run layout validation suite.

- [ ] **Step 1: Replace and reposition footer in `docs.html`**
  Modify `website/docs.html` to:
  1. Remove the old inline nested footer (around line 1113).
  2. Ensure the `<main>` area ends with `pb-20` (80px bottom padding).
  3. Insert the identical off-white footer outside the sidebar flex container, just before the closing `</body>` script sections (after the main wrapping divs), updating the breadcrumbs:
  ```html
      <!-- Breadcrumb row -->
      <div class="flex items-center text-[12px] text-[#86868b] pb-4 mb-6 border-b border-[#d2d2d7]/35 flex-wrap gap-y-2">
        <a href="index.html" class="hover:text-[#1d1d1f] transition-colors">Aura</a>
        <span class="mx-2 text-[10px] text-[#86868b]">›</span>
        <span class="text-[#1d1d1f]">Docs</span>
      </div>
  ```

- [ ] **Step 2: Run tests to verify**
  Run: `node ../scratch/run_tests.js`
  Expected: PASSED.

- [ ] **Step 3: Commit changes**
  Run: `git add website/docs.html; git commit -m "feat: overhaul and reposition docs.html footer with Apple-style design"`
  Expected: Commit succeeds.

---

### Task 7: Full Validation & Push
**Files:**
- Verify: All HTML/CSS files
- Test: Run full site validation suite.

- [ ] **Step 1: Run comprehensive site verification**
  Run: `node ../scratch/run_tests.js`
  Expected: OVERALL: All test suites PASSED. ✓

- [ ] **Step 2: Push commit to remote**
  Run: `git push origin main`
  Expected: Push succeeds.
