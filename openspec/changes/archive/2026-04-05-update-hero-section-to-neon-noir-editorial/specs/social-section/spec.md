# social-section Specification

## Purpose
The Social Section provides global navigation and copyright information while maintaining the "Electric Noir" high-contrast aesthetic, implemented as a regular section within the page flow.

## ADDED Requirements
### Requirement: High-Contrast Layout
The Social Section MUST use the deepest brand background and provide a clear horizontal/vertical separation from other content.

#### Scenario: Section styling
- **WHEN** the SocialSection component is rendered.
- **THEN** it SHALL use `brand-background` (#0E0E0E).
- **AND** it SHALL have a `border-t` using `brand-surface-bright/20`.

### Requirement: Social Navigation
The Social Section SHALL provide accessible links to social platforms using consistent technical typography.

#### Scenario: Verify link typography
- **GIVEN** the social links in the Social Section.
- **THEN** they SHALL use the `label-md` utility (Inter, uppercase, 0.1em tracking).
- **AND** they SHALL transition to `brand-primary` on hover.
