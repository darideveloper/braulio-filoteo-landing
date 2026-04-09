# core-architecture Specification Delta

## ADDED Requirements

### Requirement: Initial Visibility Control (FOUC Prevention)
The project SHALL implement a CSS-first approach to hide elements intended for GSAP animations during initial page load to prevent a Flash of Unstyled Content (FOUC).

#### Scenario: Using the `js-reveal` Utility
- **GIVEN** a component with elements targeted for GSAP entrance animations.
- **THEN** it SHALL apply the `.js-reveal` class to those elements in the static markup.
- **AND** the utility class SHALL default to `opacity: 0` and `visibility: hidden` in the global stylesheet.

#### Scenario: Progressive Enhancement Fallback
- **GIVEN** a user with JavaScript disabled.
- **THEN** all elements SHALL be visible by default using the `.no-js` utility.
- **AND** the core layout SHALL provide a small inline script to toggle the `js` class on the `<html>` element upon initialization.

### Requirement: Hardware Acceleration for GSAP
Elements targeted for continuous or scroll-driven GSAP animations SHALL use hardware acceleration to ensure 60fps performance and minimize repaint costs.

#### Scenario: Promoting layers with `will-change`
- **GIVEN** a component with a parallax scroll effect (e.g., Hero Portrait).
- **THEN** it SHALL apply `will-change: transform` to the moving elements.
- **AND** it SHALL avoid animating layout-heavy properties (e.g., `margin`, `top`, `left`).
