---
name: Fix Hero Entrance Visibility
description: Resolves the issue where Hero elements remain hidden after animation because GSAP .from() animates to the current CSS state (opacity 0).
---

# Proposal: Fix Hero Entrance Visibility

## Why
After switching to the `.from()` pattern in the Hero section, the elements remain invisible. This is because the `.js-reveal` utility sets `opacity: 0` in CSS. GSAP's `.from()` method animates from a provided state *to* the current state. Since the current state is `opacity: 0`, the animation effectively transitions from `opacity: 0` to `opacity: 0`.

## What Changes
1. **Force Final Visibility State:** Add a `gsap.set` call at the beginning of `initHeroAnimations` in `Hero.astro` to set all `.js-reveal` elements to `autoAlpha: 1`. This ensures that when the `.from()` tweens play, they animate towards the visible state.
2. **Standardize Pattern:** Align the Hero section's animation logic with other sections (like Newsletter) which already use this "Unhide then .from()" pattern.

## Scope
- `src/components/organisms/Hero.astro`: Update the script to set initial visibility before the timeline starts.

## Expected Outcome
- Hero elements (headlines, description, badges, stats) will correctly animate from their offset positions and fade into view.
- Content will remain hidden by CSS during the loader phase (FOUC prevention) but become visible during the entrance sequence.
