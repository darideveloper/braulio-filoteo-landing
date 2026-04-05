# podcast-cta Specification

## Purpose
TBD - created by archiving change add-podcast-section. Update Purpose after archive.
## Requirements
### Requirement: Podcast Conversion Card
The system SHALL provide a `PodcastCTA` molecule to drive engagement for launching new podcasts.

#### Scenario: CTA Structure
- **GIVEN** a `PodcastCTA`.
- **THEN** it SHALL use a `bg-brand-surface` background with a subtle purple border (`border-brand-primary/20`).
- **AND** it SHALL feature a `secondary` variant `BrandButton` with an `arrow_forward` icon.
- **AND** the layout SHALL transition from vertical (mobile) to horizontal (desktop) with `gap-6`.
- **AND** the title SHALL be bold and use the `Headline-MD` utility.

