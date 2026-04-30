# Proposal: Animate Hero Counters

## Why
The numerical statistics in the Hero and Studio (HeroNoir) sections are static. Adding a count-up animation enhances the "editorial" and "premium" feel of the site, providing visual feedback as the user enters the page.

## What Changes
Implement a GSAP-based counter animation that:
1.  Targets elements with the `js-stat-value` class.
2.  Parses the target value from a `data-value` attribute.
3.  Animates from 0 to the target value over a set duration, using `Math.round` and `power4.out` easing for a smoother finish.
4.  Preserves non-numeric suffixes (like "+").
5.  Synchronizes with the final element of the section's entrance timeline, finishing precisely at the same time.
6.  **Fix:** Ensures counters display "0" (with appropriate suffix) immediately before the animation starts to prevent a jump from the final value.

## Scope
-   `StatItem.astro`: Add hooks for JS targeting.
-   `Hero.astro`: Integrate counter animation into the entrance timeline.
-   `HeroNoir.astro`: Integrate counter animation into the scroll-triggered timeline.

## Impact
-   **Visual:** Smoother, more dynamic entrance for key metrics.
-   **Performance:** Minimal; uses GSAP proxies which avoid heavy DOM manipulation.
-   **A11y:** Final values are preserved in the DOM; initial "0" state is set via JS to maintain SEO-friendly static content.
