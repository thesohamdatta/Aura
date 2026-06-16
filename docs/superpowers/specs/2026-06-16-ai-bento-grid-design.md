# AI Bento Grid Design Specification
**Date:** 2026-06-16  
**Status:** Approved  
**Topic:** Rebuilding the `ai.html` page structure with an Apple-style bento grid layout.

## 1. Overview
The goal is to replace the current text-heavy, alternating-row AI pipeline description inside `website/ai.html` with a modern, high-density Bento Grid section. This brings the page design inline with Apple's clean "less is more" product grids and aligns with the bento layout featured on the homepage.

---

## 2. Layout Structure & Grid Rules
The new section will be placed on a Parchment background canvas (`#f5f5f7`) with a 12-column staggered bento grid:

```
+------------------------------------------+-----------------------+
|                                          |                       |
|   Card 1: Perception (8 cols)            |  Card 2: Speed (4)    |
|                                          |                       |
+------------------------------------------+-----------------------+
|                                          |                       |
|   Card 3: Memory (4 cols)                |  Card 4: Tools (8)    |
|                                          |                       |
+------------------------------------------+-----------------------+
```

### Grid Container Classes
```html
<div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 max-w-[1200px] mx-auto w-full px-margin-base">
```

### Card Visual Design Spec
- **Card Background:** White (`#ffffff`)
- **Card Radius:** `rounded-[32px] md:rounded-[40px]`
- **Card Heights:** `h-[500px] md:h-[600px]` for single-width; `h-auto md:h-[600px]` for double-width.
- **Card Shadows:** `shadow-[0_4px_24px_rgba(0,0,0,0.04)]`
- **Interactions:**
  - Transition classes: `transition-all duration-500 ease-out`
  - Hover: `hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)]`
  - Accessibility: `tabindex="0" focus-within:-translate-y-2 focus-within:shadow-[0_12px_48px_rgba(0,0,0,0.08)] outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`

---

## 3. Card Detailed Specification

### Card 1: Perception (Double Width - Spans 8 cols md, 12 cols sm)
- **Aesthetic:** Horizontal split.
- **Left Column (Text - 50% width):**
  - Eyebrow: `Perception` (color: `#86868b`, text size: `15px`)
  - Headline: `Aware of what you hear and see.` (color: `#1d1d1f`, text size: `32px md:40px`)
  - Body: `Powered by Deepgram Nova-2 for real-time speech-to-text, and GPT-4o Vision for spatial context. Aura processes your conversations and visual world simultaneously.`
- **Right Column (Visual - 50% width absolute/overflow):**
  - A minimalist, clean waveform container overlaying a stylized camera lens diagram with smooth blur gradients.

### Card 2: Speed (Single Width - Spans 4 cols md, 12 cols sm)
- **Aesthetic:** Vertical stacking, centered.
- **Top Block (Text):**
  - Eyebrow: `Latency`
  - Headline: `Sub-second thoughts.`
  - Body: `Built on Groq LPU hardware, running language models at the limit of physics. Sub-500ms end-to-end response time.`
- **Bottom Block (Visual):**
  - Large-format typography showing `"0.5s"` in Action Blue (`#0066cc`) with a clean horizontal timeline visual.

### Card 3: Memory (Single Width - Spans 4 cols md, 12 cols sm)
- **Aesthetic:** Vertical stacking.
- **Top Block (Text):**
  - Eyebrow: `Recall`
  - Headline: `Never forgets.`
  - Body: `Uses Pinecone's serverless vector architecture to index conversation semantic embeddings, ensuring permanent RAG context.`
- **Bottom Block (Visual):**
  - Updated local `screen.png` vector graph cropped cleanly inside the card layout using rounded-xl classes.

### Card 4: Tools & Integrations (Double Width - Spans 8 cols md, 12 cols sm)
- **Aesthetic:** Horizontal split.
- **Left Column (Text - 50% width):**
  - Eyebrow: `Agency`
  - Headline: `Connected to your world.`
  - Body: `FastAPI agentic endpoints powered by LangGraph. Aura securely connects to your Apple Health stats, manages your calendar, checks your Gmail, or searches the web.`
- **Right Column (Visual - 50% width):**
  - Clean Apple-style circular icons representing Gmail, Calendar, Health, and Web Search with interactive hover glows.

---

## 4. Verification Plan
- **HTML structure validation:** Run `node scratch/run_tests.js` to verify navbar/footer specifications remain intact.
- **Visual audit:** Open browser inspector to verify that layout widths remain responsive on mobile, grid gaps align perfectly, and margins conform to Apple HIG spacing guides.
