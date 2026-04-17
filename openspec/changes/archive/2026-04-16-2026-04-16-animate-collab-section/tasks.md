# Tasks: Animate Collab Section

- [x] **Task 1: Add JS Hooks to `CollabSection.astro`**
  - Add `js-collab-section` to the `SectionWrapper`.
  - Add `js-collab-header js-collab-reveal opacity-0` to the header column `div`.
  - Wrap `CollabItem` in a `div` with `js-collab-item js-collab-reveal opacity-0` within the loop.
  - **Validation:** Inspect the DOM to ensure classes are present and elements are initially hidden.

- [x] **Task 2: Implement GSAP Animation Script**
  - Add a `<script>` tag at the end of `src/components/organisms/CollabSection.astro`.
  - Import `gsap` and `ScrollTrigger`.
  - Register `ScrollTrigger`.
  - Implement a `gsap.matchMedia()` block for `no-preference`.
  - Create a `gsap.timeline()` with a `ScrollTrigger` that reveals the Header first and then the items with a stagger.
  - **Validation:** Scroll to the section and verify the choreographed reveal occurs.

- [x] **Task 3: Implement Accessibility (Reduced Motion)**
  - Add a `gsap.matchMedia()` block for `reduce` preference.
  - Implement a simple fade-in (`autoAlpha: 0` to `1`) without horizontal/vertical movement.
  - **Validation:** Set system preference to reduced motion and verify only fade animations occur.

- [x] **Task 4: Final Validation**
  - Run `npm run lint` and `tsc` to ensure no script errors.
  - Perform a final visual check to ensure the animation is fluid and doesn't introduce regressions.
