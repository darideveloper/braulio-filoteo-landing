# telling-section Specification

## Purpose
TBD - created by archiving change add-telling-section. Update Purpose after archive.
## Requirements
### Requirement: Standalone High-Impact Section
The `CtaSection` MUST be a standalone component that uses standardized vertical padding instead of enforcing a full viewport height.

#### Scenario: Section Rendering
- **Given** the `CtaSection` component.
- **When** it is rendered on any page.
- **Then** it SHALL utilize standardized vertical padding (e.g., `py-24`).
- **AND** it SHALL center its content vertically within that area.
- **REMOVED** ~~**Then** it must occupy `min-h-screen` and center its content vertically, independent of other layout elements.~~

### Requirement: Integrated Contact Info
The section MUST allow including contact info as part of the main content group.

#### Scenario: Contact Rendering with CTA
- **Given** the `CtaSection`.
- **When** the `showContact` prop is `true`.
- **Then** the email address with a mail icon must appear next to or below the primary CTA button.

### Requirement: Brand-Standard Action Button
The section MUST use the project's established primary brand button for its CTA.

#### Scenario: Gradient Button Rendering
- **Given** a `BrandButton` passed to the `cta` slot.
- **When** the section is rendered.
- **Then** the button must display the brand's primary gradient and neon shadow.

