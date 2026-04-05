# Tasks: Standardize Section Headers

## Refactor SectionHeader Component
- [x] Update `src/components/molecules/SectionHeader.astro` to support `level` prop (h1/h2). <!-- id: 0 -->
- [x] Add `align` prop (`left`|`center`) to `SectionHeader`. <!-- id: 1 -->
- [x] Add `size` prop (`standard`|`editorial`) to `SectionHeader`. <!-- id: 15 -->
- [x] Implement `title` slot in `SectionHeader` to support rich text content. <!-- id: 2 -->
- [x] Update `SectionHeader` to use `clsx` for all conditional classes. <!-- id: 3 -->

## Update Specifications
- [x] Update `openspec/specs/section-header/spec.md` with new requirements for heading levels, alignment, slots, and sizes. <!-- id: 4 -->
- [x] Create delta spec in `openspec/changes/standardize-section-headers/specs/section-header-refactor/spec.md`. <!-- id: 5 -->

## Refactor Organisms
- [x] Update `src/components/organisms/CtaSection.astro` to use `SectionHeader` with `align="center"` and `size="editorial"`. <!-- id: 7 -->
- [x] Update `src/components/organisms/NewsletterSection.astro` to use `SectionHeader` with `align="center"` and `size="editorial"`. <!-- id: 14 -->
- [x] Update `src/pages/index.astro` usage of `CtaSection` to ensure content flows through the new `title` slot correctly. <!-- id: 8 -->

## Refactor Pages
- [x] Refactor `src/pages/design-system.astro` to use `SectionHeader` for all major sections. <!-- id: 9 -->

## Validation
- [x] Verify `AboutSection` and `PodcastSection` still look correct (no regressions in left-aligned headers). <!-- id: 10 -->
- [x] Verify `Hero` section header remains unchanged and untouched. <!-- id: 11 -->
- [x] Verify `CtaSection` and `NewsletterSection` centered alignment and `EditorialHeadline` styling is preserved. <!-- id: 12 -->
- [x] Run `npm run build` to ensure no type errors in any component that uses `SectionHeader`. <!-- id: 13 -->
