---
name: Fix Hero Animations and Global Reveal Conflict
description: Resolves the issue where Hero animations are invisible because they are prematurely revealed by a global selector in the Newsletter section and lack initial offsets.
---

# Proposal: Fix Hero Animations and Global Reveal Conflict

## Why
The hero GSAP animations are not functioning as intended, resulting in content being immediately visible without any entrance sequence. This is caused by two main factors:
1. **Global Selector Contamination:** `NewsletterSection.astro` uses a global `gsap.set('.js-reveal', { autoAlpha: 1 })` call. This reveals all elements tagged with `.js-reveal` across the entire page (including the Hero) as soon as the Newsletter section script initializes.
2. **Missing Initial States:** `Hero.astro` utilizes `.to()` animations targeting `y: 0`. However, since these elements do not have an initial `translateY` defined in CSS, they are already at `y: 0` when the animation starts, resulting in no movement.

## What Changes
1. **Scope Reveal Logic:** Update `NewsletterSection.astro` (and any other similar sections) to target only its own `.js-reveal` elements using `section.querySelectorAll('.js-reveal')`.
2. **Adopt `.from()` Pattern:** Refactor the `Hero.astro` entrance timeline to use `.from()` animations. This explicitly defines the starting state (e.g., `y: 40`, `autoAlpha: 0`) and animates *towards* the final CSS state, ensuring movement even without predefined CSS offsets.
3. **Validate Orchestration:** Ensure the `animationManager` correctly handles the transition from the loader to the hero entrance.

## Scope
- `src/components/organisms/NewsletterSection.astro`: Scope GSAP selectors.
- `src/components/organisms/Hero.astro`: Refactor entrance timeline to use `.from()`.
- `src/components/organisms/CtaSection.astro`: Verify and ensure scoping (already scoped but good to double-check).
- `src/components/organisms/PodcastSection.astro`: Verify and ensure scoping (already scoped).
- `src/components/organisms/YourStory.astro`: Verify and ensure scoping (already scoped).

## Expected Outcome
- Hero content will be hidden while the loader is active.
- Hero content will perform a staggered slide-up and fade-in animation once the loader completes.
- Newsletter and other sections will not prematurely reveal the Hero content.
