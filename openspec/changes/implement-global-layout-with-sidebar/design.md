# Design: Global Sidebar Layout

## Overview
The goal is to create a responsive global shell for the website that provides a sidebar on desktop and a top header on mobile. This shell must be scalable, as more pages and content are added.

## Layout Structure

### Desktop View (Width > 768px)
- **Grid Structure:** Two-column layout.
  - **Left Sidebar:** Fixed width (e.g., `280px` or `320px`). Positioned `sticky` or `fixed` to the viewport.
  - **Right Content:** Occupies the remaining width. Scrollable.
- **Navigation:** Vertical list of links in the sidebar. Bold, high-contrast typography.

### Mobile View (Width <= 768px)
- **Flex Structure:** Single column layout.
  - **Top Header:** Full width. Height is fixed (e.g., `64px`).
  - **Main Content:** Occupies the remaining vertical space. Scrollable.
- **Navigation:** Horizontal list of links in the header, or a mobile-friendly menu (e.g., burger menu). For the initial version, a simple horizontal menu is preferred if links are few.

## Key Components

### 1. `Navigation.astro`
- Responsible for rendering the list of navigation links.
- Uses `clsx` for conditional styling.
- Adapts layout based on its container or media queries.

### 2. `Sidebar.astro` (Desktop)
- Wraps `Navigation.astro`.
- Provides the fixed-width container.
- Includes branding (logo, name).

### 3. `Header.astro` (Mobile)
- Wraps `Navigation.astro`.
- Provides the full-width header container.
- Includes branding.

### 4. `Layout.astro`
- Coordinates the components based on screen size.
- Defines the main content area.

## Styling (Vanilla CSS)
- **High Contrast:** Black background for the navigation sidebar/header, white background for the main content (or vice versa).
- **Bold Typography:** All-caps headers with trailing periods as per the "Bold Editorial" style.
- **Transitions:** Smooth transition when resizing (though the primary switch is via media queries).

## Responsive Strategy
- Use CSS Grid for the desktop layout: `display: grid; grid-template-columns: 320px 1fr;`.
- Use `display: block` or `display: flex; flex-direction: column;` for mobile.
- The sidebar and header will be toggled based on media queries (e.g., `@media (max-width: 768px)`).
