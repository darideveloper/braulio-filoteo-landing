# Design: Slow Down About Section Animations

## Architectural Decisions

### 1. Timing Refinement
To achieve a "heavier," more deliberate visual weight, we will shift the GSAP timeline from a high-overlap model to a more sequential one.

### 2. Implementation Specifics
- **Initial Delay:** A fixed `delay: 0.5` will be applied to the first tween in the timeline. This is a crucial "pause" that aligns the user's eye with the section before movement begins.
- **Duration Scaling:**
    - Header: `1.4s` (was 1.0s)
    - Mission Cards: `1.2s` (was 0.8s)
    - Quote: `1.5s` (was 1.0s)
    - Icons: `0.8s` (was 0.6s)
- **Stagger Delays:** Increased to `0.3s` for cards to make each mission point distinct.
- **Sequential Overlap:** Reduced to `"-=0.4"` or `"-=0.3"` to ensure each element group has its own moment of focus.

### 3. ScrollTrigger Threshold
Moving the trigger `start` to `top 75%` (from `80%`) makes the animation feel less "surprising" as it triggers when the section is slightly more established in the viewport.

## Accessibility Considerations
The `prefers-reduced-motion` settings will remain unchanged as they correctly provide a simple fade-in. The slower timings will only apply to the motion-enabled timeline.

## Alternatives Considered
- **Slowing via CSS Transitions:** Rejected because it lacks the precise staggered timeline control needed for multiple groups.
- **Global GSAP Defaults:** Changing `gsap.defaults` would affect the entire site (including the Hero), which is not desired. We will keep the overrides local to the `AboutSection` timeline.
