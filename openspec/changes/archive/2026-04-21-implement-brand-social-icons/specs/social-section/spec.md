# social-section Specification Delta

## MODIFIED Requirements

### Requirement: Platform Engagement Grid
The Social Section MUST include a grid of social platform links that provide clear visual feedback based on the platform's brand.

#### Scenario: Verify social card icon
- **GIVEN** a social platform card in the grid.
- **THEN** it SHALL render the official brand logo (SVG) instead of a generic icon.
- **AND** it SHALL inherit the platform's `accentColor` for the SVG fill on hover.

## ADDED Requirements

### Requirement: Accessible Social Links
All social media links SHALL use official brand logos that are semantically identified for accessibility.

#### Scenario: Verify icon accessibility
- **GIVEN** a `SocialIcon` component.
- **THEN** it SHALL have `aria-hidden="true"` to prevent redundant screen reader announcements (as parent links already have `aria-label`).
- **AND** it SHALL be rendered as an inline-block element for consistent layout alignment.

### Requirement: Centralized Social Asset Management
The system SHALL maintain a single source of truth for social brand assets.

#### Scenario: Add a new platform logo
- **WHEN** a new SVG path is added to the `SocialIcon` component.
- **THEN** it SHALL be immediately available for use across `SocialLinks`, `SocialCard`, and other social-aware components.
- **AND** it SHALL automatically support the "Neon Noir" transition system.
