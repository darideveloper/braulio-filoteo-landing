# side-border-quote Specification

## Purpose
TBD - created by archiving change add-newsletter-section. Update Purpose after archive.
## Requirements
### Requirement: Reusable Editorial Quote Molecule
The system SHALL provide an `SideBorderQuote` molecule to standardize left-bordered italic text blocks across the site.

#### Scenario: Default Rendering
- **GIVEN** an `<SideBorderQuote>` component with default props.
- **THEN** it SHALL render a paragraph tag (`<p>`).
- **AND** it SHALL apply a left border using the primary brand color (`border-l-2 border-brand-primary pl-6 py-2`).
- **AND** it SHALL format the text as italic (`italic`).
- **AND** it SHALL accept standard Astro `class` props to override or extend utilities (like `text-lg` or `text-2xl`).

