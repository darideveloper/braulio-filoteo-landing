# hero-section Specification

## Purpose
TBD - created by archiving change add-hero-section. Update Purpose after archive.
## Requirements
### Requirement: Hero Section Content
The Hero section MUST display "BRAULIO FILOTEO." in bold all-caps as the primary heading.

#### Scenario: Display name correctly
- **WHEN** the Hero component is rendered
- **THEN** it displays "BRAULIO FILOTEO." with a trailing period.
- **AND** it uses the `Metropolis` font.

### Requirement: Hero Section Color Palette
The Hero section MUST use `brand-background` (#000000) for its background and `brand-heading` (#9b30ff) for its main title.

#### Scenario: Verify color contrast
- **WHEN** the Hero component is rendered
- **THEN** the heading is #9b30ff on a black background (#000000).

### Requirement: Hero Section Call to Action
The Hero section MUST include a prominent "Get Started" call to action button using `brand-primary` (#ff0099).

#### Scenario: Render CTA button
- **WHEN** the Hero component is rendered
- **THEN** a button with the text "Get Started" is visible.
- **AND** it uses the #ff0099 color.

