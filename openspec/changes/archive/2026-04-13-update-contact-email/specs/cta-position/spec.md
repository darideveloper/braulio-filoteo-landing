# cta-position Specification Delta

## MODIFIED Requirements

### Requirement: Contact Information Interactivity
The `CtaSection` MUST provide interactive contact information when `showContact` is true.

#### Scenario: Contact Email Rendering
- **GIVEN** the `CtaSection` is rendered with `showContact={true}`.
- **THEN** it SHALL display the email `info@grit-ones.com`.
- **AND** it SHALL be a clickable `mailto:info@grit-ones.com` link.
- **AND** the link MUST have a hover state for visual feedback (e.g., `hover:text-brand-secondary`).
