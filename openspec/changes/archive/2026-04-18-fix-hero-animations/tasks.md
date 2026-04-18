# Tasks: Fix Hero Animations and Global Reveal Conflict

## 1. Scoping Adjustments
- [x] Update `src/components/organisms/NewsletterSection.astro` to scope `.js-reveal` selectors. <!-- id: 1 -->
    - Change `gsap.set('.js-reveal', ...)` to target only children of `.js-newsletter-section`.
- [x] Audit `src/components/organisms/PodcastSection.astro` for selector scoping. <!-- id: 2 -->
- [x] Audit `src/components/organisms/CtaSection.astro` for selector scoping. <!-- id: 3 -->
- [x] Audit `src/components/organisms/YourStory.astro` for selector scoping. <!-- id: 4 -->

## 2. Hero Animation Refactor
- [x] Refactor `src/components/organisms/Hero.astro` entrance timeline. <!-- id: 5 -->
    - Change `.to()` methods to `.from()`.
    - Explicitly set `y: 40` (or appropriate offset) and `autoAlpha: 0` in the `.from()` calls.
    - Ensure the staggered sequence remains intact.
    - Verify that `animationManager.registerEntrance(tl)` is still correctly used.

## 3. Validation
- [x] Verify Hero visibility during page load (should be invisible). <!-- id: 6 -->
- [x] Verify Hero entrance animation triggers after loader ends. <!-- id: 7 -->
- [x] Verify Hero animation includes both movement (slide) and fade. <!-- id: 8 -->
- [x] Verify Newsletter section animations still work correctly without affecting the Hero. <!-- id: 9 -->
