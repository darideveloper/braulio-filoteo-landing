# Design: Standardize Container Queries

Standardizing on container queries across all components to ensure responsive consistency.

## Architectural Reasoning
Standard viewport-based media queries (`md:`, `lg:`) are tied to the browser window. In a complex layout like this one (with a fixed sidebar and dynamic main content), the "main" area is always smaller than the viewport. Container queries (`@md:`, `@lg:`) allow components to respond to the space available *within* their parent container (`@container`), which is more accurate for layout purposes.

### Container Context
The `@container` class must be present on a parent element for `@md:` and `@lg:` to work.
- **`Layout.astro`**: Already has `@container` on the `<main>` element. This covers all components rendered within the main content area (Sections, Cards, etc.).
- **`Footer.astro`**: Is currently outside the main container in `Layout.astro`. Moving it inside or giving it its own `@container` is necessary for it to use container queries.

### Component-Level Strategy
- **Grid Layouts**: `md:grid-cols-4` -> `@md:grid-cols-4`.
- **Spacing/Padding**: `md:p-12` -> `@md:p-12`.
- **Flex/Alignment**: `md:flex-row` -> `@md:flex-row`.
- **Visibility**: Viewport-based visibility (e.g., `xl:flex`) for global layout elements like Sidebar/Header may remain viewport-based as they are tied to the overall screen width.

## Specific Implementations

### `ServiceCard.astro`
- Update `spanClasses` mapping to use `@md`.
- Update `isBanner` conditional classes.

### `PlansCard.astro` & `PlansSection.astro`
- Convert all internal breakpoints to container-based ones.

### `Footer.astro`
- Move into `main` container in `Layout.astro` or add `@container` to its root element.
- Convert grid and alignment classes.

### `design-system.astro`
- Ensure all grid layouts in the design system page correctly reflect the container-based nature of the components.
