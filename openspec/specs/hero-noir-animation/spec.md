# hero-noir-animation Specification

## Purpose
TBD - created by archiving change 2026-04-16-animate-hero-noir. Update Purpose after archive.
## Requirements
### Requirement: Hero Noir Scroll-Triggered Reveal
The `HeroNoir` section SHALL remain hidden until it enters the viewport.

#### Scenario: Entrance Animation Timing & Transparency
- **GIVEN** a user scrolls down to the `HeroNoir` section.
- **WHEN** the top of the section reaches `80%` of the viewport height.
- **THEN** all targeted elements (`.js-hero-noir-reveal`) SHALL be 100% transparent (`opacity: 0`) initially.
- **AND** the sequence SHALL use the `tl.from()` pattern to animate towards the final CSS state.

---

### Requirement: Sequenced Hero Noir Reveal
The `HeroNoir` section SHALL use a sequenced reveal for its components to create a sophisticated editorial entrance.

#### Scenario: Content Entrance Sequence
- **GIVEN** the `HeroNoir` content (Badge, Title, Description, Portrait).
- **WHEN** the `ScrollTrigger` activates.
- **THEN** the Badge SHALL reveal first.
- **AND** the Title SHALL follow with a `0.1s` overlap delay.
- **AND** the Description SHALL follow with a `0.1s` overlap delay.
- **AND** the Portrait SHALL reveal concurrently with a scale and fade.

---

### Requirement: Accessible Motion for Hero Noir
The system SHALL respect the user's preference for reduced motion for the `HeroNoir` section.

#### Scenario: Reduced Motion Preference
- **GIVEN** a system-level `prefers-reduced-motion: reduce` setting.
- **WHEN** the `HeroNoir` section is rendered and scrolled into view.
- **THEN** all vertical movement and scaling animations SHALL be bypassed.
- **AND** elements SHALL only perform a simple staggered fade-in (`autoAlpha: 0` to `1`).

