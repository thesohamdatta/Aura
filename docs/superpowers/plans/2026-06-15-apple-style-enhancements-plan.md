# Global Apple Design & Layout Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Values Section on `about.html` into Apple-style left-aligned cards, and integrate a Big Typography metrics section on `ai.html` to showcase device performance statistics.

**Architecture:** Modify markup on both pages using Tailwind utilities, standard HSL theme classes, and 1.5px SF Symbols.

**Tech Stack:** HTML5, Tailwind CSS, Vanilla CSS

---

### Task 1: Refactor Values Section in `about.html`

**Files:**
- Modify: `website/about.html`
- Test: `node scratch/run_tests.js`

- [ ] **Step 1: Replace values cards with left-aligned AirPods-style layout**
  Locate the values grid block in `website/about.html` and replace the three centered card divs with left-aligned card layouts, adding the SVG icon at the top and the blue Action Blue chevron links at the bottom.

  *HTML target snippet (lines 50-65):*
  ```html
  <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
    <!-- Card 1: Open Hardware -->
    <div class="flex flex-col justify-between p-8 bg-surface-container-lowest rounded-[28px] min-h-[320px] transition-all hover:scale-[1.01]">
      <div>
        <span class="material-symbols-outlined text-accent-blue text-3xl mb-6 block">account_tree</span>
        <h3 class="font-section-h3 text-section-h3 text-on-surface mb-3 font-semibold tracking-tight">Open Hardware. Built for all.</h3>
        <p class="text-text-secondary font-body leading-relaxed text-sm">Complete schematic transparency for a community-driven future. Inspect, modify, and build with total freedom.</p>
      </div>
      <div class="mt-6">
        <a class="text-accent-blue hover:underline font-semibold text-sm flex items-center gap-1 group" href="docs.html#hardware">
          Learn about schematics <span class="material-symbols-outlined text-xs transition-transform group-hover:translate-x-0.5">chevron_right</span>
        </a>
      </div>
    </div>
    <!-- Card 2: Privacy First -->
    <div class="flex flex-col justify-between p-8 bg-surface-container-lowest rounded-[28px] min-h-[320px] transition-all hover:scale-[1.01]">
      <div>
        <span class="material-symbols-outlined text-accent-blue text-3xl mb-6 block">security</span>
        <h3 class="font-section-h3 text-section-h3 text-on-surface mb-3 font-semibold tracking-tight">Privacy. That's Aura.</h3>
        <p class="text-text-secondary font-body leading-relaxed text-sm">Local processing ensures your voice and contextual data never leave your physical orbit. Zero cloud tracking.</p>
      </div>
      <div class="mt-6">
        <a class="text-accent-blue hover:underline font-semibold text-sm flex items-center gap-1 group" href="manifesto.html">
          Learn about privacy <span class="material-symbols-outlined text-xs transition-transform group-hover:translate-x-0.5">chevron_right</span>
        </a>
      </div>
    </div>
    <!-- Card 3: No Subscriptions -->
    <div class="flex flex-col justify-between p-8 bg-surface-container-lowest rounded-[28px] min-h-[320px] transition-all hover:scale-[1.01]">
      <div>
        <span class="material-symbols-outlined text-accent-blue text-3xl mb-6 block">lock_reset</span>
        <h3 class="font-section-h3 text-section-h3 text-on-surface mb-3 font-semibold tracking-tight">No Subscriptions. Ever.</h3>
        <p class="text-text-secondary font-body leading-relaxed text-sm">Owned entirely by you. No recurring fees, no data harvesting gates, no software locks. Free forever.</p>
      </div>
      <div class="mt-6">
        <a class="text-accent-blue hover:underline font-semibold text-sm flex items-center gap-1 group" href="docs.html#bom">
          View assembly costs <span class="material-symbols-outlined text-xs transition-transform group-hover:translate-x-0.5">chevron_right</span>
        </a>
      </div>
    </div>
  </div>
  ```

- [ ] **Step 2: Run verification tests**
  Run: `node scratch/run_tests.js`
  Expected: PASS

---

### Task 2: Add Big Typography Metrics Section in `ai.html`

**Files:**
- Modify: `website/ai.html`
- Test: `node scratch/run_tests.js`

- [ ] **Step 1: Add the metrics section below the main explanation block**
  Locate the section after the core perception layers explanation in `website/ai.html` (e.g., around line 130) and insert a clean, full-width section containing the three big typography metric columns.

  *HTML snippet to insert:*
  ```html
  <!-- Metrics Spotlight (Parchment) -->
  <section class="bg-bg-parchment py-16 md:py-24 border-t border-b border-surface-container-low">
    <div class="max-w-[1200px] mx-auto px-margin-base">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        <!-- Metric 1: Latency -->
        <div class="flex flex-col justify-between min-h-[160px]">
          <div>
            <span class="text-[12px] font-bold text-text-secondary uppercase tracking-widest block mb-2">Response Latency</span>
            <span class="text-[56px] md:text-[72px] font-extrabold text-on-surface leading-none tracking-tight block">0.5s*</span>
          </div>
          <p class="text-text-secondary text-sm mt-4 leading-relaxed">Average voice-to-text response loop powered by Groq LPUs, matching the speed of natural human conversation.</p>
        </div>
        <!-- Metric 2: Components -->
        <div class="flex flex-col justify-between min-h-[160px]">
          <div>
            <span class="text-[12px] font-bold text-text-secondary uppercase tracking-widest block mb-2">Cloud AI Pipeline</span>
            <span class="text-[56px] md:text-[72px] font-extrabold text-on-surface leading-none tracking-tight block">4-Layer</span>
          </div>
          <p class="text-text-secondary text-sm mt-4 leading-relaxed">Perception stack routing: Deepgram Voice input → Groq/GPT-4o LPU reasoning → Pinecone Vector RAG → Speech synthesis.</p>
        </div>
        <!-- Metric 3: BOM Cost -->
        <div class="flex flex-col justify-between min-h-[160px]">
          <div>
            <span class="text-[12px] font-bold text-text-secondary uppercase tracking-widest block mb-2">Hardware cost</span>
            <span class="text-[56px] md:text-[72px] font-extrabold text-on-surface leading-none tracking-tight block">~$50</span>
          </div>
          <p class="text-text-secondary text-sm mt-4 leading-relaxed">Built from standard off-the-shelf components. Zero markup, zero artificial gates, total developer freedom.</p>
        </div>
      </div>
      <!-- Footnotes -->
      <div class="mt-16 pt-8 border-t border-surface-container-low text-[11px] text-text-secondary max-w-[800px]">
        <p class="mb-2">* Latency measurements based on wired client connection routing through Groq server API. Results may vary depending on local cellular connectivity and backend server load.</p>
      </div>
    </div>
  </section>
  ```

- [ ] **Step 2: Run verification tests**
  Run: `node scratch/run_tests.js`
  Expected: PASS

---
