# hero-section Specification

## Purpose
TBD - created by archiving change add-hero-section. Update Purpose after archive.
## Requirements
### Requirement: Hero Section Content
The Hero section MUST display "BRAULIO FILOTEO" using the `EditorialPortrait` component for its main visual.

#### Scenario: Image usage in Hero
- **WHEN** the Hero component is rendered.
- **THEN** it SHALL use an `EditorialPortrait` with its main editorial image.
- **AND** it SHALL display the "EST. 2024" floating label and "DOCUMENTING HUMAN POTENTIAL" vertical text.

### Requirement: Hero Section Color Palette
The Hero section MUST use `brand-background` for its background and `brand-secondary` for its primary heading.

#### Scenario: Verify color contrast
- **WHEN** the Hero component is rendered.
- **THEN** the main title SHALL use the `brand-secondary` (Editorial Orange) token.
- **AND** the background SHALL use the `brand-background` (Midnight) token.

### Requirement: Hero Section Call to Action
The Hero section MUST include a prominent call to action button utilizing the signature brand gradient and sharp architecture.

#### Scenario: Render CTA button
- **WHEN** the Hero component is rendered.
- **THEN** the button SHALL use a 135° linear gradient from `brand-primary-light` to `brand-primary`.
- **AND** it SHALL have sharp `0.25rem` (sm) corners.
- **AND** typography SHALL use `Label-MD` (uppercase with 0.1em letter spacing) as defined in the global typography strategy.

### Requirement: Atmospheric Glows
The Hero section SHALL implement ambient background blurs for depth.

#### Scenario: Optimized Blur Rendering
- **GIVEN** decorative glow elements.
- **THEN** they SHALL use CSS `blur()` or `backdrop-filter: blur()`.
- **ADDED** **AND** the blur radius SHALL NOT exceed `60px` during active scroll animations to maintain GPU performance.
- **ADDED** **AND** the `scrub` catch-up duration for parallax glow effects SHALL NOT exceed `0.8s`.

### Requirement: Editorial Statistics
The Hero section SHALL display micro-credibility signals using consistent editorial styling.

#### Scenario: Stat item structure
- **GIVEN** a statistical metric.
- **THEN** it SHALL feature a `border-l-4` accent using `brand-primary` or `brand-secondary`.
- **AND** the number SHALL use `font-brand-display` at `text-2xl` or larger.

### Requirement: HeroEditorial Variant
The project SHALL support a `HeroEditorial` variant for text-driven asymmetric layouts.

#### Scenario: Rendering Gritones Services Grid
- **GIVEN** a `GritonesSection` organism.
- **WHEN** rendered.
- **THEN** it SHALL use a `SectionHeader` with `layout="inline"`.
- **AND** it SHALL render a collection of `ServiceCard` molecules within a 4-column grid (`grid-cols-1 md:grid-cols-4`).
- **AND** it SHALL support variable col-spans for its items to create an asymmetric layout.

### Requirement: Gritones Section
The project SHALL include a "Gritones Studio" bento services section.

#### Scenario: Rendering Gritones Services Grid
- **GIVEN** a `GritonesSection` organism.
- **WHEN** rendered.
- **THEN** it SHALL use a `SectionHeader` with `layout="inline"`.
- **AND** it SHALL render a collection of `ServiceCard` molecules within a 4-column grid (`grid-cols-1 md:grid-cols-4`).
- **AND** it SHALL support variable col-spans for its items to create an asymmetric layout.

### Requirement: Hero Entrance Sequence
The Hero section SHALL implement a sequenced GSAP entrance timeline that explicitly defines its destination visibility state.

#### Scenario: Visibility Restoration
- **GIVEN** the Hero section is initialized with `.js-reveal` elements (hidden by CSS).
- **WHEN** the GSAP initialization script for the Hero executes.
- **THEN** it SHALL set the visibility state of `.js-reveal` elements to `autoAlpha: 1` before or during timeline creation.
- **AND** the subsequent `.from()` animations SHALL animate from `autoAlpha: 0` to this restored visible state.

### Requirement: Hero Depth & Interactivity
The Hero section SHALL utilize GSAP's `ScrollTrigger` and mouse event listeners to create depth.

#### Scenario: Portrait Parallax on Scroll
- **GIVEN** a user is scrolling through the Hero section.
- **THEN** the `EditorialPortrait` SHALL move at a slower relative rate (e.g., `yPercent: 15`) to the scroll position.
- **AND** the background blurs SHALL drift at different rates to simulate 3D depth.

#### Scenario: Interactive Portrait Tilt
- **GIVEN** a user is moving their mouse within the Hero section container.
- **THEN** the `EditorialPortrait` and its decorative frame SHALL slightly tilt or offset (`±10px`) in response to mouse coordinates.
- **AND** the effect SHALL be subtle enough to avoid distraction while providing tactile feedback.

### Requirement: Optimized Scroll Interactions
The Hero section SHALL utilize centralized GSAP configurations for performance-tuned scroll-linked effects.
#### Scenario: Enhanced Scroll Performance
- **WHEN** scroll-based animations (glows, portrait parallax) are defined in the Hero.
- **THEN** they SHALL utilize global GSAP defaults and the `ScrollTrigger` plugin registered by the global init.
- **AND** high-performance elements SHALL include the `will-change` CSS property as per project standards.

### Requirement: Hero Section Layout Stability
The Hero section MUST provide sufficient vertical clearance for absolute-positioned elements to prevent content overlap.

#### Scenario: Prevent Scroll Indicator Overlap
- **GIVEN** a Hero section with a centered container and a bottom-aligned scroll indicator.
- **WHEN** the viewport height is reduced or content expands.
- **THEN** the main container SHALL include a minimum bottom padding of `6rem` (`pb-24`).
- **AND** this padding SHALL ensure the content grid does not overlap with the scroll indicator positioned at `bottom-10`.

### Requirement: Hero Scroll Indicator Animation
The Hero scroll indicator MUST use a decoupled animation strategy to prevent conflicts between entrance reveals and scroll interactions.

#### Scenario: Decoupled Entrance and Scroll Animations
- **GIVEN** a scroll indicator in the Hero section.
- **WHEN** the entrance timeline plays.
- **THEN** it SHALL animate an outer wrapper (`.js-hero-scroll-wrapper`).
- **WHEN** the user scrolls the page.
- **THEN** the ScrollTrigger SHALL animate the inner content (`.js-hero-scroll`).
- **AND** the ScrollTrigger SHALL use `immediateRender: false` to avoid premature state changes.
- **AND** the animation SHALL use `overwrite: 'auto'` to resolve potential property conflicts.

### Requirement: Hero Image Performance
The Hero section's main visual SHALL be optimized for Largest Contentful Paint (LCP) to improve SEO performance.

#### Scenario: Above-the-fold Image Loading
- **GIVEN** the `EditorialPortrait` in the Hero section.
- **THEN** it SHALL use `loading="eager"` to ensure immediate download.
- **AND** it SHALL use `fetchpriority="high"` to prioritize it over other page resources.
- **AND** it SHALL include `decoding="sync"` for faster rendering.

