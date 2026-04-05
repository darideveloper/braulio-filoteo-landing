# Capability: Spotify Embed

## ADDED Requirements
### Requirement: Spotify iFrame Atom
The system SHALL provide a `SpotifyEmbed` atom to encapsulate the Spotify player.

#### Scenario: Rendering the Embed
- **GIVEN** a `SpotifyEmbed` with a valid Spotify show or episode URL.
- **THEN** it SHALL render an iframe with `rounded-xl` (12px) corners.
- **AND** it SHALL default to a width of `100%`.
- **AND** it SHALL support custom `height` and `title` props for accessibility.
