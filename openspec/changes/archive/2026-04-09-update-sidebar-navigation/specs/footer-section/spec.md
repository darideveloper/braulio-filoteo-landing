## MODIFIED Requirements

### Requirement: Footer Presence
The site SHALL display a persistent footer at the bottom of all routes managed by the global layout, and it MUST NOT introduce its own fixed margins when it is already contained within the main layout area that has its own margins.

#### Scenario: Rendering in the Global Layout
- **GIVEN** any page in the application.
- **THEN** it SHALL include the `Footer` organism as a sibling following the `main` tag in `Layout.astro`.
- **AND** the footer's width SHALL span the full available width of its parent container.
- **AND** the `Footer` SHALL NOT have its own `ml-[280px]` or `ml-[300px]` class that would result in double-offsetting.

#### Scenario: Standardizing Sidebar Margin
- **GIVEN** the `Sidebar.astro` is 300px wide.
- **THEN** the `Layout.astro`'s `main` container SHALL implement a matching `xl:ml-[300px]` left margin.
- **AND** the `Footer` SHALL automatically align with the `main` content area.
