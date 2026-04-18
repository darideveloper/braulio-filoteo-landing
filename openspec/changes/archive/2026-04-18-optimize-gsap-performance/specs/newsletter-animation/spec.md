# Specification Delta: newsletter-animation

## MODIFIED Requirements

### Requirement: Atmospheric Branding Reveal
The decorative background elements SHALL provide the foundation for the reveal.

#### Scenario: Optimized Glow Rendering
- **GIVEN** the `.js-newsletter-glow` elements.
- **THEN** they SHALL use CSS `blur()`.
- **ADDED** **AND** the blur radius SHALL NOT exceed `60px` during active scroll animations.
- **ADDED** **AND** hardware acceleration (e.g., `will-change: transform`) SHALL be applied to these elements.

### Requirement: Scroll-Triggered Sequence
The Newsletter section SHALL initiate its reveal sequence based on scroll position using standardized CSS selectors.

#### Scenario: Hardware Acceleration Hygiene
- **GIVEN** the animated components of the newsletter.
- **ADDED** **THEN** hardware acceleration (e.g., `will-change: transform`) SHALL be applied to major moving containers (`.js-newsletter-header`, `.js-newsletter-content`, `.js-newsletter-embed`).
