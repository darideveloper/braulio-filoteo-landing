# core-architecture Specification

## Purpose
Establishes the foundational implementation rules for all components to ensure the project remains DRY, modular, and maintainable.

## Requirements

### Requirement: Implementation DRYness (Loop Rendering)
All components containing repetitive UI elements (e.g., social links, stats, cards, or menu items) SHALL utilize data-driven loops instead of hardcoded markup.

#### Scenario: Rendering lists from arrays
- **GIVEN** a component with multiple similar items.
- **THEN** the items SHALL be defined as a TypeScript array or object constant.
- **AND** the component SHALL use `.map()` (or equivalent Astro logic) to render the items.
- **AND** the data structure SHALL be separated from the visual template logic.

### Requirement: Atomic Composition Mandate
Developers SHALL NOT create new HTML for elements (e.g., buttons, icons, or headers) if an equivalent component already exists in `src/components/atoms/` or `molecules/`.

#### Scenario: Composing organisms from atoms
- **GIVEN** a new section requiring a button.
- **THEN** the developer SHALL import and use the existing `BrandButton.astro` component.
- **AND** it SHALL NOT define its own button styling or markup in the section component.

### Requirement: Standardized Section Interface
Every landing page section (organism) SHALL implement a standardized prop interface to maintain consistency in headings, backgrounds, and layout rules.

#### Scenario: Prop inheritance in Sections
- **GIVEN** a section component.
- **THEN** it SHALL accept `id`, `title`, and `variant` (tier surface) as standard props.
- **AND** the title SHALL be rendered via the existing `SectionHeader.astro` molecule.

### Requirement: Media & Filter Standardization
Any component rendering images SHALL apply the project's standard "Editorial Treatment" to ensure a consistent visual aesthetic.

#### Scenario: Image filter application
- **GIVEN** an image component.
- **THEN** it SHALL use a shared utility class or component that applies the standard grayscale/hover-scale behavior.
- **AND** individual components SHALL NOT hardcode their own filters for brand-specific effects.
