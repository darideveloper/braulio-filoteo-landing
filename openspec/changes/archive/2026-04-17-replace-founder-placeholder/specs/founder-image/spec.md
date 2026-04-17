# Founder Image Specification

Define the requirement for using the authentic founder portrait in the Gritones Studio section.

## ADDED Requirements

### Requirement: Authentic Founder Representation
The Gritones Studio section (HeroNoir) SHALL use the authentic high-resolution portrait of the founder instead of a placeholder.

#### Scenario: Displaying the real founder image
- **GIVEN** the `HeroNoir` section is rendered within the Gritones Studio block.
- **WHEN** the page loads.
- **THEN** the system SHALL display `gritones-founder.webp` instead of `founder.svg`.
- **AND** the image SHALL be wrapped in the `EditorialPortrait` component with the corresponding "Neon Noir" styling.
