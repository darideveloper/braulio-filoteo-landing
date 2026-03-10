# Capability: Global Sidebar Layout

## Overview
A consistent global shell for the website that provides a sidebar (desktop) or a top header (mobile) for navigation, with a scrollable main content area.

## ADDED Requirements

### Requirement: REQ-1 - Responsive Layout Structure
The layout MUST adapt to different screen sizes, providing a sidebar on desktop and a top header on mobile.

#### Scenario: Desktop Screen
- **Given** a user is on a device with a screen width > 768px.
- **When** the page loads.
- **Then** a fixed-width sidebar (e.g., 320px) is visible on the left.
- **And** the main content occupies the remaining width on the right.
- **And** the main content area is scrollable if its content exceeds the viewport height.

#### Scenario: Mobile Screen
- **Given** a user is on a device with a screen width <= 768px.
- **When** the page loads.
- **Then** a fixed-height header is visible at the top.
- **And** the sidebar is hidden.
- **And** the main content occupies the full width and starts below the header.

### Requirement: REQ-2 - Navigation Menu
The layout MUST include a navigation menu with links to different parts of the website.

#### Scenario: Sidebar Navigation (Desktop)
- **Given** the sidebar is visible.
- **Then** a list of navigation links is displayed vertically.
- **And** links are styled with bold, high-contrast typography.

#### Scenario: Header Navigation (Mobile)
- **Given** the mobile header is visible.
- **Then** a navigation menu is accessible (e.g., via a horizontal list or burger menu).

### Requirement: REQ-3 - Consistent Branding
The layout MUST display consistent branding (name/logo) across both desktop and mobile views.

#### Scenario: Branding Display
- **Given** the user is on any page.
- **Then** "Braulio Filoteo" or a logo is visible in the sidebar/header.
