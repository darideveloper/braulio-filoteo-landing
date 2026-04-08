# hero-section Specification Delta

## MODIFIED Requirements
### Requirement: HeroEditorial Variant
The project SHALL support a `HeroEditorial` variant for text-driven asymmetric layouts.

#### Scenario: Rendering Gritones Services Grid
- **GIVEN** a `GritonesSection` organism.
- **WHEN** rendered.
- **THEN** it SHALL use a `SectionHeader` with `layout="inline"`.
- **AND** it SHALL render a collection of `ServiceCard` molecules within a 4-column grid (`grid-cols-1 md:grid-cols-4`).
- **AND** it SHALL support variable col-spans for its items to create an asymmetric layout.
