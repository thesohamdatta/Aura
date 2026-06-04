# Aura Website Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the Aura homepage (`web/index.html`) using a premium Apple-style design system with interactive components, strict layouts, and custom SVGs.

**Architecture:** We will implement an Apple-inspired grid and section theme rhythm using pure CSS variables in `global.css` and a page-specific `home.css`. Custom SVG components will be coded inline to represent the physical hardware, and GSAP/ScrollTrigger will drive the layout entry animations and stats counters.

**Tech Stack:** HTML5, CSS3, JavaScript (ES6+), GSAP (GreenSock Animation Platform), ScrollTrigger.

---

## Technical Validation Tool
We will use a validation script in `scratch/validate_site.js` to ensure the HTML file passes basic SEO rules, has zero graphic placeholders (like `[pendant-front.jpg]`), and points only to existing CSS/JS dependencies.

---

### Task 1: CSS Variables & Global Tokens
Configure the core design tokens in `web/css/global.css` to match the Apple Design System specification.

**Files:**
- Modify: `web/css/global.css`

- [ ] **Step 1: Update design tokens in global.css**
  Replace the existing root variables with the strict Apple color palette and typography rules.
  ```css
  :root {
    /* Apple Color Palette */
    --primary: #0066cc;
    --primary-focus: #0071e3;
    --primary-on-dark: #2997ff;
    --ink: #1d1d1f;
    --canvas: #ffffff;
    --canvas-parchment: #f5f5f7;
    --surface-tile-1: #272729;
    --surface-tile-2: #2a2a2c;
    --surface-tile-3: #252527;
    --surface-black: #000000;
    --surface-pearl: #fafafc;
    --border-light: #d2d2d7;
    --border-dark: #333336;

    /* Semantic Mappings */
    --bg-primary: var(--canvas);
    --text-primary: var(--ink);
    --text-secondary: #86868b;
    --border: var(--border-light);

    /* Typography */
    --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", sans-serif;
    --font-text: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", sans-serif;
    --font-mono: SFMono-Regular, Consolas, "Space Mono", monospace;

    /* Rounded shapes */
    --radius-none: 0px;
    --radius-xs: 5px;
    --radius-sm: 8px;
    --radius-md: 11px;
    --radius-lg: 18px;
    --radius-pill: 9999px;
  }

  [data-theme="dark"] {
    --bg-primary: var(--surface-black);
    --text-primary: #f5f5f7;
    --text-secondary: #86868b;
    --border: var(--border-dark);
  }
  ```
- [ ] **Step 2: Add Active Button Micro-Interaction**
  Ensure all buttons apply `transform: scale(0.95)` when active/pressed.
  ```css
  .btn:active {
    transform: scale(0.95);
  }
  ```
- [ ] **Step 3: Commit**
  Run:
  ```bash
  git add web/css/global.css
  git commit -m "style: establish Apple-style global design tokens"
  ```

---

### Task 2: Validation Script Setup
Create a local script to enforce page validity and prevent placeholders or missing assets.

**Files:**
- Create: `scratch/validate_site.js`

- [ ] **Step 1: Write validation script**
  Write a script to check formatting, SEO tags, link targets, and verify that no bracketed placeholders (like `[pendant-front.jpg]`) remain.
  ```javascript
  const fs = require('fs');
  const path = require('path');

  const htmlPath = path.join(__dirname, '../web/index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('index.html not found!');
    process.exit(1);
  }

  const html = fs.readFileSync(htmlPath, 'utf-8');
  let errors = [];

  // Check SEO & Titles
  if (!html.includes('<title>')) errors.push('Missing <title> tag');
  if (!html.includes('name="description"')) errors.push('Missing description meta tag');

  // Check Placeholders
  const placeholderRegex = /\[[a-zA-Z0-9\.\-_]+\.(jpg|png|gif|svg)\]/g;
  const matches = html.match(placeholderRegex);
  if (matches) {
    errors.push(`Found unresolved image placeholders: ${matches.join(', ')}`);
  }

  // Check layout structures
  if (!html.includes('<nav')) errors.push('Missing semantic navigation');
  if (!html.includes('<footer')) errors.push('Missing semantic footer');

  if (errors.length > 0) {
    console.error('Validation failed with errors:');
    errors.forEach(e => console.error(`- ${e}`));
    process.exit(1);
  } else {
    console.log('Site structure check passed successfully.');
    process.exit(0);
  }
  ```
