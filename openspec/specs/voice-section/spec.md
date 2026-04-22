# voice-section Specification

## Purpose
The `VoiceSection` organism provides a high-impact editorial space to establish the authority of the "platform" concept, emphasizing the depth of personal brand ideas through a stark, asymmetric design.
## Requirements
### Requirement: Editorial Copy
The `VoiceSection` SHALL use specific, verified copy to maintain brand authority.

#### Scenario: Headline and Description
- **GIVEN** the `VoiceSection` headline.
- **THEN** it SHALL be: "TU VOZ PUEDE CONVERTIRSE EN UNA PLATAFORMA."
- **AND** the description SHALL be: "Hoy la marca personal no se construye con frases motivacionales. Se construye con la profundidad de las ideas and la radicalidad de la ejecución."

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

### Requirement: Methodology Pillar Titles
The `VoiceSection` SHALL use specific terminology for its methodology pillars to ensure brand alignment.

#### Scenario: Update Clarity Pillar
- **GIVEN** the first pillar in the `VoiceSection` transformation matrix.
- **THEN** its title SHALL be "claridad de promesa de valor".

