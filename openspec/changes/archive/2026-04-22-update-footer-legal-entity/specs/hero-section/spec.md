# hero-section Specification

## MODIFIED Requirements

### Requirement: Hero Image Performance
The Hero section's main visual SHALL be optimized for Largest Contentful Paint (LCP) to improve SEO performance.

#### Scenario: Above-the-fold Image Loading
- **GIVEN** the `EditorialPortrait` in the Hero section.
- **THEN** it SHALL use "GRITONES STUDIO LLC Portrait" as its `alt` text.
- **AND** it SHALL use `loading="eager"` to ensure immediate download.
- **AND** it SHALL use `fetchpriority="high"` to prioritize it over other page resources.
- **AND** it SHALL include `decoding="sync"` for faster rendering.
