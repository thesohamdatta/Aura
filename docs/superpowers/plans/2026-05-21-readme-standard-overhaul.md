# AURA README Standard Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the root `README.MD` into a clean, professional, and minimalist open-source landing page using high-fidelity assets from `Assets/PRO/`.

**Architecture:** We will replace the current complex HTML-heavy README with a standard Markdown structure that prioritizes readability and high-quality imagery over visual styling.

**Tech Stack:** Markdown, Git.

---

### Task 1: Skeleton Rewrite and Core Imagery

**Files:**
- Modify: `README.MD`

- [ ] **Step 1: Overwrite the Header and Hero**

Replace the top of `README.MD` with:
- `# AURA`
- Sub-headline: `Open-source AI wearable pendant. Sees it. Hears it. Remembers it.`
- Hero Image: `Assets/PRO/HERO/wearable.png` (Centered via `<div align="center">`).
- Monochrome Badges (MIT, MCU, App, Cost).

- [ ] **Step 2: Add Introduction and Key Features**

Add a 3-sentence summary of the vision.
Add a bulleted list of "Key Capabilities" (Transcription, Vision, Semantic Memory).

- [ ] **Step 3: Integrate Core Artifact Images**

Add sections for:
- **System Architecture**: Use `Assets/PRO/DIAGRAMS/system_architecture.png`.
- **Mobile Interface**: Use `Assets/PRO/SOFTWARE/software_mockups.jpg`.
- **Hardware Assembly**: Use `Assets/PRO/HARDWARE/all_components.png`.

- [ ] **Step 4: Commit**

```bash
git add README.MD
git commit -m "docs: rewrite README with minimalist structure and high-fidelity PRO assets"
```

### Task 2: Standardize Technical Tables and Linkage

**Files:**
- Modify: `README.MD`

- [ ] **Step 1: Reconstruct BOM and Specs**

Convert existing Bill of Materials and Hardware Specs into standard Markdown tables. Remove any remaining HTML styling from these sections.

- [ ] **Step 2: Establish the Developer Entry Point**

Add a "Quick Start" section with the 3 most critical setup commands.
Add a "Documentation" section with a clean bulleted list of links to `docs/guides/`.

- [ ] **Step 3: Final Cleanup and Link Audit**

Remove all old "Artifact 0X" numbering and custom font color tags. Verify all internal section links and links to `docs/guides/` work correctly.

- [ ] **Step 4: Commit**

```bash
git add README.MD
git commit -m "docs: standardize README tables and documentation links"
```
