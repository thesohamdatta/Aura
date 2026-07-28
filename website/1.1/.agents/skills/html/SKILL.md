---
name: html
description: Writes semantic, accessible HTML. Use when creating or refactoring markup, fixing heading hierarchy, improving form labels, choosing elements, or replacing div soup with native HTML.
---

# HTML

Write **semantic**, **shallow**, **honest** HTML. Every element must justify its existence.

## Core Principle

Use the most appropriate element for the content. Do not apply rules mechanically.

## Rules

### Semantic Landmarks

`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`. Each helps orientation, not noise. One `h1` per page, logical `h2` → `h3` → `h4`.

### Native First

`button` for actions, `a` for destinations. `details`/`summary` for expandable. `dialog` for modals. `label` for every control. `table` for data, never layout.

### Shallow Nesting

Every wrapper must justify itself. Flatter reads faster.

### Labeled Forms

Every input needs a label. Placeholder is not a label. Use correct `type`. Mark required fields.

### Honest Images

Descriptive `alt` for informative. Empty `alt` for decorative. `width`/`height` to prevent CLS.

## Completion Criteria

- [ ] Can I explain this element in one sentence?
- [ ] Would this work without CSS?
- [ ] Can a screen reader navigate the headings?
- [ ] Are all controls labeled?
