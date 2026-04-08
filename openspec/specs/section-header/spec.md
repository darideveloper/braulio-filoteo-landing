# section-header Specification

## Purpose
The `SectionHeader` molecule provides a standardized way to render section titles, overlines (labels), and introductory descriptions, ensuring visual consistency across the project while allowing for necessary flexibility in heading levels and alignment.

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

### Requirement: Flexible Heading Levels
The `SectionHeader` SHALL support different heading levels for semantic correctness.

#### Scenario: Rendering as H1
- **GIVEN** a `SectionHeader` with `level=1`.
- **WHEN** rendered.
- **THEN** it SHALL use an `<h1>` tag for the title.

#### Scenario: Rendering as H2 (Default)
- **GIVEN** a `SectionHeader` without a `level` prop.
- **WHEN** rendered.
- **THEN** it SHALL use an `<h2>` tag for the title.

### Requirement: Rich Text Support
The `SectionHeader` SHALL support rich text in the title via slots.

#### Scenario: Rendering with Title Slot
- **GIVEN** a `SectionHeader`.
- **WHEN** content is provided to the `title` slot.
- **THEN** it SHALL render that content inside the heading tag instead of the `title` prop.

### Requirement: Header Alignment
The `SectionHeader` SHALL support different horizontal alignments.

#### Scenario: Centered Alignment
- **GIVEN** a `SectionHeader` with `align="center"`.
- **WHEN** rendered.
- **THEN** the label, title, and description SHALL be horizontally centered.
- **AND** the container SHALL use `items-center` and `text-center` classes.

### Requirement: Header Intro Paragraph
The `SectionHeader` SHALL support an optional large intro paragraph.

#### Scenario: Rendering with Intro
- **GIVEN** a `SectionHeader`.
- **WHEN** a `description` prop or slot is provided.
- **THEN** it SHALL render the text using the `Headline-MD` utility (e.g., text-2xl or 3xl).
- **AND** it SHALL appear below the title with a maximum width to ensure readability.

### Requirement: Editorial Scaling
The `SectionHeader` SHALL support high-impact editorial scaling for display titles.

#### Scenario: Rendering with Editorial Size
- **GIVEN** a `SectionHeader` with `size="editorial"`.
- **WHEN** rendered.
- **THEN** it SHALL use a massive typography scale (e.g., `text-5xl md:text-7xl lg:text-8xl`).
- **AND** it SHALL use `font-black` and tight letter-spacing (`tracking-[-0.06em]`).

### Requirement: FeatureCTA Molecule
The project SHALL provide a `FeatureCTA` molecule for high-impact call-to-action sections with atmospheric depth.

#### Scenario: FeatureCTA Refined Layout
- **GIVEN** a `FeatureCTA` component.
- **THEN** it SHALL support a large background watermark text (using the `.text-watermark` utility).
- **AND** the icon wrapper SHALL use square-rounded corners (`rounded-[0.25rem]`) instead of a full circle.
- **AND** it SHALL NOT force uppercase on the main title.

### Requirement: MatrixCard Molecule
The project SHALL provide a `MatrixCard` molecule for transformation-oriented grid displays.

#### Scenario: MatrixCard Large Visuals
- **GIVEN** a `MatrixCard` component.
- **THEN** it SHALL feature a large scale icon (at least `text-8xl`) as the primary visual element.
- **AND** it SHALL feature an interactive progress-line that expands on hover.
