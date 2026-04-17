# Tasks: Refine Voice Section Responsiveness

- [x] **Task 1: Update `TransformationCard.astro`**
  - Implement responsive icon sizes: `text-6xl! @3xl:text-7xl!`.
  - Ensure internal padding is consistent.
  - **Validation:** Resize the browser and verify the icon scales up at the `@3xl` breakpoint.

- [x] **Task 2: Update `VoiceSection.astro` Organism**
  - Update root padding: `pt-20 @3xl:pt-32`.
  - Update editorial grid gaps: `gap-y-12 @3xl:gap-y-24`.
  - Update headline spans: `@3xl:col-span-10 @5xl:col-span-9`.
  - Update description placement: `@3xl:col-start-2 @3xl:col-span-11 @5xl:col-start-6 @5xl:col-span-6`.
  - Update Matrix Grid columns: `@3xl:grid-cols-2 @5xl:grid-cols-4`.
  - **Validation:** Verify the layout shift sequence (Stacked -> Wide Asymmetry -> Noir Overlap).

- [x] **Task 3: Final Validation**
  - Run `npm run lint` and `tsc`.
  - Perform a final visual check across mobile, tablet, and desktop simulations.
