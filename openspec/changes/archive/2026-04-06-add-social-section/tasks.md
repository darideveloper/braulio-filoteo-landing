# Tasks: Implement Social Section

## 1. Global Styles & Theming
- [x] Add `brand-error`, `brand-error-container`, and `brand-outline-variant` to `src/styles/global.css`.
- [x] Implement `.hide-scrollbar` and `.snap-center` utilities in `global.css`.
    - **Validation**: Ensure `brand-error` is available in Tailwind intellisense/classes.

## 2. Molecule Enhancements
- [x] Add `variant="minimal"` to `EditorialPortrait.astro` to hide decorative frames and labels.
    - **Validation**: Verify `variant="minimal"` only renders the image with its editorial hover effect and supports custom width/aspect.

## 3. New Molecular Component
- [x] Create `src/components/molecules/SocialCard.astro`.
    - The root element SHALL be an `<a>` tag for full-card clickability.
    - Props: `platform`, `description`, `icon`, `tag`, `href`, `accentColor`.
    - **Validation**: Verify the entire card is clickable and the hover effect is triggered correctly.

## 4. Section Organism
- [x] Create `src/components/organisms/SocialSection.astro`.
    - Implement the horizontal gallery using `EditorialPortrait` in a scrolling container with `hide-scrollbar`.
    - Add the **Gallery Indicators** (3 bars) below the slider.
    - Implement the 3-column grid using `SocialCard`.
    - Use the updated `SectionHeader` with `layout="split"`.
    - **Validation**: Verify the slider snaps to images and the layout matches `code.html`.

## 5. Integration & Final Polish
- [x] Replace or add the new `SocialSection` to `src/pages/index.astro`.
- [x] Pass the real content data (images and social links) from `code.html`.
    - **Validation**: Take a screenshot and compare it with the reference `ui-design/socials/code.html`.
