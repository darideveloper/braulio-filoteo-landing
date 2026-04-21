# spec-delta: social-section

## MODIFIED Requirements

### Requirement: High-Contrast Layout
The Social Section MUST use the deepest brand background and provide a high-impact visual experience using standardized padding.

#### Scenario: Section styling
- **WHEN** the SocialSection component is rendered.
- **THEN** it SHALL use `brand-background` (#0E0E0E).
- **AND** it SHALL have a `border-t` using `brand-surface-bright/20`.
- **AND** it SHALL utilize standardized vertical padding (e.g., `py-24`) via `SectionWrapper`.
- **AND** its main content SHALL be centered within the padded area.
- **REMOVED** ~~**AND** it SHALL have a minimum height of `100vh` (e.g., `min-h-screen`).~~
