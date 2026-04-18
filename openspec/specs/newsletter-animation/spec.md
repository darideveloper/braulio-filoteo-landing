# newsletter-animation Specification

## Purpose
TBD - created by archiving change animate-newsletter-noir. Update Purpose after archive.
## Requirements
### Requirement: Scroll-Triggered Sequence
The Newsletter section SHALL initiate its reveal sequence based on scroll position using standardized CSS selectors.

#### Scenario: Hardware Acceleration Hygiene
- **GIVEN** the animated components of the newsletter.
- **ADDED** **THEN** hardware acceleration (e.g., `will-change: transform`) SHALL be applied to major moving containers (`.js-newsletter-header`, `.js-newsletter-content`, `.js-newsletter-embed`).

### Requirement: Atmospheric Branding Reveal
The decorative background elements SHALL provide the foundation for the reveal.

#### Scenario: Optimized Glow Rendering
- **GIVEN** the `.js-newsletter-glow` elements.
- **THEN** they SHALL use CSS `blur()`.
- **ADDED** **AND** the blur radius SHALL NOT exceed `60px` during active scroll animations.
- **ADDED** **AND** hardware acceleration (e.g., `will-change: transform`) SHALL be applied to these elements.

### Requirement: Staggered Content Flourish
Content SHALL reveal using the "Zipper" pattern to guide the eye.

#### Scenario: Header and Quote Entrance
- **GIVEN** the header and the side-border quote.
- **THEN** the header SHALL reveal from `y: 40` with `power4.out` easing.
- **AND** the quote SHALL reveal from `x: -20` with `power3.out` easing, starting `0.8s` after the header.

#### Scenario: Substack Embed Focus
- **GIVEN** the Substack iframe container.
- **THEN** it SHALL reveal with a subtle scale-up from `0.98` to `1.0`.
- **AND** it SHALL use `expo.out` easing to create a smooth, high-end "landing" effect.

### Requirement: Accessible Motion Fallback
The system SHALL respect `prefers-reduced-motion` using global FOUC prevention classes.

#### Scenario: Reduced Motion with Global Reveal Class
- **GIVEN** a system setting of `prefers-reduced-motion: reduce`.
- **WHEN** the section is revealed.
- **THEN** it SHALL transition the `.js-reveal` class from `autoAlpha: 0` to `1`.
- **AND** it SHALL ensure all animated elements are tagged with `.js-reveal`.

