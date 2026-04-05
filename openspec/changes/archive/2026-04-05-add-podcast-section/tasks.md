# Tasks: Add Podcast Section

## Pre-implementation
- [x] Research: Map existing `AboutSection` header to `SectionHeader` props. (Done)

## Implementation

### Phase 1: Atoms and Molecules
- [x] Create `src/components/atoms/MaterialIcon.astro`.
- [x] Create `src/components/atoms/SpotifyEmbed.astro`.
- [x] Create `src/components/molecules/SectionHeader.astro`.
- [x] Create `src/components/molecules/PodcastCTA.astro`.
- [x] Refactor `src/components/organisms/AboutSection.astro` to use the new `SectionHeader`.

### Phase 2: Organisms and Pages
- [x] Create `src/components/organisms/PodcastSection.astro`.
- [x] Add `PodcastSection` to `src/pages/index.astro` after the `AboutSection`.

## Validation
- [x] Verify `SectionHeader` colors and **intro paragraph** match reference in both About and Podcast sections.
- [x] Confirm the **Purple and Orange ambient glows** are correctly positioned in the Podcast section.
- [x] Confirm `BrandButton` (variant="secondary") is used in the CTA card without style modifications.
- [x] Ensure the Spotify embed is responsive across mobile, tablet, and desktop viewports.
- [x] Validate that no new color variables were added to `global.css`.
