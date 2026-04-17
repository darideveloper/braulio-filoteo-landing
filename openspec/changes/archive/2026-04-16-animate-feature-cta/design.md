# Design: Feature CTA Animation

## Overview
The `FeatureCTA` animation will follow the "Scroll-Triggered Reveal" pattern used in other methodology sections. It will use a GSAP timeline to coordinate the entrance of the watermark and the text elements.

## Strategy
### JS Hooks and Selectors
To avoid CSS collisions and ensure targeted animations, the following classes will be added:
- `.js-feature-cta`: Root container and trigger.
- `.js-fcta-watermark`: The large background text.
- `.js-fcta-label`: The section label (e.g., "El Vehículo").
- `.js-fcta-headline`: The main headline slot.
- `.js-fcta-button`: The interactive CTA button.
- `.js-fcta-reveal`: Generic hook for `opacity-0` initial state.

### Animation Sequence
- **Trigger:** `ScrollTrigger` starting at `top 85%`.
- **Watermark:** Fades in and scales up (`scale: 0.95` to `1`) over 1.5 seconds to create atmospheric depth.
- **Label:** Slides up (`y: 20`) with `power2.out`.
- **Headline:** Slides up (`y: 40`) with `power4.out` for a strong editorial entrance.
- **Button:** Pops in with a slight scale or slide up (`y: 20`) at the end.

### Accessibility
- **Reduced Motion:** All movement and scaling will be removed.
- **Fallback:** A simple staggered `autoAlpha` fade-in will be used for all elements when `prefers-reduced-motion: reduce` is detected.

## Implementation Details
The logic will reside in a `<script>` tag within `FeatureCTA.astro`. `gsap` and `ScrollTrigger` will be imported and registered locally. It will use `querySelectorAll` to handle potential multiple instances of the molecule on a single page.
