# social-section Spec Delta

## ADDED Requirements

### Requirement: Editorial Portrait Gallery
The Social Section MUST include a horizontal scrolling gallery for editorial portraits that provides a tactile, high-end feel.

#### Scenario: Slider implementation
- **GIVEN** a set of editorial portraits.
- **THEN** they SHALL be rendered in a horizontal flex container.
- **AND** the container SHALL use `overflow-x-auto` with a hidden scrollbar.
- **AND** the container SHALL use `snap-x` with items using `snap-center` for precise alignment.

### Requirement: Platform Engagement Grid
The Social Section MUST include a grid of social platform links that provide clear visual feedback based on the platform's brand.

#### Scenario: Verify social card hover
- **GIVEN** a social platform card in the grid.
- **WHEN** the user hovers over the card.
- **THEN** it SHALL transition to its platform-specific `accentColor` for the border and icon background.
- **AND** it SHALL increase the background brightness to `brand-surface-bright`.

### Requirement: Data-Driven Interface
The `SocialSection` component MUST be fully configurable through props to ensure easy updates without modifying component logic.

#### Scenario: Add a new social platform
- **WHEN** a new object is added to the `platforms` array prop.
- **THEN** the component SHALL automatically render the corresponding `SocialCard` in the grid.
- **AND** it SHALL apply the correct icon and text without additional markup.
