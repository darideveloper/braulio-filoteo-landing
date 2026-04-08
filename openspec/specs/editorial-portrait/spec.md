# editorial-portrait Specification

## Purpose
TBD - created by archiving change generalize-editorial-portrait. Update Purpose after archive.
## Requirements
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

### Requirement: Editorial Image Behavior
Images within the `EditorialPortrait` SHALL adhere to specific visual treatment.

#### Scenario: Image grayscale transition
- **GIVEN** an `EditorialPortrait` instance.
- **THEN** its image SHALL be 100% grayscale and 90% brightness by default.
- **AND** it SHALL transition to full color and scale 1.05x on hover.
- **AND** it SHALL have an absolute-positioned decorative frame offset by `-1.5rem` (`-top-6 -right-6`) when `showFrame` is true.

### Requirement: Editorial Aspect Ratios
The `EditorialPortrait` SHALL support configurable aspect ratios.

#### Scenario: Aspect ratio configuration
- **GIVEN** an `EditorialPortrait` instance with a specific `aspect` prop.
- **THEN** the image container SHALL respect that ratio (e.g., `aspect-[4/5]`, `aspect-square`).

