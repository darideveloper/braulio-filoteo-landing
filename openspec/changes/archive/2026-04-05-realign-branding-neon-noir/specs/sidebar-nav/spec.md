## RENAMED Requirements
- FROM: `### Requirement: REQ-4 - "Bold Editorial" Styling`
- TO: `### Requirement: REQ-4 - "Neon Noir Editorial" Styling`

## MODIFIED Requirements

### Requirement: REQ-4 - "Neon Noir Editorial" Styling
The navigation elements MUST follow the "Neon Noir Editorial" high-contrast design, favoring atmospheric depth over hard borders.

#### Scenario: Styling Consistency
- **GIVEN** any navigation component is rendered.
- **THEN** labels SHALL be displayed in all-caps using `Label-MD` typography (Inter, bold, 0.1em letter spacing).
- **AND** the mobile header SHALL use `surface_variant` at `60%` opacity with a `blur(12px)` and NO border.
- **AND** the desktop sidebar SHALL be defined by a tonal shift to `surface_container_low` (#1C1B1B) relative to the background, with NO solid border.

#### Scenario: Active and Hover States
- **GIVEN** a navigation link.
- **WHEN** in an active or hover state.
- **THEN** it SHALL NOT use a divider or underline.
- **AND** it SHALL provide a subtle `surface_bright` (#393939) background highlight or a 2px `brand-primary` (Purple) side stroke.
