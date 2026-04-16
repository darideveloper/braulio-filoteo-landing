# plans-animation Specification

## Purpose
Define the high-fidelity, scroll-triggered animation behavior for the `PlansSection`, ensuring a premium reveal that highlights the service tiers.

## ADDED Requirements

### Requirement: Plans Section Scroll-Triggered Reveal
The `PlansSection` SHALL remain hidden until it enters the viewport.

#### Scenario: Entrance Animation Timing & Transparency
- **GIVEN** a user scrolls down to the `PlansSection`.
- **WHEN** the top of the section reaches `75%` of the viewport height.
- **THEN** all targeted elements (`.js-plans-reveal`) SHALL be 100% transparent (`opacity: 0`) initially.
- **AND** the sequence SHALL use the `tl.from()` pattern to animate towards the final CSS state.

---

### Requirement: Choreographed Plans Reveal
The `PlansSection` SHALL use a sequenced reveal for its components to guide the user's eye from the value proposition to the plans.

#### Scenario: Content Entrance Sequence
- **GIVEN** the `PlansSection` content (Header, Glow, Cards, Footer).
- **WHEN** the `ScrollTrigger` activates.
- **THEN** the Header SHALL slide up (`y: 40`) with a duration of `1.2s`.
- **AND** the Plan Cards SHALL reveal with a `0.2s` stagger delay.
- **AND** the Footer SHALL fade in at the end of the sequence.

---

### Requirement: Accessible Motion for Plans
The system SHALL respect the user's preference for reduced motion for the `PlansSection`.

#### Scenario: Reduced Motion Preference
- **GIVEN** a system-level `prefers-reduced-motion: reduce` setting.
- **WHEN** the `PlansSection` is rendered and scrolled into view.
- **THEN** all vertical movement animations SHALL be bypassed.
- **AND** elements SHALL only perform a simple staggered fade-in (`autoAlpha: 0` to `1`).
