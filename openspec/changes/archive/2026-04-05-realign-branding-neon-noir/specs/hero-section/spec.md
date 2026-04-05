## MODIFIED Requirements

### Requirement: Hero Section Color Palette
The Hero section MUST use `brand-background` (#0E0E0E) for its background and `brand-secondary` (#FE6500 - Editorial Orange) for its primary heading.

#### Scenario: Verify color contrast
- **WHEN** the Hero component is rendered.
- **THEN** the main title SHALL be #FE6500 (Orange) on a #0E0E0E background (Midnight).

### Requirement: Hero Section Content
The Hero section MUST display "BRAULIO FILOTEO." in bold all-caps as the primary heading, utilizing premium architectural typography.

#### Scenario: Display name correctly
- **WHEN** the Hero component is rendered.
- **THEN** it displays "BRAULIO FILOTEO." with a trailing period.
- **AND** it MUST use **Epilogue** with tight `-0.04em` letter spacing.

### Requirement: Hero Section Call to Action
The Hero section MUST include a prominent call to action button utilizing the signature brand gradient and sharp architecture.

#### Scenario: Render CTA button
- **WHEN** the Hero component is rendered.
- **THEN** the button SHALL use a 135° linear gradient from `brand-primary-light` (#DCB8FF) to `brand-primary` (#9B30FF).
- **AND** it SHALL have sharp `0.25rem` (sm) corners.
- **AND** typography SHALL use `Label-MD` (uppercase with 0.1em letter spacing).
