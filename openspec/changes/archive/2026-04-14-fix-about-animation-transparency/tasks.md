# Tasks: Fix About Section Animation Transparency and Timing

- [x] Add `opacity-0` to targeted elements in `src/components/organisms/AboutSection.astro`.
  - [x] Add `opacity-0` to elements with the `.js-about-reveal` class to prevent FOUC.
- [x] Refine the GSAP ScrollTrigger script in `src/components/organisms/AboutSection.astro`.
  - [x] Update `initAboutAnimations` to use the `tl.from()` model.
  - [x] Add `gsap.set(".js-about-reveal", { autoAlpha: 1 })` at the beginning of the motion-enabled block.
  - [x] Header (`js-about-header`): `from` with `autoAlpha: 0`, `y: 40`, `duration: 1.4`, and `delay: 0.5`.
  - [x] Mission Cards (`js-about-card`): `from` with `autoAlpha: 0`, `y: 30`, `duration: 1.2`, `stagger: 0.15`, and offset `"-=1.0"`.
  - [x] Quote Block (`js-about-quote`): `from` with `autoAlpha: 0`, `y: 20`, `duration: 1.2`, and offset `"-=0.8"`.
  - [x] Icon Grid Items (`js-about-icon-item`): `from` with `autoAlpha: 0`, `scale: 0.9`, `duration: 0.8`, `stagger: 0.1`, and offset `"-=0.6"`.
- [x] Verify the fixes.
  - [x] **FOUC Check:** Confirm no visibility before animation.
  - [x] **Timing Check:** Ensure the header feels deliberate (0.5s) while the rest of the sequence is snappy and fluid.
  - [x] **Accessibility Check:** Confirm `prefers-reduced-motion` settings remain effective.
