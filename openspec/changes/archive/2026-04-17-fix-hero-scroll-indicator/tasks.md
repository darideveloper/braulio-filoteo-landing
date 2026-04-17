# Tasks: Fix Hero Scroll Indicator

- [x] **Research & Validation**
    - [x] Inspect `src/components/organisms/Hero.astro` to confirm class names and current GSAP implementation. <!-- id: 0 -->

- [x] **Structural & Style Updates**
    - [x] Add `pb-24` to the Hero container in `src/components/organisms/Hero.astro`. <!-- id: 1 -->
    - [x] Wrap the scroll indicator markup in a new `div` with class `js-hero-scroll-wrapper js-reveal`. <!-- id: 2 -->
    - [x] Move the `style` and `js-reveal` class from the inner `.js-hero-scroll` to the new wrapper if necessary (keeping `.js-hero-scroll` for the inner content). <!-- id: 3 -->

- [x] **Animation Logic Updates**
    - [x] Update the entrance timeline in `Hero.astro` to target `.js-hero-scroll-wrapper` instead of `.js-hero-scroll`. <!-- id: 4 -->
    - [x] Update the ScrollTrigger logic to include `immediateRender: false` and `overwrite: 'auto'`. <!-- id: 5 -->

- [x] **Verification**
    - [x] Verify that the scroll indicator fades in correctly with the entrance sequence. <!-- id: 6 -->
    - [x] Verify that the scroll indicator fades out on scroll without jumping. <!-- id: 7 -->
    - [x] Verify that there is no overlap between stats/CTA and the indicator on small viewports. <!-- id: 8 -->
