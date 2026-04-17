# newsletter-animation-fix Specification Delta

## MODIFIED Requirements

### Requirement: Scroll-Triggered Sequence
The Newsletter section SHALL initiate its reveal sequence based on scroll position using standardized CSS selectors.

#### Scenario: Entrance Trigger with Standard Selectors
- **GIVEN** the `NewsletterSection` component.
- **WHEN** the top of the section reaches `75%` of the viewport height.
- **THEN** it SHALL trigger a coordinated GSAP timeline.
- **AND** it SHALL use the following selectors for targeting:
    - `.js-newsletter-header` for the header.
    - `.js-newsletter-quote` for the side-border quote.
    - `.js-newsletter-content` for the descriptive paragraph.
    - `.js-newsletter-feature` for loop-rendered items.
    - `.js-newsletter-embed` for the Substack area.
    - `.js-newsletter-proof` for social proof elements.

### Requirement: Accessible Motion Fallback
The system SHALL respect `prefers-reduced-motion` using global FOUC prevention classes.

#### Scenario: Reduced Motion with Global Reveal Class
- **GIVEN** a system setting of `prefers-reduced-motion: reduce`.
- **WHEN** the section is revealed.
- **THEN** it SHALL transition the `.js-reveal` class from `autoAlpha: 0` to `1`.
- **AND** it SHALL ensure all animated elements are tagged with `.js-reveal`.
