# 404-page Specification

## Purpose
TBD - created by archiving change add-404-error-page. Update Purpose after archive.
## Requirements
### Requirement: [404-01] Editorial 404 Error Page
The website MUST have a custom 404 page that aligns with the "Neon Noir" editorial aesthetic.
#### Scenario: Custom 404 Page Structure
- **GIVEN** a user navigates to a non-existent URL (e.g., `/random-page`)
- **THEN** the site MUST display the `src/pages/404.astro` page.
- **AND** the page MUST use the `Layout.astro` component (with `Sidebar` and `Header`).
- **AND** the page MUST contain an `EditorialHeadline` with the text "404." in `text-brand-primary` color.
- **AND** the page MUST contain a message "PARECE QUE TE HAS PERDIDO EN LA NARRATIVA." where "NARRATIVA" is italicized and white.
- **AND** the page MUST contain a `BrandButton` pointing to `/` with the text "Regresar al Inicio" and the `arrow_forward` icon.

### Requirement: [404-02] Visual Consistency and Accessibility
The 404 page MUST be visually consistent with the rest of the site and adhere to accessibility standards.
#### Scenario: Styling and Layout
- **GIVEN** the 404 page is rendered
- **THEN** the content MUST be centered both vertically and horizontally within the `main` content area.
- **AND** the typography MUST use the standard brand fonts (Epilogue and Inter).
- **AND** the background MUST use the brand's dark background color (`bg-brand-background`).
- **AND** the 404 text MUST have a `drop-shadow-neon-purple` effect for visual impact.

