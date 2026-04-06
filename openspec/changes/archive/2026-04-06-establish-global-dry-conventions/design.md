# Design: Global DRY Conventions

## Context
This change aims to reduce redundancy by centralizing the project's technical and visual standards.

## Decisions

### 1. The Standard Section Interface
To avoid every section having a different prop schema, all landing page "organisms" SHALL implement the `SectionProps` interface.

```typescript
// Proposed src/types/Section.ts
export interface SectionProps {
  id: string;              // For anchor navigation
  title?: string;          // Pass to SectionHeader molecule
  subtitle?: string;       // Pass to SectionHeader molecule
  variant?: 'light' | 'dark' | 'alt'; // Background surface tier
  showDivider?: boolean;   // Whether to render a visual separation
}
```

### 2. Atomic Composition Over Inline Creation
Agents MUST check `src/components/atoms/` and `src/components/molecules/` before creating new HTML for buttons, headers, or icons.
- **Rule:** If `BrandButton.astro` exists, do not write `<button class="...">`.

### 3. Data-Driven (Loop) Rendering
Components with repetitive children MUST be built using arrays.

```astro
---
// Correct DRY usage
const items = [
  { label: 'A', value: '1' },
  { label: 'B', value: '2' },
];
---
<ul>
  {items.map(item => <li>{item.label}: {item.value}</li>)}
</ul>
```

## Risks / Trade-offs
- **Over-abstraction:** If the standard section interface becomes too rigid, complex sections might struggle.
- **Mitigation:** Allow for `additionalProps` or slots (`<slot />`) to accommodate unique layout needs within the standard wrapper.
