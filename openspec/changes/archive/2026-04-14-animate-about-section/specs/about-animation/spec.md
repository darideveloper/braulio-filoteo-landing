# About Animation Specification

## Purpose
Define the interactive reveal behavior for the About section to enhance visual engagement and storytelling.

## ADDED Requirements

### Requirement: Scroll-Triggered Reveal
The About section SHALL reveal its content only when it enters the viewport during scrolling.

#### Scenario: Entrance Animation
- **GIVEN** a user scrolls down to the `AboutSection`.
- **WHEN** the top of the section reaches `80%` of the viewport height.
- **THEN** it SHALL trigger a sequential GSAP timeline reveal.
- **AND** elements SHALL animate from `autoAlpha: 0` and a vertical offset of `30px` to their final state.

---

### Requirement: Staggered Content Entrance
To emphasize the information hierarchy, the About section SHALL use staggered reveals for grouped elements.

#### Scenario: Mission Cards Reveal
- **GIVEN** the `AboutCard` components within the mission grid.
- **WHEN** the entrance animation is triggered.
- **THEN** they SHALL reveal sequentially with a `0.2s` stagger delay.

#### Scenario: Brand Icon Grid Reveal
- **GIVEN** the icon grid at the end of the section.
- **WHEN** the previous elements have partially finished their entrance.
- **THEN** each icon item SHALL reveal with a `0.1s` stagger delay.
- **AND** they SHALL use a "pop-in" effect (scaling from `0.9` to `1.0`).

---

### Requirement: Accessible Motion
The system SHALL respect the user's preference for reduced motion.

#### Scenario: Reduced Motion Preference
- **GIVEN** a system-level `prefers-reduced-motion: reduce` setting.
- **WHEN** the About section is rendered.
- **THEN** all vertical and horizontal movement animations SHALL be bypassed.
- **AND** elements SHALL only perform a simple fade-in (`autoAlpha: 0` to `1`).
