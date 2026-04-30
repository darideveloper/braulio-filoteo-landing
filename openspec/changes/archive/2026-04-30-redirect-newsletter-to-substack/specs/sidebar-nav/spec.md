# sidebar-nav Specification Delta

## MODIFIED Requirements

### Requirement: REQ-2 - Navigation Components
The navigation system MUST include a link to the Substack profile.

#### Scenario: User navigates to Newsletter via Sidebar
- **Given** the sidebar is open
- **When** the user clicks on the "Newsletter" option
- **Then** the browser MUST open the Substack profile (`https://brauliofiloteo.substack.com`) in a new tab.
- **And** the icon used MUST be a relevant Material Icon (e.g., `mail`)
