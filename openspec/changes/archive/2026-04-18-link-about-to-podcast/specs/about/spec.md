# Spec Delta: About Section Interactivity

## ADDED Requirements
### Requirement: Navigation to Podcast
The "Sigue explorando" item in the About Section MUST be a clickable link.
#### Scenario: Navigation to Podcast
- **Given** the user is in the "La Misión" section (About Section).
- **When** the user clicks on the "Sigue explorando" badge.
- **Then** the page MUST scroll smoothly to the Podcast Section (`#podcast`).

### Requirement: Visual Fidelity
Link-based brand icons MUST maintain visual consistency with static ones.
#### Scenario: Visual Fidelity
- **Given** an icon with a link and an icon without a link.
- **Then** both MUST share the same layout, padding, and typography when in their default state.
- **And** the link-based icon MUST provide a visual hover state.
