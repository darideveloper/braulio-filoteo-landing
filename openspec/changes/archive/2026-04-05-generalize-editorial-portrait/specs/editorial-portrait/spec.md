# editorial-portrait Specification

## Purpose
The Editorial Portrait provides a standardized, high-impact image presentation that captures the brand's aesthetic through layered visual effects and dynamic hover interactions.

## ADDED Requirements
### Requirement: Editorial Layered Presentation
The component SHALL support multiple decorative layers, including an offset frame, a floating label, and vertical text.

#### Scenario: Visual element toggle
- **GIVEN** an `EditorialPortrait` instance.
- **WHEN** props are provided for `floatingLabel`, `verticalText`, and `showFrame`.
- **THEN** all three elements SHALL be rendered in the specified accent color (primary/purple or secondary/orange).

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
