## 1. Global Setup
- [x] 1.1 Update `src/styles/global.css`: Convert `.container` and `@utility display-2xl` to use `@` container query prefixes.
- [x] 1.2 Update `src/layouts/Layout.astro`: Add `@container` class to the `<main>` element.

## 2. Refactor Pages
- [x] 2.1 Update `src/pages/index.astro`: Replace viewport breakpoints with container queries.
- [x] 2.2 Update `src/pages/design-system.astro`: Replace all viewport breakpoints with container queries.
- [x] 2.3 Update `src/pages/404.astro`: Replace viewport breakpoints with container queries.

## 3. Refactor Organisms
- [x] 3.1 Update `src/components/organisms/SectionWrapper.astro`.
- [x] 3.2 Update `src/components/organisms/Hero.astro`.
- [x] 3.3 Update `src/components/organisms/HeroEditorial.astro`.
- [x] 3.4 Update `src/components/organisms/AboutSection.astro`.
- [x] 3.5 Update `src/components/organisms/NewsletterSection.astro`.
- [x] 3.6 Update `src/components/organisms/PodcastSection.astro`.
- [x] 3.7 Update `src/components/organisms/SocialSection.astro`.
- [x] 3.8 Update `src/components/organisms/CtaSection.astro`.

## 4. Refactor Molecules
- [x] 4.1 Update `src/components/molecules/SectionHeader.astro`.
- [x] 4.2 Update `src/components/molecules/QuoteBlock.astro`.
- [x] 4.3 Update `src/components/molecules/PodcastCTA.astro`.
- [x] 4.4 Update `src/components/molecules/FeatureCTA.astro`.
- [x] 4.5 Update `src/components/molecules/EditorialPortrait.astro` (Check if `@lg` is better than `@xl` for decoration visibility).

## 5. Validation
- [x] 5.1 Run `npm run dev` and verify that the layout remains responsive and matches original design across all viewports.
- [x] 5.2 Pay special attention to the 1024px-1440px range where the sidebar toggles at 1280px.
024px-1440px range where the sidebar toggles at 1280px.
