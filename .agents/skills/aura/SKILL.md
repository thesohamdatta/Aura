```markdown
# aura Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns, coding conventions, and workflows used in the `aura` JavaScript codebase. The repository is a framework-agnostic project focused on maintainable design systems, clear documentation, and conventional commit practices. You'll learn how to contribute code, update the design system, maintain documentation, and write tests in alignment with the project's standards.

## Coding Conventions

**File Naming**
- Use PascalCase for all file names.
  - Example: `ButtonComponent.js`, `DesignSystemUtils.js`

**Import Style**
- Use relative imports for all modules.
  ```javascript
  import { Button } from './ButtonComponent.js';
  ```

**Export Style**
- Use named exports exclusively.
  ```javascript
  // ButtonComponent.js
  export function Button(props) { /* ... */ }
  ```

**Commit Messages**
- Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard.
- Use prefixes like `fix:` or `feat:`.
- Example:
  ```
  feat: add new color utility classes to global.css
  fix: correct padding utility in global.css
  ```

## Workflows

### Design System Update
**Trigger:** When updating, migrating, or enforcing design system utilities or patterns (e.g., CSS utility classes).
**Command:** `/update-design-system`

1. Edit or add CSS utility classes in `website/css/global.css` or related CSS files.
2. Update HTML files (`website/index.html`, `website/docs.html`) to use the new or migrated classes.
3. Optionally update or reference verification/linter rules in documentation (`AGENT_RULES.md`, `DEVELOPMENT_GUIDE.md`).
4. Verify changes using local or documented linter/verification scripts.

**Example:**
```css
/* website/css/global.css */
.bg-primary {
  background-color: #007aff;
}
```
```html
<!-- website/index.html -->
<div class="bg-primary">Hello, Aura!</div>
```

### Documentation Update
**Trigger:** When clarifying, fixing, or extending documentation for users or contributors.
**Command:** `/update-docs`

1. Edit the relevant documentation files (`website/docs.html`, `AGENT_RULES.md`, `DEVELOPMENT_GUIDE.md`).
2. Commit with a message referencing the section or purpose of the doc change.

**Example:**
```
feat: update DEVELOPMENT_GUIDE.md with new linter instructions
```

## Testing Patterns

- Test files use the pattern `*.test.*` (e.g., `ButtonComponent.test.js`).
- The specific testing framework is not documented; follow the existing test file patterns.
- Place test files alongside the modules they test or in a dedicated test directory.

**Example:**
```javascript
// ButtonComponent.test.js
import { Button } from './ButtonComponent.js';

test('Button renders correctly', () => {
  // ...test logic...
});
```

## Commands

| Command                | Purpose                                                    |
|------------------------|------------------------------------------------------------|
| /update-design-system  | Start a design system update workflow                      |
| /update-docs           | Start a documentation update workflow                      |
```
