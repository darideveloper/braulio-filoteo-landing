# Tasks: Animate Feature CTA Section

- [x] **Task 1: Add JS Hooks to `FeatureCTA.astro`**
  - Add `js-feature-cta` to the root container.
  - Add `js-fcta-watermark js-fcta-reveal opacity-0` to the watermark `div`.
  - Add `js-fcta-label js-fcta-reveal opacity-0` to the label `p`.
  - Add `js-fcta-headline js-fcta-reveal opacity-0` to the headline `h2`.
  - Add `js-fcta-button js-fcta-reveal opacity-0` to the button wrapper `div`.
  - **Validation:** Inspect the DOM to ensure classes are present and elements are initially hidden.

- [x] **Task 2: Implement GSAP Animation Script**
  - Add a `<script>` tag at the end of `src/components/molecules/FeatureCTA.astro`.
  - Import `gsap` and `ScrollTrigger`.
  - Register `ScrollTrigger`.
  - Implement a `gsap.matchMedia()` block for `no-preference`.
  - Use `gsap.utils.toArray('.js-feature-cta').forEach(...)` to handle multiple instances.
  - Create a `gsap.timeline()` with a `ScrollTrigger` for each instance.
  - **Validation:** Scroll to the section and verify the choreographed reveal occurs.

- [x] **Task 3: Implement Accessibility (Reduced Motion)**
  - Add a `gsap.matchMedia()` block for `reduce` preference.
  - Implement a simple fade-in (`autoAlpha: 0` to `1`) without vertical movement or scaling.
  - **Validation:** Set system preference to reduced motion and verify only fade animations occur.

- [x] **Task 4: Final Validation**
  - Run `npm run lint` and `tsc` to ensure no script errors.
  - Perform a final visual check for fluidity and consistency.
