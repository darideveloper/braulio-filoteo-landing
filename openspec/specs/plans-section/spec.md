# plans-section Specification

## Purpose
TBD - created by archiving change 2026-04-08-implement-plans-section. Update Purpose after archive.
## Requirements
### Requirement: Plans Card Molecule
The `PlansCard` molecule SHALL support external booking links for premium service variants.

#### Scenario: Premium Card CTA
- **GIVEN** a `PlansCard` with `variant="premium"`.
- **THEN** the CTA button SHALL point to a Calendly booking URL.
- **AND** it SHALL open in a new tab (`target="_blank"`).
- **AND** it SHALL include `rel="noopener noreferrer"`.

### Requirement: Plans Section Organism
The system SHALL provide a `PlansSection` organism to orchestrate the value proposition grid.

#### Scenario: Section Identity Content
- **GIVEN** a `PlansSection` organism.
- **THEN** it SHALL display a `SectionHeader` with the label "ECOSISTEMA".
- **AND** it SHALL display the title "Consolida tu Marca Personal".

