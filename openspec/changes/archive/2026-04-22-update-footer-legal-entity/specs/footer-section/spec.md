# footer-section Specification

## MODIFIED Requirements

### Requirement: Footer Components
The Footer SHALL integrate brand identity and navigation elements.

#### Scenario: Brand Identity
- **GIVEN** the Footer component.
- **THEN** it SHALL display the brand logo (`logo.webp`) with "GRITONES STUDIO LLC Logo" alt text.
- **AND** it SHALL include a timestamp label (e.g., "Est. 2024 / Ciudad de México. GRITONES STUDIO LLC") using `Label-MD` typography as defined in `branding/spec.md`.
- **AND** it SHALL include a dynamic copyright notice showing the current calendar year and "GRITONES STUDIO LLC" as the holder.

#### Scenario: Secondary Navigation
- **GIVEN** the Footer component.
- **THEN** it SHALL render the primary site navigation links.
- **AND** it SHALL use the same `Navigation` molecule as the Header for DRY consistency.
