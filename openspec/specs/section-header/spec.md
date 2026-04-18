# section-header Specification

## Purpose
The `SectionHeader` molecule provides a standardized way to render section titles, overlines (labels), and introductory descriptions, ensuring visual consistency across the project while allowing for necessary flexibility in heading levels and alignment.
## Requirements
### Requirement: Reusable Section Header
The `SectionHeader` molecule SHALL be updated to support more baseline-oriented editorial layouts.

#### Scenario: Inline Start Layout
- **GIVEN** a `SectionHeader` with `layout="inline-start"`.
- **THEN** it SHALL render the label (`label-md`) and the title (`display-lg`) on the same horizontal axis.
- **AND** the label SHALL appear before the title.
- **AND** it SHALL support custom `labelColor` and `titleColor`.

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
The `SectionHeader` SHALL support rich text in the title and description via slots.

#### Scenario: Rendering with Description Slot
- **GIVEN** a `SectionHeader`.
- **WHEN** content is provided to the `description` slot.
- **THEN** it SHALL render that content instead of the `description` prop.
- **AND** it SHALL maintain the standard description styling (`headline-md text-brand-text-high max-w-3xl mt-2`).

### Requirement: Header Alignment
The `SectionHeader` SHALL support different horizontal alignments.

#### Scenario: Centered Alignment
- **GIVEN** a `SectionHeader` with `align="center"`.
- **WHEN** rendered.
- **THEN** the label, title, and description SHALL be horizontally centered.
- **AND** the container SHALL use `items-center` and `text-center` classes.

### Requirement: Header Intro Paragraph
The `SectionHeader` molecule SHALL support an optional large intro paragraph.

#### Scenario: Inline Horizontal Variant (Added)
- **GIVEN** a `SectionHeader` with `layout="inline"`.
- **WHEN** rendered.
- **THEN** the title, a decorative flex-line, and the label SHALL be arranged in a single row using `flex-row` and `items-baseline`.
- **AND** the flex-line SHALL use `h-px`, `flex-grow`, and `bg-brand-outline-variant/20`.
- **AND** it SHALL support hiding the line on small screens (`hidden md:block`).

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
- **THEN** it SHALL feature a large scale icon (using `text-5xl!`) as the primary visual element.
- **AND** it SHALL feature an interactive progress-line that expands on hover.

### Requirement: Conditional Label Rendering
The `SectionHeader` SHALL NOT render an empty label container if no label is provided.

#### Scenario: No Label Provided
- **GIVEN** a `SectionHeader` with `label=""` or no `label` prop.
- **WHEN** rendered.
- **THEN** it SHALL NOT render the `<span>` element reserved for the label.

