# Design: Pillars Section Animation

## Overview
The `PillarsSection` animation will follow the "Scroll-Triggered Reveal" pattern used in other sections (About, Gritones, Plans). It will use a single GSAP timeline to coordinate the entrance of the section header and the grid of methodology cards.

## Strategy
### JS Hooks and Selectors
To avoid CSS collisions and ensure targeted animations, the following classes will be added:
- `.js-pillars-section`: Main container trigger.
- `.js-pillars-header`: The `SectionHeader` component (applied via `headerClass`).
- `.js-pillars-card`: A wrapper `div` for each `PillarCard` to handle animation (since `PillarCard` doesn't accept a `class` prop).
- `.js-pillars-reveal`: Generic hook for `opacity-0` initial state.

### Animation Sequence
- **Trigger:** `ScrollTrigger` starting at `top 80%`.
- **Header:** Slides up (`y: 50`) with `power4.out` to emphasize the bold "PILARES" title.
- **Cards:** Staggered entrance (`stagger: 0.15`) from the bottom (`y: 30`) with `power3.out`. The stagger will guide the eye across the 4-column grid.

### Accessibility
- **Reduced Motion:** All `y` translation will be removed.
- **Fallback:** A simple staggered `autoAlpha` fade-in will be used for all elements when `prefers-reduced-motion: reduce` is detected.

## Implementation Details
The logic will reside in a `<script>` tag within `PillarsSection.astro`. `gsap` and `ScrollTrigger` will be imported and registered locally.
