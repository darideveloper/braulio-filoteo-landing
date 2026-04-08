# plans-section Specification

## Purpose
TBD - created by archiving change 2026-04-08-implement-plans-section. Update Purpose after archive.
## Requirements
### Requirement: Plans Card Molecule
The system SHALL provide a `PlansCard` molecule to display detailed service offerings.

#### Scenario: Entry Level Card
- **GIVEN** a `PlansCard` with `variant="entry"`.
- **THEN** it SHALL use `brand-secondary` accents (e.g., orange icons and badges).
- **AND** it SHALL feature a solid border on a dark surface background.

#### Scenario: Premium Card
- **GIVEN** a `PlansCard` with `variant="premium"`.
- **THEN** it SHALL use `brand-primary` accents (e.g., purple icons and badges).
- **AND** it SHALL feature a glass-morphic background with a primary gradient overlay and ambient purple glow.
- **AND** it SHALL use horizontal line-markers for feature lists instead of icons.

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

