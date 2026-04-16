# Proposal: Animate Hero Noir Section

## Goal
Implement high-fidelity, scroll-triggered GSAP animations for the `HeroNoir` component to ensure visual consistency with the "Neon Noir Editorial" aesthetic established in the Hero and About sections.

## Summary
The `HeroNoir` currently lacks the dynamic reveals found in other key sections. This proposal introduces a sequenced reveal for the text content and a smooth entrance for the editorial portrait, triggered when the user scrolls into view. It also ensures full accessibility for users with reduced motion preferences.

## Scope
- **Modified Components:** `src/components/organisms/HeroNoir.astro`
- **New Capabilities:** `hero-noir-animation`

## Out of Scope
- Modifications to other sections or components.
- Changes to the global animation orchestrator (as this section is usually below the fold).
- Styling changes beyond those necessary for animation (e.g., initial transparency).
