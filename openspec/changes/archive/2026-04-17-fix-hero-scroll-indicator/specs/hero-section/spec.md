# hero-scroll-indicator Capability Spec

## ADDED Requirements

### Requirement: Hero Section Layout Stability
The Hero section MUST provide sufficient vertical clearance for absolute-positioned elements to prevent content overlap.

#### Scenario: Prevent Scroll Indicator Overlap
- **GIVEN** a Hero section with a centered container and a bottom-aligned scroll indicator.
- **WHEN** the viewport height is reduced or content expands.
- **THEN** the main container SHALL include a minimum bottom padding of `6rem` (`pb-24`).
- **AND** this padding SHALL ensure the content grid does not overlap with the scroll indicator positioned at `bottom-10`.

### Requirement: Hero Scroll Indicator Animation
The Hero scroll indicator MUST use a decoupled animation strategy to prevent conflicts between entrance reveals and scroll interactions.

#### Scenario: Decoupled Entrance and Scroll Animations
- **GIVEN** a scroll indicator in the Hero section.
- **WHEN** the entrance timeline plays.
- **THEN** it SHALL animate an outer wrapper (`.js-hero-scroll-wrapper`).
- **WHEN** the user scrolls the page.
- **THEN** the ScrollTrigger SHALL animate the inner content (`.js-hero-scroll`).
- **AND** the ScrollTrigger SHALL use `immediateRender: false` to avoid premature state changes.
- **AND** the animation SHALL use `overwrite: 'auto'` to resolve potential property conflicts.
