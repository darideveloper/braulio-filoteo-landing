# Proposal: Fix Newsletter Animations

## Summary
The `NewsletterSection` component contains a GSAP animation script that is currently non-functional because the target elements in the HTML template lack the necessary CSS classes (`js-*`) referenced by the script. This proposal fixes the animations by adding these classes to the markup, ensuring proper `ScrollTrigger` registration, and aligning with the project's FOUC prevention strategy.

## Problem
- **Missing Selectors:** The GSAP script attempts to animate classes like `.js-newsletter-header`, `.js-newsletter-glow`, etc., but these classes are not present in the `.astro` file's HTML.
- **Missing Plugin Registration:** `ScrollTrigger` is imported but not explicitly registered within the component script, which can lead to failures in certain bundling scenarios.
- **FOUC Logic Gap:** The script uses `.js-newsletter-reveal` for visibility management, but the project convention (defined in `global.css`) uses `.js-reveal`.

## Solution
1. **Markup Update:** Add the missing `js-newsletter-*` classes to the appropriate elements in `src/components/organisms/NewsletterSection.astro`.
2. **Script Robustness:** Explicitly register `ScrollTrigger` within the component's `<script>` block.
3. **Convention Alignment:** Switch from `.js-newsletter-reveal` to the project-standard `.js-reveal` for visibility control and update the GSAP script accordingly.
4. **FOUC Prevention:** Apply `.js-reveal` to the relevant content containers to ensure they are hidden before GSAP takes over.

## Scope
- `src/components/organisms/NewsletterSection.astro`: Update markup and script.
