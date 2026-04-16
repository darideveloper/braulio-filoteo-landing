# transformation-matrix Specification

## Purpose
Define the design and interactive requirements for the Transformation Matrix grid cards.

## ADDED Requirements

### Requirement: TransformationCard Molecule
The `TransformationCard` SHALL provide a minimalist, interactive methodology card.

#### Scenario: Visual Components and Layout
- **GIVEN** a `TransformationCard` with `title="CLARIDAD DE PROPÓSITO"`.
- **THEN** it SHALL feature an icon at the top-left using `MaterialIcon`.
- **AND** it SHALL feature a bold, uppercase title at the bottom.
- **AND** it SHALL feature an initial `width-0` 4px underline in `brand-primary`.

#### Scenario: Hover Interactions
- **GIVEN** a user hovers over the card.
- **THEN** the background SHALL shift to `brand-surface`.
- **AND** the 4px underline SHALL expand to `width-full` over a `700ms` duration.

### Requirement: Matrix Grid Organism
The `VoiceSection` SHALL render the cards in a responsive grid.

#### Scenario: Grid Layout Stability
- **GIVEN** the `TransformationMatrix` inside the `VoiceSection`.
- **THEN** it SHALL use a 4-column grid on desktop (`@6xl`).
- **AND** it SHALL render cards using the `.map()` loop logic from a data array.

### Requirement: Entrance Animation (GSAP)
The cards SHALL enter the viewport with a choreographed sequence.

#### Scenario: Staggered Entrance
- **GIVEN** the `TransformationMatrix` scrolls into view.
- **WHEN** the section triggers the GSAP timeline.
- **THEN** the cards SHALL stagger their reveal from left-to-right with a `0.1s` delay.
