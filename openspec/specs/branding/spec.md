# branding Specification

## Purpose
TBD - created by archiving change align-design-system-branding. Update Purpose after archive.
## Requirements

### Requirement: Single Source of Truth for Tokens
The `branding` specification SHALL be the authoritative source for all hex codes, font sizes, and spacing tokens in the project.

#### Scenario: Referencing tokens in other specs
- **GIVEN** a new or existing specification (e.g., `hero-section`).
- **WHEN** it needs to define colors or typography.
- **THEN** it SHALL NOT hardcode literal values (e.g., `#0E0E0E`).
- **AND** it SHALL instead reference the `branding` specification by name (e.g., "use `brand-background` as defined in `branding`").

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

### Requirement: UI Utilities
The project SHALL provide specific CSS utilities for the "Electric Noir" aesthetic.

#### Scenario: Purple Radial Glow
- **GIVEN** an element with the `.bg-glow-purple` class.
- **THEN** it SHALL have a radial gradient background starting with `rgba(155, 48, 255, 0.15)` at the center and fading to transparent.

#### Scenario: Editorial Image Treatment
- **GIVEN** an image with the `.img-editorial` class.
- **THEN** it SHALL be grayscale (`100%`) and slightly darkened (`90% brightness`) by default.
- **AND** it SHALL transition to full color (`0% grayscale`) and scale slightly (`1.05`) on hover.

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

