# Tasks: Standardize Container Queries

Iterative plan to migrate target components to container-based breakpoints.

## Implementation Steps

### 1. Preparation & Layout Fixes
- [x] **Fix Footer Context**: In `Layout.astro`, move `Footer` inside the `<main class="@container">` element or ensure it has its own container context.
- [x] **Validation**: Inspect the Footer in the browser to ensure its global layout positioning (e.g., sidebar offset) remains correct.

### 2. Component Migration: Molecules
- [x] **ServiceCard**: Replace `md:` with `@md:` in `spanClasses` and conditional classes (flex-row, text-size, margin).
- [x] **PlansCard**: Replace `md:` with `@md:` for padding, grid-cols, flex-row, and button width.
- [x] **Validation**: Review `ServiceCard` and `PlansCard` in the design system page to ensure they render correctly at different widths.

### 3. Component Migration: Organisms
- [x] **PlansSection**: Replace `lg:col-span-*` with `@lg:col-span-*` and `md:flex-row` with `@md:flex-row`.
- [x] **GritonesSection**: Replace `md:grid-cols-4` with `@md:grid-cols-4`.
- [x] **Footer**: Replace all `md:` and `lg:` grid/flex/text-alignment classes with `@md:` and `@lg:`.
- [x] **Validation**: Verify each section on the index page across different screen sizes.

### 4. Project-Wide Cleanup
- [x] **Design System Page**: Update remaining `lg:` breakpoints in `src/pages/design-system.astro` to `@lg:`.
- [x] **Global Audit**: Run a final `grep` search to ensure no orphaned viewport-based breakpoints remain in the targeted "Molecules" or "Organisms".

## Verification Criteria
- [x] All updated components respond correctly to their parent container's width.
- [x] Visual design matches the previous viewport-based implementation at standard screen sizes.
- [x] No layout regressions in the Sidebar or Header.
- [x] Project builds without errors.
