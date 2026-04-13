# hero-section Capability

## Purpose
Refactor the Hero section's entrance and scroll animations to use the centralized GSAP initialization and the `animation-orchestrator`, while fixing missing animation requirements.

## MODIFIED Requirements

### Requirement: Hero Entrance Sequence
The Hero section SHALL implement a sequenced GSAP entrance timeline that registers with the `animation-orchestrator`.
#### Scenario: Centralized Hero Reveal
- **GIVEN** the Hero section is initialized.
- **WHEN** the Hero component's script executes.
- **THEN** it SHALL NOT register GSAP plugins locally.
- **AND** it SHALL create its entrance timeline and call `animationManager.registerEntrance(tl)`.
- **AND** the timeline SHALL first scale down the `.js-hero-portrait` from `1.15` to `1` over `1.4` seconds while fading in (autoAlpha).
- **AND** the timeline SHALL then proceed with the reveal of headlines, badges, and stats as per the existing sequence.
- **AND** the timeline SHALL only play once permitted by the orchestrator.

## ADDED Requirements

### Requirement: Optimized Scroll Interactions
The Hero section SHALL utilize centralized GSAP configurations for performance-tuned scroll-linked effects.
#### Scenario: Enhanced Scroll Performance
- **WHEN** scroll-based animations (glows, portrait parallax) are defined in the Hero.
- **THEN** they SHALL utilize global GSAP defaults and the `ScrollTrigger` plugin registered by the global init.
- **AND** high-performance elements SHALL include the `will-change` CSS property as per project standards.
