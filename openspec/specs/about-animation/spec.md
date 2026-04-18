# about-animation Specification

## Purpose
Define the high-fidelity, scroll-triggered animation behavior for the About section, ensuring a premium "editorial" reveal with proper accessibility and performance.
## Requirements
### Requirement: Scroll-Triggered Reveal
The About section SHALL have 100% initial transparency and a deliberate reveal sequence.

#### Scenario: Hardware Acceleration Hygiene
- **GIVEN** elements targeted by the GSAP reveal timeline.
- **ADDED** **THEN** hardware acceleration (e.g., `will-change: transform`) SHALL be applied only to elements that undergo physical translation or scaling.
- **ADDED** **AND** static elements (e.g., text fading in-place) SHALL NOT use `will-change` to avoid unnecessary GPU memory allocation.

### Requirement: Staggered Content Entrance
The About section SHALL use significant overlapping reveals to create a high-end "zipper" effect.

#### Scenario: Mission Cards High-Overlap Reveal
- **GIVEN** the `AboutCard` components within the mission grid.
- **WHEN** the header reveal is mid-sequence (approximately `1.0s` offset).
- **THEN** the cards SHALL start revealing with a `0.15s` stagger delay.
- **AND** they SHALL use a "Hero Style" duration of `1.2s`.

#### Scenario: Brand Icon Grid High-Overlap Reveal
- **GIVEN** the icon grid at the end of the section.
- **WHEN** the mission cards reveal is mid-sequence (approximately `0.6s` offset).
- **THEN** each icon item SHALL reveal with a `0.1s` stagger delay.
- **AND** they SHALL use a "pop-in" effect (scaling from `0.9` to `1.0`) with a duration of `0.8s`.

### Requirement: Accessible Motion
The system SHALL respect the user's preference for reduced motion.

#### Scenario: Reduced Motion Preference
- **GIVEN** a system-level `prefers-reduced-motion: reduce` setting.
- **WHEN** the About section is rendered.
- **THEN** all vertical and horizontal movement animations SHALL be bypassed.
- **AND** elements SHALL only perform a simple fade-in (`autoAlpha: 0` to `1`).

