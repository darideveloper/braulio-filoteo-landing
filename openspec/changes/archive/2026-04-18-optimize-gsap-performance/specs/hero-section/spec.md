# Specification Delta: hero-section

## MODIFIED Requirements

### Requirement: Atmospheric Glows
The Hero section SHALL implement ambient background blurs for depth.

#### Scenario: Optimized Blur Rendering
- **GIVEN** decorative glow elements.
- **THEN** they SHALL use CSS `blur()` or `backdrop-filter: blur()`.
- **ADDED** **AND** the blur radius SHALL NOT exceed `60px` during active scroll animations to maintain GPU performance.
- **ADDED** **AND** the `scrub` catch-up duration for parallax glow effects SHALL NOT exceed `0.8s`.
