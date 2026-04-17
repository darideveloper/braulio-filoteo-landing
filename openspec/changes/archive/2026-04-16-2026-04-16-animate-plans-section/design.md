# Design: Plans Section Animation

## Overview
The `PlansSection` animation will follow the "Scroll-Triggered Reveal" pattern used in other sections (About, Gritones). It will use a single GSAP timeline to coordinate multiple elements for a cohesive entrance.

## Strategy
### JS Hooks and Selectors
To avoid CSS collisions and ensure targeted animations, the following classes will be added:
- `.js-plans-section`: Main container trigger.
- `.js-plans-header`: The `SectionHeader` component.
- `.js-plans-glow`: The decorative background glow.
- `.js-plans-card`: The wrapper for each `PlansCard`.
- `.js-plans-footer`: The section's footer/outro.
- `.js-plans-reveal`: Generic hook for `opacity-0` initial state.

### Animation Sequence
- **Trigger:** `ScrollTrigger` starting at `top 75%`.
- **Background:** The `.js-plans-glow` will fade in slowly over 2 seconds.
- **Header:** Slides up (`y: 40`) with `power4.out`.
- **Cards:** Staggered entrance (`stagger: 0.2`) from the bottom (`y: 60`) with `expo.out`.
- **Footer:** Fades in with a slight vertical lift (`y: 20`) at the end of the sequence.

### Accessibility
- **Reduced Motion:** All `y` translation and complex easing will be removed.
- **Fallback:** A simple staggered `autoAlpha` fade-in will be used for all elements when `prefers-reduced-motion: reduce` is detected.

## Implementation Details
The logic will reside in a `<script>` tag within `PlansSection.astro`. `gsap` and `ScrollTrigger` will be imported and registered locally to ensure consistency.
