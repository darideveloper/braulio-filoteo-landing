# Proposal: Animate Collab Section

## Goal
Implement high-fidelity, scroll-triggered GSAP animations for the `CollabSection` component to ensure visual consistency with the "Neon Noir Editorial" aesthetic of the project.

## Summary
The `CollabSection` (Colaboraciones) is currently static. This proposal introduces a choreographed reveal sequence that highlights the "Colaboremos" title and description, followed by a staggered entrance of the interactive collaboration items as the user scrolls into view.

## Scope
- **Modified Components:** `src/components/organisms/CollabSection.astro`
- **New Capabilities:** `collab-animation`

## Out of Scope
- Modifications to `CollabItem` molecule (animations will be applied via wrappers in the organism).
- Changes to the global animation orchestrator.
- Visual style changes beyond initial transparency for reveal.
