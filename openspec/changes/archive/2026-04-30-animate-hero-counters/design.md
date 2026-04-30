# Design: Hero Counter Animations

## Architecture
The animation logic is encapsulated within a helper function `animateCounters` inside the component scripts. This keeps the logic local to the components that need it while allowing for slight variations in trigger timing (e.g., entrance complete vs. scroll trigger).

### Hook Strategy
We use two custom attributes in the HTML to facilitate the animation without breaking the static layout:
-   `.js-stat-value`: The target class for the script.
-   `data-value`: Stores the final string (e.g., "100+").

### Animation Logic
1.  **Selection:** Find all `.js-stat-value` elements.
2.  **Parsing:** Use a regex to extract the numeric part (`\d+`) and the suffix (everything else).
3.  **Initialization:** Set the element's `textContent` to "0" plus the suffix.
4.  **Tweening:** Use a GSAP tween on a dummy object `{ value: 0 }` to `targetValue`.
5.  **Update:** In the `onUpdate` callback, update the DOM element's text.

### Triggering
-   **Hero:** Triggered via `onComplete` of the `animationManager.registerEntrance(tl)` timeline.
-   **HeroNoir:** Triggered via `onComplete` of the `ScrollTrigger` timeline.

## Trade-offs
-   **Inline Scripting:** The logic is currently repeated in `Hero.astro` and `HeroNoir.astro`. Given the small size (15 lines), this is acceptable to keep components self-contained. If more sections need counters, we should move this to a utility in `src/scripts/utils/`.
-   **Flash of Final Value:** To prevent a flash of the final value before the animation starts, we explicitly set the text to "0" at the start of the initialization logic.
