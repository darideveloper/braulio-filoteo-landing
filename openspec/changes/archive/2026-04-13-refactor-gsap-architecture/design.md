# Design: Refactor GSAP Animation Architecture

## Architecture Overview
The system will shift from component-contained GSAP logic to a centralized model where components only define their creative timelines and register them with a global orchestrator.

### 1. Global Initialization (`src/scripts/gsap-init.ts`)
A dedicated TypeScript file will handle the "one-time" setup for GSAP across the entire site.
- **Responsibilities:**
  - Import `gsap` and `ScrollTrigger`.
  - Call `gsap.registerPlugin(ScrollTrigger)`.
  - Set global defaults (`gsap.defaults({ ease: "power4.out", duration: 1.2 })`).
  - Configure performance flags (`gsap.config({ force3D: true })`).

### 2. Animation Orchestrator (`src/scripts/animation-manager.ts`)
A utility to manage the lifecycle of entrance animations, specifically coordinating with the `Loader`.
- **Logic:**
  - **State Tracking:** Maintain a private `isLoaderComplete` flag. This flag is set to `true` when `loader:complete` fires.
  - **Initial State:** On script load, check if `#loader` exists. If not, `isLoaderComplete` defaults to `true`.
  - **Function:** `registerEntrance(timeline: gsap.core.Timeline | gsap.core.Tween)`:
    - If `isLoaderComplete` is `true`, it calls `.play()` on the timeline immediately.
    - If `isLoaderComplete` is `false`, it adds the timeline to a queue (or adds an event listener) to play when `loader:complete` fires.
  - **Motion Preference:** The orchestrator will automatically handle `prefers-reduced-motion`. If the user prefers reduced motion, the orchestrator will:
    - Jump the timeline to the end (`.progress(1)`) AND then fade in the container OR
    - Play a simplified fade-in instead.

### 3. Implementation in `Layout.astro`
The `gsap-init.ts` and `animation-manager.ts` will be imported once in the global layout.
- This ensures they are ready before any component's script runs.
- The `animation-manager.ts` will listen for `loader:complete` and update its internal state.

### 4. Component Refactoring (e.g., `Hero.astro`)
Individual components will be simplified:
- **Before:** Manual plugin registration, manual event listener for `loader:complete`, manual `matchMedia` for reduced motion.
- **After:**
  - Create the timeline (initially paused).
  - Use `animationManager.registerEntrance(tl)`.
  - Let the manager handle the "when" and "how" (motion preferences).

## Sequence Diagram (Entrance Animation)
1. **Page Load:** `Layout.astro` executes `gsap-init.ts` and `animation-manager.ts`.
2. **Component Init:** `Hero.astro` creates its timeline (initially paused) and calls `animationManager.registerEntrance(tl)`.
3. **Manager Logic:**
   - If `isLoaderComplete` is true: `tl.play()`.
   - Else: Store reference to `tl`.
4. **Loader Finishes:** `Loader.astro` dispatches `loader:complete`.
5. **Manager Reaction:** Manager catches event, sets `isLoaderComplete = true`, and plays all queued timelines.

## Multi-page / View Transitions Strategy
- The `AnimationManager` will reset its `isLoaderComplete` flag on `astro:after-swap` or `astro:page-load` depending on whether a loader is present on the new page.
- This ensures that navigating to a sub-page that doesn't have a loader will trigger animations immediately.
