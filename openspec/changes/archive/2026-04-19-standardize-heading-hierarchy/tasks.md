# Tasks: Standardize Heading Hierarchy

## Pre-Implementation
- [x] Verify GSAP selectors in all affected components. (e.g., `Hero.astro`, `Loader.astro`).

## Implementation

### Phase 1: Fixing Multi-H1 Conflict
- [x] Downgrade `H1` in `src/components/organisms/Loader.astro` to `span`.
- [x] Ensure `src/components/organisms/Hero.astro` is the primary `H1` source.
- [x] Review `Hero.astro` and fix the order: descriptor `H2` vs primary `H1`.

### Phase 2: Correcting Levels in Components
- [x] Update `src/components/molecules/AboutCard.astro`: `h4` -> `h3`.
- [x] Update `src/components/molecules/PodcastCTA.astro`: `h4` -> `h3`.
- [x] Update `src/components/molecules/CollabItem.astro`: `h4` -> `h3`.
- [x] Update `src/components/organisms/AboutSection.astro`: Update brand icon labels `h4` -> `h3`.
- [x] Update `src/components/organisms/Footer.astro`: Update column titles `h4` -> `h3`.
- [x] Update `src/components/molecules/FeatureCTA.astro`: Use `SectionHeader` or ensure its title is `h2`.
- [x] Review `src/components/organisms/HeroNoir.astro` and ensure title uses `h2` correctly.

### Phase 3: Validation & Verification
- [x] Run `npm run build` to ensure no build errors.
- [x] Manually check DOM hierarchy in a browser/preview (if available) to verify the sequence.
- [x] Confirm GSAP animations (e.g., reveal, entrance) are still fully functional.
