# Spec Delta: FeatureCTA Kinetic Background

## MODIFIED Requirements

### Requirement: Choreographed CTA Reveal
The background element (Watermark or Marquee) SHALL be the first element to reveal in the sequence.

#### Scenario: Background reveal animation
- **Given** a FeatureCTA instance with a watermark OR marqueeWords
- **When** the scroll trigger activates
- **Then** the background element SHALL reveal with an opacity transition
- **And** it SHALL maintain its intended low-opacity state (e.g. 0.05 for marquee)

## ADDED Requirements

### Requirement: FeatureCTA Background Animation
The `FeatureCTA` component SHALL support an animated background marquee of multiple words.

#### Scenario: Rendering the Marquee
- **GIVEN** the `FeatureCTA` component is provided with a `marqueeWords` prop.
- **WHEN** the component is rendered.
- **THEN** it SHALL render a horizontal container with the provided words alternating between "stroke" and "filled" styles.
- **AND** it SHALL initiate an infinite horizontal scroll animation using GSAP.

#### Scenario: Fallback for Static Watermark
- **GIVEN** the `FeatureCTA` component is provided with a `watermark` prop but NO `marqueeWords` prop.
- **WHEN** the component is rendered.
- **THEN** it SHALL render the single static watermark text as per existing behavior.
