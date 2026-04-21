# spec-delta: core-architecture

## MODIFIED Requirements

### Requirement: Standardized Section Spacing
All main content sections SHALL NOT enforce a minimum height of `100vh`, with explicit exceptions for above-the-fold entry points and specialized layout containers.

#### Scenario: Global Spacing Consistency
- **GIVEN** a standard main section component (e.g., `SectionWrapper`, `PodcastSection`).
- **THEN** it SHALL NOT apply `min-h-screen` or `min-height: 100vh`.
- **AND** it SHALL utilize standardized vertical padding (e.g., `py-24`).

#### Scenario: Spacing Exceptions
- **GIVEN** a specialized entry or layout component (e.g., `Hero`, `Layout`, `404.astro`).
- **THEN** it MAY utilize `min-h-screen` to ensure proper viewport coverage or structural integrity.
