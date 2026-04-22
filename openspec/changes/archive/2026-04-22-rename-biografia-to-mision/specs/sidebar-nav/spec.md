# Spec Delta: sidebar-nav

## MODIFIED Requirements

### Requirement: REQ-2 - Navigation Components
The shell MUST include a branding element (logo) and a navigation menu with icons and text, using a single source of truth for all links.

#### Scenario: Navigation Items and Language
- **GIVEN** the navigation system is loaded.
- **THEN** it SHALL display the following items in Spanish:
  - "Inicio" (#home)
  - "Misión" (#about)
  - "Podcast" (#podcast)
  - "Estudio" (#studio)
  - "Planes" (#plans)
  - "Social" (#social)
- **AND** it SHALL NOT include "Methodology".
