# editorial-portrait Specification Delta

## MODIFIED Requirements
### Requirement: Editorial Layered Presentation
The component SHALL support multiple decorative layers, including an offset frame, a floating label, and vertical text.

#### Scenario: Frame Position (Added)
- **GIVEN** an `EditorialPortrait` instance.
- **WHEN** the `framePosition` prop is set to `"top-left"`.
- **THEN** the offset frame SHALL be positioned using `-top-4 -left-4`.

#### Scenario: Stat Card Slot (Added)
- **GIVEN** an `EditorialPortrait` instance.
- **WHEN** content is provided to the `statCard` slot.
- **THEN** it SHALL render that content in a container at the bottom-right corner.
- **AND** the container SHALL use `bg-brand-background` and `shadow-2xl` for contrast.
