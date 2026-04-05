# hero-section Specification (Updated)

## Purpose
The Hero section provides a high-impact, editorial introduction to the brand, signaling professional credibility and a "Neon Noir" aesthetic through sophisticated grid layouts and atmospheric effects.

## MODIFIED Requirements
### Requirement: Hero Section Content
The Hero section MUST display "BRAULIO FILOTEO" as the primary heading using a 12-column grid layout.

#### Scenario: Verify grid split
- **GIVEN** the Hero component on a large screen.
- **THEN** it SHALL split the content into two columns (7/12 for text, 5/12 for imagery).
- **AND** it SHALL display "BRAULIO FILOTEO" using the `display-lg` (Epilogue 900) utility.

## ADDED Requirements
### Requirement: Hero Portrait Effects
The Hero section MUST feature a signature editorial portrait with layered visual effects.

#### Scenario: Image grayscale transition
- **GIVEN** the Hero portrait.
- **THEN** it SHALL be 100% grayscale and 90% brightness by default.
- **AND** it SHALL transition to full color and scale 1.05x on hover.
- **AND** it SHALL have an absolute-positioned decorative frame offset by `-1.5rem` (`-top-6 -right-6`).

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
