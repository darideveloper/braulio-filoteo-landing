# Design: Newsletter Marquee Animation

## Strategy
To maintain performance and isolation, we will use a GSAP `timeline` scoped specifically to the Newsletter section.

1. **Isolation**: We will create a new animation logic file `src/scripts/newsletter-marquee.ts` or extend existing GSAP management. The timeline will be created within a `gsap.context()` block tied to the Newsletter container ref. This ensures that when the component is unmounted or destroyed, all animations are cleaned up, preventing memory leaks or conflicts.
2. **Animation Pattern**: We will use a "seamless loop" pattern. The container will contain a duplicate set of words (or we will calculate the width precisely) and use a linear tween.
3. **Performance**: 
    - `ease: "none"` to ensure perfectly linear speed.
    - `will-change: transform` to promote the element to its own GPU layer.
    - `pointer-events: none` on the decoration container to keep it purely visual.
4. **Consistency**: We will follow the established pattern in `src/scripts/animation-manager.ts` and verify compatibility with existing animations.
