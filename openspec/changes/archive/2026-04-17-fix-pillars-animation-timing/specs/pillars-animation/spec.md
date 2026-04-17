# Spec Delta: pillars-animation

## MODIFIED Requirements

### Requirement: Pillars Section Scroll-Triggered Reveal
The `PillarsSection` SHALL remain hidden until it enters the viewport and reaches a central focus area.

#### Scenario: Entrance Animation Timing & Transparency
- **GIVEN** a user scrolls down to the `PillarsSection`.
- **WHEN** the top of the section reaches `65%` of the viewport height.
- **THEN** all targeted elements (`.js-pillars-reveal`) SHALL be 100% transparent (`opacity: 0`) initially.
- **AND** the sequence SHALL use the `tl.from()` pattern to animate towards the final CSS state.

---

### Requirement: Choreographed Pillars Reveal
The `PillarsSection` SHALL use a sequenced reveal for its components to highlight the methodology.

#### Scenario: Content Entrance Sequence
- **GIVEN** the `PillarsSection` content (Header, Cards).
- **WHEN** the `ScrollTrigger` activates.
- **THEN** the Header SHALL slide up (`y: 50`) with a duration of `1.4s` and `expo.out` easing.
- **AND** the Pillar Cards SHALL reveal with a `0.2s` stagger delay.
- **AND** they SHALL start their animation `0.6s` after the Header begins (`-=0.8s` from end or `-=0.6s` relative start).
- **AND** they SHALL slide up from `y: 30`.
