## ADDED Requirements

### Requirement: CTA Editorial Reveal
The `CtaSection` SHALL provide a single GSAP reveal sequence for its primary content blocks.

#### Scenario: Reveal order for CTA content
- **WHEN** the `CtaSection` reaches its configured scroll-trigger start point
- **THEN** the section header SHALL reveal first
- **AND** the CTA action row SHALL reveal next with overlap
- **AND** the optional contact block SHALL reveal without requiring separate component changes

#### Scenario: Editorial reveal uses discrete scroll triggering
- **WHEN** the main CTA reveal sequence is configured
- **THEN** it SHALL use a single timeline-level `ScrollTrigger`
- **AND** it SHALL use discrete play behavior rather than `scrub`
- **AND** it SHALL NOT create separate primary reveal triggers for each minor child element

### Requirement: Local Motion Ownership
The `CtaSection` SHALL own its GSAP setup locally.

#### Scenario: Section-only implementation scope
- **WHEN** motion is implemented for `CtaSection`
- **THEN** the wrappers, selectors, and animation setup SHALL live inside `src/components/organisms/CtaSection.astro`
- **AND** the implementation SHALL NOT require edits to other sections or reusable child components

#### Scenario: Scoped selector resolution
- **WHEN** the CTA motion targets are selected for animation
- **THEN** they SHALL be resolved from the current CTA section root
- **AND** the implementation SHALL avoid depending on unscoped global selectors for primary reveal targets

### Requirement: Watermark Decorative Motion
The optional watermark SHALL remain secondary to the CTA content.

#### Scenario: Watermark reveal
- **WHEN** the section renders with a watermark
- **THEN** the watermark MAY use subtle opacity or transform-based motion
- **AND** it SHALL NOT overpower the primary CTA content

### Requirement: Astro SSG Progressive Enhancement
The CTA section SHALL remain functional as static Astro-rendered markup.

#### Scenario: Static render without JavaScript
- **WHEN** JavaScript is disabled or GSAP does not execute
- **THEN** the CTA section SHALL still render visible and usable content
- **AND** the animation layer SHALL behave as progressive enhancement only

### Requirement: Reduced Motion Fallback
The `CtaSection` SHALL respect reduced-motion preferences.

#### Scenario: Prefers reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** the section content SHALL remain immediately visible or use short opacity-only reveals
- **AND** it SHALL NOT apply pronounced movement or decorative drift
