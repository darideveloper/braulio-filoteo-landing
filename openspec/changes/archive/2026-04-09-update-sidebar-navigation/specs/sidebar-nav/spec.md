## ADDED Requirements

### Requirement: REQ-5 - Smooth Scrolling and Logo Interaction
The global navigation MUST provide a refresh-free scroll back to the home section when clicking the brand logo or internal hash links.

#### Scenario: Smooth Return to Top
- **GIVEN** any brand logo link in the layout.
- **WHEN** the user clicks the logo.
- **THEN** it SHALL navigate smoothly to the `#home` section.
- **AND** it SHALL NOT trigger a full page reload.

## MODIFIED Requirements

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
The mobile navigation menu MUST be toggleable via the burger button and remain fully visible and accessible when active.

#### Scenario: Display Mobile Menu Content
- **GIVEN** the mobile header is visible and the burger button is clicked.
- **WHEN** the menu overlay is toggled on.
- **THEN** it SHALL be rendered with `z-index: 50` or higher to ensure it's on top of all page sections.
- **AND** it SHALL have `overflow-y-auto` to allow users to scroll if the content is taller than the remaining viewport.
- **AND** the menu labels MUST remain fully legible and centered within the viewport.
