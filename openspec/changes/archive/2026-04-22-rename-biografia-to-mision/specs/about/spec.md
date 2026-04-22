# Spec Delta: about

## MODIFIED Requirements

### Requirement: Navigation to Podcast
The "Sigue explorando" item in the About Section MUST be a clickable link.

#### Scenario: Navigation to Podcast
- **Given** the user is in the "Misión" section (About Section).
- **When** the user clicks on the "Sigue explorando" badge.
- **Then** the page MUST scroll smoothly to the Podcast Section (`#podcast`).
