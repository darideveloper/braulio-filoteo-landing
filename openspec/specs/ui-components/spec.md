# ui-components Specification

## Purpose
TBD - created by archiving change standardize-container-queries. Update Purpose after archive.
## Requirements
### Requirement: [UI-001] Container-Based Responsiveness
- All "Molecule" and "Organism" level components MUST use container queries (`@md:`, `@lg:`, etc.) for internal layout changes instead of viewport-based media queries (`md:`, `lg:`, etc.).
- Global layout elements (e.g., Sidebar, Header) MAY remain viewport-based for overall screen-width visibility.

#### Scenario: ServiceCard Span Adjustment
- Given a `ServiceCard` with `span={4}`
- When the parent container width is >= 768px (`@md`)
- Then the card MUST render with `flex-row` and `items-start`
- And the text sizes MUST increase (e.g., `text-4xl`)

#### Scenario: PlansCard Layout Adjustment
- Given a `PlansCard` with `variant="premium"`
- When the parent container width is >= 768px (`@md`)
- Then the internal grid MUST change to `grid-cols-2`
- And the footer layout MUST change to `flex-row`

#### Scenario: Footer Section Responsiveness
- Given the `Footer` component
- When the parent container width is >= 768px (`@md`)
- Then the footer grid MUST change to `grid-cols-3`
- And text alignments MUST adjust (left for first column, center for socials, right for copyright)

### Requirement: [UI-002] Container Parent Context
- All components using container queries MUST be nested within an element that has the `@container` class.
- The `Footer` component MUST be moved within the `@container` context of `Layout.astro` or be wrapped in its own `@container` element.

#### Scenario: Layout Continuity
- Given the `Layout.astro` component
- When rendered
- Then the `<main>` element MUST have the `@container` class
- And the `Footer` MUST be within a container context that responds to width changes.

### Requirement: [UI-003] Accessible Interactive Elements
- All interactive components (buttons, links, form inputs) SHALL use descriptive text or `aria-label` attributes to ensure context for screen readers.

#### Scenario: Icon-Only Buttons
- **GIVEN** a button that only contains an icon (e.g., Mobile Menu toggle).
- **THEN** it SHALL have an `aria-label` that describes its action (e.g., `aria-label="Toggle Navigation Menu"`).

#### Scenario: Describing Newsletter Input
- **GIVEN** a newsletter email input.
- **THEN** it SHALL have an associated label or `aria-label` (e.g., `aria-label="Email address for newsletter subscription"`).

