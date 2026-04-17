# Proposal: Implement Voice Methodology Section

## Goal
Implement the "Voice Methodology" section (upper portion of the provided prototype) to establish the narrative foundation for the podcast as a platform, following the project's asymmetric editorial grid conventions.

## Summary
The current landing page transitions quickly from the about section to the podcast section. This change adds a high-impact transitional section that explains the "Voice as a Platform" philosophy. It uses a 12-column asymmetric grid, gradient typography, and GSAP scroll reveals to match the premium "Noir" aesthetic.

## Scope
- **New Organism:** `src/components/organisms/VoiceSection.astro`
- **Page Integration:** Add to `src/pages/index.astro` above the current Vehicle (Podcast) CTA.
- **Capabilities:** `voice-section`

## Out of Scope
- Changes to the `FeatureCTA` molecule.
- Modifications to the global footer or header.
