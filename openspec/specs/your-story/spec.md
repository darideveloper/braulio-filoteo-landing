# your-story Specification

## Purpose
TBD - created by archiving change 2026-04-08-add-your-story-section. Update Purpose after archive.
## Requirements
### Requirement: High-Impact Section Layout
The Your Story section MUST provide a high-impact, focused visual experience.

#### Scenario: Full Viewport Height
- **Given** the "Your Story" section.
- **When** rendered.
- **Then** it SHALL have a minimum height of `100vh`.

#### Scenario: Centered Content
- **Given** the section content.
- **When** rendered.
- **Then** content SHALL be centered both horizontally and vertically.

### Requirement: High-Impact Editorial Headline
The section MUST feature a large, centered, uppercase headline with mixed typographic treatments.

#### Scenario: Correct Slot Usage
- **Given** the "Your Story" section.
- **When** rendered.
- **Then** the main headline MUST be correctly targeted to the `SectionHeader`'s `title` slot.
- **And** it MUST NOT render an empty `h2` tag before the title.

### Requirement: Subheadline with Storytelling Highlights
The section MUST include a centered subheadline with inline highlights.

#### Scenario: Description Text Correction
- **Given** the subheadline content in `YourStory.astro`.
- **When** rendered.
- **Then** the text SHALL be: "Y como <span ...>evitarlo</span> desde el <span ...>inicio</span>."
- **AND** it SHALL be correctly rendered via the `description` slot of `SectionHeader`.

### Requirement: Centered CTA & Contact Row
The section MUST provide a centered action row with a primary CTA and contact information.

#### Scenario: CTA Action
- **Given** the "Crea tu podcast" button.
- **When** rendered in the "Your Story" section.
- **Then** it MUST be centered and use the primary gradient variant.

#### Scenario: Contact Email & Link
- **Given** the "Your Story" section is rendered.
- **When** the contact information is displayed.
- **Then** the email SHALL be `info@grit-ones.com`.
- **And** it SHALL be a clickable link (`mailto:info@grit-ones.com`).
- **And** it SHALL change color on hover (e.g., `hover:text-brand-primary`).

### Requirement: Subtle Background Watermark
The section MUST include a subtle, large background watermark to break visual monotony.

#### Scenario: Watermark Containment
- **Given** the "GRIT" watermark text.
- **When** rendered.
- **Then** it MUST have an opacity of approximately 0.03.
- **And** it MUST NOT cause horizontal overflow.

### Requirement: Content Animation Integrity
All existing GSAP animations MUST be preserved.

#### Scenario: Animation Class Preservation
- **Given** the `YourStory.astro` script.
- **When** structural changes are made to the HTML slots.
- **Then** the elements with classes `.js-your-story-title` and `.js-your-story-description` MUST remain in the DOM.
- **AND** the GSAP timeline SHALL trigger their reveal as expected.

