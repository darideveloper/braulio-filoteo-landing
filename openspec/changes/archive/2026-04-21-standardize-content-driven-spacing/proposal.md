# Proposal: Standardize Content-Driven Spacing

## Problem
The previous architectural mandate required all main sections to enforce a minimum height of `100vh` (`min-h-screen`). While this achieved a "chapter-based" editorial feel, it often created excessive empty space on large viewports or when content was sparse, leading to a disconnected user experience and potential layout issues on smaller devices.

## Proposed Solution
Transition from viewport-locked sections to a content-driven spacing model. This strategy relies on standardized vertical padding (`py-24`) and specific margins to maintain the editorial "Noir" aesthetic while allowing sections to scale naturally with their content.

## Impact
- **Consistency**: All sections utilize `SectionWrapper` with a shared padding standard.
- **Responsiveness**: Improved behavior on mobile and tablet as sections no longer force height.
- **Performance**: Simplifies GSAP ScrollTrigger calculations by removing rigid height constraints.

## Status
This change is **already implemented** in the codebase. This proposal serves to retroactively align the documentation and specifications with the current implementation.
