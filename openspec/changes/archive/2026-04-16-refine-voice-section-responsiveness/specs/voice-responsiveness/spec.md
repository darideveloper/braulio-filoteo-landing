# voice-responsiveness Specification

## Purpose
Define the responsive behavior for the Voice methodology section and its methodology cards.

## ADDED Requirements

### Requirement: Responsive Editorial Grid
The `VoiceSection` SHALL adapt its 12-column grid layout based on container size.

#### Scenario: Mobile Layout
- **GIVEN** a container width below `@3xl`.
- **THEN** the headline and description SHALL occupy the full width (`col-span-12`).
- **AND** the Matrix Grid SHALL display in 1 column.

#### Scenario: Tablet Asymmetry
- **GIVEN** a container width starting at `@3xl`.
- **THEN** the headline SHALL occupy 10 columns.
- **AND** the description SHALL start at column 2 and occupy 10 columns.
- **AND** the Matrix Grid SHALL display in 2 columns.

#### Scenario: Desktop Noir Layout
- **GIVEN** a container width starting at `@5xl`.
- **THEN** the headline SHALL occupy 9 columns.
- **AND** the description SHALL start at column 6 and occupy 6 columns.
- **AND** the Matrix Grid SHALL display in 4 columns.

### Requirement: Responsive Card Assets
The `TransformationCard` SHALL scale its decorative elements for readability.

#### Scenario: Icon Scaling
- **GIVEN** a `TransformationCard`.
- **THEN** the icon size SHALL be `text-6xl!` on mobile.
- **AND** it SHALL scale to `text-7xl!` starting at `@3xl`.
