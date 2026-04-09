# Spec Delta: collaboration-list

## ADDED Requirements
### Requirement: CollabItem Molecule
The project SHALL provide a `CollabItem` molecule for interactive CTA lists.

#### Scenario: Interactive List Item Rendering
- **GIVEN** a `CollabItem` with `title="Conferencias"` and `icon="mic"`.
- **THEN** it SHALL render a horizontal list item with a bottom border (`border-b`).
- **AND** the icon SHALL be invisible by default (`opacity-0`).
- **AND** it SHALL fade-in the icon and increase horizontal padding on hover.
- **AND** it SHALL feature an arrow icon on the right.

### Requirement: CollabSection Organism
The project SHALL provide a `CollabSection` organism for presenting partnerships.

#### Scenario: Asymmetric Editorial Grid Rendering
- **GIVEN** a `CollabSection`.
- **THEN** it SHALL utilize the `editorial-grid` utility (12 columns).
- **AND** it SHALL allocate 6 columns to the header and description.
- **AND** it SHALL allocate 5 columns to a vertical list of `CollabItem` molecules, with a 1-column gap buffer.
