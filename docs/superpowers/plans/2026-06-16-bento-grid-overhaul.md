# Bento Grid Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the homepage capabilities section into a premium, Apple-style spec Bento Grid containing 9 detailed cards with 3D inset pocket styling.

**Architecture:** We will replace the current 3-column simple grid in `index.html` with a 4-column Tailwind-based Bento layout. A new series of CSS rules in `style.css` will provide the 3D inset pocket border and shadow styles, custom pulse animations for the Voice orb, and glowing vector graphics.

**Tech Stack:** Tailwind CSS + Vanilla CSS.

---

### Task 1: Add Bento card styles to CSS

**Files:**
- Modify: `website/css/style.css`

- [ ] **Step 1: Write custom bento card CSS styles**
  Add the following class rules at the bottom of the style sheet:
  ```css
  /* Bento Inset Pocket styling */
  .bento-pocket {
    background-color: #ffffff;
    border: 1px solid rgba(210, 210, 215, 0.4);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.02);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
  }
  
  .bento-pocket-dark {
    background-color: #1d1d1f;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 24px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
  }

  .bento-pocket:hover, .bento-pocket:focus-within {
    transform: translateY(-4px);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.01), 0 12px 32px rgba(0, 0, 0, 0.06);
  }

  .bento-pocket-dark:hover, .bento-pocket-dark:focus-within {
    transform: translateY(-4px);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 12px 32px rgba(0, 0, 0, 0.25);
  }

  /* Pulse animation for Siri mic orb */
  @keyframes orb-pulse {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.45; }
    50% { transform: scale(1.1) rotate(180deg); opacity: 0.65; }
  }

  .animate-orb {
    animation: orb-pulse 8s infinite ease-in-out;
  }
  
  /* Rotating perspective nodes for memory */
  .perspective-nodes {
    perspective: 1000px;
  }
  ```

- [ ] **Step 2: Commit CSS changes**
  ```bash
  git add website/css/style.css
  git commit -m "style: add custom 3D pocket classes and animation keyframes for Bento Grid"
  ```

---

### Task 2: Write layout tests to verify bento structure

**Files:**
- Modify: `scratch/test_layout.js`

- [ ] **Step 1: Add Bento validation test to test_layout.js**
  Insert the following test at the bottom of the file (before the overall PASS logs):
  ```javascript
  // ----------------------------------------------------
  // TEST CASE 8: Bento Grid Layout Verification
  // ----------------------------------------------------
  runTest('Bento Grid capability section has correct responsive grid and 9 spec cards', () => {
    const indexPath = path.join(websiteDir, 'index.html');
    const html = fs.readFileSync(indexPath, 'utf-8');

    // Verify bento responsive grid class is present
    if (!html.includes('grid-cols-1') || !html.includes('lg:grid-cols-4')) {
      throw new Error('index.html capability section is missing 4-column responsive grid classes');
    }

    // Verify all 9 cards are present
    const cardIdentifiers = [
      'Voice',
      'Vision',
      'Memory',
      'ESP32-S3',
      '10-hour',
      '17g',
      'PLA/PETG',
      'BLE 5.0',
      'Built for builders'
    ];

    cardIdentifiers.forEach(id => {
      if (!html.includes(id)) {
        throw new Error(`index.html Bento Grid is missing card or spec item: "${id}"`);
      }
    });
  });
  ```

- [ ] **Step 2: Run verification to ensure the test fails (Red State)**
  Run: `node scratch/run_tests.js`
  Expected: FAIL (Bento Grid test fails because html does not have the new cards yet)

- [ ] **Step 3: Commit test suite modifications**
  ```bash
  git add scratch/test_layout.js
  git commit -m "test: add layout assertions for new Bento Grid specifications"
  ```

---

### Task 3: Overhaul Core Capabilities HTML markup in website/index.html

**Files:**
- Modify: `website/index.html:111-205`

