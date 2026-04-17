# feature-cta-animation Specification

## Purpose
Define the high-fidelity, scroll-triggered animation behavior for the `FeatureCTA` component.

## ADDED Requirements

### Requirement: Feature CTA Scroll-Triggered Reveal
The `FeatureCTA` SHALL remain hidden until it enters the viewport.

#### Scenario: Entrance Animation Timing & Transparency
- **GIVEN** a user scrolls down to a `FeatureCTA` instance.
- **WHEN** the top of the component reaches `85%` of the viewport height.
- **THEN** all targeted elements (`.js-fcta-reveal`) SHALL be 100% transparent (`opacity: 0`) initially.
- **AND** the sequence SHALL use the `tl.from()` pattern to animate towards the final CSS state.

---

### Requirement: Choreographed CTA Reveal
The `FeatureCTA` SHALL use a sequenced reveal for its components to highlight the call to action.

#### Scenario: Content Entrance Sequence
- **GIVEN** the `FeatureCTA` content (Watermark, Label, Headline, Button).
- **WHEN** the `ScrollTrigger` activates.
- **THEN** the Watermark SHALL fade in and scale up over `1.5s`.
- **AND** the Label SHALL slide up (`y: 20`).
- **AND** the Headline SHALL slide up (`y: 40`) with a `power4.out` ease.
- **AND** the Button SHALL follow at the end of the sequence.

---

### Requirement: Accessible Motion for CTA
The system SHALL respect the user's preference for reduced motion for the `FeatureCTA`.

#### Scenario: Reduced Motion Preference
- **GIVEN** a system-level `prefers-reduced-motion: reduce` setting.
- **WHEN** the `FeatureCTA` is rendered and scrolled into view.
- **THEN** all vertical movement and scaling animations SHALL be bypassed.
- **AND** elements SHALL only perform a simple staggered fade-in (`autoAlpha: 0` to `1`).
