# Spec Delta: Plans CTA Calendly

## MODIFIED Requirements

### Requirement: Plans Card Molecule
The `PlansCard` molecule SHALL support external booking links for premium service variants.

#### Scenario: Premium Card CTA
- **GIVEN** a `PlansCard` with `variant="premium"`.
- **THEN** the CTA button SHALL point to a Calendly booking URL.
- **AND** it SHALL open in a new tab (`target="_blank"`).
- **AND** it SHALL include `rel="noopener noreferrer"`.
