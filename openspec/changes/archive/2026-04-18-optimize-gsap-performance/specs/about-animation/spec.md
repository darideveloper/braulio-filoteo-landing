# Specification Delta: about-animation

## MODIFIED Requirements

### Requirement: Scroll-Triggered Reveal
The About section SHALL have 100% initial transparency and a deliberate reveal sequence.

#### Scenario: Hardware Acceleration Hygiene
- **GIVEN** elements targeted by the GSAP reveal timeline.
- **ADDED** **THEN** hardware acceleration (e.g., `will-change: transform`) SHALL be applied only to elements that undergo physical translation or scaling.
- **ADDED** **AND** static elements (e.g., text fading in-place) SHALL NOT use `will-change` to avoid unnecessary GPU memory allocation.
