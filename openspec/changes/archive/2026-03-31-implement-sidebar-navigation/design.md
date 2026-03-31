# Design: Sidebar Navigation & Global Layout

## Overview
This design defines a responsive global shell for the website, featuring a fixed sidebar on desktop (width > 1024px) and a top header with a mobile burger menu (width <= 1024px). It integrates branding, navigation links with icons, and maintains the "Bold Editorial" high-contrast style.

## Layout Structure

### Desktop View (Width > 1024px)
- **Sidebar (Left):**
  - Fixed-width (`240px` to `280px`).
  - Fixed position on the left.
  - Background: Black (`#000000`).
  - Contains the logo and a vertical navigation list.
- **Main Content (Right):**
  - Left margin matches sidebar width.
  - Occupies the remaining viewport width.
  - Dedicated scrollable area for content.

### Mobile & Tablet View (Width <= 1024px)
- **Header (Top):**
  - Full width, fixed height (`64px` or `80px`).
  - Fixed position at the top.
  - Background: Black (`#000000`).
  - Contains the logo (left) and a burger menu button (right).
- **Mobile Menu Overlay:**
  - Slide-in or full-screen menu overlay when active.
  - Vertically stacked navigation links with icons.
- **Main Content:**
  - Starts below the header.
  - Full-width scrollable area.

## Key Components

### 1. `Sidebar.astro`
- Desktop only (`hidden lg:flex`).
- Wraps the logo (`src/assets/images/logo.webp`) and `Navigation.astro`.
- Provides the fixed vertical container.

### 2. `Header.astro`
- Mobile/Tablet only (`flex lg:hidden`).
- Includes the logo and burger menu button.
- Manages the mobile menu state.

### 3. `Navigation.astro`
- Shared component for navigation links.
- Links include inline SVG icons and all-caps text.
- Adaptable styling for vertical (sidebar/mobile) or horizontal (optional) layout.

### 4. `Layout.astro`
- Acts as the global shell.
- Coordinates components and manages the main content slot.

## Aesthetic & Technical Strategy
- **Style:** "Bold Editorial" – high contrast (black background for nav, white or off-white for content), bold typography (Epilogue/Metropolis), all-caps labels.
- **Tools:** Astro 5.x, Tailwind CSS v4, `clsx` for conditional classes.
- **Interaction:** Vanilla JavaScript in `Header.astro` for the burger menu toggle.
- **Asset Integration:** Logo images and custom inline SVGs for iconography.
