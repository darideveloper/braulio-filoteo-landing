# section-header Specification

## Purpose
TBD - created by archiving change add-podcast-section. Update Purpose after archive.
## Requirements
### Requirement: Reusable Section Header
The system SHALL provide a `SectionHeader` molecule to standardize section titles and labels.

#### Scenario: Rendering Header with Custom Colors
- **GIVEN** a `SectionHeader` with `label="EDITORIAL SERIES"` and `title="GRITONES PODCAST"`.
- **WHEN** the `labelColor` is set to `text-brand-primary-light`.
- **AND** the `titleColor` is set to `text-brand-secondary`.
- **THEN** it SHALL render the label in uppercase using the `Label-MD` utility.
- **AND** it SHALL render the title using the `Display-LG` utility.
- **AND** the label SHALL appear above the title with consistent spacing.

### Requirement: Header Intro Paragraph
The `SectionHeader` SHALL support an optional large intro paragraph.

#### Scenario: Rendering with Intro
- **GIVEN** a `SectionHeader`.
- **WHEN** a `description` prop or slot is provided.
- **THEN** it SHALL render the text using the `Headline-MD` utility (e.g., text-2xl or 3xl).
- **AND** it SHALL appear below the title with a maximum width to ensure readability.

