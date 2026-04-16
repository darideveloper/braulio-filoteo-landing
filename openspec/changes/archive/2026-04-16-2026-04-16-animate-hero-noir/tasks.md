# Tasks: Animate Hero Noir Section

- [x] **Task 1: Add JS Hooks to `HeroNoir.astro`**
  - Add `js-hero-noir-section` to the `SectionWrapper`.
  - Add `js-hero-noir-badge js-hero-noir-reveal opacity-0` to the badge element.
  - Add `js-hero-noir-title js-hero-noir-reveal opacity-0` to the title element.
  - Add `js-hero-noir-description js-hero-noir-reveal opacity-0` to the description element.
  - Add `js-hero-noir-portrait js-hero-noir-reveal opacity-0` to the `EditorialPortrait` component wrapper.
  - **Validation:** Inspect the DOM to ensure classes are present and elements are initially hidden.

- [x] **Task 2: Implement GSAP Animation Script**
  - Add a `<script>` tag at the end of `src/components/organisms/HeroNoir.astro`.
  - Import `gsap` and `ScrollTrigger`.
  - Register `ScrollTrigger`.
  - Implement a `gsap.matchMedia()` block for `no-preference`.
  - Create a `gsap.timeline()` with a `ScrollTrigger` that reveals the content in sequence.
  - **Validation:** Scroll to the section and verify the sequenced reveal occurs.

- [x] **Task 3: Implement Accessibility (Reduced Motion)**
  - Add a `gsap.matchMedia()` block for `reduce` preference.
  - Implement a simple fade-in (`autoAlpha: 0` to `1`) without movement or scaling.
  - **Validation:** Set system preference to reduced motion and verify only fade animations occur.

- [x] **Task 4: Final Validation**
  - Run `npm run lint` and `tsc` to ensure no script errors.
  - Perform a final visual check to ensure the animation is fluid and consistent with other sections.
