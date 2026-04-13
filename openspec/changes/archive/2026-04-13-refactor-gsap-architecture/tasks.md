# Tasks: Refactor GSAP Animation Architecture

## Preparation
- [x] Create `src/scripts/` directory if it does not exist.

## Implementation - Core
- [x] Create `src/scripts/gsap-init.ts`:
    - Register `ScrollTrigger`.
    - Set `gsap.defaults`.
    - Set `gsap.config`.
- [x] Create `src/scripts/animation-manager.ts`:
    - Implement the `registerEntrance` logic.
    - Handle `loader:complete` synchronization.
    - Add logic for non-motion preference fallback.

## Implementation - Integration
- [x] Update `src/layouts/Layout.astro`:
    - Import `src/scripts/gsap-init.ts` in the client-side script block.
- [x] Refactor `src/components/organisms/Hero.astro`:
    - Remove local `gsap.registerPlugin(ScrollTrigger)`.
    - Import and use `animationManager.registerEntrance()`.
    - Simplify the `matchMedia` logic by relying on the orchestrator.

## Validation
- [x] Verify that the Loader still plays correctly.
- [x] Verify that Hero animations trigger only after `loader:complete`.
- [x] Verify that Hero animations trigger immediately if the Loader is manually hidden (simulating a direct sub-page load).
- [x] Verify that `prefers-reduced-motion` still works (simple fade-in instead of movement).
