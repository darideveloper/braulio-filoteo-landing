# Design: GSAP Performance Optimization

## Architectural Reasoning

### 1. The "Blur Complexity" Trade-off
Large blur radii (80px-150px) are extremely expensive because the GPU must sample thousands of surrounding pixels to compute the color of a single pixel. We will cap the blur radius to `60px` or use more efficient CSS `radial-gradients` to simulate the "haze" without requiring heavy mathematical filters.

### 2. Mobile Resize Optimization
Mobile browsers constantly change the viewport height when the address bar hides/shows on scroll. By default, GSAP `ScrollTrigger` refreshes *all* triggers on *every* resize. Setting `ignoreMobileResize: true` prevents these expensive recalculations, which often cause the entire page to "freeze" for a split second on mobile.

### 3. Scrub Latency Reduction
A `scrub` value of `1.5` means the animation is always 1.5 seconds behind the scroll. This keeps the GPU actively rendering a "catch-up" animation long after the user has stopped scrolling. Reducing this to `0.8` preserves the "smooth lag" feel but significantly reduces the "active GPU window," allowing the browser to return to an idle state faster.

### 4. Transition Targeting
The current `img-editorial` class uses `transition: all`. When GSAP manipulates `transform` or `opacity`, the browser is forced to check if *other* properties (like filters or shadows) also need transitioning. Switching to specific targets (e.g., `transition: filter 0.7s, transform 0.7s`) reduces the scope of the browser's style recalculation pass.
