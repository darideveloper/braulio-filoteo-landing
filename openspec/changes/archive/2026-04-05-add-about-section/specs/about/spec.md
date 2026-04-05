# about Specification

## Purpose
The About Section communicates the core mission and brand values of Braulio Filoteo, utilizing high-contrast editorial layouts.

## ADDED Requirements

### Requirement: About Layout
The About section SHALL use an asymmetrical 2-column grid on large screens.

#### Scenario: Desktop Grid
- **GIVEN** a viewport width of `1024px` or greater.
- **WHEN** the `AboutSection` is rendered.
- **THEN** it SHALL display "La Misión" and the mission cards in the left column.
- **AND** it SHALL display the signature quote and icon grid in the right column.

---

### Requirement: Mission Cards
The system SHALL provide numbered cards to display core mission points.

#### Scenario: Card Styling
- **GIVEN** an `AboutCard`.
- **THEN** it SHALL feature a large, low-opacity number (e.g., "01").
- **AND** it SHALL have an italicized headline in "Editorial Orange".
- **AND** it SHALL use a `white/5` background with a subtle border that highlights on hover.

---

### Requirement: Signature Quote
The About section SHALL include a prominent quote block with specific brand accents.

#### Scenario: Quote Structure
- **GIVEN** a `QuoteBlock`.
- **THEN** it SHALL feature a large background icon (`format_quote`) at low opacity.
- **AND** it SHALL include a horizontal brand line accent with "Manifiesto GRITones" in uppercase.
- **AND** it SHALL use a light font weight (`300`) for the quote text.

---

### Requirement: Icon Grid
The About section SHALL include a grid of brand-themed icons and labels.

#### Scenario: Icon Grid Rendering
- **GIVEN** the icon grid within the About section.
- **THEN** it SHALL display categories like "GRIT", "Storytelling", and "Personal Brand".
- **AND** each item SHALL feature a Material Symbol icon in the "brand-primary" or "brand-secondary" color.
