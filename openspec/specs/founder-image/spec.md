# founder-image Specification

## Purpose
TBD - created by archiving change replace-founder-placeholder. Update Purpose after archive.
## Requirements
### Requirement: Authentic Founder Representation
The Gritones Studio section (HeroNoir) SHALL use the authentic high-resolution portrait of the founder instead of a placeholder.

#### Scenario: Displaying the real founder image
- **GIVEN** the `HeroNoir` section is rendered within the Gritones Studio block.
- **WHEN** the page loads.
- **THEN** the system SHALL display `gritones-founder.webp` instead of `founder.svg`.
- **AND** the image SHALL be wrapped in the `EditorialPortrait` component with the corresponding "Neon Noir" styling.

