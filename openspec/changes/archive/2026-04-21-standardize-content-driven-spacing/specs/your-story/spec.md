# spec-delta: your-story

## MODIFIED Requirements

### Requirement: High-Impact Section Layout
The Your Story section MUST provide a high-impact, focused visual experience using standardized vertical padding.

#### Scenario: Section Spacing
- **Given** the "Your Story" section.
- **When** rendered.
- **Then** it SHALL utilize standardized vertical padding (e.g., `py-24`) via `SectionWrapper`.
- **REMOVED** ~~**Then** it SHALL have a minimum height of `100vh`.~~

#### Scenario: Centered Content
- **Given** the section content.
- **When** rendered.
- **Then** content SHALL be centered horizontally within the section.
- **REMOVED** ~~**Then** content SHALL be centered both horizontally and vertically.~~
