# Skill: Aura Frontend Development

> Load this skill when building or modifying UI components for the Aura website.

## When to Use

- Creating new React components
- Modifying existing component structure
- Working with Astryx components
- Migrating inline styles to StyleX
- Writing component tests

## Component Construction Rules

### 1. Frame First
Always pick the shell before writing content:
- Full page → `<Layout>` + `<LayoutPanel>`
- Section → `<Section>` with `className="page-shell"`
- Sidebar → `<SideNav>` inside `<Layout>` start panel

### 2. Astryx Component Hierarchy
```
Layout > LayoutPanel > Section > Card > HStack/VStack > Text/Heading
```
Never skip levels. Never use raw HTML elements for layout.

### 3. Style System
```tsx
// CORRECT — token-based
<div style={{padding: 'var(--spacing-6)', borderRadius: '12px'}}>

// WRONG — raw values
<div style={{padding: '24px', borderRadius: '12px', background: '#fff'}}>
```

### 4. Responsive Pattern
```tsx
<Grid
  columns={3}
  style={{
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'var(--spacing-5)',
  }}
>
```

### 5. Dark Section Pattern
```tsx
<Section style={{
  padding: 'clamp(4rem, 8vw, 7rem) 0',
  background: '#0A0A0A',
  color: 'var(--color-on-dark)',
}}>
```

## Import Pattern
```tsx
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
```

## Component Template
```tsx
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

export function ComponentName() {
  return (
    <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0'}}>
      <div className="page-shell">
        <VStack gap="var(--spacing-8)">
          <div>
            <div className="section-label">Label</div>
            <Heading level={2} type="display-2">
              Headline
            </Heading>
          </div>
          {/* Content */}
        </VStack>
      </div>
    </Section>
  );
}
```

## Testing Pattern
```tsx
import {render, screen} from '@testing-library/react';
import {ComponentName} from './ComponentName';

describe('ComponentName', () => {
  it('renders the heading', () => {
    render(<ComponentName />);
    expect(screen.getByText('Headline')).toBeInTheDocument();
  });
});
```

## Before Committing
1. `npm run build` — must pass
2. `npm run lint` — must pass
3. Visual check at 320px, 768px, 1280px
4. Keyboard navigation test
