# pillars-animation Specification

## Purpose
Define the high-fidelity, scroll-triggered animation behavior for the `PillarsSection`, ensuring a premium reveal that highlights the project methodology.

## ADDED Requirements

### Requirement: Pillars Section Scroll-Triggered Reveal
The `PillarsSection` SHALL remain hidden until it enters the viewport.

#### Scenario: Entrance Animation Timing & Transparency
- **GIVEN** a user scrolls down to the `PillarsSection`.
- **WHEN** the top of the section reaches `80%` of the viewport height.
- **THEN** all targeted elements (`.js-pillars-reveal`) SHALL be 100% transparent (`opacity: 0`) initially.
- **AND** the sequence SHALL use the `tl.from()` pattern to animate towards the final CSS state.

---

### Requirement: Choreographed Pillars Reveal
The `PillarsSection` SHALL use a sequenced reveal for its components to highlight the methodology.

#### Scenario: Content Entrance Sequence
- **GIVEN** the `PillarsSection` content (Header, Cards).
- **WHEN** the `ScrollTrigger` activates.
- **THEN** the Header SHALL slide up (`y: 50`) with a duration of `1.4s`.
- **AND** the Pillar Cards SHALL reveal with a `0.15s` stagger delay.
- **AND** they SHALL slide up from `y: 30`.

---

### Requirement: Accessible Motion for Pillars
The system SHALL respect the user's preference for reduced motion for the `PillarsSection`.

#### Scenario: Reduced Motion Preference
- **GIVEN** a system-level `prefers-reduced-motion: reduce` setting.
- **WHEN** the `PillarsSection` is rendered and scrolled into view.
- **THEN** all vertical movement animations SHALL be bypassed.
- **AND** elements SHALL only perform a simple staggered fade-in (`autoAlpha: 0` to `1`).
