# feature-cta-animation Specification

## Purpose
TBD - created by archiving change animate-feature-cta. Update Purpose after archive.
## Requirements
### Requirement: Feature CTA Scroll-Triggered Reveal
The `FeatureCTA` SHALL remain hidden until it enters the viewport.

#### Scenario: Entrance Animation Timing & Transparency
- **GIVEN** a user scrolls down to a `FeatureCTA` instance.
- **WHEN** the top of the component reaches `85%` of the viewport height.
- **THEN** all targeted elements (`.js-fcta-reveal`) SHALL be 100% transparent (`opacity: 0`) initially.
- **AND** the sequence SHALL use the `tl.from()` pattern to animate towards the final CSS state.

---

### Requirement: Choreographed CTA Reveal
The background element (Watermark or Marquee) SHALL be the first element to reveal in the sequence.

#### Scenario: Background reveal animation
- **Given** a FeatureCTA instance with a watermark OR marqueeWords
- **When** the scroll trigger activates
- **Then** the background element SHALL reveal with an opacity transition
- **And** it SHALL maintain its intended low-opacity state (e.g. 0.05 for marquee)

### Requirement: Accessible Motion for CTA
The system SHALL respect the user's preference for reduced motion for the `FeatureCTA`.

#### Scenario: Reduced Motion Preference
- **GIVEN** a system-level `prefers-reduced-motion: reduce` setting.
- **WHEN** the `FeatureCTA` is rendered and scrolled into view.
- **THEN** all vertical movement and scaling animations SHALL be bypassed.
- **AND** elements SHALL only perform a simple staggered fade-in (`autoAlpha: 0` to `1`).

### Requirement: FeatureCTA Background Animation
The `FeatureCTA` component SHALL support an animated background marquee of multiple words.

#### Scenario: Rendering the Marquee
- **GIVEN** the `FeatureCTA` component is provided with a `marqueeWords` prop.
- **WHEN** the component is rendered.
- **THEN** it SHALL render a horizontal container with the provided words alternating between "stroke" and "filled" styles.
- **AND** the background container SHALL span the full viewport width (`w-screen`).
- **AND** it SHALL initiate an infinite horizontal scroll animation using GSAP.

#### Scenario: Fallback for Static Watermark
- **GIVEN** the `FeatureCTA` component is provided with a `watermark` prop but NO `marqueeWords` prop.
- **WHEN** the component is rendered.
- **THEN** it SHALL render the single static watermark text as per existing behavior.
- **AND** the watermark container SHALL span the full viewport width (`w-screen`).

