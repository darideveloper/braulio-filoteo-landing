# podcast-section Specification

## Purpose
TBD - created by archiving change add-podcast-section. Update Purpose after archive.
## Requirements
### Requirement: Podcast Layout
The Podcast section SHALL feature a dual-column layout for the introduction and a full-width media area.

#### Scenario: Header and Intro Grid
- **GIVEN** the `PodcastSection`.
- **THEN** it SHALL use a grid where the `SectionHeader` and title take 8 columns on large screens.
- **AND** a description block with a left brand-purple border (`border-l-2`) takes 4 columns.
- **AND** the description SHALL use italicized body text (`italic`) for emphasis.

#### Scenario: Spotify Integration
- **GIVEN** the `PodcastSection`.
- **THEN** it SHALL render a `SpotifyEmbed` component.
- **AND** the embed SHALL load the Spotify "GRITones" show URL.

#### Scenario: Exploration Action
- **GIVEN** the `PodcastSection`.
- **THEN** it SHALL include a centered `BrandButton` at the bottom with the text "Explorar todos los episodios".
- **AND** it SHALL use the `outline` variant to maintain stylistic consistency.

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

