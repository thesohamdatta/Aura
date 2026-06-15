# AirPods-Style Hero Overhaul & Capsule Actions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the index.html hero banner to use the ChatGPT purple silhouette background image, asymmetric title alignment, and a floating frosted-glass action capsule.

**Architecture:** Update `index.html` structure by swapping the hero section container, styling elements via Tailwind, and routing the CTA button.

**Tech Stack:** HTML5, Tailwind CSS, Vanilla CSS

---

### Task 1: Swapping Background Asset & Setting Up Hero Container

**Files:**
- Modify: `website/index.html`

- [ ] **Step 1: Replace existing hero container and image**
  Update the `<section class="relative h-screen ...">` hero section at the top of `website/index.html` to reference `assets/hero/hero-purple.png` instead of the old asset. Add the linear gradient overlay div at the bottom of the section.

  *HTML content block:*
  ```html
  <!-- 1. HERO -->
  <section class="relative h-screen w-full overflow-hidden bg-black">
    <img alt="Aura Worn Hero" class="absolute inset-0 w-full h-full object-cover object-center" src="assets/hero/hero-purple.png">
    <!-- Dark gradient overlay at the bottom 25% for text legibility -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
    
    <div class="relative h-full flex flex-col justify-end p-margin-base md:p-section-v-padding max-w-[1200px] mx-auto w-full pb-16 md:pb-24">
      <div class="flex flex-col md:flex-row justify-between items-end w-full gap-8">
        
        <!-- Left Title (Asymmetrical) -->
        <div class="text-left select-none">
          <span class="font-label text-overline text-white/60 uppercase tracking-[0.2em] block mb-2">Aura</span>
          <h1 class="font-hero-h1-mobile md:font-hero-h1 text-hero-h1-mobile md:text-hero-h1 text-white leading-[1.05] tracking-tight">Worn.<br>Screenless.<br>Aware.</h1>
        </div>

        <!-- Right Capsule Card (Asymmetrical) -->
        <div class="flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl sm:rounded-full pl-6 pr-2 w-full sm:w-auto">
          <span class="text-white/80 text-label font-label text-center sm:text-left">Open Source · ~$50 BOM</span>
          <a href="docs.html#hardware" class="bg-accent-blue text-white font-label text-label px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center w-full sm:w-auto font-medium">Build & Contribute</a>
        </div>

      </div>
    </div>
  </section>
  ```

- [ ] **Step 2: Run site verification tests**
  Run: `node scratch/run_tests.js`
  Expected: All 5 pages validation and layout tests PASS.

---
