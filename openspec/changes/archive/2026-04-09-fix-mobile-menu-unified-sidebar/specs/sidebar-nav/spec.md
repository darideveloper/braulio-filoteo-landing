## MODIFIED Requirements

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
