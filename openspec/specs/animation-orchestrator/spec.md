# animation-orchestrator Specification

## Purpose
TBD - created by archiving change refactor-gsap-architecture. Update Purpose after archive.
## Requirements
### Requirement: Loader Synchronization
The orchestrator SHALL provide a mechanism for components to register their entrance timelines.
#### Scenario: Wait for Loader
- **GIVEN** an entrance GSAP timeline in a component.
- **AND** a `Loader` component is present in the DOM.
- **WHEN** the component registers its timeline with the orchestrator.
- **THEN** the orchestrator SHALL wait for the `loader:complete` event before playing the timeline.

#### Scenario: Immediate Play (No Loader)
- **GIVEN** an entrance GSAP timeline in a component.
- **AND** NO `Loader` component is present in the DOM (e.g., navigating from another page).
- **WHEN** the component registers its timeline with the orchestrator.
- **THEN** the orchestrator SHALL play the timeline immediately.

#### Scenario: State Tracking (Late Registration)
- **GIVEN** the `loader:complete` event has already fired.
- **WHEN** a component registers its entrance timeline late.
- **THEN** the orchestrator SHALL play the timeline immediately.

### Requirement: Accessibility Integration
The orchestrator SHALL manage motion preferences centrally to simplify component logic.
#### Scenario: Handle Reduced Motion
- **GIVEN** a user has a `prefers-reduced-motion: reduce` system setting.
- **WHEN** a component registers its entrance timeline.
- **THEN** the orchestrator SHALL either skip complex animations or substitute them for simple fade-ins.

