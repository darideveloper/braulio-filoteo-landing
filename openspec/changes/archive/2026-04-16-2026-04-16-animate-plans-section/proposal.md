# Proposal: Animate Plans Section

## Goal
Implement high-fidelity, scroll-triggered GSAP animations for the `PlansSection` component to ensure visual consistency with the "Neon Noir Editorial" aesthetic of the project.

## Summary
The `PlansSection` is a critical part of the conversion funnel but is currently static. This proposal introduces a choreographed reveal sequence that highlights the value proposition, the two main plans, and the final booking CTA as the user scrolls. The implementation will be performant and accessible.

## Scope
- **Modified Components:** `src/components/organisms/PlansSection.astro`
- **New Capabilities:** `plans-animation`

## Out of Scope
- Modifications to `PlansCard` molecule (animations will be applied via wrappers or classes).
- Changes to the global animation orchestrator.
- Visual style changes beyond initial transparency for reveal.
