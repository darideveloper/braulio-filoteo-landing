## MODIFIED Requirements

### Requirement: Design Token Visualization
The Design System page SHALL render all "Neon Noir" design tokens for visual confirmation and contrast testing.

#### Scenario: Color Swatches
- **GIVEN** the Design System page.
- **THEN** it SHALL display color swatches for all brand colors defined in `specs/branding/spec.md`.
- **AND** it SHALL show text contrast for "Editorial Orange" against the "Midnight" background using the exact tokens from the branding spec.

#### Scenario: Typography Scales
- **GIVEN** the Design System page.
- **THEN** it SHALL demonstrate the typography scales (Display, Headline, Label) using the fonts and spacing defined in `specs/branding/spec.md`.
- **AND** it SHALL show the technical `Label-MD` scale using **Inter** as defined in the global strategy.
