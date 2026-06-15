# Bento Gallery Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the "A closer look" gallery section on index.html to implement the Bento Grid layout with rounded corners, group hover effects, and verify it with automated tests.

**Architecture:** Use Tailwind classes to apply aspect-square and rounded-[28px] style constraints to the gallery card containers, and group-hover classes to enable smooth scale transitions on the product images. Validate the layout by parsing the index.html section contents in the test suite.

**Tech Stack:** HTML5, Tailwind CSS, JavaScript (Node.js for tests)

---

### Task 1: Add Layout Verification Tests

**Files:**
- Modify: `scratch/test_layout.js` (append Bento Grid check)

- [ ] **Step 1: Write the failing test**

Modify `scratch/test_layout.js` by appending the following test case right before the `// Final check` block:

```javascript
// ----------------------------------------------------
// TEST CASE 6: Bento Grid Gallery Specs
// ----------------------------------------------------
runTest('Take a Closer Look gallery uses Bento Grid rounded cards and zoom hover transitions', () => {
  const indexPath = path.join(websiteDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error('index.html not found');
  }
  const html = fs.readFileSync(indexPath, 'utf-8');

  // Extract content between "TAKE A CLOSER LOOK" and the next section (VOICE STORY)
  const galleryStart = html.indexOf('<!-- 3. TAKE A CLOSER LOOK -->');
  const galleryEnd = html.indexOf('<!-- 4. VOICE STORY -->');
  if (galleryStart === -1 || galleryEnd === -1 || galleryStart >= galleryEnd) {
    throw new Error('Could not isolate Take a Closer Look gallery section in index.html');
  }
  const sectionHtml = html.substring(galleryStart, galleryEnd);

  // Count bento card wrappers with rounded-[28px] and group class
  const cardCount = (sectionHtml.match(/rounded-\\[28px\\]/g) || []).length;
  if (cardCount !== 5) {
    throw new Error(`Expected exactly 5 rounded cards, found ${cardCount}`);
  }

  const groupCount = (sectionHtml.match(/\\bgroup\\b/g) || []).length;
  if (groupCount !== 5) {
    throw new Error(`Expected exactly 5 bento card wrappers with 'group' class, found ${groupCount}`);
  }

  // Count image hover scales
  const hoverCount = (sectionHtml.match(/group-hover:scale-\\[1\\.03\\]/g) || []).length;
  if (hoverCount !== 5) {
    throw new Error(`Expected exactly 5 images with hover-scale transition, found ${hoverCount}`);
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scratch/run_tests.js`
Expected: FAIL on Test Case 6 with "Expected exactly 5 rounded cards, found 0" or similar error.

---

### Task 2: Restructure Gallery Grid and Cards in index.html

**Files:**
- Modify: `website/index.html` (lines 309-325)

- [ ] **Step 1: Write minimal implementation**

Modify `website/index.html` to update the grid layout structure. Ensure all 5 card wrappers have the `rounded-[28px]`, `group`, `overflow-hidden`, and `relative` classes. Ensure that the images inside them have the class `group-hover:scale-[1.03] transition-transform duration-500` applied. Also enforce that Card 2 has `aspect-square` instead of `aspect-square md:aspect-auto`.

Replace lines 309-325 with:

