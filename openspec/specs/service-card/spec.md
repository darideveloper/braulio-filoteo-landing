# service-card Specification

## Purpose
The `ServiceCard` molecule provides a flexible bento-grid element for displaying core offerings. It supports variable grid spans, secondary categorizations, and interactive call-to-action triggers.

## Requirements
### Requirement: Bento Grid Flexibility
The `ServiceCard` SHALL support variable column spans within a standard 4-column grid layout.

#### Scenario: Standard Service Card
- **GIVEN** a `ServiceCard` with `span=1`.
- **THEN** it SHALL occupy a single column in its parent grid.

#### Scenario: Wide Service Card
- **GIVEN** a `ServiceCard` with `span=2`.
- **THEN** it SHALL use the `md:col-span-2` utility.

#### Scenario: Full-Width Service Card
- **GIVEN** a `ServiceCard` with `span=4`.
- **THEN** it SHALL use the `md:col-span-4` utility and support a horizontal layout on desktop.

### Requirement: Service Card Content Structure
The `ServiceCard` SHALL include a title, description, icon, and a decorative footer label.

#### Scenario: Service card visual elements
- **GIVEN** a `ServiceCard` instance.
- **THEN** it SHALL render a `MaterialIcon` in `brand-secondary` as the primary header icon.
- **AND** it SHALL render a `footerLabel` (e.g., "Authority", "Narrative") in the bottom-right or bottom-left corner.
- **AND** it SHALL support a slot for a `BrandButton` in the full-width variant.

### Requirement: Service Card Visual Style
The `ServiceCard` SHALL use a subtle surface treatment to create a "dimmed" editorial feel.

#### Scenario: Noir card aesthetics
- **GIVEN** a `ServiceCard` instance.
- **THEN** it SHALL use `bg-brand-surface-low` as the default background.
- **AND** it SHALL transition to `bg-brand-surface-container` on hover.
- **AND** it SHALL use `font-light` for the description text.
