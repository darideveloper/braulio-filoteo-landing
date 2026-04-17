# voice-section Specification

## Purpose
Define the layout and behavior for the Voice Methodology transitional section.

## ADDED Requirements

### Requirement: Asymmetric Editorial Grid
The `VoiceSection` SHALL implement an asymmetric layout based on the 12-column editorial grid.

#### Scenario: Grid Column Allocation
- **GIVEN** a `VoiceSection` component.
- **THEN** the primary headline SHALL occupy columns `1` to `9` on desktop (`@5xl`).
- **AND** the secondary description SHALL occupy columns `6` to `12` on desktop (`@5xl`).
- **AND** the description SHALL feature a `4px` left border in `brand-primary` color.

### Requirement: Brand-Aligned Typography
The `VoiceSection` SHALL use specific typographic treatments to emphasize the "Noir" aesthetic.

#### Scenario: Gradient Typography
- **GIVEN** the word "convertirse" in the `VoiceSection` headline.
- **THEN** it SHALL apply a linear gradient from `brand-primary` to `brand-secondary`.
- **AND** it SHALL use the `bg-clip-text` utility.

### Requirement: Entrance Reveal
The `VoiceSection` SHALL implement scroll-triggered entrance animations.

#### Scenario: Sequenced Scroll Reveal
- **GIVEN** a user scrolls to the `VoiceSection`.
- **WHEN** the section enters the viewport at `80%`.
- **THEN** the headline SHALL slide up and fade in.
- **AND** the description SHALL follow with a `0.2s` delay.
