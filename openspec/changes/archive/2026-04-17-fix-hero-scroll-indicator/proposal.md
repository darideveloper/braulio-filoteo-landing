---
name: Fix Hero Scroll Indicator Overlap and Disappearance
description: Resolve layout overlap on small screens and animation conflicts between entrance and scroll triggers for the Hero section scroll indicator.
---

# Proposal: Fix Hero Scroll Indicator

## Why
The Hero section's "Scroll" indicator currently suffers from two main issues:
1. **Layout Overlap:** Because the Hero section is vertically centered (`flex items-center`) and the indicator is absolutely positioned at the bottom, tall content on smaller viewports can physically overlap with the indicator.
2. **Animation Conflict:** The GSAP entrance timeline and the ScrollTrigger for the fade-out effect both target the same element (`.js-hero-scroll`), leading to race conditions or premature disappearance if the page starts partially scrolled.

## What Changes

### 1. Layout Stabilization
Increase the bottom padding of the Hero's main container to reserve a "safe zone" for the absolute indicator. This prevents the centered content from ever reaching the bottom 80-100px of the viewport.

### 2. Animation Decoupling
Introduce a structural separation for the animations:
- **Outer Wrapper (`.js-hero-scroll-wrapper`):** Will handle the entrance sequence (fading/moving the entire indicator into view).
- **Inner Content (`.js-hero-scroll`):** Will handle the scroll-linked fade-out effect.
- **GSAP Optimization:** Apply `immediateRender: false` to the ScrollTrigger to ensure it doesn't modify the element state before the interaction begins.

## Impact
- **UI/UX:** Improved legibility of the scroll hint and more robust entrance transitions.
- **Codebase:** Minor structural change to `Hero.astro` and updated GSAP logic.
