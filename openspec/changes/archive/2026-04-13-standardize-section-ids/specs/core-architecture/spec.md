# core-architecture Specification

## MODIFIED Requirements

### Requirement: Standardized Section Interface
All section organism components SHALL support an `id` prop to handle their own identity within a page.

#### Scenario: Supporting `id` prop in organisms
- **GIVEN** a section organism component (e.g., `Hero`, `PodcastSection`).
- **THEN** it SHALL define an optional `id` prop in its `Props` interface.
- **AND** it SHALL apply this `id` to its root element.
- **AND** if it uses `SectionWrapper`, it SHALL pass the `id` to it.

## ADDED Requirements

### Requirement: Clean Page Markup
Page components SHALL NOT wrap section components in `<div>` elements only for the purpose of adding an `id`.

#### Scenario: Clean Home Page Markup
- **GIVEN** a page composed of multiple sections (e.g., `index.astro`).
- **THEN** it SHALL pass the section's unique identifier as a prop instead of using a wrapper `<div>`.
- **AND** it SHALL ensure that navigation IDs match the existing anchor links (e.g., `#home`, `#about`).
