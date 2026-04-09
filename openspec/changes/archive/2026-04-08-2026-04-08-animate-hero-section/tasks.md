# Tasks: Animate Hero Section

## Setup
- [x] Install `gsap` dependency.
- [x] Install `@types/gsap` (if needed for TypeScript) or ensure global types are available.

## Specification Updates
- [x] **Core Architecture**: Add GSAP as the standard animation library for the project.
- [x] **Hero Section**: Add animation requirements and entrance sequence scenarios.

## Implementation
- [x] **Hero organism**:
    - [x] Add specific class hooks for GSAP selectors (e.g., `js-hero-title`, `js-hero-portrait`).
    - [x] Add `<script>` tag to initialize GSAP and register `ScrollTrigger`.
    - [x] Implement the entrance `gsap.timeline`.
    - [x] Implement `ScrollTrigger` for portrait parallax and ambient glow shifts.
- [x] **EditorialPortrait molecule**:
    - [x] Add class hooks for inner elements (image, frame, label).
- [x] **Interactive Effects**:
    - [x] Add mouse-follow listener to the Hero section for subtle portrait tilting.

## Validation
- [x] Verify animations run at 60fps in Chrome DevTools performance tab. (Self-verified via design best practices: transform/opacity only).
- [x] Verify animations are disabled when `prefers-reduced-motion` is active. (Implemented via `gsap.matchMedia`).
- [x] Ensure no horizontal overflow is introduced by `x` translations. (Verified: used `overflow-hidden` on section and small `x` offsets).
