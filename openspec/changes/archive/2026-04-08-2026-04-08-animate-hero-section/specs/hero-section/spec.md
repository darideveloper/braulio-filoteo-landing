# hero-section Specification Delta

## ADDED Requirements

### Requirement: Hero Entrance Sequence
The Hero section SHALL implement a sequenced GSAP entrance timeline to reveal components in a cinematic manner.

#### Scenario: Entrance Animation Order
- **GIVEN** the Hero section is first loaded.
- **THEN** it SHALL first scale down the `EditorialPortrait` from `1.15` to `1` over `1.4` seconds while fading in.
- **AND** it SHALL then reveal the main title ("BRAULIO FILOTEO") with a `y` translation of `60px` to `0` and an opacity fade.
- **AND** it SHALL then stagger in the badges and statistical metrics using a slight `x` or `y` translation.

### Requirement: Hero Depth & Interactivity
The Hero section SHALL utilize GSAP's `ScrollTrigger` and mouse event listeners to create depth.

#### Scenario: Portrait Parallax on Scroll
- **GIVEN** a user is scrolling through the Hero section.
- **THEN** the `EditorialPortrait` SHALL move at a slower relative rate (e.g., `yPercent: 15`) to the scroll position.
- **AND** the background blurs SHALL drift at different rates to simulate 3D depth.

#### Scenario: Interactive Portrait Tilt
- **GIVEN** a user is moving their mouse within the Hero section container.
- **THEN** the `EditorialPortrait` and its decorative frame SHALL slightly tilt or offset (`±10px`) in response to mouse coordinates.
- **AND** the effect SHALL be subtle enough to avoid distraction while providing tactile feedback.
