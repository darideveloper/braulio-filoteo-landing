# Proposal: Optimize GSAP Performance

## Summary
Implement a series of high-impact optimizations to the GSAP animation system to reduce rendering cost, eliminate scroll jank, and improve general page speed while preserving the current "Neon Noir" visual aesthetic and editorial motion patterns.

## Problem
The website experiences periodic frame drops and high GPU usage during scrolling. Analysis identified several bottlenecks:
1. **GPU Heavy Filters:** Large CSS blur radii and backdrop filters on animated elements.
2. **High Scrub Latency:** Long "catch-up" times in `scrub` animations causing prolonged rendering work.
3. **Resizing Jitter:** Unnecessary recalculations of all ScrollTriggers on mobile device resizes (URL bar toggles).
4. **Inefficient Transitions:** Use of `transition: all` in frequently updated editorial elements.

## Solution
1. **Refine Global Config:** Update `gsap-init.ts` with performance-centric flags (`limitCallbacks`, `ignoreMobileResize`).
2. **Optimize Rendering:** Reduce blur complexity on Hero glows and transition to more efficient CSS property targeting.
3. **Tighten Scrub Values:** Reduce scrub duration from ~1.5s to ~0.8s for a snappier feel and reduced GPU window.
4. **Layer Promotion Audit:** Audit and tighten `will-change` usage to prevent over-allocation of GPU memory.

## Scope
- **Modified Specifications:** `gsap-global-init`, `core-architecture`, `hero-section`, `about-animation`, `podcast-section`, `newsletter-animation`.
- **Impacted Components:** `gsap-init.ts`, `global.css`, `Hero.astro`, `AboutSection.astro`, `PodcastSection.astro`, `NewsletterSection.astro`.
