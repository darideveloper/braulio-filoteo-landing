# Proposal: Implement Cinematic Loader & FOUC Fix

## Goal
Eliminate the "blink" (Flash of Unstyled Content) during Hero section animations and add a professional, cinematic page loader that reinforces the "Bold Editorial" aesthetic.

## Problem
Currently, because Astro pre-renders the HTML, the Hero section elements are visible in their final positions for a split second before the GSAP animation starts and "hides" them for the entrance. This results in a jarring "blink" or "jump" on page load, which breaks the premium user experience.

## Proposed Solution (Hybrid Approach)
1. **FOUC Prevention (CSS-First Visibility)**:
   - Introduce a `.js-reveal` utility class in CSS that sets `opacity: 0` (or `visibility: hidden`) by default.
   - Elements targeted for GSAP entrance animations will use this class to be hidden immediately by the browser's CSS engine.
2. **Cinematic Loader**:
   - Create a `Loader.astro` organism that covers the entire viewport on load.
   - The loader will feature a minimal, high-impact design (e.g., a signature mark or name with a progress line).
   - Use GSAP to animate the loader out once the window `load` event fires (ensuring all assets, like the hero portrait, are ready).
3. **Sequenced Reveal**:
   - Coordinate the Hero entrance timeline to start *only* after the loader's exit animation completes.
4. **Performance Optimization (Hero Animation)**:
   - Enhance the parallax scroll effect by adding `scrub: 1` to smooth out jitter.
   - Apply hardware acceleration (`will-change: transform`) to the editorial portrait to ensure 60fps performance.
   - Optimize the hero image by migrating from external URLs to Astro's local image processing.

## Scope
- **Affected Files**: `src/styles/global.css`, `src/layouts/Layout.astro`, `src/components/organisms/Hero.astro`, and a new `src/components/organisms/Loader.astro`.
- **Logic**: Client-side GSAP coordination between the global loader and the Hero section.

## Risks
- **JavaScript Dependency**: If JS is disabled, the page might remain blank due to `opacity: 0`. We will use a `<noscript>` block or a `.no-js` fallback strategy to ensure content is always reachable.
- **Wait Time**: Waiting for the full `window.load` event might feel slow on low-bandwidth connections. We will balance this with a fallback timeout if needed.
