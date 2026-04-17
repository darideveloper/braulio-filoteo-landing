# Podcast Section Motion Specification (Delta)

## Purpose

Definir una versión animada de `PodcastSection` que conserve su estructura actual y adopte un patrón editorial de GSAP consistente con el resto del sitio.

## ADDED Requirements

### Requirement: Podcast Editorial Reveal
The `PodcastSection` SHALL provide a single GSAP reveal sequence for its primary content blocks.

#### Scenario: Reveal order for main content
- **WHEN** the `PodcastSection` reaches its configured scroll-trigger start point
- **THEN** the section header SHALL reveal first
- **AND** the supporting editorial quote SHALL reveal immediately after with overlap
- **AND** the Spotify embed surface SHALL reveal as the section's main media beat
- **AND** the CTA block SHALL reveal after the embed
- **AND** the final explore button SHALL close the sequence as a separate concluding step

### Requirement: Wrapper-Based Animation Targets
The `PodcastSection` SHALL animate local wrappers instead of mutating internal behavior of child components.

#### Scenario: Encapsulated motion ownership
- **WHEN** GSAP targets are defined for the section
- **THEN** the animated nodes SHALL be wrappers declared inside `PodcastSection.astro`
- **AND** the implementation SHALL NOT require changes to `SectionHeader`, `SideBorderQuote`, `SpotifyEmbed`, `PodcastCTA`, or `BrandButton`

### Requirement: Ambient Glow Motion
The `PodcastSection` SHALL support subtle ambient motion for its decorative glow elements.

#### Scenario: Decorative background drift
- **WHEN** motion is enabled for the section
- **THEN** the decorative glow elements MAY move with subtle transform-based motion
- **AND** that motion SHALL remain secondary to the primary content reveal
- **AND** it SHALL NOT rely on layout-heavy properties

### Requirement: Reduced Motion Fallback
The `PodcastSection` SHALL respect reduced-motion preferences.

#### Scenario: Prefers reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** the section content SHALL remain immediately visible or use short opacity-only reveals
- **AND** it SHALL NOT apply pronounced `x`, `y`, `scale`, or decorative drift effects
