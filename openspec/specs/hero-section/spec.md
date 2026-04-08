# hero-section Specification

## Purpose
TBD - created by archiving change add-hero-section. Update Purpose after archive.
## Requirements
### Requirement: Hero Section Content
The Hero section MUST display "BRAULIO FILOTEO" using the `EditorialPortrait` component for its main visual.

#### Scenario: Image usage in Hero
- **WHEN** the Hero component is rendered.
- **THEN** it SHALL use an `EditorialPortrait` with its main editorial image.
- **AND** it SHALL display the "EST. 2024" floating label and "DOCUMENTING HUMAN POTENTIAL" vertical text.

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

### Requirement: Atmospheric Glows
The Hero section SHALL implement ambient background blurs for depth.

#### Scenario: Render background blurs
- **WHEN** the Hero component is rendered.
- **THEN** it SHALL include at least two absolute-positioned glow elements (`bg-brand-primary/10` and `bg-brand-secondary/5`).
- **AND** they SHALL have a `blur-[120px]` or higher filter.

### Requirement: Editorial Statistics
The Hero section SHALL display micro-credibility signals using consistent editorial styling.

#### Scenario: Stat item structure
- **GIVEN** a statistical metric.
- **THEN** it SHALL feature a `border-l-4` accent using `brand-primary` or `brand-secondary`.
- **AND** the number SHALL use `font-brand-display` at `text-2xl` or larger.

### Requirement: HeroEditorial Variant
The project SHALL support a `HeroEditorial` variant for text-driven asymmetric layouts.

#### Scenario: HeroEditorial Layout
- **GIVEN** a `HeroEditorial` component.
- **THEN** it SHALL use an `editorial-grid` for layout.
- **AND** it SHALL support mixed-case titles.
- **AND** it SHALL support word-level gradient accents (using `text-brand-gradient`) via slots or HTML content.
- **AND** it SHALL feature a large-scale `display-2xl` title spanning 9 of 12 columns on desktop.
- **AND** it SHALL include a secondary description spanning 6 of 12 columns, starting at column 6, with a `border-l-4` accent using `brand-primary`.
- **AND** typography for the title SHALL scale up to `5rem` (md:text-[5rem]) for high impact.
