---
id: slow-about-animations
title: Slow Down About Section Animations
description: Refine GSAP ScrollTrigger timings in the About section to improve visibility, create a more deliberate reveal, and add an initial delay of 0.5 seconds.
author: Gemini CLI
date: 2026-04-14
---

# Proposal: Slow Down About Section Animations

## Context
Initial feedback indicates that the animations in the About section are running too quickly. To enhance the "premium" and "editorial" feel, the reveal sequence needs to be slowed down, making each element's entrance more visible and attractive.

## Goals
- Slow down the overall animation sequence in `AboutSection.astro`.
- Implement a mandatory initial delay of `0.5 seconds` after the trigger fires.
- Increase individual durations and stagger delays for a more deliberate feel.
- Reduce overlap between element groups to clarify the information hierarchy.

## Scope
- **In-Scope:**
  - Modifying the GSAP timeline values in `src/components/organisms/AboutSection.astro`.
  - Adjusting `ScrollTrigger` start point for better eye-tracking.
- **Out-of-Scope:**
  - Modifying other sections or components.
  - Changing the visual style or hooks.

## Proposed Changes
1.  **Timing Adjustments:**
    - Add `delay: 0.5` to the first timeline item.
    - Increase `duration` for headers, cards, and quotes by approximately 40-50%.
    - Increase `stagger` values to make list entrances clearer.
2.  **Overlap Reduction:**
    - Change negative offsets (e.g., `"-=0.6"`) to smaller values (e.g., `"-=0.4"` or `"-=0.3"`) to prevent simultaneous reveals that feel overwhelming.
3.  **Trigger Point:**
    - Shift the `ScrollTrigger` `start` from `80%` to `75%` to ensure the section is more centered before animating.

## Validation Plan
- **Visual Validation:** Compare the new timing with the old timing to ensure the entrance is noticeably slower and more deliberate.
- **Accessibility:** Ensure the reduced motion fallback remains unaffected.
