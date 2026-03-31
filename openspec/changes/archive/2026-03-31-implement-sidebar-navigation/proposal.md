# Proposal: Implement Sidebar Navigation & Global Layout

## Goal
Create a professional, high-contrast global layout with a persistent sidebar for desktop and a top header with a burger menu for mobile. This layout will contain the main navigation links, integrate the brand logo, and follow the "Bold Editorial" aesthetic.

## Change ID
`implement-sidebar-navigation`

## Capabilities
- **Global Sidebar Layout (Desktop):** A fixed vertical bar on the left (screen width > 1024px) with navigation links and the brand logo.
- **Responsive Top Header (Mobile/Tablet):** A fixed horizontal bar on top for smaller screens (screen width <= 1024px).
- **Interactive Burger Menu (Mobile):** A toggleable overlay menu for mobile navigation.
- **Navigation Links with Icons:** Menu options featuring both text and inline SVG icons (Home, Projects, Social, Contact).
- **Scrollable Main Content:** A dedicated area for the page content, properly padded to accommodate the fixed navigation elements.

## Strategic Approach
1.  **Preparation:** Research typography and spacing patterns (e.g., `jp-newman.com`) to ensure the layout matches the "Bold Editorial" style.
2.  **Layout Refactoring:** Update `src/layouts/Layout.astro` to include the global shell structure for both desktop and mobile.
3.  **Navigation Components:** Create `Sidebar.astro`, `Header.astro`, and a shared, responsive `Navigation.astro` component.
4.  **Branding & Icons:** Integrate the logo asset and inline SVGs for all navigation items.
5.  **Mobile Interaction:** Implement a vanilla JS toggle for the burger menu.
6.  **Aesthetic Alignment:** Apply high-contrast (black/white) styling and bold typography using Tailwind CSS v4 and `clsx`.
