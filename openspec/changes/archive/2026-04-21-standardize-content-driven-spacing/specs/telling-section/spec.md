# spec-delta: telling-section

## MODIFIED Requirements

### Requirement: Standalone High-Impact Section
The `CtaSection` MUST be a standalone component that uses standardized vertical padding instead of enforcing a full viewport height.

#### Scenario: Section Rendering
- **Given** the `CtaSection` component.
- **When** it is rendered on any page.
- **Then** it SHALL utilize standardized vertical padding (e.g., `py-24`).
- **AND** it SHALL center its content vertically within that area.
- **REMOVED** ~~**Then** it must occupy `min-h-screen` and center its content vertically, independent of other layout elements.~~
