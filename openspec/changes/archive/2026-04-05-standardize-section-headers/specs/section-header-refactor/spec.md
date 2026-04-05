# section-header-refactor Specification

## MODIFIED Requirements

### Requirement: Reusable Section Header
The `SectionHeader` SHALL support multiple heading levels and rich text content.

#### Scenario: Rendering as H1
- **GIVEN** a `SectionHeader` with `level=1`.
- **WHEN** rendered.
- **THEN** it SHALL use an `<h1>` tag for the title to support page-level primary headings.

#### Scenario: Rendering with Rich Text Title
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

### Requirement: Header Sizing Variants
The `SectionHeader` SHALL support different typography scales.

#### Scenario: Editorial Scale
- **GIVEN** a `SectionHeader` with `size="editorial"`.
- **WHEN** rendered.
- **THEN** it SHALL use the `text-5xl md:text-7xl lg:text-8xl` font sizes.
- **AND** it SHALL use `tracking-[-0.06em]` and `leading-tight`.
- **AND** it SHALL retain `font-black` and `font-brand-display`.
