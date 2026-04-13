# newsletter-section Specification Delta

## MODIFIED Requirements

### Requirement: Standalone Newsletter Organism
The system SHALL provide a `NewsletterSection` organism designed to capture email subscriptions for a private community using a Substack-managed flow.

#### Scenario: Visual Composition and Substack Integration
- **GIVEN** the `NewsletterSection` component.
- **THEN** it SHALL use a radial gradient background (`bg-noir-gradient`).
- **AND** it SHALL use the `<Badge>` component for the "Membresía Privada" overline.
- **AND** it SHALL use the `<EditorialHeadline>` component for the main title.
- **AND** it SHALL use the `<SideBorderQuote>` component for the main descriptive quote.
- **REMOVED** requirement to use the `<BrandButton>` component for the submission button.
- **ADDED** requirement to use an official Substack `<iframe>` embed for the subscription flow.
- **ADDED** requirement to apply CSS filters (`invert(1) hue-rotate(180deg)`) to the Substack iframe to match the project's dark theme and branding colors.
- **ADDED** requirement to include a descriptive `title` attribute on the iframe for accessibility.
- **ADDED** requirement to use a theme-matching background color on the iframe container to prevent "white flashes" during load.
- **ADDED** requirement to provide a text-based fallback link to the Substack page for users with adblockers.
- **AND** it SHALL include a kinetic text scroller decoration at the bottom with a low opacity (`opacity-5`).
