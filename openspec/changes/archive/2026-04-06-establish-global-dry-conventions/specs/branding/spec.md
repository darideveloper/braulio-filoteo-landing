## ADDED Requirements

### Requirement: Single Source of Truth for Tokens
The `branding` specification SHALL be the authoritative source for all hex codes, font sizes, and spacing tokens in the project.

#### Scenario: Referencing tokens in other specs
- **GIVEN** a new or existing specification (e.g., `hero-section`).
- **WHEN** it needs to define colors or typography.
- **THEN** it SHALL NOT hardcode literal values (e.g., `#0E0E0E`).
- **AND** it SHALL instead reference the `branding` specification by name (e.g., "use `brand-background` as defined in `branding`").
