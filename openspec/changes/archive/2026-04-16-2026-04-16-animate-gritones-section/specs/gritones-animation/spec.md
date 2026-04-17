# gritones-animation Specification

## Purpose
Define the high-fidelity, scroll-triggered animation behavior for the `GritonesSection`, ensuring a premium "editorial" reveal that matches the Hero and About sections.

## ADDED Requirements

### Requirement: Scroll-Triggered Reveal Sequence
The `GritonesSection` SHALL remain hidden until it enters the viewport.

#### Scenario: Entrance Animation Timing & Transparency
- **GIVEN** a user scrolls down to the `GritonesSection`.
- **WHEN** the top of the section reaches `80%` of the viewport height.
- **THEN** all targeted elements (`.js-reveal`) SHALL be 100% transparent (`opacity: 0`) initially.
- **AND** the sequence SHALL use the `tl.from()` pattern to animate towards the final CSS state.
- **AND** the Header SHALL slide up (`y: 40`) with a duration of `1.2s`.

### Requirement: Staggered Service Card Entrance
The `GritonesSection` SHALL use a staggered reveal for its service cards to create a sophisticated grid entrance.

#### Scenario: Service Cards Staggered Reveal
- **GIVEN** the `ServiceCard` components within the grid.
- **WHEN** the header reveal is mid-sequence (approximately `0.8s` offset).
- **THEN** each card SHALL reveal with a `0.15s` stagger delay.
- **AND** they SHALL slide up from `y: 30` with a duration of `1.0s`.

### Requirement: Accessible Motion
The system SHALL respect the user's preference for reduced motion for the `GritonesSection`.

#### Scenario: Reduced Motion Preference
- **GIVEN** a system-level `prefers-reduced-motion: reduce` setting.
- **WHEN** the `GritonesSection` is rendered and scrolled into view.
- **THEN** all vertical movement animations SHALL be bypassed.
- **AND** elements SHALL only perform a simple staggered fade-in (`autoAlpha: 0` to `1`).
