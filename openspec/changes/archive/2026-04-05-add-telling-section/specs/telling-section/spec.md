# Capability: Standalone CtaSection

## ADDED Requirements

### Requirement: Standalone High-Impact Section
The `CtaSection` MUST be a standalone component that covers the full viewport without including global site navigation or page footers.

#### Scenario: Full-Screen Rendering
- **Given** the `CtaSection` component.
- **When** it is rendered on any page.
- **Then** it must occupy `min-h-screen` and center its content vertically, independent of other layout elements.

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
