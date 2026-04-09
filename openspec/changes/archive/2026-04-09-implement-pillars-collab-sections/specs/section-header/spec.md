# Spec Delta: section-header

## MODIFIED Requirements
### Requirement: Reusable Section Header
The `SectionHeader` molecule SHALL be updated to support more baseline-oriented editorial layouts.

#### Scenario: Inline Start Layout
- **GIVEN** a `SectionHeader` with `layout="inline-start"`.
- **THEN** it SHALL render the label (`label-md`) and the title (`display-lg`) on the same horizontal axis.
- **AND** the label SHALL appear before the title.
- **AND** it SHALL support custom `labelColor` and `titleColor`.
