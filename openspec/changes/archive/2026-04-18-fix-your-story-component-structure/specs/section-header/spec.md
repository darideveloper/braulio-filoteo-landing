# section-header Specification Delta

## MODIFIED Requirements

### Requirement: Rich Text Support
The `SectionHeader` SHALL support rich text in the title and description via slots.

#### Scenario: Rendering with Description Slot
- **GIVEN** a `SectionHeader`.
- **WHEN** content is provided to the `description` slot.
- **THEN** it SHALL render that content instead of the `description` prop.
- **AND** it SHALL maintain the standard description styling (`headline-md text-brand-text-high max-w-3xl mt-2`).

## ADDED Requirements

### Requirement: Conditional Label Rendering
The `SectionHeader` SHALL NOT render an empty label container if no label is provided.

#### Scenario: No Label Provided
- **GIVEN** a `SectionHeader` with `label=""` or no `label` prop.
- **WHEN** rendered.
- **THEN** it SHALL NOT render the `<span>` element reserved for the label.
