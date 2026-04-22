# newsletter-section Specification

## Purpose
The `NewsletterSection` captures professional engagement through a high-fidelity "Membresía Privada" call-to-action, leveraging Substack for a premium editorial newsletter experience.
## Requirements
### Requirement: Newsletter Editorial Copy
The `NewsletterSection` SHALL use specific, high-intent editorial copy.

#### Scenario: Substack Quote and Description
- **GIVEN** the `NewsletterSection` quote.
- **THEN** it SHALL be: "Reflexiones en audio y texto sobre liderazgo, decisiones difíciles y el poder de la resiliencia".
- **AND** the secondary description SHALL mention the format as "audio corto y texto para leer en 3 minutos".

### Requirement: Standalone Newsletter Organism
The system SHALL provide a `NewsletterSection` organism designed to capture email subscriptions for a private community using a Substack-managed flow.

#### Scenario: Visual Composition and Substack Integration
- **GIVEN** the `NewsletterSection` component.
- **THEN** it SHALL use a radial gradient background (`bg-noir-gradient`) for the entire section.
- **AND** it SHALL ensure that the Header, Descriptive Content, and Social Proof sections are contained within the standard `.container` class.
- **ADDED** requirement to make the Substack iframe embed section (the black background area) span the **full width** of the main content area (edge-to-edge).
- **ADDED** requirement to remove rounded corners (`rounded-lg`) from the Substack embed wrapper and inner iframe container.
- **ADDED** requirement to use horizontal borders only (`border-y`) for the iframe container.
- **ADDED** requirement to include an editorial profile section (photo and title) above the iframe for better branding.
- **AND** it SHALL maintain the original iframe width, height, and scaling attributes.

