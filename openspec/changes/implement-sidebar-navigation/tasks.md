# Tasks: Implement Sidebar Navigation & Global Layout

## Preparation & Research
- [ ] Research `jp-newman.com` for typography and spacing patterns.
- [ ] Ensure `clsx` is installed and available in the project.
- [ ] Finalize the "Electric Noir" brand color configuration in `global.css`.

## Component Implementation
- [ ] Create `src/components/Navigation.astro` with base menu links (Home, Projects, Social, Contact) and inline SVG icons.
- [ ] Create `src/components/Sidebar.astro` (desktop only, fixed width).
- [ ] Create `src/components/Header.astro` (mobile/tablet only, includes burger menu toggle logic).

## Layout Refactoring
- [ ] Refactor `src/layouts/Layout.astro` to provide the grid/flex structure for the global shell.
- [ ] Implement responsive padding for the main content area (margin-left on desktop, padding-top on mobile).
- [ ] Apply "Bold Editorial" high-contrast styles.

## Integration & Validation
- [ ] Update `src/pages/index.astro` to ensure full compatibility with the new layout shell.
- [ ] Verify that the burger menu correctly toggles on mobile devices.
- [ ] Check branding (logo) consistency across all views.
- [ ] Validate responsive behavior at the 1024px breakpoint.
