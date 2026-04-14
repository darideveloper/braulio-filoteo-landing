# about-animation Specification

## Purpose
Define the high-fidelity, scroll-triggered animation behavior for the About section, ensuring a premium "editorial" reveal with proper accessibility and performance.
## Requirements
### Requirement: Scroll-Triggered Reveal
The About section SHALL have 100% initial transparency and a deliberate reveal sequence.

#### Scenario: Entrance Animation Timing & Transparency
- **GIVEN** a user scrolls down to the `AboutSection`.
- **WHEN** the top of the section reaches `75%` of the viewport height.
- **THEN** all targeted elements SHALL be 100% transparent (`opacity: 0`) initially.
- **AND** it SHALL wait for a `0.5s` initial delay before starting the visual reveal of the Header.
- **AND** the sequence SHALL use the `tl.from()` pattern to animate towards the final CSS state.

---

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

