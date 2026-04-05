# Proposal: Add Podcast Section and SectionHeader Component

## Problem
The Braulio Filoteo landing page needs a dedicated section to showcase the "GRITones Podcast," including a Spotify embed and a call to action (CTA) for listeners. Additionally, the existing section header pattern (Headline + Title) is repeated manually across sections (About, Hero), leading to code duplication and inconsistent styling.

## Solution
1.  **Extract `SectionHeader.astro`**: Create a reusable molecule that encapsulates the "Headline" (Label-MD overline) and "Title" (Display-LG/Headline-MD) pattern.
2.  **Implement `PodcastSection.astro`**: A new organism that uses the `SectionHeader` and the `SpotifyEmbed` component.
3.  **Implement `SpotifyEmbed.astro`**: A new atom for embedding Spotify content (shows, episodes, playlists) with brand-aligned styling.
4.  **Implement `PodcastCTA.astro`**: A new molecule for the "Crea tu podcast" conversion card, reusing existing brand colors and buttons.
5.  **Material Symbols Integration**: Add a lightweight `MaterialIcon.astro` atom for consistent icon usage.

## Scope
- `src/components/atoms/MaterialIcon.astro` (New)
- `src/components/atoms/SpotifyEmbed.astro` (New)
- `src/components/molecules/SectionHeader.astro` (New)
- `src/components/molecules/PodcastCTA.astro` (New)
- `src/components/organisms/PodcastSection.astro` (New)
- `src/pages/index.astro` (Update to include the new section)

## Out of Scope
- Updating `BrandButton.astro` or `Badge.astro` styles (maintain current project standards).
- Adding new color variables to `global.css` (reuse existing `brand-surface`, `brand-primary`, etc.).
- Backend integrations for the CTA (static link/button only).
