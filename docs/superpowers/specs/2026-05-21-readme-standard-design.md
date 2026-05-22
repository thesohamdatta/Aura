# AURA README "Open Source Standard" Design Spec

**Goal:** Transform the README.MD into a clean, professional, and minimalist open-source landing page. Eliminate "visual bombardment" and use high-quality professional assets.

**Aesthetic:** **Standard/Modern Hybrid**
- **Clean Markdown:** No custom HTML colors or complex CSS. Rely on standard Markdown `#` and `##` hierarchy.
- **High-Fidelity Assets:** Use the new `Assets/PRO/` dataset.
- **Minimalist Palette:** Black, White, and subtle Grays (via badges).

---

## 1. Structure & Asset Mapping

### A. Header & Hero
- **Headline:** `# AURA`
- **Sub-headline:** `Open-source AI wearable pendant. Sees it. Hears it. Remembers it.`
- **Hero Image:** `Assets/PRO/HERO/wearable.png` (Centered).
- **Badges:** Standard flat-square monochrome badges for License, Stack, and Cost.

### B. Introduction
- Short, 3-sentence summary of the vision: Capture context, stream to phone, semantic search.

### C. The Artifacts (The Core Sections)
- **Architecture:** `Assets/PRO/DIAGRAMS/system_architecture.png`.
- **Software:** `Assets/PRO/SOFTWARE/software_mockups.jpg`.
- **Hardware:** `Assets/PRO/HARDWARE/all_components.png`.

### D. Technical Tables
- **BOM:** Standard Markdown table (Component | Spec | Qty | Link).
- **Specs:** Standard Markdown table (CPU | RAM | Wireless).

### E. Developer Access
- **Quick Start:** 3-command setup for backend/app/firmware.
- **Guides:** Bulleted list of links to `docs/guides/`.

---

## 2. Implementation Strategy

1.  **Skeleton Rewrite:** Overwrite `README.MD` with the new minimalist structure.
2.  **Asset Swap:** Replace old "Cinematic" assets with the new `PRO` assets.
3.  **Audit:** Ensure all links to `docs/guides/` are preserved.

---

## 3. Success Criteria

- The page loads fast and looks like a "Github Standard" project.
- The "terrible" software images are replaced with professional composites.
- The visual flow is logical and doesn't overwhelm the reader.
