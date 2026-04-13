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

#### Scenario: Desktop Rendering
- **Given** the user is on a large screen (md+).
- **When** the "Your Story" section is rendered.
- **Then** the headline font size MUST be 8xl.
- **And** the word "MERECE" MUST have a thick purple underline.

### Requirement: Subheadline with Storytelling Highlights
The section MUST include a centered subheadline with inline highlights that emphasize key storytelling elements.

#### Scenario: Subheadline Highlights
- **Given** the subheadline "convertir tu voz en una plataforma".
- **When** "convertir tu voz" and "plataforma" are rendered.
- **Then** they MUST have an orange bottom border to draw attention.

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

