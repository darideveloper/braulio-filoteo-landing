# Tasks: Update Design System with Missing Components

## Implementation
1.  **Add missing Atoms**
    - [x] Import and showcase `MaterialIcon` in `src/pages/design-system.astro`.
    - [x] Import and showcase `SpotifyEmbed` in `src/pages/design-system.astro`.
2.  **Expand existing Atoms**
    - [x] Add `BrandButton` showcase for the `disabled` state and "with/without icon" variants.
    - [x] Update `Badge` showcase to include custom utility classes (`!bg-brand-secondary/20`, etc.).
    - [x] Update `StatItem` showcase with varied labels and values.
3.  **Add/Expand missing Molecules**
    - [x] Import and showcase `EditorialHeadline` in `src/pages/design-system.astro`.
    - [x] Import and showcase `PodcastCTA` in `src/pages/design-system.astro`.
    - [x] Update `SectionHeader` showcase to include all new features: `align="center"`, `level={1}`, `maxWidth`, and use of the `title` slot.
    - [x] Import and showcase `SideBorderQuote`.
4.  **Expand existing Molecules**
    - [x] Add `EditorialPortrait` showcase for `showFrame={false}` and `aspect-square`.
    - [x] Add layout-aware examples for `QuoteBlock` and `AboutCard` (e.g., in a grid).
5.  **Add Organisms section**
    - [x] Import and showcase `Header`, `Hero`, `AboutSection`, `CtaSection`, `NewsletterSection`, and `PodcastSection`.
    - [x] Ensure they are rendered in constrained containers to avoid layout interference.
6.  **Cleanup & Formatting**
    - [x] Review all showcase sections for consistent padding and naming conventions.
    - [x] Verify responsive layout across all breakpoints.

## Validation
- [x] Run `npm run build` to ensure no compile errors.
- [x] Manual verification of the `/design-system` page in the browser (visual inspection).
- [x] Verify all components render correctly with their props.
