---
id: fix-about-animation-transparency
title: Fix About Section Animation Transparency and Timing
description: Resolve initial transparency issues in About cards by adopting the "Hero Pattern" (tl.from) and refining sequence overlaps for a snappier, more attractive feel.
author: Gemini CLI
date: 2026-04-14
---

# Proposal: Fix About Section Animation Transparency and Timing

## Context
Initial implementation of the About section animations resulted in "strange" card behavior where they were not fully transparent before appearing (likely FOUC). Additionally, the overall sequence felt too slow, despite the requirement for a deliberate first animation.

## Goals
- **Ensure 100% initial transparency:** Use CSS and GSAP's `tl.from()` to prevent elements from being visible before the animation starts.
- **Maintain deliberate start:** Keep the `0.5s` initial delay for the header.
- **Implement "Hero Pattern" fluidity:** Increase sequence overlap and tighten staggers for a snappier, more premium feel.
- **Consistency:** Align the implementation with the project's established "cinematic" animation language.

## Scope
- **In-Scope:**
  - Modifying `src/components/organisms/AboutSection.astro` template and script.
  - Adding `opacity-0` utility to targeted elements.
  - Converting the GSAP timeline from `to()` to `from()` model.
- **Out-of-Scope:**
  - Modifying other components or sections.

## Proposed Changes
1.  **Template Update:** Add `opacity-0` (or `invisible`) to elements marked with `js-about-reveal` to ensure they start hidden.
2.  **Animation Refinement:**
    - Use `gsap.set(".js-about-reveal", { autoAlpha: 1 })` at the start of the script to unhide elements for GSAP's `from()` calculations.
    - Keep the Header `duration: 1.4` and `delay: 0.5`.
    - Use `tl.from()` for all reveal animations.
    - **Cards Stagger:** Reduce to `0.15` (from `0.3`).
    - **Overlaps:** Use larger negative offsets (e.g., `"-=1.0"`) to create the "zipper" effect where elements start revealing almost immediately after the header.

## Validation Plan
- **FOUC Check:** Verify that elements are completely invisible until their animation starts.
- **Timing Validation:** Ensure the header feels deliberate (0.5s delay) while the rest of the section reveals with high-end fluidity.
- **Cross-Browser:** Confirm transparency works as expected.
