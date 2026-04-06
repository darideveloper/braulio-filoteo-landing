# social-section Spec Delta

## MODIFIED Requirements

### Requirement: Editorial Portrait Gallery
The Social Section MUST include a horizontal scrolling gallery for editorial portraits that provides a tactile, high-end feel.

#### Scenario: Slider implementation
- **GIVEN** a set of editorial portraits.
- **THEN** they SHALL be rendered using a robust slider library (e.g., SwiperJS).
- **AND** the slider SHALL support `free-mode` with inertia for smooth scrolling.
- **AND** the slider SHALL support both mouse-dragging and touch-swiping.

## ADDED Requirements

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
