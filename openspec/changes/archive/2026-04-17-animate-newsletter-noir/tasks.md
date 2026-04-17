# Tasks: Animate Newsletter Section (Neon Noir)

- [x] Verify `NewsletterSection.astro` has all necessary `.js-newsletter-*` selectors.
- [x] Implement the GSAP animation script in `src/components/organisms/NewsletterSection.astro`.
    - [x] Import `gsap`, `ScrollTrigger`, and `animationManager`.
    - [x] Define the `initNewsletterAnimations` function.
    - [x] Configure `gsap.matchMedia()` for `no-preference` and `reduce`.
    - [x] Implement the "Neon Noir" timeline with `power4.out` and `expo.out` easing.
    - [x] Register the timeline with `animationManager.registerEntrance(tl)`.
- [x] Run `openspec validate animate-newsletter-noir --strict` to ensure spec compliance.
- [x] Self-validate by cross-referencing with `AboutSection.astro` for pattern parity.
