# Tasks: Cinematic Loader & FOUC Fix

## Setup & Styles
- [x] Update `src/styles/global.css` to include the `.js-reveal` and `.no-js` utility classes.
- [x] Update `src/layouts/Layout.astro` to add the `js` class to `<html>` via a small inline script and include the `Loader.astro` component.

## Loader Component
- [x] Create `src/components/organisms/Loader.astro` with high-impact, minimal editorial styling.
- [x] Implement GSAP logic in `Loader.astro` to:
    - [x] Animate the loading progress.
    - [x] Listen for `window.load`.
    - [x] Animate the loader's exit (wipe transition).
    - [x] Dispatch the `loader:complete` custom event.

## Hero Section Coordination
- [x] Update `src/components/organisms/Hero.astro`:
    - [x] Apply the `.js-reveal` class to all elements that should stay hidden until animated.
    - [x] Update the GSAP timeline to be `paused: true` by default.
    - [x] Add a listener for the `loader:complete` event to trigger the timeline's playback.

## Hero Performance Optimization
- [x] Update `EditorialPortrait.astro` to use `will-change: transform` for GPU acceleration.
- [x] Migrate the hero image to a local asset using Astro's `<Image />` component for better compression and sizing.
- [x] Update `Hero.astro` to change `scrub: true` to `scrub: 1` in the parallax `ScrollTrigger`.

## Validation
- [x] Verify that the "blink" (FOUC) is gone on initial load.
- [x] Verify that the loader correctly disappears after the page finishes loading.
- [x] Verify that the Hero entrance animation starts precisely after the loader wipe.
- [x] Test the `no-js` fallback by disabling JavaScript in the browser.
