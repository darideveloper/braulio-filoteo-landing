# Design: Hero Badge Alignment

## Overview
This design change focuses on centering the professional badges ("HOST", "ENTREPRENEUR", "CO-FOUNDER", "GRIT PARAGON") in the Hero section on mobile devices. Other content in the Hero section (headline, description, stats) will remain left-aligned to maintain the established editorial style.

## Layout Changes
The badges container in `Hero.astro` currently uses `flex flex-wrap gap-3 mb-8`. To achieve mobile centering without affecting desktop:

1.  **Mobile (Default):**
    - The container will be set to `w-full` to span the entire content column.
    - `justify-center` will be applied to center the flex items.
2.  **Desktop (`@lg`):**
    - `justify-start` will be applied to restore left-alignment.
    - `w-auto` or `w-full` (with `justify-start`) will be used to ensure consistent spacing.

## Technical Implementation
The alignment will be implemented using Tailwind utility classes within the `Hero.astro` component:
```astro
<div class='flex flex-wrap gap-3 mb-8 w-full justify-center @lg:justify-start'>
  ...
</div>
```

## Considerations
- **GSAP Animations:** The container changes should not interfere with the staggered entrance animation (`js-hero-badge`). Since the animation is applied to the individual badge wrappers, the layout shift should be transparent to the GSAP timeline.
- **Responsiveness:** The `@lg` breakpoint (corresponding to the container query used in the Hero grid) ensures the transition occurs when the layout shifts from single-column to two-column.
