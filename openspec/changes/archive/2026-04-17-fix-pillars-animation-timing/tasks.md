# Tasks: Fix Pillars Animation Timing

- [x] **Research & Grounding**
    - [x] Identify animation logic in `src/components/organisms/PillarsSection.astro`.
    - [x] Verify existing `pillars-animation` specification.

- [x] **Implementation**
    - [x] Update `ScrollTrigger` start point from `80%` to `65%` in `PillarsSection.astro`.
    - [x] Update Header easing from `power4.out` to `expo.out`.
    - [x] Update cards stagger from `0.15` to `0.2`.
    - [x] Update cards animation start offset from `-=1.0` to `-=0.6`.

- [x] **Validation**
    - [x] Verify that the animation triggers later, ensuring content is visible.
    - [x] Confirm the header and cards reveal in a more distinct, deliberate sequence.
    - [x] Check that reduced motion fallback (fade-only) is unaffected by timing changes.
