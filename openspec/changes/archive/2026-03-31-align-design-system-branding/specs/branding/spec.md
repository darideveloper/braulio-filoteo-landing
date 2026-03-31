# Capability: Branding

Foundation for the "Electric Noir" visual identity, including colors, typography, and global utility styles.

## ADDED Requirements

### Requirement: Color Palette
The project SHALL implement the "Electric Noir" high-contrast color scheme in the CSS theme.

#### Scenario: Background and Surfaces
- **GIVEN** the global CSS theme.
- **THEN** the `brand-background` SHALL be set to `#0E0E0E`.
- **AND** the `brand-surface` SHALL be set to `#1C1B1B`.

#### Scenario: Brand and Accent Colors
- **GIVEN** the primary and secondary colors.
- **THEN** `brand-primary` SHALL be set to `#FE6500` (Electric Orange).
- **AND** `brand-accent` SHALL be set to `#9B30FF` (Neon Purple).

#### Scenario: Text Hierarchy
- **GIVEN** the text color definitions.
- **THEN** `brand-text-high` SHALL be set to `#E5E2E1`.
- **AND** `brand-text-muted` SHALL be set to `#CFC2D8`.

---

### Requirement: Typography Strategy
The project SHALL configure foundational fonts and heading styles for a "Big & Bold" editorial aesthetic.

#### Scenario: Display and Body Fonts
- **GIVEN** the global typography theme.
- **THEN** the display font SHALL be **Epilogue** (specifically weight 900 for headlines).
- **AND** the body/UI font SHALL be **Inter**.

#### Scenario: Headline XL Styling
- **GIVEN** a top-level headline using the `.headline-xl` class.
- **THEN** it SHALL use **Epilogue 900**.
- **AND** it SHALL have tight letter-spacing (`-0.06em`).
- **AND** it SHALL have a tight line-height (`0.9`).
- **AND** it SHALL be uppercase.

---

### Requirement: UI Utilities
The project SHALL provide specific CSS utilities for the "Electric Noir" aesthetic.

#### Scenario: Purple Radial Glow
- **GIVEN** an element with the `.bg-glow-purple` class.
- **THEN** it SHALL have a radial gradient background starting with `rgba(155, 48, 255, 0.15)` at the center and fading to transparent.

#### Scenario: Editorial Image Treatment
- **GIVEN** an image with the `.img-editorial` class.
- **THEN** it SHALL be grayscale (`100%`) and slightly darkened (`90% brightness`) by default.
- **AND** it SHALL transition to full color (`0% grayscale`) and scale slightly (`1.05`) on hover.