- [ ] **Step 2: Execute validation script**
  Run: `node scratch/validate_site.js`
  Expected: Failure with error "Found unresolved image placeholders"
- [ ] **Step 3: Commit**
  Run:
  ```bash
  git add scratch/validate_site.js
  git commit -m "test: add static page validation script"
  ```

---

### Task 3: Global & Product Sub-Nav Overhaul
Update navigation blocks to include global-nav and sub-nav-frosted bars as specified in the Apple Design System.

**Files:**
- Modify: `web/index.html`
- Create: `web/css/nav.css` (Overwrite the existing file with the new styling)

- [ ] **Step 1: Overwrite nav.css with Apple frosted layout**
  Write navigation bar styles.
  ```css
  /* Global Nav */
  #navbar {
    background: var(--surface-black);
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  .nav-inner {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 22px;
  }

  .nav-logo {
    color: #f5f5f7;
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.12px;
  }

  .nav-links {
    display: flex;
    gap: 24px;
    list-style: none;
  }

  .nav-links a {
    color: #86868b;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.12px;
    transition: color 0.2s ease;
  }

  .nav-links a:hover, .nav-links a.active {
    color: #f5f5f7;
  }

  /* Product Sub-Nav */
  .sub-nav {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    height: 52px;
    background: rgba(245, 245, 247, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid var(--border);
    z-index: 99;
    display: flex;
    align-items: center;
  }

  [data-theme="dark"] .sub-nav {
    background: rgba(22, 22, 23, 0.8);
  }

  .sub-nav-inner {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px;
  }

  .sub-nav-title {
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 0.23px;
    color: var(--text-primary);
  }

  .sub-nav-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .sub-nav-actions a {
    font-size: 12px;
    color: var(--text-primary);
  }

  .sub-nav-btn {
    background: var(--primary);
    color: #ffffff;
    border-radius: var(--radius-pill);
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }

  .sub-nav-btn:hover {
    background: var(--primary-focus);
  }
  ```
- [ ] **Step 2: Add Sub-Nav HTML to index.html**
  Insert the `<div class="sub-nav">` structure inside `web/index.html` below the main `#navbar`. Add body padding offset (`padding-top: 96px`) to compensate for the stacked sticky menus.
- [ ] **Step 3: Commit**
  Run:
  ```bash
  git add web/index.html web/css/nav.css
  git commit -m "feat: implement Apple-style top navigation and frosted sub-nav"
  ```

---

### Task 4: Hero Section & Custom SVG Illustration
Replace the hero image placeholder with an inline vector drawing representing the physical Aura pendant.

**Files:**
- Modify: `web/index.html`
- Create: `web/css/home.css`

