# your-story Specification Delta

## MODIFIED Requirements

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

## ADDED Requirements

### Requirement: Content Animation Integrity
All existing GSAP animations MUST be preserved.

#### Scenario: Animation Class Preservation
- **Given** the `YourStory.astro` script.
- **When** structural changes are made to the HTML slots.
- **Then** the elements with classes `.js-your-story-title` and `.js-your-story-description` MUST remain in the DOM.
- **AND** the GSAP timeline SHALL trigger their reveal as expected.
