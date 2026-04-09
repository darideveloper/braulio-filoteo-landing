# Tasks: Standardize Main Section Min-Height

## Implementation

### 1. Update `SectionWrapper.astro`
- [x] Add `fullHeight` boolean prop to `Props` interface (defaulting to `true`).
- [x] Update `section` classes to include `min-h-screen`, `flex`, `items-center`, and `w-full` when `fullHeight` is true.
- [x] Ensure `SectionHeader` and `slot` are properly centered within the container.

### 2. Audit and Refine Organisms
Review and test the following sections to ensure they look good with the new height:
- [x] `Hero.astro` / `HeroNoir.astro` / `HeroEditorial.astro`
- [x] `AboutSection.astro`
- [x] `PodcastSection.astro`
- [x] `NewsletterSection.astro` (Determine if it needs `fullHeight={false}`)
- [x] `CtaSection.astro` (Determine if it needs `fullHeight={false}`)
- [x] `SocialSection.astro`
- [x] `PlansSection.astro`
- [x] `PillarsSection.astro`
- [x] `CollabSection.astro`
- [x] `GritonesSection.astro`

### 3. GSAP Adjustment (if needed)
- [x] Check `src/components/organisms/Hero.astro` and others for any scroll-trigger issues caused by the new height.

## Validation

### Visual Alignment
- [x] Verify each main section takes up at least the full viewport height.
- [x] Ensure content is vertically centered in short sections.
- [x] Confirm mobile layout remains correct (sections grow with content).

### Build Check
- [x] Run `npm run build` to ensure no regressions.
