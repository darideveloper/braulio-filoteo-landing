# hero-section Specification

## MODIFIED Requirements

### Requirement: Hero Entrance Sequence
The Hero section SHALL implement a sequenced GSAP entrance timeline that explicitly defines its starting state and registers with the `animation-orchestrator`.

#### Scenario: Robust Entrance Animation
- **GIVEN** the Hero section is initialized with `.js-reveal` elements (initially hidden by `opacity: 0; visibility: hidden` in CSS).
- **WHEN** the `animationManager` triggers the registered timeline.
- **THEN** it SHALL use `.from()` animations to define starting offsets and initial transparency.
- **AND** the sequence SHALL follow this order:
    1. **Portrait**: Scale from `1.15` to `1` and fade in (`autoAlpha: 0` to `1`).
    2. **Headline & Subheadline**: Slide up (`y: 40`) and fade in.
    3. **Eyebrow**: Slide up (`y: 20`) and fade in.
    4. **Badges**: Staggered slide right (`x: -20`) and fade in.
    5. **Description**: Slide up (`y: 30`) and fade in.
    6. **CTA Buttons**: Slide up (`y: 20`) and fade in.
    7. **Stats**: Staggered slide up (`y: 20`) and fade in.
    8. **Scroll Indicator Wrapper**: Slide up (`y: 10`) and fade in.
- **AND** all animations SHALL use `power4.out` or `power3.out` easing for a premium feel.
- **AND** the timeline SHALL NOT play until the loader finishes.
