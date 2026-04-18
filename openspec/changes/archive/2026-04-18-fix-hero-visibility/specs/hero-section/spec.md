# hero-entrance-visibility Capability Specification

## Purpose
Ensure Hero elements transition to a fully visible state during their entrance animation by resolving conflicts between CSS-based FOUC prevention and GSAP's `.from()` method.

## MODIFIED Requirements

### Requirement: Hero Entrance Sequence
The Hero section SHALL implement a sequenced GSAP entrance timeline that explicitly defines its destination visibility state.

#### Scenario: Visibility Restoration
- **GIVEN** the Hero section is initialized with `.js-reveal` elements (hidden by CSS).
- **WHEN** the GSAP initialization script for the Hero executes.
- **THEN** it SHALL set the visibility state of `.js-reveal` elements to `autoAlpha: 1` before or during timeline creation.
- **AND** the subsequent `.from()` animations SHALL animate from `autoAlpha: 0` to this restored visible state.
