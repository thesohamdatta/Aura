# Asset Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace existing assets with a new professional set from an external directory.

**Architecture:** Recursive deletion of the target folder followed by a recursive copy from the source folder.

**Tech Stack:** PowerShell

---

### Task 1: Cleanup Existing Assets

**Files:**
- Modify: `Assets/` (Delete all contents)

- [ ] **Step 1: Delete all contents in the Assets directory**
  
  Run: `powershell.exe -NoProfile -Command "Remove-Item -Path 'Assets\*' -Recurse -Force"`
  Expected: All subfolders and files inside `Assets/` are removed.

- [ ] **Step 2: Verify deletion**
  
  Run: `ls Assets`
  Expected: (empty)

---

### Task 2: Copy New Assets

**Files:**
- Create: `Assets/*` (New content)

- [ ] **Step 1: Copy new assets from Desktop**
  
  Run: `powershell.exe -NoProfile -Command "Copy-Item -Path 'C:\Users\Soham\Desktop\AURA IMAGES\Github readme\*' -Destination 'Assets\' -Recurse -Force"`
  Expected: Files from the source directory appear in `Assets/`.

- [ ] **Step 2: Verify migration**
  
  Run: `ls Assets`
  Expected: Listing of the new professional assets.

---

### Task 3: Git Update

- [ ] **Step 1: Check git status**
  
  Run: `git status`
  Expected: Shows deletions of old assets and additions of new assets.

- [ ] **Step 2: Stage changes**
  
  Run: `git add Assets`
  Expected: Changes staged.
