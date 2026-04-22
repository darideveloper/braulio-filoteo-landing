# podcast-section Specification

## Purpose
The `PodcastSection` highlights the "GRITones Podcast" as a primary editorial asset, focusing on high-value conversations and personal brand authority.
## Requirements
### Requirement: Editorial Branding
The `PodcastSection` SHALL maintain consistent brand labels and correct nomenclature.

#### Scenario: Label and Typo Correction
- **GIVEN** the `PodcastSection` header.
- **THEN** the label SHALL be "Línea editorial de alto valor".
- **AND** all instances of the brand watermark or text SHALL be "GRIT" (correcting any "GIRT" typos).

### Requirement: Podcast Layout
The Podcast Section MUST provide a focused editorial experience using standardized vertical padding instead of forcing a full viewport height.

#### Scenario: Section Spacing
- **GIVEN** a `PodcastSection` organism.
- **WHEN** rendered.
- **THEN** it SHALL utilize standardized vertical padding (e.g., `py-24`).
- **AND** its main content SHALL be centered horizontally.
- **REMOVED** ~~**AND** it SHALL have a minimum height of `100vh`.~~

### Requirement: Visual Atmosphere
The `PodcastSection` SHALL maintain the "Neon Noir" aesthetic through ambient glows.

#### Scenario: Background Glows
- **GIVEN** the `PodcastSection`.
- **THEN** it SHALL render a top-right glow in `brand-primary` color.
- **AND** a bottom-left glow in `brand-secondary` color.
- **AND** both SHALL use large blurs (`100px+`) and low opacity for a subtle ambient effect.

### Requirement: Editorial Motion
The Podcast section SHALL utilize scroll-driven reveals for its key components.

#### Scenario: Snappy Scrubbing
- **GIVEN** a scroll-driven reveal timeline.
- **THEN** the `scrub` catch-up duration SHALL NOT exceed `0.8s` to ensure a responsive interaction model.

