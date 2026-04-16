# Tasks: Animate Plans Section

- [x] **Task 1: Add JS Hooks to `PlansSection.astro`**
  - Add `js-plans-section` to the `SectionWrapper`.
  - Add `js-plans-header js-plans-reveal opacity-0` to the `SectionHeader` wrapper.
  - Add `js-plans-glow js-plans-reveal opacity-0` to the decorative glow `div`.
  - Add `js-plans-card js-plans-reveal opacity-0` to the plan cards loop wrapper.
  - Add `js-plans-footer js-plans-reveal opacity-0` to the section footer.
  - **Validation:** Inspect the DOM to ensure classes are present and elements are initially hidden.

- [x] **Task 2: Implement GSAP Animation Script**
  - Add a `<script>` tag at the end of `src/components/organisms/PlansSection.astro`.
  - Import `gsap` and `ScrollTrigger`.
  - Register `ScrollTrigger`.
  - Implement a `gsap.matchMedia()` block for `no-preference`.
  - Create a `gsap.timeline()` with a `ScrollTrigger` that reveals the content in sequence (Glow -> Header -> Cards -> Footer).
  - **Validation:** Scroll to the section and verify the choreographed reveal occurs.

- [x] **Task 3: Implement Accessibility (Reduced Motion)**
  - Add a `gsap.matchMedia()` block for `reduce` preference.
  - Implement a simple fade-in (`autoAlpha: 0` to `1`) without vertical movement.
  - **Validation:** Set system preference to reduced motion and verify only fade animations occur.

- [x] **Task 4: Final Validation**
  - Run `npm run lint` and `tsc` to ensure no script errors.
  - Perform a final visual check for fluidity and consistency.
