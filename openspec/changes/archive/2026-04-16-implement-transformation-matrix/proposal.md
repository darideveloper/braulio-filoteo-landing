# Proposal: Implement Transformation Matrix Grid

## Goal
Implement the "Transformation Matrix" (Bento-style grid of 4 cards) as seen in the prototype to complete the methodology visualization in the `VoiceSection`.

## Summary
The `VoiceSection` currently only contains the asymmetric philosophical text. This proposal adds a 4-column grid of interactive cards (Claridad, Narrativa, Consistencia, Conversaciones) that follow the "Bold Editorial" aesthetic, featuring Material Symbols and a dynamic horizontal reveal on hover.

## Scope
- **New Molecule:** `src/components/molecules/TransformationCard.astro`
- **Updated Organism:** `src/components/organisms/VoiceSection.astro` (to include the grid).
- **Capabilities:** `transformation-matrix`

## Out of Scope
- Changes to other sections like `PillarsSection` or `PlansSection`.
- Modifications to global styles outside of local component utilities.
