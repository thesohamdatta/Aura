# AURA Unified Documentation Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize sub-module READMEs with the "Brutalist Signal" aesthetic and migrate detailed setup guides to a central `docs/` folder.

**Architecture:** We will extract high-volume technical instructions into standalone guides in `docs/` and refactor module READMEs into beautiful, concise "Artifact Landing Pages" using HTML/Markdown.

**Tech Stack:** Markdown, HTML.

---

### Task 1: Centralize Firmware Setup Guide

**Files:**
- Create: `docs/guides/firmware-setup.md`
- Modify: `firmware/readme.md`

- [ ] **Step 1: Create the detailed guide**

Extract all setup methods (UF2, PlatformIO, Arduino IDE, Arduino CLI) and Battery/Power details from `firmware/readme.md` and move them to `docs/guides/firmware-setup.md`. Add a clean "Brutalist" header.

- [ ] **Step 2: Update firmware/readme.md to skeleton**

Remove the extracted sections from `firmware/readme.md`. Keep only the Architecture and Configuration sections for now.

- [ ] **Step 3: Commit**

```bash
git add docs/guides/firmware-setup.md firmware/readme.md
git commit -m "docs: move detailed firmware setup to central guide"
```

### Task 2: Centralize Backend Setup Guide

**Files:**
- Create: `docs/guides/backend-setup.md`
- Modify: `backend/README.md`

- [ ] **Step 1: Create the detailed guide**

Extract Google Cloud/Firebase setup, Environment File details, and ngrok instructions from `backend/README.md` and move them to `docs/guides/backend-setup.md`.

- [ ] **Step 2: Update backend/README.md to skeleton**

Remove the extracted sections from `backend/README.md`. Keep only the Feature list and Module Structure sections.

- [ ] **Step 3: Commit**

```bash
git add docs/guides/backend-setup.md backend/README.md
git commit -m "docs: move detailed backend setup to central guide"
```

### Task 3: Centralize Mobile App Setup Guide

**Files:**
- Create: `docs/guides/app-setup.md`
- Modify: `app/README.md`

- [ ] **Step 1: Create the detailed guide**

Extract Requirements, Build & Run details, and Pairing instructions from `app/README.md` and move them to `docs/guides/app-setup.md`.

- [ ] **Step 2: Update app/README.md to skeleton**

Remove the extracted sections. Keep only the App structure.

- [ ] **Step 3: Commit**

```bash
git add docs/guides/app-setup.md app/README.md
git commit -m "docs: move detailed app setup to central guide"
```

### Task 4: Overhaul Module README Aesthetics

**Files:**
- Modify: `firmware/readme.md`
- Modify: `backend/README.md`
- Modify: `app/README.md`

- [ ] **Step 1: Overhaul Firmware README**

Apply the "Signal Label" header, centered hero image (`Assets/MAIN/main moduel.webp`), and "Quick Start" block. Add a link to the "Deep Dive" guide.

- [ ] **Step 2: Overhaul Backend README**

Apply the "Signal Label" header, centered hero image (`Assets/MAIN/diagram.jpg`), and "Quick Start" block. Add a link to the "Deep Dive" guide.

- [ ] **Step 3: Overhaul App README**

Apply the "Signal Label" header, centered hero image (`Assets/MAIN/Hero APP mocuk of applicaiotn .png`), and "Quick Start" block. Add a link to the "Deep Dive" guide.

- [ ] **Step 4: Commit**

```bash
git add firmware/readme.md backend/README.md app/README.md
git commit -m "feat: overhaul module READMEs with Brutalist Signal aesthetic"
```

### Task 5: Final Link Audit and Polish

**Files:**
- Modify: `README.MD`
- Modify: `docs/guides/*.md`

- [ ] **Step 1: Update Root README links**

Ensure all "Deep Dive" links in the root `README.MD` point to the new files in `docs/guides/`.

- [ ] **Step 2: Verify all image paths**

Check all images in `docs/guides/` and module READMEs. Since relative paths have changed (e.g., `../Assets` vs `../../Assets`), ensure they all resolve correctly.

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "chore: final link audit and documentation polish"
```
