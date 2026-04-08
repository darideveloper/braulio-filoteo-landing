# Footer Section Specification

## Purpose
The Footer Section provides a consistent, professional endpoint for every page, offering secondary navigation, brand reinforcement, and essential legal or contact information.

## ADDED Requirements

### Requirement: Footer Presence
The site SHALL display a persistent footer at the bottom of all routes managed by the global layout.

#### Scenario: Rendering in the Global Layout
- **GIVEN** any page in the application.
- **THEN** it SHALL include the `Footer` organism as a sibling following the `main` tag in `Layout.astro`.
- **AND** the `Footer` component itself SHALL implement the `xl:ml-[280px]` left margin on desktop viewports to remain aligned with the `main` content area.

### Requirement: Footer Branding
The Footer SHALL adhere to the "Neon Noir Editorial" high-contrast design language.

#### Scenario: Visual Styling and Tonal Stepping
- **GIVEN** the Footer component.
- **THEN** it SHALL use `brand-background` (#0E0E0E) as its primary surface color.
- **AND** it SHALL NOT use a `1px` solid border for separation from the preceding section.
- **AND** it SHALL feature a subtle radial purple glow (`bg-glow-purple`) to maintain the "Electric Noir" atmosphere.

### Requirement: Footer Components
The Footer SHALL integrate brand identity and navigation elements.

#### Scenario: Brand Identity
- **GIVEN** the Footer component.
- **THEN** it SHALL display the brand logo (`logo.webp`).
- **AND** it SHALL include a timestamp label (e.g., "Est. 2024 / Braulio Filoteo.") using `Label-MD` typography as defined in `branding/spec.md`.
- **AND** it SHALL include a dynamic copyright notice showing the current calendar year.

#### Scenario: Secondary Navigation
- **GIVEN** the Footer component.
- **THEN** it SHALL render the primary site navigation links.
- **AND** it SHALL use the same `Navigation` molecule as the Header for DRY consistency.

### Requirement: Responsive Layout
The Footer SHALL utilize the `editorial-grid` for its structural layout across all screen sizes.

#### Scenario: Desktop vs Mobile Layout
- **GIVEN** the Footer component.
- **THEN** on mobile viewports (< 768px), it SHALL stack its columns vertically with centered alignment.
- **AND** on desktop viewports (>= 1280px), it SHALL distribute its components horizontally using the 12-column editorial grid.