- [ ] **Step 1: Update Hero HTML and add SVG Illustration**
  Overwrite the hero block in `web/index.html` and write the inline SVG for the pendant.
  ```html
  <header class="hero tile-parchment">
    <div class="hero-inner text-container">
      <span class="overline">Aura Edition / 001</span>
      <h1 class="hero-headline">The phone was never the answer.</h1>
      <p class="hero-subtext">Ambient context engine. Screenless, voice-first, and built on the open frontier.</p>
      
      <!-- Inline SVG Pendant Graphic -->
      <div class="hero-image-wrapper">
        <svg class="pendant-svg" width="320" height="320" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 20px 30px rgba(0,0,0,0.15))">
          <!-- Outer Pendant Case -->
          <circle cx="100" cy="100" r="85" fill="url(#pendant-body)" stroke="#d2d2d7" stroke-width="1"/>
          <!-- Inner Core / Bezel -->
          <circle cx="100" cy="100" r="55" fill="#1d1d1f" stroke="#333336" stroke-width="1.5"/>
          <!-- Camera Lens Accent -->
          <circle cx="100" cy="100" r="18" fill="#000000" stroke="#86868b" stroke-width="2"/>
          <circle cx="94" cy="94" r="5" fill="#2997ff" opacity="0.6"/> <!-- Blue Reflection -->
          <!-- Metallic Gradients -->
          <defs>
            <radialGradient id="pendant-body" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(100 100) rotate(90) scale(85)">
              <stop offset="0" stop-color="#ffffff"/>
              <stop offset="0.75" stop-color="#f5f5f7"/>
              <stop offset="1" stop-color="#e2e2e7"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div class="hero-actions">
        <a href="#product" class="btn btn-primary">Explore Aura</a>
        <a href="https://github.com/thesohamdatta/Aura-Wearable-AI" class="btn btn-secondary">Build Yours</a>
      </div>
    </div>
  </header>
  ```
- [ ] **Step 2: Create initial styles in home.css**
  Define styles for layout spacing, hero elements, and tracking values.
  ```css
  /* Full-bleed alternating tiles */
  .tile-light {
    background: var(--canvas);
    color: var(--ink);
    padding: 80px 24px;
    text-align: center;
  }
  .tile-parchment {
    background: var(--canvas-parchment);
    color: var(--ink);
    padding: 80px 24px;
    text-align: center;
  }
  .tile-dark {
    background: var(--surface-tile-1);
    color: var(--text-primary);
    padding: 80px 24px;
    text-align: center;
  }

  /* Hero Display Styling */
  .hero {
    padding-top: 140px;
    padding-bottom: 80px;
  }
  .hero-headline {
    font-family: var(--font-display);
    font-size: 56px;
    font-weight: 600;
    line-height: 1.07;
    letter-spacing: -0.28px;
    color: var(--ink);
    margin-bottom: 12px;
  }
  .hero-subtext {
    font-size: 24px;
    font-weight: 300;
    line-height: 1.47;
    color: #86868b;
    max-width: 600px;
    margin: 0 auto 32px;
  }
  .hero-image-wrapper {
    margin: 48px auto;
    width: 320px;
    height: 320px;
  }
  ```
- [ ] **Step 3: Link home.css inside index.html**
  Add `<link rel="stylesheet" href="css/home.css">` to the `<head>` of `index.html`.
- [ ] **Step 4: Commit**
  Run:
  ```bash
  git add web/index.html web/css/home.css
  git commit -m "feat: redesign hero section and add inline vector pendant SVG"
  ```

---

### Task 5: The Dilemma Stats Counter
Implement the statistics row inside the dilemma section with number-counters that animate on scroll.

**Files:**
- Modify: `web/index.html`
- Modify: `web/css/home.css`

- [ ] **Step 1: Clean Dilemma HTML**
  Replace Section 3 inside `web/index.html` with:
  ```html
  <section class="section problem-section tile-dark">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-block">
          <span class="stat-number" data-target="96">0</span><span class="stat-suffix">×</span>
          <span class="stat-label">daily phone unlocks.</span>
        </div>
        <div class="stat-block">
          <span class="stat-number" data-target="4">0</span><span class="stat-suffix">hrs</span>
          <span class="stat-label">staring at glass. daily.</span>
        </div>
      </div>
      <div class="problem-footer">
        <p class="italic-quote">“The interface became the cage.”</p>
      </div>
    </div>
  </section>
  ```
- [ ] **Step 2: Add Stats CSS in home.css**
  Configure the grid styles.
  ```css
  .stats-grid {
    display: flex;
    justify-content: space-around;
    gap: 40px;
    margin-bottom: 40px;
  }
  .stat-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .stat-number {
    font-size: 72px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1;
  }
  .stat-suffix {
    font-size: 40px;
    font-weight: 600;
    color: var(--primary-on-dark);
  }
  .stat-label {
    font-size: 14px;
    color: #86868b;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 8px;
  }
  .italic-quote {
    font-size: 28px;
    font-style: italic;
    color: #86868b;
  }
  ```
