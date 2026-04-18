# Proposal: Implement SEO Strategy

## Goal
Implement a comprehensive SEO strategy for the Braulio Filoteo portfolio based on the project's standard SEO documentation. This involves enhancing metadata, structured data, social sharing previews, and performance-related SEO optimizations.

## Scope
- **Metadata Management:** Centralize SEO metadata via a new `BaseSEO.astro` component.
- **Social Sharing:** Implement Open Graph (OG) and Twitter Card metadata.
- **Structured Data:** Add JSON-LD for `Person` and `BreadcrumbList`.
- **Favicons & PWA:** Standardize favicon formats and implement a Web App Manifest.
- **Crawling Controls:** Implement environment-based indexing and canonical links.
- **Accessibility:** Ensure descriptive `aria-label` tags for interactive elements.

## Non-Goals
- Implementation of internationalization (i18n) as this is a single-language project.
- Creation of actual visual assets (OG images, icons) - these have been provided in the `temp/` directory.

## Architectural Changes
- Introduction of `BaseSEO.astro` in `src/components/organisms/`.
- Integration of `BaseSEO` into `src/layouts/Layout.astro`.
- Addition of `site.webmanifest` in `public/`.
- Updates to `branding` and `core-architecture` specifications.

## Risk & Mitigations
- **Complexity:** Adding many meta tags can clutter the head. *Mitigation:* Centralize logic in `BaseSEO.astro` to keep `Layout.astro` clean.
- **Asset Dependencies:** SEO requires specific image sizes. *Mitigation:* Utilize the pre-provided assets in the `temp/` directory.
