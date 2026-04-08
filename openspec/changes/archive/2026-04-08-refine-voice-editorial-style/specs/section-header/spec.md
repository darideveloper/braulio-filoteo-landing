# section-header Specification Delta

## ADDED Requirements

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
