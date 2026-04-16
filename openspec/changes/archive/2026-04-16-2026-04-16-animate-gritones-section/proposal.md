# Proposal: Animate Gritones Section

## Goal
Implement high-fidelity, scroll-triggered GSAP animations for the `GritonesSection` component to ensure visual consistency with the "Neon Noir Editorial" aesthetic established in the Hero and About sections.

## Summary
The `GritonesSection` currently lacks the dynamic reveals found in other key sections. This proposal introduces a staggered reveal for the service cards and a smooth entrance for the section header, triggered when the user scrolls into view. It also ensures full accessibility for users with reduced motion preferences.

## Scope
- **Modified Components:** `src/components/organisms/GritonesSection.astro`
- **New Capabilities:** `gritones-animation`

## Out of Scope
- Modifications to other sections or components.
- Changes to the global animation orchestrator (unless required for registration).
- Styling changes beyond those necessary for animation (e.g., initial transparency).
