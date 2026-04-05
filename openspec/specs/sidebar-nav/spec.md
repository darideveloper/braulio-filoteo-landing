# sidebar-nav Specification

## Purpose
TBD - created by archiving change implement-sidebar-navigation. Update Purpose after archive.
## Requirements
### Requirement: REQ-1 - Responsive Global Shell
The layout MUST adapt to different screen sizes, transitions between a sidebar on desktop and a top header on mobile.

#### Scenario: Desktop Screen View
- **Given** a user is on a device with a screen width > 1024px.
- **When** the page loads.
- **Then** a fixed-position sidebar is visible on the left.
- **And** the sidebar width is between 240px and 280px.
- **And** the main content area has a left margin matching the sidebar width to prevent overlap.

#### Scenario: Mobile/Tablet Screen View
- **Given** a user is on a device with a screen width <= 1024px.
- **When** the page loads.
- **Then** a fixed-height header (64px to 80px) is visible at the top.
- **And** the main content area starts below the header.
- **And** the desktop sidebar is hidden.

### Requirement: REQ-2 - Navigation Components
The shell MUST include a branding element (logo) and a navigation menu with icons and text.

#### Scenario: Desktop Sidebar Content
- **Given** the sidebar is visible.
- **Then** the brand logo (`logo.webp`) is displayed at the top.
- **And** a vertical list of navigation links with icons (Home, Projects, Social, Contact) is shown below the logo.

#### Scenario: Mobile Header Content
- **Given** the mobile header is visible.
- **Then** the brand logo is displayed on the left.
- **And** a burger menu button is displayed on the right.

### Requirement: REQ-3 - Mobile Navigation Interaction
The mobile navigation menu MUST be toggleable via the burger button.

#### Scenario: Toggle Mobile Menu
- **Given** the mobile header is visible.
- **When** the user clicks the burger button.
- **Then** a menu overlay slides in or appears, displaying the navigation links.

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

