## Context
The project has a global layout featuring a sidebar that becomes visible at `xl` (1280px) viewports. This sidebar consumes 280px of screen width, reducing the space available for the main content area. Using standard viewport breakpoints (`sm:`, `md:`, `lg:`) for the content inside the main area causes inconsistency because a `lg` breakpoint expects at least 1024px, but at exactly 1280px (`xl`), the available width for content drops to 1000px, creating unexpected layout shifts.

## Goals / Non-Goals
- Goals: Create a robust, container-aware responsive system for all content components. Eliminate layout breakages caused by global sidebar toggling.
- Non-Goals: Changing the design system breakpoints themselves, or changing the behavior of the global Layout elements (`Sidebar`, `Header`).

## Decisions
- Decision: Implement Tailwind CSS v4 container queries (`@container`) on the main content wrapper and update all internal component breakpoints to use container variations (`@sm:`, `@md:`, `@lg:`, `@xl:`, `@2xl:`).
- Alternatives considered: Using complex CSS `calc()` functions or creating custom Tailwind breakpoints that subtract sidebar width. Both alternatives add significant cognitive overhead and are harder to maintain than native container queries.

## Stacking Context Awareness
The use of `container-type: inline-size` (via `@container`) on the `<main>` tag creates a new stacking context. 
- Global layout elements (`Sidebar`, `Header`) are siblings to `<main>` and use `fixed` positioning with `z-index: 50`. 
- These elements remain outside the `<main>` stacking context and will correctly overlay all container content without modification.

## Sidebar Offset Adjustment
A viewport of 1280px (`xl`) triggers the sidebar, which reduces the available width for the `<main>` container to approximately 1000px. 
- Elements that previously triggered on `xl:` (1280px) might now fail to trigger if changed to `@xl:` because the container width stays below 1280px even on large screens.
- **Mapping Strategy**: Components intended to trigger "when the sidebar appears" SHALL use `@lg:` (1024px) or `@md:` (768px) thresholds as appropriate for the actual available width.

## Risks / Trade-offs
- Risk: Developers might mix up viewport breakpoints and container breakpoints when creating new components.
- Mitigation: Add a core architecture requirement specifying that all components rendered within the main layout must use container queries.

## Migration Plan
1. Apply the `@container` class to the main layout wrapper.
2. Search and replace all viewport breakpoints with container queries in pages, organisms, and molecules.
3. Visually test the design system page and main pages to ensure no responsive bugs were introduced.
