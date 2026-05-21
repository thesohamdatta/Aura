# README Hero Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Backup the existing README.MD and initialize the high-fidelity Cinematic Hero layout in the root README.MD.

**Architecture:** Surgical replacement of the top section of the README.MD with a centered HTML-based hero layout that includes a high-resolution image, brand title, tagline, and navigation links.

**Tech Stack:** Markdown, HTML/CSS for alignment and styling.

---

### Task 1: Backup and Verification

**Files:**
- Modify: `README.MD` (Read for context)
- Create: `README.MD.bak`

- [ ] **Step 1: Verify current directory**

Run: `ls`
Expected: `README.MD` should be present in the output.

- [ ] **Step 2: Create backup**

Run: `cp README.MD README.MD.bak`

- [ ] **Step 3: Verify backup**

Run: `ls README.MD.bak`
Expected: `README.MD.bak` exists.

---

### Task 2: Inject Cinematic Hero Layout

**Files:**
- Modify: `README.MD`

- [ ] **Step 1: Read existing README.MD**

Read the first 50 lines of `README.MD` to identify where to inject the hero layout.

- [ ] **Step 2: Apply the layout change**

Inject the following block at the very top of `README.MD`.

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

- [ ] **Step 3: Verify the file content**

Read `README.MD` and ensure the HTML is at the top and the rest of the file is intact.

---

### Task 3: Commit Changes

- [ ] **Step 1: Stage and commit**

Run:
```bash
git add README.MD
git commit -m "docs: initialize cinematic hero layout"
```

- [ ] **Step 2: Verify git status**

Run: `git status`
Expected: Working tree clean (except for untracked backup if not ignored).
