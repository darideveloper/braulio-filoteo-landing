# your-story Specification Delta

## MODIFIED Requirements

### Requirement: Centered CTA & Contact Row
The section MUST provide a centered action row with a primary CTA and contact information.

#### Scenario: CTA Action
- **Given** the "Crea tu podcast" button.
- **When** rendered in the "Your Story" section.
- **Then** it MUST be centered and use the primary gradient variant.

#### Scenario: Contact Email & Link
- **Given** the "Your Story" section is rendered.
- **When** the contact information is displayed.
- **Then** the email SHALL be `info@grit-ones.com`.
- **And** it SHALL be a clickable link (`mailto:info@grit-ones.com`).
- **And** it SHALL change color on hover (e.g., `hover:text-brand-primary`).
