## What to build

Overhaul the `ai.html` page structure to replace the alternating description blocks with a staggered 12-column Apple-style bento grid section. This section must live on a Parchment background (`#f5f5f7`) and consist of 4 white (`#ffffff`) bento cards:

1. **Perception Card** (Spans 8 columns md, 12 columns sm): Voice (Deepgram) & Vision (GPT-4o) overview with custom waveform & camera lens visual.
2. **Speed Card** (Spans 4 columns md, 12 columns sm): Latency (Groq LPU) overview featuring a large "0.5s" tag.
3. **Memory Card** (Spans 4 columns md, 12 columns sm): Recall (Pinecone) overview containing the local vector graph image `screen.png`.
4. **Integrations Card** (Spans 8 columns md, 12 columns sm): Agency (LangGraph tool execution) overview displaying Gmail, Calendar, Apple Health, and Perplexity icons.

All cards must have Apple HIG styling: `rounded-[32px] md:rounded-[40px]`, `shadow-[0_4px_24px_rgba(0,0,0,0.04)]`, and smooth hover/focus-within scale & shadow animations.

## Acceptance criteria

- [ ] Staggered 12-column bento grid is responsive, dropping to single column on mobile.
- [ ] Waveform/lens visual, LPU speed graphic, vector graph (`screen.png`), and circular integration icons render correctly inside cards.
- [ ] All bento cards support focus-within selector, allowing mobile touch and keyboard tab focus to trigger card highlight animations.
- [ ] Explicit image width, height, and lazy loading properties are declared to prevent CLS.
- [ ] Inline `<style>` blocks are removed from `ai.html` and consolidated into `css/style.css`.
- [ ] Existing navigation/footer structure remains intact and automated validation checks pass.

## Blocked by

None - can start immediately