- [ ] **Step 3: Commit**
  Run:
  ```bash
  git add web/index.html web/css/home.css
  git commit -m "feat: structure dilemma statistics counter grid"
  ```

---

### Task 6: Interactive Memory & Chat Simulator
Create a simulated conversation module showing how Aura's RAG context queries work.

**Files:**
- Modify: `web/index.html`
- Modify: `web/css/home.css`

- [ ] **Step 1: Write Memory Simulator HTML**
  Insert the simulator markup below the solution grid.
  ```html
  <section class="section tile-dark">
    <div class="container text-container">
      <span class="overline">Context Retrieval</span>
      <h2 class="section-headline">Instant semantic recall.</h2>
      <p style="margin-bottom: 40px; color: #86868b;">Click a memory query below to see Aura locate detail context instantly from your past days.</p>
      
      <!-- Interactive Widget -->
      <div class="chat-simulator">
        <div class="sim-queries">
          <button class="sim-query-btn" onclick="triggerSim('meeting')">"What did we decide on Tuesday?"</button>
          <button class="sim-query-btn" onclick="triggerSim('idea')">"Recall my idea about the wearables."</button>
        </div>
        <div class="sim-display">
          <div class="sim-row query-row">
            <span class="sim-tag">Query:</span>
            <p id="sim-query-text" class="sim-text">Select a memory query above...</p>
          </div>
          <div class="sim-waveform" id="sim-wave" style="display: none;">
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
          </div>
          <div class="sim-row response-row" id="sim-response" style="opacity: 0;">
            <span class="sim-tag success-tag">Aura:</span>
            <p id="sim-response-text" class="sim-text">Result text will load...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  ```
- [ ] **Step 2: Add Simulator Styles in home.css**
  Implement layout and keyframe animation for wave bars.
  ```css
  .chat-simulator {
    background: #1c1c1e;
    border: 1px solid #333336;
    border-radius: var(--radius-lg);
    padding: 32px;
    text-align: left;
  }
  .sim-queries {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
  }
  .sim-query-btn {
    background: #2c2c2e;
    color: #ffffff;
    border: none;
    padding: 10px 18px;
    border-radius: var(--radius-pill);
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s ease;
  }
  .sim-query-btn:hover {
    background: #3a3a3c;
  }
  .sim-display {
    background: #000000;
    border-radius: var(--radius-sm);
    padding: 20px;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .sim-row {
    display: flex;
    gap: 12px;
  }
  .sim-tag {
    font-family: var(--font-mono);
    color: var(--primary-on-dark);
    font-weight: 600;
  }
  .success-tag {
    color: #34c759;
  }
  .sim-text {
    font-size: 15px;
    color: #f5f5f7;
    margin: 0;
  }
  
  /* Animated CSS Waveform */
  .sim-waveform {
    display: flex;
    justify-content: center;
    gap: 6px;
    height: 30px;
    align-items: center;
  }
  .wave-bar {
    width: 3px;
    height: 10px;
    background: var(--primary-on-dark);
    border-radius: 2px;
    animation: wave-bounce 0.8s ease infinite alternate;
  }
  .wave-bar:nth-child(2) { animation-delay: 0.15s; }
  .wave-bar:nth-child(3) { animation-delay: 0.3s; }
  .wave-bar:nth-child(4) { animation-delay: 0.45s; }
  .wave-bar:nth-child(5) { animation-delay: 0.6s; }

  @keyframes wave-bounce {
    0% { height: 6px; }
    100% { height: 26px; }
  }
  ```
- [ ] **Step 3: Commit**
  Run:
  ```bash
  git add web/index.html web/css/home.css
  git commit -m "feat: add HTML structure and styles for memory chat simulator"
  ```

---

