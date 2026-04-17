# Design: Pillars Animation Refinement

## Architectural Reasoning
The current animation parameters prioritize "snappiness" over "perceptibility." In an editorial layout with large whitespace (padding), the relationship between scroll position and animation state is critical. By delaying the start and slowing the sequence, we ensure the "visual reward" of the animation is synchronized with the user's focus area.

## Detailed Adjustments

### 1. Trigger Synchronization
- **Current:** `start: 'top 80%'`
- **Target:** `start: 'top 65%'`
- **Reasoning:** The `SectionWrapper` adds `pt-32` (8rem/128px) top padding. At 80% viewport height, the top of the padding is in view, but the content is still off-screen or very low. 65% brings the content into the "sweet spot" of the viewer's attention.

### 2. Timeline Choreography
- **Overlap:** Adjusted from `-=1.0` to `-=0.6`. This ensures the Header is clearly moving upward and becoming legible before the cards start their journey.
- **Stagger:** Increased from `0.15s` to `0.2s`. This creates a more readable "wave" across the 4 methodology pillars.

### 3. Motion Curves
- **Ease:** Changed from `power4.out` to `expo.out`. 
- **Comparison:** `power4.out` has a very high initial velocity and a long, slow tail. `expo.out` maintains a more visible motion for a longer portion of the duration before settling, making the movement feel "longer" even with the same duration values.

## Verification Strategy
- **Visual Inspection:** Verify that the header starts moving when it is clearly visible.
- **Timing Check:** Use GSAP DevTools (if available) or manual observation to confirm the cards follow the header with a perceptible delay.
- **Regression:** Ensure reduced motion fallback still functions correctly (fade-only).