- [ ] **Step 1: Replace old grid structure with the 4-column Bento grid**
  Replace lines 111 to 205 in `website/index.html` with:
  ```html
  <div class="max-w-[1200px] mx-auto px-margin-base">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto w-full pb-16">

      <!-- Card 1: Voice (Purple/Pink Siri Orb) -->
      <div tabindex="0" class="lg:col-span-2 rounded-[28px] bento-pocket overflow-hidden flex flex-col relative h-[400px] group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        <div class="p-8 md:p-10 z-10 flex flex-col items-start text-left">
          <p class="font-body text-[14px] font-semibold text-[#86868b] tracking-wide mb-2">Voice</p>
          <h3 class="font-display text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] leading-tight tracking-tight">Captures every detail.</h3>
          <p class="font-body text-[15px] text-[#86868b] leading-[1.4] mt-2 max-w-[340px]">0.5s transcription. Every word stored as meaning, not just text.</p>
        </div>
        <div class="flex-1 flex items-center justify-center relative overflow-hidden">
          <!-- Pulse Orb Visual -->
          <div class="w-44 h-44 rounded-full bg-gradient-to-tr from-[#0071e3] via-[#8a2be2] to-[#ff2a6d] blur-[36px] animate-orb opacity-40 transform transition-transform duration-1000 group-hover:scale-110"></div>
          <div class="absolute w-24 h-24 rounded-full bg-white/45 backdrop-blur-xl border border-white/60 shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
             <span class="material-symbols-outlined text-[#1d1d1f] text-3xl">mic</span>
          </div>
        </div>
        <!-- Expand Button -->
        <div class="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/50 flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e8e8ed]">
          <span class="text-[#1d1d1f] font-semibold text-lg">+</span>
        </div>
      </div>

      <!-- Card 2: Vision (Camera Lens Render) -->
      <div tabindex="0" class="lg:col-span-2 rounded-[28px] bento-pocket overflow-hidden flex flex-col relative h-[400px] group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        <div class="p-8 md:p-10 z-10 flex flex-col items-start text-left">
          <p class="font-body text-[14px] font-semibold text-[#86868b] tracking-wide mb-2">Vision</p>
          <h3 class="font-display text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] leading-tight tracking-tight">Understands your world.</h3>
          <p class="font-body text-[15px] text-[#86868b] leading-[1.4] mt-2 max-w-[340px]">2MP OV2640 with on-command capture. Processes scenes in under 2s.</p>
        </div>
        <div class="flex-1 flex items-center justify-center relative overflow-hidden">
           <div class="w-48 h-48 rounded-full flex items-center justify-center relative transform transition-transform duration-1000 group-hover:scale-105">
              <div class="absolute inset-0 rounded-full border border-black/5 bg-gradient-to-b from-[#f5f5f7] to-[#ffffff] shadow-md"></div>
              <div class="w-32 h-32 rounded-full bg-[#1d1d1f] flex items-center justify-center shadow-[inset_0_4px_16px_rgba(0,0,0,0.4)] relative overflow-hidden">
                 <div class="absolute w-[120%] h-[120%] bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-full opacity-60 -top-[10%] -left-[10%] mix-blend-screen"></div>
                 <div class="w-10 h-10 rounded-full bg-black border border-white/10 shadow-[inset_0_0_8px_rgba(0,0,0,1)] relative flex items-center justify-center">
                   <div class="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#0071e3]/40 to-transparent blur-[1px]"></div>
                 </div>
              </div>
           </div>
        </div>
        <!-- Expand Button -->
        <div class="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/50 flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e8e8ed]">
          <span class="text-[#1d1d1f] font-semibold text-lg">+</span>
        </div>
      </div>

      <!-- Card 3: Memory (RAG Vector Nodes) -->
      <div tabindex="0" class="lg:col-span-2 rounded-[28px] bento-pocket overflow-hidden flex flex-col relative h-[380px] group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        <div class="p-8 md:p-10 z-10 flex flex-col items-start text-left">
          <p class="font-body text-[14px] font-semibold text-[#86868b] tracking-wide mb-2">Memory</p>
          <h3 class="font-display text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] leading-tight tracking-tight">Never forgets.</h3>
          <p class="font-body text-[15px] text-[#86868b] leading-[1.4] mt-2 max-w-[340px]">Vector-based retrieval. Search your life by context and meaning.</p>
        </div>
        <div class="flex-1 flex items-center justify-center relative overflow-hidden perspective-nodes">
          <div class="w-full h-full relative" style="background-image: radial-gradient(circle at center, #0071e3 1px, transparent 1.5px); background-size: 20px 20px; opacity: 0.12; transform: rotateX(55deg) scale(1.8) translateY(-20px); transition: transform 2s ease-out;"></div>
          <div class="absolute w-24 h-24 rounded-full bg-[#f5f5f7] border border-[#1d1d1f]/5 shadow-lg flex items-center justify-center z-10 transition-transform duration-1000 group-hover:scale-105">
            <span class="material-symbols-outlined text-[#1d1d1f] text-3xl">memory</span>
          </div>
        </div>
        <!-- Expand Button -->
        <div class="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/50 flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e8e8ed]">
          <span class="text-[#1d1d1f] font-semibold text-lg">+</span>
        </div>
      </div>

      <!-- Card 4: ESP32-S3 Processor Chip -->
      <div tabindex="0" class="lg:col-span-1 rounded-[28px] bento-pocket-dark overflow-hidden flex flex-col relative h-[180px] p-6 justify-between group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-[#a1a1a6] text-2xl">developer_board</span>
          <span class="text-[10px] font-mono text-accent-blue font-bold tracking-widest">ESP32-S3</span>
        </div>
        <div>
          <h4 class="font-display text-[19px] font-bold text-[#f5f5f7]">ESP32-S3</h4>
          <p class="font-body text-[13px] text-[#a1a1a6] mt-1">Dual-core processing</p>
        </div>
      </div>

      <!-- Card 5: Battery -->
      <div tabindex="0" class="lg:col-span-1 rounded-[28px] bento-pocket overflow-hidden flex flex-col relative h-[180px] p-6 justify-between group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-[#86868b] text-2xl">battery_charging_full</span>
          <span class="text-[10px] font-mono text-[#86868b] font-semibold">LiPo</span>
        </div>
        <div>
          <h4 class="font-display text-[19px] font-bold text-[#1d1d1f]">10-hour</h4>
          <p class="font-body text-[13px] text-[#86868b] mt-1">Continuous streaming</p>
        </div>
      </div>

      <!-- Card 6: Weight (17g) -->
      <div tabindex="0" class="lg:col-span-1 rounded-[28px] bento-pocket overflow-hidden flex flex-col relative h-[180px] p-6 justify-between group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        <div class="flex justify-between items-start">
          <span class="font-display text-[32px] font-bold text-accent-blue">17g</span>
          <span class="text-[10px] font-mono text-[#86868b] font-semibold">Mass</span>
        </div>
        <div>
          <h4 class="font-display text-[19px] font-bold text-[#1d1d1f]">Featherweight</h4>
          <p class="font-body text-[13px] text-[#86868b] mt-1">Wearable all day</p>
        </div>
      </div>

      <!-- Card 7: Enclosure -->
      <div tabindex="0" class="lg:col-span-1 rounded-[28px] bento-pocket overflow-hidden flex flex-col relative h-[180px] p-6 justify-between group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-[#86868b] text-2xl">3d_rotation</span>
          <span class="text-[10px] font-mono text-[#86868b] font-semibold">CAD</span>
        </div>
        <div>
          <h4 class="font-display text-[19px] font-bold text-[#1d1d1f]">PLA/PETG</h4>
          <p class="font-body text-[13px] text-[#86868b] mt-1">3D printable case</p>
        </div>
      </div>

      <!-- Card 8: Connectivity (BLE / USB-C) -->
      <div tabindex="0" class="lg:col-span-2 rounded-[28px] bento-pocket overflow-hidden flex flex-row items-center justify-between relative h-[180px] p-8 group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        <div class="flex flex-col justify-center">
          <h4 class="font-display text-[21px] font-bold text-[#1d1d1f]">Dual Interface</h4>
          <p class="font-body text-[14px] text-[#86868b] mt-1">Wireless streaming & charging</p>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center border border-[#d2d2d7]/50 shadow-sm">
              <span class="text-[11px] font-mono font-bold text-accent-blue">BLE 5.0</span>
            </div>
            <span class="text-[11px] font-body text-[#86868b]">Bluetooth</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center border border-[#d2d2d7]/50 shadow-sm">
              <span class="text-[11px] font-mono font-bold text-accent-blue">USB-C</span>
            </div>
            <span class="text-[11px] font-body text-[#86868b]">Charge/Flash</span>
          </div>
        </div>
      </div>

      <!-- Card 9: Built for Builders / Open Source -->
      <div tabindex="0" class="lg:col-span-4 rounded-[28px] bg-[#1d1d1f] overflow-hidden flex flex-col md:flex-row relative shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-[500px] group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        <!-- Content Side -->
        <div class="p-8 md:p-12 z-20 w-full md:w-[50%] flex flex-col justify-center relative">
          <div class="relative z-10 text-left">
            <p class="font-display text-[14px] font-semibold text-[#a1a1a6] tracking-wide mb-3">Open Architecture</p>
            <h3 class="font-display text-[36px] md:text-[48px] font-semibold text-[#f5f5f7] leading-[1.05] tracking-tight mb-4">Built for builders.</h3>
            <p class="font-body text-[16px] md:text-[18px] text-[#a1a1a6] leading-[1.5] max-w-[380px] mb-8">
              Aura is a manifesto for the open-source hardware movement. Firmware, schematics, and the entire AI pipeline are completely public. MIT licensed.
            </p>
            <div class="flex flex-wrap items-center gap-6">
              <a href="docs.html" class="inline-flex items-center justify-center bg-[#f5f5f7] text-[#1d1d1f] rounded-full px-6 py-3 font-display font-medium text-[15px] hover:scale-[1.03] transition-transform duration-300">View the repository</a>
            </div>
          </div>
        </div>
        <!-- Visual Side: Elegant Dark Mode Editor -->
        <div class="absolute inset-0 md:left-[45%] flex items-center justify-end z-10 p-6 md:p-0">
          <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1d1d1f] to-transparent z-20 hidden md:block"></div>
          <div class="w-full md:w-[130%] h-full flex items-center justify-center transform transition-transform duration-1000 group-hover:scale-[1.01] opacity-90 md:opacity-100">
            <div class="bg-[#28282b] rounded-2xl border border-white/10 shadow-2xl overflow-hidden w-full max-w-[540px] ml-auto">
              <div class="flex items-center px-4 py-3 border-b border-white/5 bg-[#1e1e1f]">
                <div class="flex gap-2">
                  <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
              </div>
              <!-- Code block contents -->
              <pre class="p-6 text-[11px] font-mono text-left text-white/85 leading-relaxed overflow-x-auto">
<span class="text-pink-400">import</span> AuraCore

<span class="text-blue-300">let</span> device = Aura(<span class="text-orange-300">hardware</span>: <span class="text-green-300">"ESP32-S3"</span>)

<span class="text-pink-400">await</span> device.configure { config <span class="text-pink-400">in</span>
  config.wakeWord = <span class="text-green-300">"Hey Aura"</span>
  config.visionEnabled = <span class="text-blue-300">true</span>
}

<span class="text-pink-400">await</span> device.startListening()
              </pre>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  ```

- [ ] **Step 2: Commit HTML template modifications**
  ```bash
  git add website/index.html
  git commit -m "feat: implement 4-column spec Bento Grid in index.html capabilities section"
  ```

---

### Task 4: Sync and run validation tests locally

**Files:**
- Run commands only

- [ ] **Step 1: Sync changes to docs folder**
  Run: `node scratch/sync_website.js`
  Expected: "Synchronization complete!"

- [ ] **Step 2: Run verification tests**
  Run: `node scratch/run_tests.js`
  Expected: PASS (All tests including the new Bento Grid validation test pass)

- [ ] **Step 3: Commit synced files**
  ```bash
  git add docs/
  git commit -m "build: sync homepage bento overhaul to docs folder"
  ```
