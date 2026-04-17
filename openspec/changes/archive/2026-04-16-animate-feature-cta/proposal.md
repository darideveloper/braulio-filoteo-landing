# Proposal: Animate Feature CTA Section

## Goal
Implement high-fidelity, scroll-triggered GSAP animations for the `FeatureCTA` component to ensure visual consistency with the "Neon Noir Editorial" aesthetic of the project.

## Summary
The `FeatureCTA` (The Vehicle section) is currently static. This proposal introduces a choreographed reveal sequence that highlights the background watermark, the section label, the primary headline, and the final call-to-action button as the user scrolls into view. The implementation will be performant and accessible.

## Scope
- **Modified Components:** `src/components/molecules/FeatureCTA.astro`
- **Capabilities:** `feature-cta-animation`

## Out of Scope
- Changes to the `VoiceSection` or other organisms.
- Modifications to the global animation orchestrator.
- Visual style changes beyond initial transparency for reveal.
