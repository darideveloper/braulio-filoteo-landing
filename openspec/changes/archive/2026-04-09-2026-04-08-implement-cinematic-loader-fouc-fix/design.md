# Design: Cinematic Loader & FOUC Fix

## Architecture

### 1. FOUC Prevention (CSS Strategy)
We will add a `.js-reveal` utility class to `src/styles/global.css`:
```css
.js-reveal {
  opacity: 0;
  visibility: hidden;
}

/* Fallback for users with JS disabled */
.no-js .js-reveal {
  opacity: 1 !important;
  visibility: visible !important;
}
```
This ensures the browser hides elements immediately during the initial paint.

### 2. Loader Lifecycle
A new `Loader.astro` organism will be introduced and included in `src/layouts/Layout.astro`.
- **Entrance**: The loader is static HTML/CSS, visible by default (`z-index: 999`).
- **Loading State**: A minimal "Braulio Filoteo" or "EST. 2024" mark with an animated progress line.
- **Exit Event**:
    - The script in `Loader.astro` listens for `window.addEventListener('load', ... )`.
    - Once triggered, GSAP animates the loader container (e.g., `yPercent: -100` or `clip-path`).
    - After the exit animation, it dispatches a custom DOM event: `document.dispatchEvent(new Event('loader:complete'))`.

### 3. Hero Animation Orchestration
The `Hero.astro` script will be updated to wait for the custom event before starting its timeline:
```javascript
document.addEventListener('loader:complete', () => {
  // Start Hero Entrance Timeline
  tl.play();
});
```
This creates a perfectly synchronized transition from the loader to the hero.

### 4. Hero Performance Optimization
To address the jittery/slow feel of the current hero parallax:
- **Smoothed Scrubbing**: Change `scrub: true` to `scrub: 1` in the `ScrollTrigger` configuration. This adds a 1-second "catch-up" delay, smoothing out mouse-wheel increments.
- **Hardware Acceleration**: Add `will-change: transform` to `.js-portrait-container` and `.js-portrait-img` to promote these elements to a GPU-accelerated compositor layer.
- **Astro Image Component**: Replace the external `<img>` URL in `EditorialPortrait.astro` with the Astro `<Image />` component or a local optimized asset to reduce layout shifts and repaint costs.

## UI Design (Loader)
- **Background**: `brand-background` (Midnight).
- **Foreground**: `brand-text-high` with `brand-primary` accents.
- **Typography**: `display-lg` for a signature mark.
- **Motion**:
    - A line element that fills from 0 to 100% based on basic timing or load status.
    - A "wipe" exit effect (vertical up).

## Global Layout Update
`Layout.astro` will incorporate the `Loader` and a small script to add the `js` class to the `<html>` tag (enabling the `.js-reveal` behavior only when JS is active).
