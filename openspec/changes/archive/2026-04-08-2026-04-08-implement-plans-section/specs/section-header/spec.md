# Delta: Section Header

## MODIFIED Requirements

### Requirement: Header Intro Paragraph
The `SectionHeader` SHALL support an optional large intro paragraph.

#### Scenario: Rendering with Intro
- **GIVEN** a `SectionHeader`.
- **WHEN** a `description` prop or slot is provided.
- **THEN** it SHALL render the text using the `Headline-MD` utility (e.g., text-2xl or 3xl).
- **AND** it SHALL appear below the title with a maximum width to ensure readability.

#### Scenario: Bordered Description
- **GIVEN** a `SectionHeader` with `withBorder=true`.
- **WHEN** rendered.
- **THEN** the description SHALL feature a `border-l-4 border-brand-primary pl-6`.
