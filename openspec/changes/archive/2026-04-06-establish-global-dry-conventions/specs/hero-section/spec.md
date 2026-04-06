## MODIFIED Requirements

### Requirement: Hero Section Color Palette
The Hero section MUST use `brand-background` for its background and `brand-secondary` for its primary heading.

#### Scenario: Verify color contrast
- **WHEN** the Hero component is rendered.
- **THEN** the main title SHALL use the `brand-secondary` (Editorial Orange) token.
- **AND** the background SHALL use the `brand-background` (Midnight) token.

### Requirement: Hero Section Call to Action
The Hero section MUST include a prominent call to action button utilizing the signature brand gradient and sharp architecture.

#### Scenario: Render CTA button
- **WHEN** the Hero component is rendered.
- **THEN** the button SHALL use a 135° linear gradient from `brand-primary-light` to `brand-primary`.
- **AND** it SHALL have sharp `0.25rem` (sm) corners.
- **AND** typography SHALL use `Label-MD` (uppercase with 0.1em letter spacing) as defined in the global typography strategy.
