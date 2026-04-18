# Tasks: Optimize GSAP Performance

## Phase 1: Global Configuration & CSS Cleanup
- [x] **Task 1.1:** Update `src/scripts/gsap-init.ts` to include performance configuration flags.
    - Set `ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true })`.
- [x] **Task 1.2:** Optimize `img-editorial` utility in `src/styles/global.css`.
    - Replace `transition-all` with specific property transitions.

## Phase 2: Component Optimization
- [x] **Task 2.1:** Optimize `Hero.astro` blurs.
    - Reduce `blur-[80px]` and `blur-[100px]` to a maximum of `blur-[60px]`.
    - Adjust `scrub` from `1.5` to `0.8`.
- [x] **Task 2.2:** Optimize `PodcastSection.astro` scrubbing.
    - Adjust `scrub` from `1.2` to `0.8`.
- [x] **Task 2.3:** Audit `AboutSection.astro` for `will-change` hygiene.
    - Ensure `will-change` is only applied to elements that physically move or scale.
- [x] **Task 2.4:** Optimize `NewsletterSection.astro` blurs and hardware acceleration.
    - Reduce blur radius to 60px and apply `will-change` to moving elements.

## Phase 3: Validation
- [x] **Task 3.1:** Verify that scroll-driven animations still feel smooth but are more responsive.
- [x] **Task 3.2:** Test on mobile browser to confirm URL bar toggling doesn't cause layout jitter.
- [x] **Task 3.3:** Check browser DevTools "Layers" panel to ensure no excessive GPU layer allocation.
