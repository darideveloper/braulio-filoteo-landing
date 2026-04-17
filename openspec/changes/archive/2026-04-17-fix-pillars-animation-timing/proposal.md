# Proposal: Fix Pillars Animation Timing

## Problem
The animations in the `PillarsSection` (Methodology) trigger too early and play too fast. Because the trigger point is at `top 80%` and the section has significant top padding, the animation is often nearly finished by the time the user actually sees the content. Additionally, the heavy overlap (`-=1.0`) and fast stagger (`0.15`) make the reveal feel rushed and batched rather than choreographed.

## Proposed Changes
1. **Adjust Trigger Point:** Move the `ScrollTrigger` start point from `top 80%` to `top 65%` to ensure the content is more centered in the viewport before animating.
2. **Refine Sequence Timing:** 
    - Reduce the timeline overlap from `-=1.0` to `-=0.6` to create a more distinct separation between the header and the cards.
    - Increase the stagger between cards from `0.15s` to `0.2s` for a more deliberate reveal.
3. **Smooth Easing:** Change the easing from `power4.out` (very aggressive) to `expo.out` for a smoother, more elegant deceleration.
4. **Update Specification:** Modify `pillars-animation` requirements to reflect these refined timings and trigger logic.

## Impact
- **UX:** The user will clearly see the animation sequence as it happens.
- **Aesthetics:** The methodology reveal will feel more premium and intentional, aligning with the "editorial" design system.
- **Performance:** No negative impact; timing changes are purely configuration-based.
