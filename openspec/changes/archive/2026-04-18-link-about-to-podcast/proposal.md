# Proposal: Link About Section to Podcast Section

## Overview
Currently, the "Sigue explorando" item in the `AboutSection` is a static visual element. To improve user flow and navigation, this item will be converted into a functional link that scrolls the user down to the `PodcastSection`.

## Motivation
The label "Sigue explorando" (Keep exploring) and its accompanying "arrow_forward" icon strongly imply interactivity. Making it a link aligns the UI's behavior with user expectations and facilitates discovery of the core podcast content.

## Scope
- Modify `src/components/organisms/AboutSection.astro` to support links in the `brandIcons` array.
- Update the "Sigue explorando" entry to point to `#podcast`.
- Ensure the UI remains visually identical while gaining link functionality.
