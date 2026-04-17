# Tasks: Animate Gritones Section

- [x] **Task 1: Add JS Hooks to `GritonesSection.astro`**
  - Add `js-gritones-section` to the `SectionWrapper`.
  - Add `js-gritones-header js-reveal opacity-0` to the `SectionHeader`.
  - Add `js-gritones-card js-reveal opacity-0` to the `ServiceCard` within the loop.
  - **Validation:** Inspect the DOM to ensure classes are present and elements are initially hidden.

- [x] **Task 2: Implement GSAP Animation Script**
  - Add a `<script>` tag at the end of `src/components/organisms/GritonesSection.astro`.
  - Import `gsap` and `ScrollTrigger`.
  - Implement a `gsap.matchMedia()` block for `no-preference`.
  - Create a `gsap.timeline()` with a `ScrollTrigger` that reveals the header and then the cards with a stagger.
  - **Validation:** Scroll to the section and verify the staggered reveal occurs.

- [x] **Task 3: Implement Accessibility (Reduced Motion)**
  - Add a `gsap.matchMedia()` block for `reduce` preference.
  - Implement a simple fade-in (`autoAlpha: 0` to `1`) without vertical movement.
  - **Validation:** Set system preference to reduced motion and verify only fade animations occur.

- [x] **Task 4: Final Validation**
  - Run `npm run lint` and `tsc` (if available) to ensure no script errors.
  - Perform a final visual check to ensure the animation is fluid and doesn't introduce regressions.