### Task 7: Interactive Exploded Hardware Diagram
Replace the worn/worn-out layout placeholders with an interactive layered SVG graphic representing the hardware stack (Case, MCU, Battery).

**Files:**
- Modify: `web/index.html`
- Modify: `web/css/home.css`

- [ ] **Step 1: Write Interactive Exploded Layout HTML**
  Replace Section 4's placeholder with:
  ```html
  <section class="section tile-parchment">
    <div class="container">
      <span class="overline">Hardware</span>
      <h2 class="section-headline">Open schematic. Modular design.</h2>
      <p style="margin-bottom: 56px; color: #86868b;">Hover or tap on the layers below to inspect individual assembly details.</p>

      <div class="exploded-wrapper">
        <div class="exploded-diagram">
          <!-- Layer 3: Front Shell -->
          <div class="exploded-layer" data-layer="front" style="transform: translateY(0px)">
            <svg viewBox="0 0 100 40" width="200" height="80">
              <ellipse cx="50" cy="20" rx="40" ry="12" fill="rgba(255,255,255,0.7)" stroke="#86868b" stroke-width="1"/>
              <ellipse cx="50" cy="20" rx="10" ry="4" fill="#000000"/>
            </svg>
            <span class="layer-label">Front Case (3D Printed PLA)</span>
          </div>

          <!-- Layer 2: ESP32-S3 Module -->
          <div class="exploded-layer" data-layer="mcu" style="transform: translateY(20px)">
            <svg viewBox="0 0 100 40" width="200" height="80">
              <rect x="25" y="10" width="50" height="20" rx="2" fill="#1e3a8a" stroke="#2563eb" stroke-width="1"/>
              <rect x="35" y="13" width="12" height="12" fill="#9ca3af"/>
            </svg>
            <span class="layer-label">XIAO ESP32-S3 Sense MCU</span>
          </div>

          <!-- Layer 1: Lithium Battery & Back Shell -->
          <div class="exploded-layer" data-layer="back" style="transform: translateY(40px)">
            <svg viewBox="0 0 100 40" width="200" height="80">
              <ellipse cx="50" cy="20" rx="40" ry="12" fill="rgba(39,39,41,0.9)" stroke="#333336" stroke-width="1"/>
              <rect x="30" y="15" width="40" height="10" fill="#059669"/>
            </svg>
            <span class="layer-label">350mAh LiPo Battery & Base</span>
          </div>
        </div>

        <!-- Info Card -->
        <div class="exploded-info">
          <h4 id="layer-info-title">Hover over a layer</h4>
          <p id="layer-info-desc">Explore the modular building blocks of the Aura hardware stack. Total assembly time: ~10 minutes.</p>
        </div>
      </div>
    </div>
  </section>
  ```
- [ ] **Step 2: Add Exploded Layout CSS in home.css**
  Configure isometric flex offsets and card dimensions.
  ```css
  .exploded-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    max-width: 800px;
    margin: 0 auto;
  }
  .exploded-diagram {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 320px;
    width: 300px;
  }
  .exploded-layer {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease;
  }
  .exploded-layer:hover {
    filter: drop-shadow(0 10px 15px rgba(0,70,200,0.15));
  }
  
  /* Initial overlapping state offsets */
  .exploded-layer[data-layer="front"] { top: 20px; z-index: 3; }
  .exploded-layer[data-layer="mcu"]   { top: 100px; z-index: 2; }
  .exploded-layer[data-layer="back"]  { top: 180px; z-index: 1; }

  /* Expanded Y-axis offsets when hovering container */
  .exploded-diagram:hover .exploded-layer[data-layer="front"] { transform: translateY(-40px); }
  .exploded-diagram:hover .exploded-layer[data-layer="mcu"]   { transform: translateY(0px); }
  .exploded-diagram:hover .exploded-layer[data-layer="back"]  { transform: translateY(40px); }

  .layer-label {
    font-size: 11px;
    font-family: var(--font-mono);
    color: #86868b;
    margin-top: 4px;
  }
  .exploded-info {
    flex: 1;
    background: var(--canvas);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 24px;
    text-align: left;
    min-height: 160px;
  }
  .exploded-info h4 {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--ink);
  }
  .exploded-info p {
    font-size: 14px;
    line-height: 1.47;
    color: #86868b;
  }
  ```
