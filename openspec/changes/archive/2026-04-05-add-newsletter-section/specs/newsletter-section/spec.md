# newsletter-section Specification

## ADDED Requirements

### Requirement: Standalone Newsletter Organism
The system SHALL provide a `NewsletterSection` organism designed to capture email subscriptions for a private community.

#### Scenario: Visual Composition and Component Reuse
- **GIVEN** the `NewsletterSection` component.
- **THEN** it SHALL use a radial gradient background (`bg-noir-gradient`).
- **AND** it SHALL use the `<Badge>` component for the "Membresía Privada" overline.
- **AND** it SHALL use the `<EditorialHeadline>` component for the main title.
- **AND** it SHALL use the `<SideBorderQuote>` component for the main descriptive quote.
- **AND** it SHALL use the `<BrandButton>` component with `variant="secondary"` for the submission button.
- **AND** it SHALL include a kinetic text scroller decoration at the bottom with a low opacity (`opacity-5`).