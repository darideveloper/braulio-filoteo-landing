# Design: Animate Newsletter Section (Neon Noir)

## Overview
The animation strategy for the `NewsletterSection` follows the "Editorial Zipper" pattern, where elements reveal in a staggered, overlapping sequence as the user scrolls.

## Architectural Reasoning

### 1. Motion Language (Neon Noir)
- **Easing:** We use `power4.out` for high-impact headers and `expo.out` for the primary CTA (Substack embed) to create a smooth, "premium" feel.
- **Directionality:** We introduce multi-directional motion (Y-axis for headers, X-axis for quotes) to create visual depth and interest.

### 2. Integration with Global Systems
- **Animation Manager:** All timelines are registered with the `animationManager` singleton to ensure synchronization with the site's initial loader.
- **FOUC Prevention:** The use of `opacity-0` in CSS combined with `autoAlpha` in GSAP ensures a flicker-free entrance.

### 3. Performance
- All movement animations utilize `y`, `x`, or `scale` to leverage hardware-accelerated transforms.
- `force3D: true` is enabled on the timeline to maximize smoothness on mobile devices.

### 4. Accessibility (Reduced Motion)
Using `gsap.matchMedia`, we provide a distinct branch for users with motion sensitivities. This branch removes all spatial transforms and scaling, leaving only a clean, staggered opacity fade.
