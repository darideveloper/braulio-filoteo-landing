# About Animation Timing Specification (Delta)

## Purpose
Refine the interactive reveal behavior for the About section with slower, more deliberate timings and an initial delay.

## MODIFIED Requirements

### Requirement: Scroll-Triggered Reveal
The About section SHALL reveal its content only when it enters the viewport during scrolling with a deliberate initial delay.

#### Scenario: Entrance Animation Timing
- **GIVEN** a user scrolls down to the `AboutSection`.
- **WHEN** the top of the section reaches `75%` of the viewport height.
- **THEN** it SHALL wait for a `0.5s` initial delay before starting the visual reveal.
- **AND** the primary Header SHALL have a reveal duration of at least `1.4s`.

---

### Requirement: Staggered Content Entrance
To emphasize the information hierarchy, the About section SHALL use slowed staggered reveals for grouped elements.

#### Scenario: Mission Cards Slow Reveal
- **GIVEN** the `AboutCard` components within the mission grid.
- **WHEN** the entrance animation is triggered.
- **THEN** they SHALL reveal sequentially with a `0.3s` stagger delay.
- **AND** each card SHALL have an individual reveal duration of at least `1.2s`.

#### Scenario: Brand Icon Grid Slow Reveal
- **GIVEN** the icon grid at the end of the section.
- **WHEN** the previous elements have partially finished their entrance.
- **THEN** each icon item SHALL reveal with a `0.15s` stagger delay.
- **AND** they SHALL use a "pop-in" effect with a duration of at least `0.8s`.
