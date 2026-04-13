# Tasks: Standardize Section IDs and Remove Wrappers

## Phase 1: Update Section Organisms
Each organism will be updated to handle its own `id` via props.

- [x] Update `src/components/organisms/Hero.astro` to accept and apply `id` prop to the root `<section>`.
- [x] Update `src/components/organisms/PodcastSection.astro` to accept and apply `id` prop, removing hardcoded ID.
- [x] Update `src/components/organisms/SocialSection.astro` to accept and apply `id` prop to the root `<section>`.
- [x] Update `src/components/organisms/HeroNoir.astro` to accept and apply `id` prop (passes to `SectionWrapper`).
- [x] Update `src/components/organisms/GritonesSection.astro` to accept and apply `id` prop (passes to `SectionWrapper`).
- [x] Update `src/components/organisms/PillarsSection.astro` to accept and apply `id` prop, removing hardcoded ID.
- [x] Update `src/components/organisms/CollabSection.astro` to accept and apply `id` prop, removing hardcoded ID.
- [x] Update `src/components/organisms/YourStory.astro` to accept and apply `id` prop (passes to `SectionWrapper`).
- [x] Update `src/components/organisms/CtaSection.astro` to accept and apply `id` prop to the root `<section>`.

## Phase 2: Home Page Refactor
Standardize the call sites on the home page and remove redundant DOM nodes.

- [x] Remove all wrapper `<div>` elements with IDs from `src/pages/index.astro`.
- [x] Pass the appropriate `id` as a prop to each organism in `src/pages/index.astro`.

## Phase 3: Validation
- [x] Verify that all navigation links (`#home`, `#about`, `#podcast`, `#studio`, `#plans`, `#social`) correctly target their respective sections.
- [x] Audit the rendered DOM to ensure the removal of redundant wrapper divs.
- [x] Confirm no visual regressions occurred due to structural changes.
