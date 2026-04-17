# your-story-motion Specification

## Purpose
TBD - created by archiving change animate-your-story-section. Update Purpose after archive.
## Requirements
### Requirement: Your Story Editorial Reveal
The `YourStory` section SHALL provide a single GSAP reveal sequence for its primary content blocks.

#### Scenario: Reveal order for Your Story content
- **WHEN** the `YourStory` section reaches its configured scroll-trigger start point
- **THEN** the decorative watermark SHALL reveal as a subtle secondary layer
- **AND** the primary headline SHALL reveal next as the main visual beat
- **AND** the supporting description SHALL reveal with overlap
- **AND** the action row SHALL reveal last without requiring changes to shared child components

#### Scenario: Discrete scroll-triggered motion
- **WHEN** the main `YourStory` reveal sequence is configured
- **THEN** it SHALL use a single timeline-level `ScrollTrigger`
- **AND** it SHALL use discrete play behavior rather than `scrub`
- **AND** it SHALL NOT create separate primary reveal triggers for each minor child element

### Requirement: Local Motion Ownership For Your Story
The `YourStory` section SHALL own its GSAP setup locally.

#### Scenario: Section-only implementation scope
- **WHEN** motion is implemented for `YourStory`
- **THEN** the wrappers, selectors, and animation setup SHALL live inside `src/components/organisms/YourStory.astro`
- **AND** the implementation SHALL NOT require edits to other sections, shared scripts, or reusable child components

#### Scenario: Scoped selector resolution
- **WHEN** the `YourStory` motion targets are selected for animation
- **THEN** they SHALL be resolved from the current section root
- **AND** the implementation SHALL avoid depending on unscoped global selectors for primary reveal targets

### Requirement: Decorative Watermark Motion
The `GRIT` watermark in `YourStory` SHALL remain a secondary atmospheric layer.

#### Scenario: Watermark treatment
- **WHEN** the watermark is animated in `YourStory`
- **THEN** it SHALL use only subtle opacity or transform-based motion
- **AND** it SHALL NOT overpower the section headline or CTA content

### Requirement: Astro SSG Progressive Enhancement For Your Story
The `YourStory` section SHALL remain functional as static Astro-rendered markup.

#### Scenario: Static render without JavaScript
- **WHEN** JavaScript is disabled or GSAP does not execute
- **THEN** the `YourStory` section SHALL still render visible and usable content
- **AND** the animation layer SHALL behave as progressive enhancement only

### Requirement: Reduced Motion Fallback For Your Story
The `YourStory` section SHALL respect reduced-motion preferences.

#### Scenario: Prefers reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** the section content SHALL remain immediately visible or use short opacity-only reveals
- **AND** it SHALL NOT apply pronounced motion to the headline, watermark, or CTA row
