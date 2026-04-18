# core-architecture Spec Delta: Add SEO Pattern

## ADDED Requirements

### Requirement: Centralized SEO Metadata
All pages SHALL use a centralized SEO component to manage `<head>` metadata, ensuring consistency across the project.

#### Scenario: Integration of `BaseSEO` in Layouts
- **GIVEN** a global layout component (e.g., `Layout.astro`).
- **THEN** it SHALL include the `BaseSEO` organism in its `<head>`.
- **AND** it SHALL pass relevant props (`title`, `description`, `ogImage`) down to `BaseSEO`.
- **AND** individual pages SHALL NOT manually define standard SEO meta tags (OG, Twitter, Favicons) in their head.

#### Scenario: Automatic No-Indexing
- **GIVEN** a non-production environment (e.g., `import.meta.env.PROD === false`).
- **THEN** `BaseSEO` SHALL automatically render `<meta name="robots" content="noindex, nofollow" />`.
- **AND** it SHALL allow manual override for specific production pages if needed.

#### Scenario: Structured Data Rendering
- **GIVEN** a page rendered via `BaseSEO`.
- **THEN** it SHALL include a `Person` schema JSON-LD representing "Braulio Filoteo".
- **AND** it SHALL include a `Service` schema representing "Gritones Studio" services.
- **AND** it SHALL include a `BreadcrumbList` schema JSON-LD representing the current page's position in the hierarchy.

### Requirement: SEO-Friendly Island Architecture
To ensure maximum search visibility, all interactive components SHALL utilize the "Slot Pattern".

#### Scenario: Server-Side Rendering of Content Slots
- **GIVEN** a complex interactive component (e.g., a React slider or modal).
- **THEN** its primary SEO content (titles, text, links) SHALL be passed as Astro `<slot />` content.
- **AND** it SHALL NOT rely exclusively on client-side state for rendering essential information.

### Requirement: Critical Resource Preloading
Pages SHALL prioritize the loading of above-the-fold assets to improve Core Web Vitals (LCP).

#### Scenario: Preloading Hero Visuals
- **GIVEN** a page with a Hero section.
- **THEN** the `BaseSEO` component SHALL include a `<link rel="preload">` for the main Hero image.
- **AND** it SHALL include `<link rel="preconnect">` for third-party font domains.
