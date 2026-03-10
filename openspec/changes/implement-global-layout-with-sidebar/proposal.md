# Proposal: Implement Global Layout with Sidebar

## Goal
Create a global layout with a persistent sidebar (desktop) that transforms into a top header (mobile). This layout will contain the main navigation links and provide a scrollable main content area.

## Change ID
`implement-global-layout-with-sidebar`

## Capabilities
- **Global Layout:** A consistent shell for the website.
- **Navigation Sidebar (Desktop):** A fixed-width sidebar on the left with navigation links.
- **Navigation Header (Mobile):** A top-positioned header for mobile navigation.
- **Scrollable Main Content:** A dedicated area for the page content, scrollable on desktop.

## Strategic Approach
1.  **Layout Refactoring:** Update `src/layouts/Layout.astro` to provide the grid/flex structure for the sidebar and main content.
2.  **Navigation Component:** Create a `Navigation` component that adapts its layout based on screen size (flex-col on desktop, flex-row on mobile).
3.  **Aesthetic Alignment:** Apply "Bold Editorial" styles (high contrast, bold typography) to the sidebar/header.
4.  **Responsive Design:** Use CSS Media Queries to switch between sidebar and header modes.
