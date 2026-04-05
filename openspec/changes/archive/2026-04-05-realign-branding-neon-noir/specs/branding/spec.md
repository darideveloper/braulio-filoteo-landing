## MODIFIED Requirements

### Requirement: Color Palette
The project SHALL implement the "Neon Noir Editorial" high-contrast color scheme in the CSS theme, prioritizing "Midnight" foundations and "Electric Citrus" accents.

#### Scenario: Background and Surface Hierarchy
- **GIVEN** the global CSS theme.
- **THEN** the `brand-background` SHALL be set to `surface_container_lowest` (#0E0E0E).
- **AND** the `brand-surface` SHALL be set to `surface_container_low` (#1C1B1B).
- **AND** additional tiers SHALL include `surface_bright` (#393939) for elevated elements.

#### Scenario: Primary Action and Heading Roles
- **GIVEN** the primary and secondary colors.
- **THEN** `brand-primary` SHALL be set to `primary_container` (#9B30FF - Neon Purple) for high-intent interactions.
- **AND** `brand-secondary` SHALL be set to `secondary_container` (#FE6500 - Editorial Orange) for headlines and contrast emphasis.
- **AND** `brand-primary-light` SHALL be set to `primary` (#DCB8FF) for gradient starts.

#### Scenario: Text Hierarchy
- **GIVEN** the text color definitions.
- **THEN** `on_background` SHALL be set to `#E5E2E1` for primary body text.
- **AND** `on_surface_variant` SHALL be set to `#CFC2D8` for secondary descriptions.

### Requirement: Typography Strategy
The project SHALL configure a premium hierarchy using **Epilogue** for an architectural editorial voice and **Inter** for functional readability.

#### Scenario: Display and Headline Styling
- **GIVEN** a top-level headline using `Display-LG` (3.5rem).
- **THEN** it SHALL use **Epilogue** with `-0.04em` letter spacing.
- **WHEN** using `Headline-MD` (1.75rem) for section titles.
- **THEN** it SHALL use **Epilogue** and default to the "Editorial Orange" (`secondary_container`) color.

#### Scenario: Label and Body Styling
- **GIVEN** a label or overline using `Label-MD` (0.75rem).
- **THEN** it SHALL be uppercase with `0.1em` letter spacing.
- **WHEN** using primary body text.
- **THEN** it SHALL use **Inter** at `1rem` (Body-LG).

## ADDED Requirements

### Requirement: The No-Line Rule
The system SHALL prohibit the use of `1px` solid borders for sectioning or element definition.

#### Scenario: Tonal Definition
- **GIVEN** two adjacent sections.
- **THEN** visual separation SHALL be achieved through tonal shifts between surface tiers (e.g., `surface_container` vs `surface_background`) rather than borders.

### Requirement: Surface & Depth Principles
The UI SHALL utilize "Tonal Stepping" and "Ambient Glows" to create structural depth.

#### Scenario: Ambient Shadows
- **GIVEN** a floating element (e.g., a modal or card).
- **THEN** it SHALL use a massive blur (`60px`) at `10%` opacity using the `primary` (Purple) color as a neon-mimicking tint.

#### Scenario: Glassmorphism
- **GIVEN** a header or navigation overlay.
- **THEN** it SHALL use `surface_variant` at `60%` opacity with a `blur(12px)` to maintain atmospheric depth.
