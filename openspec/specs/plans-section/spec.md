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

#### Scenario: Bento Grid Layout
- **GIVEN** a `PlansSection` organism.
- **THEN** it SHALL arrange two `PlansCard` components in a responsive 12-column bento grid.
- **AND** on desktop, the first card SHALL span 5 columns and the second SHALL span 7 columns.

#### Scenario: Section Outro
- **GIVEN** the `PlansSection`.
- **THEN** it SHALL feature a footer area with a high-impact call-to-action for exploratory calls.
- **AND** the footer SHALL be separated by an editorial border and include a link with a transitioning arrow icon.

