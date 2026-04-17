# Design: Hero Scroll Indicator Fix

## Problem Analysis

### Layout Conflict
The current layout uses:
- `section`: `flex items-center min-h-screen`
- `indicator`: `absolute bottom-10`

On small viewports or devices with short heights, the content inside the centered `container` can expand vertically to fill the screen. Since the `container` is centered, its bottom edge will eventually hit the `bottom-10` position of the indicator.

### Animation Conflict
Targeting `.js-hero-scroll` in both `tl.from()` (entrance) and `gsap.to()` (ScrollTrigger) creates a property fight. 
- If the entrance timeline is playing, it is setting `autoAlpha` from 0 to 0.4.
- If the user scrolls simultaneously, ScrollTrigger tries to set `autoAlpha` from current to 0.
- Because ScrollTrigger often pre-calculates or forces an initial state, it can "hide" the element even before the entrance timeline reaches it.

## Proposed Solution

### Structural Changes
```html
<div class="js-hero-scroll-wrapper js-reveal"> <!-- Targeted by Entrance Timeline -->
  <div class="js-hero-scroll"> <!-- Targeted by ScrollTrigger -->
     <!-- Indicator Content -->
  </div>
</div>
```

### CSS Changes
Apply `pb-24` (or similar) to the main `container` within the Hero section. This ensures that the bottom of the content grid is always at least 96px away from the bottom of the section, leaving space for the indicator.

### Animation Logic
- **Entrance:** Use the wrapper to bring the whole component into view.
- **Scroll:** Use the inner element to fade it out.
- **Overwrite:** Use `overwrite: 'auto'` to handle any remaining conflicts.
- **Immediate Render:** Set `immediateRender: false` in ScrollTrigger to prevent it from resetting the element's opacity to its "scrolled" state on page load.
