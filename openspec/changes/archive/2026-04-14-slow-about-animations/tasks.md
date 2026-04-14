# Tasks: Slow Down About Section Animations

- [x] Update GSAP `ScrollTrigger` timing in `src/components/organisms/AboutSection.astro`.
  - [x] Adjust `start` to `top 75%` (was `80%`).
  - [x] Add `delay: 0.5` to the Header animation (`js-about-header`).
  - [x] Increase Header `duration` to `1.4` (was `1`).
  - [x] Increase Mission Card `duration` to `1.2` (was `0.8`) and `stagger` to `0.3` (was `0.2`).
  - [x] Increase Quote Block `duration` to `1.5` (was `1`).
  - [x] Increase Brand Icon `duration` to `0.8` (was `0.6`) and `stagger` to `0.15` (was `0.1`).
- [x] Refine the sequence overlaps (negative delays).
  - [x] Adjust mission cards offset to `"-=0.4"` (was `"-=0.6"`).
  - [x] Adjust quote block offset to `"-=0.4"` (was `"-=0.6"`).
  - [x] Adjust icon grid offset to `"-=0.3"` (was `"-=0.5"`).
- [x] Verify the slowed implementation.
  - [x] **Visual Validation:** Confirm the animation feels "heavier" and more premium.
  - [x] **Performance Validation:** Check for any issues with the increased durations.
  - [x] **Accessibility Validation:** Ensure the `prefers-reduced-motion` fallback remains intact.
