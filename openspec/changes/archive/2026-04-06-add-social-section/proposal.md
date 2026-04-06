---
change-id: add-social-section
title: Implement High-Engagement Social Section with Portrait Gallery
description: Implement the "Conversaciones que continúan" section from ui-design/socials/code.html, including a horizontal portrait slider and a 3-column social platform grid.
author: Gemini CLI
status: implemented
---

# Proposal: Implement High-Engagement Social Section

## Context
The current `social-section` specification and implementation are minimal. The `ui-design/socials/code.html` reference provides a more sophisticated, editorial-style section that aligns with the "Neon Noir Editorial" branding of the project.

## Goals
1. Implement the "Conversaciones que continúan" header using the existing `SectionHeader` component (with updates).
2. Create a horizontal, touch-friendly, snapping portrait gallery for editorial imagery.
3. Implement a 3-column grid for social platform links (LinkedIn, Instagram, YouTube) with distinct hover states and Material 3 inspired colors.
4. Ensure the section is data-driven, making it easy to add or update images and platforms.

## Proposed Changes
### Core Specs
- **MODIFIED `social-section`**: Update with detailed requirements for the layout, gallery, and grid.
- **MODIFIED `branding`**: Add required color tokens (outline-variant).
- **MODIFIED `editorial-portrait`**: Add a `minimal` variant for use in galleries.

### Components
- **NEW `src/components/molecules/SocialCard.astro`**: A reusable card for social platform links.
- **NEW `src/components/organisms/SocialSection.astro`**: Orchestrates the header, gallery, and grid.

## Data Structure
The `SocialSection` will accept:
- `portraits`: An array of `{ src, alt }` for the gallery.
- `platforms`: An array of `{ name, description, icon, tag, href, color }` for the grid.

## Validation Plan
1. **Visual Comparison**: Compare the implemented section against `ui-design/socials/code.html` via screenshots.
2. **Responsiveness**: Verify the slider behavior and grid stacking on mobile/tablet.
3. **Interactivity**: Test hover states on portraits and social cards.
4. **Build Check**: Ensure no TypeScript or Astro build errors.
