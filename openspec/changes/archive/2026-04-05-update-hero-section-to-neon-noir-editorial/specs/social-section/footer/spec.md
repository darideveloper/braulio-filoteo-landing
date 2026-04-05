# footer Specification

## Purpose
The Footer provides global navigation and copyright information while maintaining the "Electric Noir" high-contrast aesthetic at the bottom of the page.

## ADDED Requirements
### Requirement: High-Contrast Layout
The Footer MUST use the deepest brand background and provide a clear horizontal/vertical separation from the main content.

#### Scenario: Footer styling
- **WHEN** the Footer component is rendered.
- **THEN** it SHALL use `brand-background` (#0E0E0E).
- **AND** it SHALL have a `border-t` using `brand-surface-bright/20`.

### Requirement: Social Navigation
The Footer SHALL provide accessible links to social platforms using consistent technical typography.

#### Scenario: Verify link typography
- **GIVEN** the social links in the Footer.
- **THEN** they SHALL use the `label-md` utility (Inter, uppercase, 0.1em tracking).
- **AND** they SHALL transition to `brand-primary` on hover.
