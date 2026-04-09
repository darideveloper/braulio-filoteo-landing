# core-architecture Specification Delta

## ADDED Requirements

### Requirement: Centralized Page Loader
The project SHALL utilize a global page loader to provide a cinematic and unified entrance experience for the website.

#### Scenario: Loader Design & Accessibility
- **GIVEN** a user first visits the site.
- **THEN** a full-viewport loader SHALL be displayed immediately.
- **AND** it SHALL feature the brand's editorial aesthetic and high-contrast color palette.

#### Scenario: Loader Exit Coordination
- **WHEN** the `window.load` event fires.
- **THEN** the loader SHALL animate its exit (e.g., a vertical wipe).
- **AND** it SHALL dispatch a `loader:complete` custom event to signal other components to start their entrance animations.

#### Scenario: Hero Entrance Synchronization
- **GIVEN** a Hero section with entrance animations.
- **THEN** its entrance GSAP timeline SHALL wait for the `loader:complete` event.
- **AND** it SHALL NOT be started before the loader has successfully exited the viewport.

### Requirement: Smoothed Scroll Scrubbing
Scroll-driven parallax effects (e.g., in the Hero section) SHALL utilize smoothed scrubbing to ensure a premium, non-mechanical feel.

#### Scenario: Catch-up delay in Hero Parallax
- **GIVEN** a Hero section with a parallax scroll trigger.
- **THEN** it SHALL use a `scrub` value of at least `1` second.
- **AND** it SHALL NOT use `scrub: true` (direct 1:1 scrubbing) for large images.
