# hero-section Specification Delta

## MODIFIED Requirements

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