- [ ] **Step 3: Commit**
  Run:
  ```bash
  git add web/index.html web/css/home.css
  git commit -m "feat: implement interactive exploded hardware view design"
  ```

---

### Task 8: Interactive Comparison Table Overhaul
Improve the devices comparison table to match the clean glassmorphic style specifications.

**Files:**
- Modify: `web/index.html`
- Modify: `web/css/home.css`

- [ ] **Step 1: Clean Comparison Markup**
  Format table cells and header rows.
  ```html
  <section class="section tile-light">
    <div class="container">
      <span class="overline">Comparison</span>
      <h2 class="section-headline" style="margin-bottom: 48px;">How Aura compares.</h2>
      
      <div class="table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th scope="col">Device</th>
              <th scope="col">Audio</th>
              <th scope="col">Camera</th>
              <th scope="col">Open Source</th>
              <th scope="col">Screenless</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="device-name">Humane AI Pin</td>
              <td>✓</td>
              <td>✓</td>
              <td class="cross">✗</td>
              <td>✓</td>
              <td>$699</td>
            </tr>
            <tr>
              <td class="device-name">Limitless Pendant</td>
              <td>✓</td>
              <td class="cross">✗</td>
              <td class="cross">✗</td>
              <td>✓</td>
              <td>$99</td>
            </tr>
            <tr>
              <td class="device-name">Omi DevKit</td>
              <td>✓</td>
              <td class="cross">✗</td>
              <td>✓</td>
              <td>✓</td>
              <td>$89</td>
            </tr>
            <tr class="highlight-row">
              <td class="device-name">Aura</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td class="price-highlight">~$50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  ```
- [ ] **Step 2: Table CSS Styling**
  Apply modern, thin hairline separators and select high-contrast rows.
  ```css
  .table-wrapper {
    overflow-x: auto;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--canvas);
  }
  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: 15px;
  }
  .comparison-table th, .comparison-table td {
    padding: 16px 24px;
    border-bottom: 1px solid var(--border);
  }
  .comparison-table th {
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--text-primary);
    background: var(--canvas-parchment);
  }
  .device-name {
    font-weight: 600;
    color: var(--text-primary);
  }
  .cross {
    color: #ff3b30;
  }
  .highlight-row {
    background: rgba(0, 102, 204, 0.04);
  }
  .price-highlight {
    color: var(--primary);
    font-weight: 600;
  }
  ```
- [ ] **Step 3: Commit**
  Run:
  ```bash
  git add web/index.html web/css/home.css
  git commit -m "style: overhaul comparison table with minimalist clean layouts"
  ```

---

### Task 9: Client Interaction Logic & GSAP Animations
Implement user interactions for simulator triggers and ScrollTrigger scroll-reveal timelines.

**Files:**
- Modify: `web/index.html`
- Create: `web/js/home.js`

