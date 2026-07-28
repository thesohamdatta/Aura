# Glossary — HTML Skill

## Semantic

Using elements that describe _what content is_, not _how it looks_. A `button` is semantic. A `div` with `onclick` is not. Semantic elements carry behavior, accessibility, and meaning.

## Landmark

HTML elements that define page regions for assistive technology — `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`. Screen readers use landmarks for navigation.

## Native

Built-in HTML behavior without JavaScript — `button` clicks, `details` expand, `form` submit, `dialog` modal. Native elements carry keyboard support and accessibility free.

## Shallow

Minimum nesting depth. Every wrapper needs structural, behavioral, or styling purpose. Deep nesting obscures meaning.

## Honest

Markup that accurately reflects content. An honest element is explainable in one sentence.

## Labeled

Form controls with explicit labels via `for`/`id` or wrapping `<label>`. Placeholder text is not a label.

## Div Soup

Long chains of anonymous `div` where semantic elements would carry meaning. Symptom of choosing by appearance, not content.

## ARIA

Last resort when native HTML cannot express needed behavior. A `div` with `role="button"` lacks keyboard handling. Use a `button`.
