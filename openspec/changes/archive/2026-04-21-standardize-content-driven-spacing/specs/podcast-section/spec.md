# spec-delta: podcast-section

## MODIFIED Requirements

### Requirement: Podcast Layout
The Podcast Section MUST provide a focused editorial experience using standardized vertical padding instead of forcing a full viewport height.

#### Scenario: Section Spacing
- **GIVEN** a `PodcastSection` organism.
- **WHEN** rendered.
- **THEN** it SHALL utilize standardized vertical padding (e.g., `py-24`).
- **AND** its main content SHALL be centered horizontally.
- **REMOVED** ~~**AND** it SHALL have a minimum height of `100vh`.~~