- [ ] **Step 1: Write interaction handlers in home.js**
  Write the text simulations and hook up hover events for layers.
  ```javascript
  // Chat Simulator Queries Data
  const responses = {
    meeting: {
      query: "What did we decide on Tuesday?",
      reply: "Context retrieved: You finalized building the open-source firmware using PlatformIO and budgeted BOM at ~$50 USD."
    },
    idea: {
      query: "Recall my idea about the wearables.",
      reply: "Context retrieved: You noted that wearables should remain screenless and function quietly in the background without attention traps."
    }
  };

  function triggerSim(key) {
    const data = responses[key];
    if (!data) return;

    const queryEl = document.getElementById('sim-query-text');
    const waveEl = document.getElementById('sim-wave');
    const respEl = document.getElementById('sim-response');
    const respTextEl = document.getElementById('sim-response-text');

    queryEl.innerText = data.query;
    respEl.style.opacity = '0';
    waveEl.style.display = 'flex';

    setTimeout(() => {
      waveEl.style.display = 'none';
      respTextEl.innerText = data.reply;
      respEl.style.opacity = '1';
      respEl.style.transition = 'opacity 0.4s ease';
    }, 1500);
  }

  // Hardware Layer Info Panel Hover Trigger
  const layersInfo = {
    front: {
      title: "Front Shell",
      desc: "3D-printed enclosure cover using matte black PLA. Features a precise lens cutout and integrated clasp."
    },
    mcu: {
      title: "XIAO ESP32-S3 Sense",
      desc: "Dual-core processor with 8MB PSRAM, integrated OV2640 2MP camera, and high-fidelity digital microphone."
    },
    back: {
      title: "350mAh Lithium Battery",
      desc: "Ultra-compact rechargeable cell providing up to 4 hours of constant capture. Fits into back slot."
    }
  };

  document.querySelectorAll('.exploded-layer').forEach(layer => {
    layer.addEventListener('mouseenter', () => {
      const type = layer.getAttribute('data-layer');
      const info = layersInfo[type];
      if (info) {
        document.getElementById('layer-info-title').innerText = info.title;
        document.getElementById('layer-info-desc').innerText = info.desc;
      }
    });
  });

  // Statistics counters animation
  function initCounters() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      let current = 0;
      const step = target / 50;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          stat.innerText = target;
          clearInterval(interval);
        } else {
          stat.innerText = Math.floor(current);
        }
      }, 30);
    });
  }

  // Trigger counters when scrolled into view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const problemSec = document.querySelector('.problem-section');
    if (problemSec) observer.observe(problemSec);
  } else {
    initCounters();
  }
  ```
- [ ] **Step 2: Add GSAP Timelines scroll reveal**
  Use GSAP's simple API to drive transitions when scroll position changes.
  ```javascript
  document.addEventListener("DOMContentLoaded", () => {
    // Standard page transitions
    gsap.from(".hero-headline", { opacity: 0, y: 30, duration: 1, delay: 0.2 });
    gsap.from(".hero-subtext", { opacity: 0, y: 35, duration: 1, delay: 0.4 });
    gsap.from(".hero-image-wrapper", { opacity: 0, scale: 0.9, duration: 1.2, delay: 0.5 });
    gsap.from(".hero-actions", { opacity: 0, y: 20, duration: 1, delay: 0.6 });

    // Stagger section entries on scroll
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.section').forEach(sec => {
      gsap.from(sec, {
        scrollTrigger: {
          trigger: sec,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 0.8
      });
    });
  });
  ```
- [ ] **Step 3: Include script files in index.html**
  At the bottom of `web/index.html`, add `<script src="js/home.js"></script>` to verify integration.
- [ ] **Step 4: Commit**
  Run:
  ```bash
  git add web/index.html web/js/home.js
  git commit -m "feat: wire up chat simulations, hardware panels, and GSAP timelines"
  ```

---

### Task 10: Final Validation Check
Run the validator script to verify the homepage HTML contains no unresolved placeholders and resolves all CSS files.

**Files:**
- Modify: `web/index.html` (Make final alignment edits)

- [ ] **Step 1: Run validation script**
  Run: `node scratch/validate_site.js`
  Expected: PASS
- [ ] **Step 2: Verification of files existence**
  Verify the following paths are correct:
  - [index.html](file:///D:/PROJECTS/2026/Aura-Wearable-AI/web/index.html)
  - [home.css](file:///D:/PROJECTS/2026/Aura-Wearable-AI/web/css/home.css)
  - [home.js](file:///D:/PROJECTS/2026/Aura-Wearable-AI/web/js/home.js)
- [ ] **Step 3: Commit**
  Run:
  ```bash
  git status
  git commit -m "chore: complete landing page visual overhaul task list validation"
  ```
