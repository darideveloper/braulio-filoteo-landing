# Tasks: Add Standalone CtaSection

- [x] **Styles: Update Global CSS**
  - Add `display-2xl`, `decoration-editorial`, and `text-watermark` utilities to `src/styles/global.css`.
  - *Validation*: Ensure these utilities are correctly added to the Tailwind v4 config.

- [x] **Molecule: Create EditorialHeadline.astro**
  - Implement a reusable component for massive editorial headlines with specialized emphasis.
  - *Validation*: Render the headline and verify it matches the `code.html` reference.

- [x] **Organism: Create CtaSection.astro (Standalone)**
  - Implement a reusable full-screen base using **Astro Slots** for content.
  - Ensure the section is standalone (`min-h-screen`, vertical centering).
  - Add a `watermark` prop and a `showContact` prop (renders inside the content group).
  - Reuse `MaterialIcon` (for the email icon).
  - *Validation*: Verify the section occupies the full screen and centers its content.

- [x] **Page: Integrate Cta Sections**
  - Implement the first instance on `src/pages/index.astro`.
  - Use `BrandButton` with `variant="primary"` for the CTA slot.
  - *Validation*: Run `npm run build` and check for visual consistency with the brand.
