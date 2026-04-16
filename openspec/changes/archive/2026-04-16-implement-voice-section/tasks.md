# Tasks: Implement Voice Methodology Section

- [x] **Task 1: Create `VoiceSection.astro` Organism**
  - Implement the asymmetric 12-column grid.
  - Add the headline with gradient text on "convertirse".
  - Add the description block with the primary color left border.
  - Wrap everything in `SectionWrapper`.
  - Add `js-voice-reveal` and `opacity-0` classes for GSAP.
  - **Validation:** Check the component in isolation to ensure layout matches the 1-9 and 6-12 column split.

- [x] **Task 2: Implement GSAP Animation Script**
  - Add a `<script>` tag to `VoiceSection.astro`.
  - Implement `ScrollTrigger` reveal for headline and description.
  - Handle `prefers-reduced-motion`.
  - **Validation:** Scroll to the section and verify the sequenced reveal (Headline -> Description).

- [x] **Task 3: Integrate into Home Page**
  - Import `VoiceSection` in `src/pages/index.astro`.
  - Place it before the `FeatureCTA` section.
  - **Validation:** Verify the narrative flow on the live site (About -> Voice Methodology -> Podcast Vehicle).

- [x] **Task 4: Final Validation**
  - Run `npm run lint` and `tsc`.
  - Check responsiveness for mobile (should stack vertically).
  - Verify that no FOUC is introduced by the new section.
