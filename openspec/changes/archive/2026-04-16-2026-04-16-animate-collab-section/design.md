# Design: Collab Section Animation

## Overview
The `CollabSection` animation will follow the "Scroll-Triggered Reveal" pattern established in other components. It will use a single GSAP timeline triggered by `ScrollTrigger` to coordinate the entrance of the left-side text and the right-side list of collaboration items.

## Strategy
### JS Hooks and Selectors
The following classes will be added for targeting:
- `.js-collab-section`: Main container trigger.
- `.js-collab-header`: The `SectionHeader` wrapper.
- `.js-collab-item`: A wrapper `div` for each `CollabItem` (since it doesn't natively support `class`).
- `.js-collab-reveal`: Generic hook for `opacity-0` initial state.

### Animation Sequence
- **Trigger:** `ScrollTrigger` starting at `top 80%`.
- **Header:** Slides up (`y: 40`) with `power4.out`.
- **Items:** Staggered entrance (`stagger: 0.1`) from the right/bottom (`x: 30`, `y: 20`) with `power3.out`. This creates a subtle "closing" effect on the list as it appears.

### Accessibility
- **Reduced Motion:** All `x` and `y` translations will be removed.
- **Fallback:** A simple staggered `autoAlpha` fade-in will be used for all elements when `prefers-reduced-motion: reduce` is detected.

## Implementation Details
The logic will reside in a `<script>` tag within `CollabSection.astro`. `gsap` and `ScrollTrigger` will be imported and registered locally.
