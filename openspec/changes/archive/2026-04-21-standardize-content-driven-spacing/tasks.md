# Tasks: Standardize Content-Driven Spacing

- [x] **Refactor `SectionWrapper.astro`**
  - [x] Remove `min-h-screen` and `items-center` from root element.
  - [x] Apply `py-24` as the global vertical spacing standard.
  - [x] Remove `fullHeight` prop logic.
- [x] **Update `Hero.astro`**
  - [x] Add `mt-12 sm:mt-0` for mobile clearance while retaining `min-h-screen` for entry impact.
- [x] **Update `PodcastSection.astro`**
  - [x] Replace `min-h-screen` with `py-24`.
- [x] **Update `SocialSection.astro`**
  - [x] Replace `min-h-screen` with `py-24`.
- [x] **Update `YourStory.astro`**
  - [x] Replace `min-h-screen` with standard `SectionWrapper` padding.
- [x] **Update `CtaSection.astro`**
  - [x] Replace `min-h-screen` with `py-24`.
- [x] **Align Specifications**
  - [x] Update `core-architecture` spec to prohibit `min-h-screen`.
  - [x] Remove `100vh` requirements from `social-section`, `telling-section`, `your-story`, and `404-page`.
