# collab-animation Specification

## Purpose
Define the high-fidelity, scroll-triggered animation behavior for the `CollabSection`, ensuring a premium reveal consistent with other site organisms.

## ADDED Requirements

### Requirement: Collab Section Scroll-Triggered Reveal
The `CollabSection` SHALL remain hidden until it enters the viewport.

#### Scenario: Entrance Animation Timing & Transparency
- **GIVEN** a user scrolls down to the `CollabSection`.
- **WHEN** the top of the section reaches `80%` of the viewport height.
- **THEN** all targeted elements (`.js-collab-reveal`) SHALL be 100% transparent (`opacity: 0`) initially.
- **AND** the sequence SHALL use the `tl.from()` pattern to animate towards the final CSS state.

---

### Requirement: Choreographed Collab Reveal
The `CollabSection` SHALL use a sequenced reveal for its components to highlight the interactive collaboration list.

#### Scenario: Content Entrance Sequence
- **GIVEN** the `CollabSection` content (Header, Items).
- **WHEN** the `ScrollTrigger` activates.
- **THEN** the Header SHALL slide up (`y: 40`) with a duration of `1.2s`.
- **AND** the Collab Items SHALL reveal with a `0.1s` stagger delay.
- **AND** they SHALL slide in from the right (`x: 30`) and bottom (`y: 20`).

---

### Requirement: Accessible Motion for Collab
The system SHALL respect the user's preference for reduced motion for the `CollabSection`.

#### Scenario: Reduced Motion Preference
- **GIVEN** a system-level `prefers-reduced-motion: reduce` setting.
- **WHEN** the `CollabSection` is rendered and scrolled into view.
- **THEN** all vertical and horizontal movement animations SHALL be bypassed.
- **AND** elements SHALL only perform a simple staggered fade-in (`autoAlpha: 0` to `1`).
