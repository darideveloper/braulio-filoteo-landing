# Proposal: Animate Pillars Section

## Goal
Implement high-fidelity, scroll-triggered GSAP animations for the `PillarsSection` component to ensure visual consistency with the "Neon Noir Editorial" aesthetic of the project.

## Summary
The `PillarsSection` (Methodology) is currently static. This proposal introduces a choreographed reveal sequence that highlights the section's core "PILARES" and its four methodology cards as the user scrolls into view. The implementation will be performant and accessible.

## Scope
- **Modified Components:** `src/components/organisms/PillarsSection.astro`
- **New Capabilities:** `pillars-animation`

## Out of Scope
- Modifications to the `PillarCard` molecule (animations will be applied via wrappers or classes in the organism).
- Changes to the global animation orchestrator.
- Visual style changes beyond initial transparency for reveal.
