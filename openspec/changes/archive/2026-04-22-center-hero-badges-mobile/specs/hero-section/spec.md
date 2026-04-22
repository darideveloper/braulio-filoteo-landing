# hero-section Specification Delta

## ADDED Requirements

### Requirement: Hero Section Content (Alignment)
The professional badges in the Hero section MUST adapt their alignment based on the viewport size to maintain editorial balance.

#### Scenario: Mobile Badge Alignment
- **GIVEN** a mobile viewport.
- **WHEN** the Hero section is rendered.
- **THEN** the container holding the professional badges SHALL be centered horizontally.

#### Scenario: Desktop Badge Alignment
- **GIVEN** a desktop viewport (at or above the `@lg` breakpoint).
- **WHEN** the Hero section is rendered.
- **THEN** the container holding the professional badges SHALL be left-aligned.
