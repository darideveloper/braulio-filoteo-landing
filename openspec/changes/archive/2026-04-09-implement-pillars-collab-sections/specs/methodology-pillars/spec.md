# Spec Delta: methodology-pillars

## ADDED Requirements
### Requirement: PillarCard Molecule
The project SHALL provide a `PillarCard` molecule specifically for methodology-oriented grid displays.

#### Scenario: Square Interactive Layout
- **GIVEN** a `PillarCard` with `number="01"` and `icon="lightbulb"`.
- **THEN** it SHALL maintain a strict `aspect-square` ratio.
- **AND** it SHALL render the icon in the top-left using `MaterialIcon`.
- **AND** it SHALL render the number in the top-right using a light weight and `text-4xl`.
- **AND** it SHALL transition background color on hover (e.g., from `brand-background` to `brand-surface`).

### Requirement: PillarsSection Organism
The project SHALL provide a `PillarsSection` organism to display core methodology pillars.

#### Scenario: Methodology Grid Rendering
- **GIVEN** a list of 4 methodology items.
- **THEN** it SHALL render them in a grid that adapts from 1 column to 4 based on container width.
- **AND** it SHALL use the `SectionHeader` with an `inline-start` layout variant.
