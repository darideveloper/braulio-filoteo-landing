# Design: Hero Section Animation

## Architecture

### Animation Engine (GSAP)
We will introduce GSAP as the primary animation engine. While Astro components are static by default, we will utilize client-side `<script>` tags within the `Hero.astro` organism to initialize animations.

### Component-Level Scoping
Animations will be scoped to the `Hero` section. To avoid global selector pollution, we will use specific class markers (e.g., `js-hero-reveal`) or scoped selectors.

## Implementation Details

### 1. Intro Timeline (Cinematic Entrance)
A `gsap.timeline` will be created on page load:
- **Portrait**: `gsap.from(".img-editorial", { scale: 1.15, autoAlpha: 0, duration: 1.4, ease: "power2.out" })`
- **Main Headline**: `gsap.from("h1", { y: 60, autoAlpha: 0, duration: 1, ease: "power4.out" }, "-=0.8")`
- **Badges**: `gsap.from(".badge", { x: -20, autoAlpha: 0, stagger: 0.1, duration: 0.8 }, "-=0.6")`
- **Description & Stats**: `gsap.from("p, .stat-item", { y: 30, autoAlpha: 0, stagger: 0.1, duration: 0.8 }, "-=0.4")`

### 2. Scroll Parallax (Depth)
Using `ScrollTrigger`:
- **Portrait Drift**: The `EditorialPortrait` will move vertically at a slower rate than the scroll (`yPercent: 15`), creating a parallax effect against the background.
- **Ambient Glows**: Background blurs will drift horizontally/vertically in response to scroll.

### 3. Mouse Parallax (Interactivity)
A subtle mouse-tracking effect will be applied to the `EditorialPortrait` container:
- Movement of the mouse within the Hero section will slightly offset the portrait and its decorative frame (`±10px`), providing a tactile "3D" feel.

## Performance & Accessibility
- **Target Properties**: Only `transform` (x, y, scale, rotation) and `opacity` (autoAlpha) will be animated to ensure 60fps performance by avoiding layout recalculations.
- **A11y**: All GSAP logic will be wrapped in `gsap.matchMedia()` to detect `(prefers-reduced-motion: reduce)` and disable or simplify animations accordingly.
