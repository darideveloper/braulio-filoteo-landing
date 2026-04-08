# Delta: Style Guide

## MODIFIED Requirements

### Requirement: Component Showcase
The Design System page SHALL showcase every component in `src/components/` with its available variants and states.

#### Scenario: Atomic Components
- **GIVEN** the Atoms section on the Design System page.
- **THEN** it SHALL render `BrandButton` with all variants (`primary`, `primary-gradient`, `secondary`, `outline`, `outline-secondary`, `ghost`), `disabled` state, `circular` variant, and icon usage.
- **AND** it SHALL render `Badge` with `filled`, `outline`, and `premium` variants.
- **AND** it SHALL render `StatItem`, `AboutIcon`, `MaterialIcon` (showing scaling sizes and `filled` variant), and `SpotifyEmbed`.
