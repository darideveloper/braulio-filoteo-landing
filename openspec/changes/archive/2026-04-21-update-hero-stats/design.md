# Design: Update Hero Section Statistics

## Overview
This change involves updating the data driving the `StatItem` components in the `Hero.astro` organism.

## Component Architecture
The `Hero.astro` component contains a `stats` array in its frontmatter:

```typescript
const stats = [
  { value: '100+', label: 'Host de GRITones Podcast', variant: 'primary' },
  {
    value: '30+',
    label: 'Emprendedor | Cofundador de GRITones Studio',
    variant: 'secondary',
  },
]
```

This data will be updated to:

```typescript
const stats = [
  { value: '100+', label: 'Episodios', variant: 'primary' },
  { value: '30+', label: 'Marcas Personales apoyadas', variant: 'secondary' },
]
```

## Styling & Layout
- No changes to `StatItem.astro` or the layout grid are required.
- The new labels are shorter than the previous ones, which will ensure they fit well within the `StatItem` layout (which uses `text-[10px]` and `tracking-widest`).

## Animations
- The existing GSAP entrance animation in `Hero.astro` (target `.js-hero-stat`) will continue to function correctly with the updated content.
