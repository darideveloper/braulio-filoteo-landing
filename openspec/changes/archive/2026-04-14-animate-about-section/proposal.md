---
id: animate-about-section
title: Animate About Section with GSAP
description: Implement ScrollTrigger-based GSAP animations in the About section to create a cinematic, staggered reveal effect consistent with the Hero section.
author: Gemini CLI
date: 2026-04-14
---

# Proposal: Animate About Section with GSAP

## Context
The Hero section currently features a high-quality, orchestrated GSAP entrance animation. To maintain visual consistency and a premium "editorial" feel, the About section requires similar scroll-triggered animations.

## Goals
- Add scroll-triggered reveal animations to all major elements of the About section.
- Implement staggered entrances for mission cards and brand icons.
- Ensure animations are performance-optimized and respect user motion preferences.
- Maintain consistency with the existing GSAP architecture and design tokens.

## Scope
- **In-Scope:**
  - Adding GSAP ScrollTrigger logic to `src/components/organisms/AboutSection.astro`.
  - Adding JS-specific classes (hooks) for animation targeting.
  - Defining the animation sequence and timings.
- **Out-of-Scope:**
  - Modifying other sections or components.
  - Changing the layout or styling of the About section beyond animation-related properties.

## Proposed Changes
1.  **Template Update:** Add `js-about-section` to the main container and `js-about-reveal` to the child elements.
2.  **Animation Logic:** Implement a GSAP timeline triggered by `ScrollTrigger` that:
    - Initially hides elements using `autoAlpha: 0` and a vertical offset.
    - Reveals the section header first.
    - Staggers the entrance of the mission cards.
    - Reveals the quote block.
    - Staggers the entrance of the brand icon grid items.
3.  **Accessibility:** Wrap the animation logic in `gsap.matchMedia()` to skip movement if `prefers-reduced-motion` is detected.

## Validation Plan
- **Visual Check:** Verify the animation sequence and timing in the browser.
- **Performance:** Ensure animations are smooth (60fps) and do not cause layout thrashing.
- **Accessibility:** Test with `prefers-reduced-motion: reduce` to ensure content is still visible and movement is minimized.
