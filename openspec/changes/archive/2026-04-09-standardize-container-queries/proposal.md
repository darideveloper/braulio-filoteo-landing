# Proposal: Standardize Container Queries

Standardize the use of container queries (`@md:`, `@lg:`) across all components to ensure layout consistency regardless of where they are placed.

## Motivation
Currently, several components (`ServiceCard`, `PlansCard`, `PlansSection`, `GritonesSection`, `Footer`) still use viewport-based breakpoints (`md:`, `lg:`) while others have migrated to container-based ones. This inconsistency can lead to unexpected layouts when these components are nested in containers of different sizes. Standardizing on container queries makes the components truly "atomic" and responsive to their parent context.

## Proposed Changes
1.  **Component Migration:** Replace standard Tailwind breakpoints with their container query equivalents in all targeted components.
2.  **Layout Consistency:** Ensure `Footer` is properly wrapped in a container context so it can correctly respond to container queries.
3.  **Atomic Design:** Enforce the use of `@` breakpoints for all "Molecule" and "Organism" level components.

## Impact
- **Developer Experience:** Clearer convention for responsive styling.
- **Visual Consistency:** Components will adapt to their local width rather than the screen width.
- **Portability:** Components can be reused in different layouts (e.g., sidebars, grids, full-width) without breaking.

## Verification Plan
- **Manual Inspection:** Review the UI in the browser across different screen sizes and container widths.
- **Code Review:** Ensure no standard viewport breakpoints remain in the targeted files.
- **Build Check:** Ensure the project builds successfully after the changes.
