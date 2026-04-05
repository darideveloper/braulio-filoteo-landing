# cta-position Specification Delta

## ADDED Requirements
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
