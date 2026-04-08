# Change: Migrate to Container Queries

## Why
Currently, the project uses viewport-based global breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`). The layout includes a sidebar that appears on `xl` screens (1280px), shifting the main content by 280px. Viewport breakpoints fail to account for this jump, creating layout shifts and inconsistency in the available space for the main content (e.g., content gets less space at exactly `xl` than it did right before at `lg`). Moving to container queries allows components to respond to their actual available space rather than the full screen width.

## What Changes
- Wrap the `<main>` tag in `src/layouts/Layout.astro` with an `@container` class.
- Update global CSS utilities to be container-aware.
- Systematically replace viewport breakpoints (`sm:`, `md:`, `lg:`, `xl:`) with container breakpoints (`@sm:`, `@md:`, `@lg:`, `@xl:`) across all pages and internal components.
- Maintain viewport breakpoints for global layout elements (`Sidebar`, `Header`) that exist outside the main container.

## Detailed Code Changes

### 1. Global Styles (`src/styles/global.css`)
- **MODIFIED**: `.container` utility to use `@` prefixes.
  - *From*: `@apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;`
  - *To*: `@apply mx-auto max-w-7xl px-4 @sm:px-6 @lg:px-8;`
- **MODIFIED**: `@utility display-2xl` to use `@` prefix.
  - *From*: `@apply font-brand-display text-6xl md:text-8xl ...`
  - *To*: `@apply font-brand-display text-6xl @md:text-8xl ...`

### 2. Layout (`src/layouts/Layout.astro`)
- **MODIFIED**: `<main>` tag to include `@container`.
  - *From*: `<main class="min-h-screen xl:ml-[280px] pt-20 xl:pt-0">`
  - *To*: `<main class="@container min-h-screen xl:ml-[280px] pt-20 xl:pt-0">`

### 3. Pages (`src/pages/`)
- **index.astro**: Change `sm:grid-cols-2 lg:grid-cols-4` to `@sm:grid-cols-2 @lg:grid-cols-4`.
- **design-system.astro**: Update all 15+ viewport breakpoints to container-aware versions (e.g., `md:col-span-3` → `@md:col-span-3`).
- **404.astro**: Update `md:text-2xl` → `@md:text-2xl`.

### 4. Organisms (`src/components/organisms/`)
- **SectionWrapper.astro**: Update `lg:px-24` → `@lg:px-24`.
- **Hero.astro**: Update `md:px-12`, `lg:grid-cols-12`, `md:text-8xl`, `sm:flex-row`, etc.
- **HeroEditorial.astro**: Update `md:col-span-9`, `md:text-[5rem]`, `md:col-start-6`, `md:text-2xl`.
- **AboutSection.astro**: Update `lg:grid-cols-2`, `md:grid-cols-2`.
- **NewsletterSection.astro**: Update `md:grid-cols-12`, `md:text-2xl`, `md:flex-row`.
- **PodcastSection.astro**: Update `md:px-12`, `lg:px-24`, `lg:grid-cols-12`, `lg:col-span-8`.
- **SocialSection.astro**: Update `md:px-12`, `md:w-[450px]`, `md:grid-cols-3`.
- **CtaSection.astro**: Update `sm:flex-row`.

### 5. Molecules (`src/components/molecules/`)
- **SectionHeader.astro**: Update `md:!text-[3.5rem]`, `md:text-7xl`, `lg:text-8xl`.
- **QuoteBlock.astro**: Update `md:text-3xl`.
- **PodcastCTA.astro**: Update `md:flex-row`, `md:text-left`, `md:w-auto`.
- **FeatureCTA.astro**: Update `md:text-6xl`.
- **EditorialPortrait.astro**: Update `xl:block` → `@lg:block` (Note: Threshold adjusted to `@lg` because the sidebar reduces main container width below 1280px).

## Impact
- **Affected specs**: `core-architecture` (added requirement for container-aware design).
- **Affected code**: Global CSS, Main Layout, 3 Pages, 8 Organisms, 5 Molecules.
- **User Visibility**: Improved responsiveness stability on desktop when sidebar toggles. No visual change intended for mobile.
 8 Organisms, 5 Molecules.
- **User Visibility**: Improved responsiveness stability on desktop when sidebar toggles. No visual change intended for mobile.
