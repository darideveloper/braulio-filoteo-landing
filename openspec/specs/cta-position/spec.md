# cta-position Specification

## Purpose
TBD - created by archiving change reposition-cta-section. Update Purpose after archive.
## Requirements
### Requirement: Home Page Editorial Order
The home page (`src/pages/index.astro`) MUST follow a specific sequence of sections to ensure the brand narrative is properly conveyed.

#### Scenario: Verify Index Section Sequence
- **GIVEN** the `index.astro` page.
- **THEN** it SHALL render the following sections in order:
  - `Hero`
  - `AboutSection`
  - `PodcastSection`
  - `CtaSection` (Telling Section)
  - `NewsletterSection`

### Requirement: Contact Information Interactivity
The `CtaSection` MUST provide interactive contact information when `showContact` is true.

#### Scenario: Contact Email Rendering
- **GIVEN** the `CtaSection` is rendered with `showContact={true}`.
- **THEN** it SHALL display the email `info@grit-ones.com`.
- **AND** it SHALL be a clickable `mailto:info@grit-ones.com` link.
- **AND** the link MUST have a hover state for visual feedback (e.g., `hover:text-brand-secondary`).

