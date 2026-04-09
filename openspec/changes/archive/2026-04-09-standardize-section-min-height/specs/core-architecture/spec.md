# core-architecture Specification (Delta: Standardized Section Sizing)

## MODIFIED Requirements
### Requirement: Standardized Section Interface
The `SectionWrapper` organism SHALL be updated to provide global layout consistency for all main content sections.

#### Scenario: Full-Screen Section Default
- **GIVEN** a `SectionWrapper` component without a specified height.
- **THEN** it SHALL apply `min-height: 100vh` to its base element.
- **AND** it SHALL vertically center its content container using flexbox.

#### Scenario: Opting Out of Full Height
- **GIVEN** a `SectionWrapper` with `fullHeight={false}`.
- **THEN** it SHALL NOT apply `min-height: 100vh`.
- **AND** it SHALL revert to its default padding-based height.
