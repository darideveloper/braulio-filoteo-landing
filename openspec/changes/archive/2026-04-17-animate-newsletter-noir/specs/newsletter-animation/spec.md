# newsletter-animation Specification Delta

## ADDED Requirements

### Requirement: Scroll-Triggered Sequence
The Newsletter section SHALL initiate its reveal sequence based on scroll position.

#### Scenario: Entrance Trigger
- **GIVEN** the `NewsletterSection` component.
- **WHEN** the top of the section reaches `75%` of the viewport height.
- **THEN** it SHALL trigger a coordinated GSAP timeline.
- **AND** it SHALL have an initial delay of `0.3s` to allow for scroll stabilization.

### Requirement: Atmospheric Branding Reveal
The decorative background elements SHALL provide the foundation for the reveal.

#### Scenario: Glow Elements Fade
- **GIVEN** the `.js-newsletter-glow` elements.
- **WHEN** the timeline starts.
- **THEN** they SHALL fade from `opacity: 0` to their target opacity over `2.0s`.
- **AND** they SHALL use `power2.inOut` easing for a "breathing" effect.

### Requirement: Staggered Content Flourish
Content SHALL reveal using the "Zipper" pattern to guide the eye.

#### Scenario: Header and Quote Entrance
- **GIVEN** the header and the side-border quote.
- **THEN** the header SHALL reveal from `y: 40` with `power4.out` easing.
- **AND** the quote SHALL reveal from `x: -20` with `power3.out` easing, starting `0.8s` after the header.

#### Scenario: Substack Embed Focus
- **GIVEN** the Substack iframe container.
- **THEN** it SHALL reveal with a subtle scale-up from `0.98` to `1.0`.
- **AND** it SHALL use `expo.out` easing to create a smooth, high-end "landing" effect.

### Requirement: Accessible Motion Fallback
The system SHALL respect `prefers-reduced-motion`.

#### Scenario: Reduced Motion Branch
- **GIVEN** a system setting of `prefers-reduced-motion: reduce`.
- **WHEN** the section is revealed.
- **THEN** it SHALL bypass all `x`, `y`, and `scale` transforms.
- **AND** it SHALL perform a simple staggered fade-in (`autoAlpha: 0` to `1`).
