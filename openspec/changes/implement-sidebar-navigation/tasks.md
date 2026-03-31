# Tasks: Implement Sidebar Navigation & Global Layout

## Preparation & Research
- [x] Research `jp-newman.com` for typography and spacing patterns.
- [x] Ensure `clsx` is installed and available in the project.
- [x] Finalize the "Electric Noir" brand color configuration in `global.css`.

## Component Implementation
- [x] Create `src/components/Navigation.astro` with base menu links (Home, Projects, Social, Contact) and inline SVG icons.
- [x] Create `src/components/Sidebar.astro` (desktop only, fixed width).
- [x] Create `src/components/Header.astro` (mobile/tablet only, includes burger menu toggle logic).

## Layout Refactoring
- [x] Refactor `src/layouts/Layout.astro` to provide the grid/flex structure for the global shell.
- [x] Implement responsive padding for the main content area (margin-left on desktop, padding-top on mobile).
- [x] Apply "Bold Editorial" high-contrast styles.

## Integration & Validation
- [x] Update `src/pages/index.astro` to ensure full compatibility with the new layout shell.
- [x] Verify that the burger menu correctly toggles on mobile devices.
- [x] Check branding (logo) consistency across all views.
- [x] Validate responsive behavior at the 1024px breakpoint.
