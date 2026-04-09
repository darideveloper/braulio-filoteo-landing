# Spec Delta: core-architecture

## MODIFIED Requirements
### Requirement: Container-Aware Responsiveness
All new editorial components SHALL use container-aware breakpoints (@3xl for 768px, @5xl for 1024px) instead of viewport breakpoints to ensure layout stability within the main content container.

#### Scenario: Global Layout Stability
- **GIVEN** a component inside the main container.
- **THEN** it SHALL use `@` breakpoints (e.g., `@3xl:grid-cols-2`).
- **AND** it SHALL NOT use standard `md:` or `lg:` viewport breakpoints.

### Requirement: Standardized Section Interface
The `SectionWrapper` organism SHALL be updated to provide more granular control over its internal `SectionHeader`.

#### Scenario: Header Prop Passthrough
- **GIVEN** a `SectionWrapper` with `headerLayout="inline-start"` and `titleColor="text-brand-secondary"`.
- **THEN** it SHALL pass these props to the `SectionHeader`.
- **AND** the section layout SHALL reflect these header-specific customizations.
