# Design: Gritones Section Animation

## Overview
This design aligns the `GritonesSection` with the established GSAP animation patterns in the project. The section will remain hidden until scrolled into view, at which point it will perform a sequenced reveal of its elements.

## Strategy
### JS Hooks and Initial State
To minimize FOUC (Flash of Unstyled Content) and provide GSAP with reliable selectors, the following classes will be added to the Astro template:
- `.js-gritones-section`: For the main container.
- `.js-gritones-header`: For the `SectionHeader` component.
- `.js-gritones-card`: For the `ServiceCard` items inside the loop.
- `.js-reveal`: A generic hook for elements that should be invisible before the animation starts.

### Animation Details
- **Trigger:** `ScrollTrigger` with a `start` point of `top 80%` to ensure the user has clearly entered the section.
- **Header Reveal:** A smooth vertical slide (`y: 40` to `0`) with a strong `power4.out` ease.
- **Card Reveal:** A staggered entrance (`stagger: 0.15`) using the project's default `power3.out` ease for individual service cards, overlapping with the header animation.
- **Accessibility:** Use `gsap.matchMedia()` to handle `prefers-reduced-motion`. In "reduce" mode, all movement will be stripped, leaving only a staggered `autoAlpha` fade.

## Implementation Details
The animation logic will be contained within a `<script>` tag in `GritonesSection.astro`, leveraging the global GSAP instance.

## Alternatives Considered
- **Direct orchestrator registration:** Since this section is typically below the fold, `ScrollTrigger` is more appropriate than the `animationManager.registerEntrance()` which is designed for top-of-page elements.
- **Individual `ScrollTrigger` per card:** This would be less performant and harder to sequence than a single timeline for the entire section.
