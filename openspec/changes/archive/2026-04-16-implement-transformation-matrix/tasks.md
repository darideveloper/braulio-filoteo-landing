# Tasks: Implement Transformation Matrix Grid

- [x] **Task 1: Create `TransformationCard.astro` Molecule**
  - Implement the vertical layout: Icon (top), Title + Expandable Border (bottom).
  - Add Tailwind classes for background hover and border expansion (`group-hover:w-full`).
  - **Validation:** Check the component with different titles and icons to ensure the expanding line works correctly.

- [x] **Task 2: Update `VoiceSection.astro` Organism**
  - Define the `matrixItems` array with the 4 pillars (Claridad, Narrativa, Consistencia, Conversaciones).
  - Add the 4-column grid markup below the asymmetric text blocks.
  - Map over the items to render `TransformationCard` components.
  - Add `js-matrix-card` and `opacity-0` for GSAP.
  - **Validation:** Verify the grid structure on both desktop and mobile.

- [x] **Task 3: Implement GSAP Stagger Animation**
  - Update the script in `VoiceSection.astro` to include the `js-matrix-card` elements.
  - Add the cards to the timeline with a `stagger: 0.1` after the description reveal.
  - **Validation:** Verify the entrance sequence: Title -> Description -> Cards (Wave).

- [x] **Task 4: Final Validation**
  - Run `npm run lint` and `tsc`.
  - Perform a final visual check against the provided prototype image.
