# social-section Specification

## Purpose
TBD - created by archiving change update-hero-section-to-neon-noir-editorial. Update Purpose after archive.
## Requirements
### Requirement: High-Contrast Layout
The Social Section MUST use the deepest brand background and provide a clear horizontal/vertical separation from other content.

#### Scenario: Section styling
- **WHEN** the SocialSection component is rendered.
- **THEN** it SHALL use `brand-background` (#0E0E0E).
- **AND** it SHALL have a `border-t` using `brand-surface-bright/20`.

### Requirement: Social Navigation
The Social Section SHALL provide accessible links to social platforms using consistent technical typography.

#### Scenario: Verify link typography
- **GIVEN** the social links in the Social Section.
- **THEN** they SHALL use the `label-md` utility (Inter, uppercase, 0.1em tracking).
- **AND** they SHALL transition to `brand-primary` on hover.

### Requirement: Editorial Portrait Gallery
The Social Section MUST include a horizontal scrolling gallery for editorial portraits that provides a tactile, high-end feel.

#### Scenario: Slider implementation
- **GIVEN** a set of editorial portraits.
- **THEN** they SHALL be rendered using a robust slider library (e.g., SwiperJS).
- **AND** the slider SHALL support `free-mode` with inertia for smooth scrolling.
- **AND** the slider SHALL support both mouse-dragging and touch-swiping.

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

### Requirement: Slider Performance
The gallery slider MUST be optimized for high-performance visual transitions.

#### Scenario: Verify hardware acceleration
- **GIVEN** the slider in the Social Section.
- **THEN** it SHALL use hardware-accelerated CSS transforms (`translate3d`) for all movements.
- **AND** it SHALL maintain 60fps during transitions.

### Requirement: Library-Driven Pagination
The gallery indicators MUST be dynamically linked to the internal state of the slider library.

#### Scenario: Verify pagination synchronization
- **GIVEN** a slider with pagination indicators.
- **WHEN** the user slides the gallery.
- **THEN** the indicators SHALL automatically update to reflect the current active slide or position.
- **AND** the indicators SHALL match the brand's aesthetic (`w-8 h-1` horizontal bars).

