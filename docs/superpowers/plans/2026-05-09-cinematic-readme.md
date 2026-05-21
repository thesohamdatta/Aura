# Cinematic README Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Aura `README.MD` into a high-fidelity, cinematic landing page using "Midnight Luxe" aesthetics and local visual assets.

**Architecture:** A hybrid HTML/Markdown structure that prioritizes a "Cognitive Funnel" layout. It uses centered hero elements, a 3-column bento-box for hardware, and consolidated subsystem instructions.

**Tech Stack:** GitHub Flavored Markdown, HTML5, SVG.

---

### Task 1: Backup and Global Layout Setup

**Files:**
- Modify: `README.MD`
- Create: `README.MD.bak`

- [ ] **Step 1: Backup current README**
```bash
cp README.MD README.MD.bak
```

- [ ] **Step 2: Initialize Global HTML structure**
Replace the top section of `README.MD` with the new Hero banner and centered navigation. Use the side-profile asset for the hero.

```markdown
<div align="center">
  <img src="https://github.com/thesohamdatta/Aura-Wearable-AI/blob/main/Assets/Adobe%20Express%20-%20file%20(2).png?raw=true" width="100%" alt="Aura Hero" />
  <h1>A U R A</h1>
  <h3><em>The open wearable AI pendant that remembers for you.</em></h3>
  <p>
    <a href="https://auraos.framer.ai/">Website</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#hardware">Hardware</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

---
```

- [ ] **Step 3: Commit**
```bash
git add README.MD
git commit -m "docs: initialize cinematic hero layout"
```

### Task 2: The Philosophy Section

**Files:**
- Modify: `README.MD`

- [ ] **Step 1: Implement the Philosophy section with the 3D button render**
Add the section using an HTML table for layout control (Image on right, Text on left).

```markdown
## ✧ Philosophy

<table>
  <tr>
    <td width="60%">
      <h3>A digital instrument for the human memory.</h3>
      <p>Aura isn't just a recording device; it's a 1:1 conceptual bridge between your daily life and your digital knowledge base.</p>
      <ul>
        <li><strong>Intentional:</strong> Captured with a single tactile interaction.</li>
        <li><strong>Invisible:</strong> 45g of hardware that stays out of your way.</li>
        <li><strong>Infinite:</strong> Every moment searchable, forever.</li>
      </ul>
    </td>
    <td width="40%">
      <img src="https://github.com/thesohamdatta/Aura-Wearable-AI/blob/main/Assets/4.png?raw=true" alt="Tactile Interaction" />
    </td>
  </tr>
</table>

---
```

- [ ] **Step 2: Commit**
```bash
git add README.MD
git commit -m "docs: add philosophy section with tactile render"
```

### Task 3: The Hardware Bento Box

**Files:**
- Modify: `README.MD`

- [ ] **Step 1: Create the 3-column Bento Box for components**
Use an HTML table to align the three core hardware artifacts (Brain, Power, Voice).

```markdown
## 🛠️ The Hardware Artifacts

<table align="center">
  <tr>
    <td align="center" width="33%">
      <img src="https://github.com/thesohamdatta/Aura-Wearable-AI/blob/main/Assets/2-113991115-xiao-esp32-s3-sense_1066x.webp?raw=true" width="150px" /><br/>
      <strong>The Brain</strong><br/>
      <small>XIAO ESP32-S3 Sense<br/>8MB PSRAM / Dual-Core</small>
    </td>
    <td align="center" width="33%">
      <img src="https://github.com/thesohamdatta/Aura-Wearable-AI/blob/main/Assets/Adobe%20Express%20-%20file%20(2).png?raw=true" width="150px" /><br/>
      <strong>The Power</strong><br/>
      <small>500mAh LiPo<br/>8-10h Active Use</small>
    </td>
    <td align="center" width="33%">
      <img src="https://github.com/thesohamdatta/Aura-Wearable-AI/blob/main/Assets/8ohm-2w-speaker-1_720x.webp?raw=true" width="150px" /><br/>
      <strong>The Voice</strong><br/>
      <small>I2S MEMS Mic<br/>8Ω 2W Speaker</small>
    </td>
  </tr>
</table>

---
```

- [ ] **Step 2: Commit**
```bash
git add README.MD
git commit -m "docs: add hardware bento box"
```

### Task 4: Unified Technical Documentation

**Files:**
- Modify: `README.MD`

- [ ] **Step 1: Consolidate the AI Pipeline and Software Stack**
Use clean Markdown tables and a refined "Quick Start" that prioritizes the UF2 method.

```markdown
## 🧠 Intelligence Pipeline

```text
Audio (Opus) ➔ Deepgram (STT) ➔ LLM (Groq/Ollama) ➔ Vector DB (Pinecone)
```

### 🚀 Rapid Onboarding

1. **Hardware (Easiest Path):**
   - Connect Aura via USB-C.
   - Enter Bootloader (Hold BOOT, Tap RESET).
   - Drag `firmware/releases/aura_v2.uf2` to the `ESP32S3` drive.

2. **Backend:**
   - `cd backend && pip install -r requirements.txt`
   - `cp .env.template .env && python main.py`

---
```

- [ ] **Step 2: Commit**
```bash
git add README.MD
git commit -m "docs: consolidate technical documentation and quick start"
```

### Task 5: The "System Operational" Footer

**Files:**
- Modify: `README.MD`

- [ ] **Step 1: Add the polished footer**

```markdown
<div align="center">
  <p>Always with you. Always for you.</p>
  <code>🟢 SYSTEM OPERATIONAL // V2.3.2</code>
  <br/><br/>
  <sub>Built by <a href="https://www.linkedin.com/in/thesohamdatta">Soham Datta</a> & <a href="https://www.linkedin.com/in/laxman-pajai-434b98239">Laxman Pajai</a></sub>
</div>
```

- [ ] **Step 2: Final Commit and Cleanup**
```bash
git add README.MD
git commit -m "docs: add cinematic footer and finalize readme"
rm README.MD.bak
```
