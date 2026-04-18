# fouc-prevention Specification

## Purpose
TBD - created by archiving change 2026-04-08-implement-cinematic-loader-fouc-fix. Update Purpose after archive.
## Requirements
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

### Requirement: Scoped Hidden Targets for CTA Reveal
Scroll-revealed CTA content SHALL hide only the specific wrappers required by the reveal sequence.

#### Scenario: Preparing CTA reveal wrappers
- **WHEN** `CtaSection` marks content for GSAP-driven entrance animation
- **THEN** it SHALL apply the hidden state only to the wrappers used as reveal targets
- **AND** it SHALL NOT hide the whole section container or non-animated structural regions

### Requirement: Safe Visibility Recovery for CTA Content
The CTA section SHALL fail safely if its motion setup does not execute.

#### Scenario: No JavaScript or failed CTA animation setup
- **WHEN** JavaScript is disabled or the CTA GSAP setup does not run
- **THEN** the section header, CTA content, and optional contact block SHALL still be visible
- **AND** no primary conversion content SHALL remain permanently hidden

### Requirement: Scoped Hidden Targets For Your Story Reveal
Scroll-revealed `YourStory` content SHALL hide only the specific wrappers required by the reveal sequence.

#### Scenario: Preparing Your Story reveal wrappers
- **WHEN** `YourStory` marks content for GSAP-driven entrance animation
- **THEN** it SHALL apply the hidden state only to the wrappers used as reveal targets
- **AND** it SHALL NOT hide the whole section container or non-animated structural regions

### Requirement: Safe Visibility Recovery For Your Story Content
The `YourStory` section SHALL fail safely if its motion setup does not execute.

#### Scenario: No JavaScript or failed Your Story animation setup
- **WHEN** JavaScript is disabled or the `YourStory` GSAP setup does not run
- **THEN** the section headline, supporting description, CTA, and contact content SHALL still be visible
- **AND** no primary editorial or conversion content SHALL remain permanently hidden

### Requirement: Scoped Animation Selectors
Component-level GSAP scripts SHALL ONLY target elements within their own DOM tree to avoid global selector conflicts.

#### Scenario: Enforced Scoping in Sections
- **GIVEN** a page with multiple sections (Hero, Newsletter, Podcast, etc.).
- **WHEN** a component's script executes initialization logic (e.g., `gsap.set` or `gsap.from`).
- **THEN** it SHALL use scoped selectors (e.g., `section.querySelectorAll('.js-reveal')`) instead of global selectors (e.g., `gsap.set('.js-reveal')`).
- **AND** it SHALL NOT modify the state of elements outside its own container.
- **AND** this rule SHALL apply to all reveal utilities, including `.js-reveal`.

