---
id: refactor-gsap-architecture
title: Refactor GSAP Animation Architecture
---

# Proposal: Refactor GSAP Animation Architecture

## Problem
Currently, GSAP animations and plugin registrations are scattered across individual components (e.g., `Hero.astro`, `Loader.astro`). This leads to redundant code, inconsistent configurations, and manual management of the `loader:complete` synchronization. As the project grows with more pages and components, this pattern will become unmaintainable and prone to race conditions or initialization conflicts.

## Solution
Centralize GSAP initialization and create a unified "Animation Orchestrator" that manages the synchronization between the page loader and component-level entrance timelines.

### Key Components:
1. **Global GSAP Init:** A centralized script to register plugins (ScrollTrigger) and set global defaults (ease, duration, force3D).
2. **Animation Orchestrator:** A reusable utility that components use to "register" their entrance timelines. It handles the logic of waiting for the `loader:complete` event or playing immediately if the loader has already finished (or isn't present).
3. **Refactored Hero:** Update `Hero.astro` to use the new centralized system, serving as the blueprint for future components.

## Impact
- **Developer Experience:** Easier to add animations to new components without boilerplate.
- **Performance:** Single plugin registration and consistent GPU acceleration settings.
- **Maintainability:** One place to adjust global animation timing or easing.
- **Future-proofing:** Ready for Astro View Transitions and multi-page navigation.

## Related Capabilities
- `gsap-global-init` (New): Centralized registration and configuration.
- `animation-orchestrator` (New): Logic for loader synchronization.
- `hero-section` (Modified): Updating hero to use the new system.
