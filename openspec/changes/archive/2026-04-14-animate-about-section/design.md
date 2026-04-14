# Design: Animate About Section with GSAP

## Architectural Decisions

### 1. Scroll-Based Activation
Unlike the Hero section, which is triggered by a global loader event, the About section animations will be triggered via `ScrollTrigger`. This ensures that animations only run when the user arrives at the section, optimizing performance and focusing the user's attention.

### 2. Targeting with JS Hooks
We will add specific classes (hooks) to the template to avoid coupling styling with animation logic:
- `.js-about-section`: The overall container used as the scroll trigger.
- `.js-about-header`: Specifically for the `SectionHeader`.
- `.js-about-card`: For the `missionPoints` cards.
- `.js-about-quote`: For the `QuoteBlock`.
- `.js-about-icon-item`: For each item in the brand icon grid.

### 3. Animation Sequence & Timing
The sequence will follow an "asymmetrical staggered" pattern:
- **Eases:** `power4.out` for a smooth, high-end deceleration.
- **Vertical Offsets:** `y: 30` to create a "lift" effect during reveal.
- **Overlapping Timelines:** Using negative delays (`-=0.6`) between group reveals to create a fluid, continuous motion.

### 4. Accessibility & Performance
- **`autoAlpha`:** Use `autoAlpha: 0` for initial state to ensure elements are hidden from screen readers and pointer events until animated.
- **GPU Acceleration:** `force3D: true` and `will-change: transform` on targeted containers to ensure high-performance rendering.
- **Responsive Handling:** `gsap.matchMedia()` will be used to ensure animations adapt or are disabled on devices where `prefers-reduced-motion` is set.

## Alternatives Considered
- **Direct CSS Transitions:** Less control over complex staggering and precise scroll-linked triggers.
- **Framer Motion:** Not suitable for this project's vanilla/Astro-focused stack and would introduce unnecessary overhead.
- **Intersection Observer API:** While lighter, it lacks the sophisticated timeline and ease controls that GSAP provides for the desired "cinematic" effect.
