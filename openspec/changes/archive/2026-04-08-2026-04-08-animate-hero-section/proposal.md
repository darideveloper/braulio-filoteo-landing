# Proposal: Animate Hero Section

## Goal
Implement a high-impact, professional animation sequence for the Hero section using GSAP to enhance the "Bold Editorial" aesthetic and provide a cinematic entrance for visitors.

## Problem
The current Hero section is static, which lacks the "alive" and premium feel of high-end editorial portfolios (like jp-newman.com). A lack of motion fails to guide the user's eye towards key micro-credibility signals (stats) and calls to action.

## Proposed Solution
- **GSAP Integration**: Add `gsap` and `ScrollTrigger` as core animation dependencies.
- **Cinematic Entrance**: Create a sequenced timeline that reveals elements (Portrait -> Headline -> Badges -> Stats) in a deliberate order.
- **Scroll-Driven Depth**: Implement subtle parallax for the editorial portrait and ambient glows using ScrollTrigger.
- **Interactive Layers**: Add subtle mouse-based tilt/parallax to the portrait to increase engagement.

## Scope
- **Affected Sections**: `Hero.astro` and `EditorialPortrait.astro`.
- **New Dependencies**: `gsap`.
- **Excluded**: Animations for other sections (About, Podcast, etc.) are outside this specific scope.

## Risks
- **Performance**: GSAP is lightweight, but excessive animations could impact LCP. We will focus on `transform` and `opacity` properties for maximum performance.
- **Reduced Motion**: All animations MUST respect the `prefers-reduced-motion` media query.
