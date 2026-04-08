# Specification: Voice Editorial Design

## MODIFIED Requirements

### Requirement: Branding Tokens
The branding system SHALL support the "Noir" aesthetic with deep background and surface tones. <!-- id: 0 -->

#### Scenario: Updating background color to #0e0e0e
- **GIVEN** a standard page
- **WHEN** the brand background is applied
- **THEN** the background color SHOULD be #0e0e0e

### Requirement: Component Versatility
`BrandButton` SHALL support a circular shape variant for high-impact icon actions. <!-- id: 1 -->

#### Scenario: Creating a mic circular button
- **GIVEN** a `BrandButton` with `circular={true}`
- **WHEN** it is rendered
- **THEN** it SHOULD have `rounded-full` class and equal padding on all sides

## ADDED Requirements

### Requirement: Matrix Grid Items
A `MatrixCard` component SHALL be available for transformation matrices. <!-- id: 2 -->

#### Scenario: Displaying a step in the transformation process
- **GIVEN** a title and an icon
- **WHEN** the `MatrixCard` is rendered
- **THEN** it SHOULD display a bottom progress line that expands on hover

### Requirement: Feature CTA
A `FeatureCTA` component SHALL be available for high-impact call-to-action sections. <!-- id: 3 -->

#### Scenario: Rendering the Voice CTA
- **GIVEN** a label and CTA text
- **WHEN** the `FeatureCTA` is rendered
- **THEN** it SHOULD display a circular icon button alongside the bold CTA label

### Requirement: Editorial Hero
An `HeroEditorial` organism SHALL support text-driven asymmetric layouts. <!-- id: 4 -->

#### Scenario: Displaying the "Voice" hero
- **GIVEN** a title and a long description
- **WHEN** the `HeroEditorial` is rendered
- **THEN** the title SHOULD span 9 columns and the description SHOULD start at column 6 in a 12-column grid

### Requirement: Voice Section Integration
The landing page SHALL include the "Voice" editorial sections at the bottom. <!-- id: 5 -->

#### Scenario: Landing page rendering Voice section
- **GIVEN** the landing page `src/pages/index.astro`
- **WHEN** a user scrolls to the bottom
- **THEN** the `HeroEditorial`, Matrix Grid, and `FeatureCTA` SHOULD be displayed in sequence
