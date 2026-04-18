# Tasks: Fix Hero Entrance Visibility

## 1. Implementation
- [x] Update `src/components/organisms/Hero.astro` to set `autoAlpha: 1` on `.js-reveal` elements before the timeline. <!-- id: 1 -->
    - Add `gsap.set(hero.querySelectorAll('.js-reveal'), { autoAlpha: 1 })` inside `initHeroAnimations`.

## 2. Validation
- [x] Verify Hero elements are visible after the entrance animation completes. <!-- id: 2 -->
- [x] Verify no FOUC occurs during initial page load. <!-- id: 3 -->
