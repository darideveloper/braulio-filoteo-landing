# section-header Specification Delta

## MODIFIED Requirements
### Requirement: Header Intro Paragraph
The `SectionHeader` molecule SHALL support an optional large intro paragraph.

#### Scenario: Inline Horizontal Variant (Added)
- **GIVEN** a `SectionHeader` with `layout="inline"`.
- **WHEN** rendered.
- **THEN** the title, a decorative flex-line, and the label SHALL be arranged in a single row using `flex-row` and `items-baseline`.
- **AND** the flex-line SHALL use `h-px`, `flex-grow`, and `bg-brand-outline-variant/20`.
- **AND** it SHALL support hiding the line on small screens (`hidden md:block`).
