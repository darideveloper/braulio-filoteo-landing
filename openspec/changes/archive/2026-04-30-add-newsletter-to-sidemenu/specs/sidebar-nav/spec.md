# Spec Delta: Sidebar & Navigation Updates

## MODIFIED Requirements

### Requirement: REQ-2 - Navigation Components
The navigation system MUST include a link to the Newsletter section.

#### Scenario: User navigates to Newsletter via Sidebar
- **Given** the sidebar is open
- **When** the user clicks on the "Newsletter" option
- **Then** the page MUST scroll to the Newsletter section (ID: `newsletter`)
- **And** the icon used MUST be a relevant Material Icon (e.g., `mail`)

### Requirement: REQ-4 - "Neon Noir Editorial" Styling
The sidebar MUST maintain a balanced layout even with the additional navigation item.

#### Scenario: Sidebar layout on standard screens
- **Given** a standard desktop or mobile viewport
- **When** the sidebar is rendered
- **Then** all navigation items SHOULD be visible without vertical scrolling if possible
- **And** the vertical spacing between items MUST be reduced to `py-2` (or equivalent)
- **And** the logo margin and section paddings MUST be tightened to optimize vertical space
