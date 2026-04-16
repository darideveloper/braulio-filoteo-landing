# Design: Hero Noir Section Animation

## Overview
This design aligns the `HeroNoir` with the established GSAP animation patterns in the project. The section will remain hidden until scrolled into view, at which point it will perform a sequenced reveal of its elements.

## Strategy
### JS Hooks and Initial State
The following classes will be added to the Astro template:
- `.js-hero-noir-section`: For the main container.
- `.js-hero-noir-badge`: For the overline badge.
- `.js-hero-noir-title`: For the main title.
- `.js-hero-noir-description`: For the description paragraph.
- `.js-hero-noir-portrait`: For the `EditorialPortrait` wrapper.
- `.js-hero-noir-reveal`: A generic hook for elements that should be invisible before the animation starts.

### Animation Details
- **Trigger:** `ScrollTrigger` with a `start` point of `top 80%`.
- **Text Reveal:** A sequenced slide-up (`y: 30` to `0`) with a strong `power4.out` ease. The badge, title, and description will animate in order.
- **Portrait Reveal:** A scale-up (`scale: 1.05` to `1`) and fade-in to create depth.
- **Accessibility:** Use `gsap.matchMedia()` to handle `prefers-reduced-motion`. In "reduce" mode, all movement will be stripped, leaving only a staggered `autoAlpha` fade.

## Implementation Details
The animation logic will be contained within a `<script>` tag in `HeroNoir.astro`, leveraging the global GSAP instance.

## Alternatives Considered
- **Direct orchestrator registration:** Since this section is typically below the fold (Studio section), `ScrollTrigger` is more appropriate than the `animationManager.registerEntrance()` which is designed for top-of-page elements.
