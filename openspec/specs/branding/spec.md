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

#### Scenario: SEO Theme Color (Added)
- **GIVEN** the primary brand identity.
- **THEN** a `theme-color` SHALL be defined for browser UI integration.
- **AND** it SHALL use the OKLCH value `oklch(0.68 0.28 296)` as specified in the SEO standards to ensure consistent branding across meta tags and CSS.

### Requirement: Typography Strategy
The brand identity SHALL define a core typography system based on 'Epilogue' (Display) and 'Inter' (Body).

#### Scenario: Display Headline (Added)
- **WHEN** a display headline requires maximum impact (e.g., Noir Hero).
- **THEN** it SHALL use a `line-height` of `0.9` (`leading-[0.9]`).
- **AND** it SHALL use `tracking-tighter`.

### Requirement: UI Utilities
The project SHALL provide specific CSS utilities for the "Electric Noir" aesthetic.

#### Scenario: Purple Radial Glow
- **GIVEN** an element with the `.bg-glow-purple` class.
- **THEN** it SHALL have a radial gradient background starting with `rgba(155, 48, 255, 0.15)` at the center and fading to transparent.

#### Scenario: Editorial Image Treatment
- **GIVEN** an image with the `.img-editorial` class.
- **THEN** it SHALL be grayscale (`100%`) and slightly darkened (`90% brightness`) by default.
- **AND** it SHALL transition to full color (`0% grayscale`) and scale slightly (`1.05`) on hover.

#### Scenario: Editorial Asymmetric Grid
- **GIVEN** an element with the `.editorial-grid` class.
- **THEN** it SHALL be a 12-column grid.

#### Scenario: Neon Glow Ambient Shadow
- **GIVEN** an element with the `.neon-glow` class.
- **THEN** it SHALL use a massive blur (`60px`) at `10%` opacity using the `primary` (Purple) color.

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

