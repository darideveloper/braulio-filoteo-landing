## ADDED Requirements
### Requirement: Container-Aware Responsiveness
All components designed to be rendered within the main content area SHALL use container queries (`@sm:`, `@md:`, etc.) instead of viewport-based global breakpoints (`sm:`, `md:`, etc.) to ensure layout stability when sidebars or other global layout shifts occur.

#### Scenario: Component rendering inside main container
- **WHEN** a component is placed inside the `<main>` container
- **THEN** it SHALL evaluate its responsive layout based on its container width using `@` breakpoints (e.g., `@md:grid-cols-2`)
- **AND** it SHALL NOT use viewport breakpoints (e.g., `md:grid-cols-2`)

#### Scenario: Global layout components
- **WHEN** a component controls global layout and sits outside the main container (e.g., Sidebar, Header)
- **THEN** it MAY continue to use standard viewport breakpoints (e.g., `xl:hidden`)
