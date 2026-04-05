# style-guide-update Spec Delta

## MODIFIED Requirements

### Requirement: Design System Route
The project SHALL provide a dedicated route to visualize and test all design tokens, utility variants, **and all components in the library (Atoms, Molecules, and Organisms)**.

#### Scenario: Accessing the Style Guide
- **GIVEN** a running application.
- **WHEN** navigating to `/design-system`.
- **THEN** a page SHALL be displayed containing sections for colors, typography, UI utilities, **and all components categorized by their Atomic Design level**.

### Requirement: Design Token Visualization
The Design System page SHALL render all "Neon Noir" design tokens for visual confirmation and contrast testing.

#### Scenario: Color Swatches
- **GIVEN** the Design System page.
- **THEN** it SHALL display color swatches for all brand colors, including `surface_container_lowest` (#0E0E0E), `surface_container_low` (#1C1B1B), `primary_container` (#9B30FF), `secondary_container` (#FE6500), and `primary` (#DCB8FF).
- **AND** it SHALL show text contrast for "Editorial Orange" (#FE6500) against the "Midnight" background.

#### Scenario: Typography Scales
- **GIVEN** the Design System page.
- **THEN** it SHALL demonstrate the `Display-LG` (3.5rem, -0.04em) and `Headline-MD` (1.75rem) scales using **Epilogue**.
- **AND** it SHALL show the technical `Label-MD` (0.75rem, uppercase, 0.1em tracking) using **Inter**.

## ADDED Requirements

### Requirement: Component Showcase
The Design System page SHALL showcase every component in `src/components/` with its available variants and states.

#### Scenario: Atomic Components
- **GIVEN** the Atoms section on the Design System page.
- **THEN** it SHALL render `BrandButton` with all variants (`primary`, `secondary`, `outline`, `ghost`), `disabled` state, and icon usage.
- **AND** it SHALL render `Badge`, `StatItem`, `AboutIcon`, `MaterialIcon`, and `SpotifyEmbed`.

#### Scenario: Molecular Components
- **GIVEN** the Molecules section on the Design System page.
- **THEN** it SHALL render `EditorialPortrait` with all variants (`accent`, `aspect`, `showFrame`).
- **AND** it SHALL render `SectionHeader` showcasing `align="left"` vs `align="center"`, `level={1}` vs `level={2}`, and the `title` slot.
- **AND** it SHALL render `EditorialHeadline`, `PodcastCTA`, `SideBorderQuote`, `QuoteBlock`, `AboutCard`, and `Navigation`.

#### Scenario: Organismic Components
- **GIVEN** the Organisms section on the Design System page.
- **THEN** it SHALL render `Header`, `Hero`, `AboutSection`, `CtaSection`, `NewsletterSection`, and `PodcastSection` in constrained containers.
