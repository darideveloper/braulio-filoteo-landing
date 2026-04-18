# Specification Delta: core-architecture

## MODIFIED Requirements

### Requirement: Media & Filter Standardization
Any component rendering images SHALL apply the project's standard "Editorial Treatment".
#### Scenario: Efficient Transitions
- **ADDED** **GIVEN** an editorial image with hover effects.
- **ADDED** **THEN** the CSS transition SHALL explicitly target moving or filtering properties (e.g., `filter`, `transform`).
- **ADDED** **AND** it SHALL NOT use `transition: all` on elements undergoing continuous GSAP manipulation.
