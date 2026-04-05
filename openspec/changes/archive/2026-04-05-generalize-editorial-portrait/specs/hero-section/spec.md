# hero-section Specification

## REMOVED Requirements
### Requirement: Hero Portrait Effects
This requirement is REMOVED as it is now generalized in the `editorial-portrait` specification.

## MODIFIED Requirements
### Requirement: Hero Section Content
The Hero section MUST display "BRAULIO FILOTEO" using the `EditorialPortrait` component for its main visual.

#### Scenario: Image usage in Hero
- **WHEN** the Hero component is rendered.
- **THEN** it SHALL use an `EditorialPortrait` with its main editorial image.
- **AND** it SHALL display the "EST. 2024" floating label and "DOCUMENTING HUMAN POTENTIAL" vertical text.