```html
<div class="grid grid-cols-1 md:grid-cols-12 gap-2 w-full px-2">
  <!-- Card 1: Wide Product Shot -->
  <div class="md:col-span-8 aspect-[16/9] overflow-hidden rounded-[28px] group relative bg-[#f5f5f7]">
    <img alt="Product shot wide" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeOX2uzmTWYIQ9qAOT5P7Z0q7xd3HGaQDnynTWF-V3AlQIF2omtr3JZStfd7xLuEV6OYzTuZXY-_-5RsKA9rsushl-hgNb_i_rtoDgUR8m8y20_DSydXxBzTbgfFEV3zQqm4P0D_s7Y4A_1IUZ5C-GI4aMjdSXcEYlqgvOLuP6zqSf2mNBas_683VjYRMtc-n3cUGUGaIQdhnMxDogE3-qVe81Oue7E2-4fd-5EQWIp_U23laxpXwD6VGcgzR2K4Goxq8wNi3w_U">
  </div>
  <!-- Card 2: Macro detail -->
  <div class="md:col-span-4 aspect-square overflow-hidden rounded-[28px] group relative bg-[#f5f5f7]">
    <img alt="Product detail macro camera" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzP5_uC7hhEYdgDqidUV_4PLnhdbqbtnS3ZY6LiMcxwTXd9nhJ2HIrZ5FGYrPg97U6k-RLaL-ktrUven83M9nTs4b2BU-AhNxYyUgHgLu54gMyoEaXL2CEwWWoW_wMq0g5ZSsSWI7xsGwQWFZe2lRN2JzGC7anhazd4-akKhX6HuG7y3OShRw40w4Nkvqs6DHOSo5PaFeQZ_NrG3xPa9yeh7sEbsSXd51hZCYD0H_YgMh8FpcFOfdXH_763hFm5bHIKlfESzz-4EQ">
  </div>
  <!-- Card 3: Motherboard internal components view -->
  <div class="md:col-span-4 aspect-square overflow-hidden rounded-[28px] group relative bg-[#f5f5f7]">
    <img alt="Internal components view" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhJXhq5EvpGC9sa2hWbEide3OOrGSwUBAfgjNl9uuNATaGL9ioh_d2jDjpwU6MRDjEUVLSGGfNGiXS3tq1X13zKrvbZdFl-L1Vt7Whue742DTV-KXU8UvDJ9-THWP9wFWTeEys_Y-RuEUum8Qq7cpmijQVA1MoYDpYedYAKyPHMYt6GNCGRHc6RCzLiy1GEOgWWF5xcWocZGb7WOYKUdA_4SGAf_WbLi9PvLpEbn_4l8AJPBAX6bmSJ5u1OgJvLiD_-SI0VML3qP4">
  </div>
  <!-- Card 4: USB-C port -->
  <div class="md:col-span-4 aspect-square overflow-hidden rounded-[28px] group relative bg-[#f5f5f7]">
    <img alt="USB-C port close-up" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJMPGQhEjGW9WJbrPI-daYfrc295vuJ6sNLOFBiblTiAydKZwmNtYM865WGH2V-0L2lLqj88iLqayUUG3eGQfIbfk47_YMyD11wdZKa1L4CUdbtzAWCWOK7GNDx9JzkMQiPD7fNvXbRK39eGMGoVOGyTK0YPAQ7NXu36tc0tqOprXywxHKGGVQcs5qF0NcKUG9O26UwL1sEMSaUd6FC5D1ATZ9MSpEJI2-aJVHmwQnXYbKx-G1Ur6BaA_GiWxiwKdFrVk-7o_8RdE">
  </div>
  <!-- Card 5: Lanyard flat lay -->
  <div class="md:col-span-4 aspect-square overflow-hidden rounded-[28px] group relative bg-[#f5f5f7]">
    <img alt="Device flat lay with lanyard" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcIFCPSCSwvFZtMaqZdjrCmEg6pslTvhw0iJmENynFCz-of3Vl_TiPmMvHGeFSXA9V45IJmmTVoiCO-BBs0G5oVAC5HCvok6qwuEADqf_zk90ce5kkqXMPteBXd-dd8Pv2IibUntNmyqSl0yaktJH0wl6yCruQ6vrLSG5AN7qG-PxJp7tJ7oCNIGxlyAXZtKwTRqb6PnKlVXjyKVhLdvYH9O24yE-vAj2Lij-igucZOpYzZ1GkuGL7-MYLZXc4tmNGO17G9XqMio0">
  </div>
</div>
```

- [ ] **Step 2: Run test to verify it passes**

Run: `node scratch/run_tests.js`
Expected: PASS

- [ ] **Step 3: Commit**

Run:
```bash
git add website/index.html scratch/test_layout.js
git commit -m "feat: restructure closer look section to Apple Bento layout with hover transitions"
```
