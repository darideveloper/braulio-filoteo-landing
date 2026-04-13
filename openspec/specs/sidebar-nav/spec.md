# sidebar-nav Specification

## Purpose
TBD - created by archiving change implement-sidebar-navigation. Update Purpose after archive.
## Requirements
### Requirement: REQ-1 - Responsive Global Shell
The layout MUST adapt to different screen sizes, transitions between a fixed sidebar on desktop and a toggleable slide-over sidebar on mobile.

#### Scenario: Desktop Screen View
- **Given** a user is on a device with a screen width > 1024px.
- **When** the page loads.
- **Then** a fixed-position sidebar is visible on the left.
- **And** the sidebar width is 300px.
- **And** the brand logo inside the desktop sidebar SHALL have its width reduced by 30% (target: ~126px).

#### Scenario: Mobile/Tablet Screen View
- **Given** a user is on a device with a screen width <= 1024px.
- **When** the page loads.
- **Then** a fixed-height header is visible at the top containing a burger menu.
- **And** the mobile brand logo inside the header SHALL have its width reduced by 50% (target: ~60px).
- **And** the sidebar is initially hidden off-screen to the left.

### Requirement: REQ-2 - Navigation Components
The shell MUST include a branding element (logo) and a navigation menu with icons and text, using a single source of truth for all links.

#### Scenario: Navigation Items and Language
- **GIVEN** the navigation system is loaded.
- **THEN** it SHALL display the following items in Spanish:
  - "Inicio" (#home)
  - "Biografía" (#about)
  - "Podcast" (#podcast)
  - "Estudio" (#studio)
  - "Planes" (#plans)
  - "Social" (#social)
- **AND** it SHALL NOT include "Methodology".

### Requirement: REQ-3 - Mobile Navigation Interaction
The mobile navigation menu MUST utilize the unified Sidebar component, entering from the left when toggled, and ensure all content is vertically visible.

#### Scenario: Toggle Mobile Menu from Left
- **Given** the mobile header is visible.
- **When** the user clicks the burger button.
- **Then** the unified sidebar SHALL slide in from the left side of the screen.

#### Scenario: Full Vertical Alignment and Overflow
- **Given** the sidebar is visible on a mobile device.
- **THEN** it SHALL occupy the full vertical viewport height.
- **AND** if the navigation links and content exceed the viewport height, the container SHALL allow vertical scrolling (`overflow-y-auto`) to prevent clipping.

### Requirement: REQ-4 - "Neon Noir Editorial" Styling
The navigation elements MUST follow the "Neon Noir Editorial" high-contrast design, favoring atmospheric depth over hard borders.

#### Scenario: Styling Consistency
- **GIVEN** any navigation component is rendered.
- **THEN** labels SHALL be displayed in all-caps using `Label-MD` typography (Inter, bold, 0.1em letter spacing).
- **AND** the mobile header SHALL use `surface_variant` at `60%` opacity with a `blur(12px)` and NO border.
- **AND** the desktop sidebar SHALL be defined by a tonal shift to `surface_container_low` (#1C1B1B) relative to the background, with NO solid border.

#### Scenario: Active and Hover States
- **GIVEN** a navigation link.
- **WHEN** in an active or hover state.
- **THEN** it SHALL NOT use a divider or underline.
- **AND** it SHALL provide a subtle `surface_bright` (#393939) background highlight or a 2px `brand-primary` (Purple) side stroke.

### Requirement: REQ-5 - Smooth Scrolling and Logo Interaction
The global navigation MUST provide a refresh-free scroll back to the home section when clicking the brand logo or internal hash links.

#### Scenario: Smooth Return to Top
- **GIVEN** any brand logo link in the layout.
- **WHEN** the user clicks the logo.
- **THEN** it SHALL navigate smoothly to the `#home` section.
- **AND** it SHALL NOT trigger a full page reload.

