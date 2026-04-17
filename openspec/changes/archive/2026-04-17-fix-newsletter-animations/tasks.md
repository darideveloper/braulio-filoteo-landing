# Tasks: Fix Newsletter Animations

## Implementation
- [x] Update `src/components/organisms/NewsletterSection.astro` HTML:
    - [x] Add `js-newsletter-glow` to atmospheric glow divs.
    - [x] Add `js-newsletter-header js-reveal` to `SectionHeader`.
    - [x] Add `js-newsletter-quote js-reveal` to `SideBorderQuote`.
    - [x] Add `js-newsletter-content js-reveal` to the paragraph's parent div.
    - [x] Add `js-newsletter-feature js-reveal` to the feature items in the loop.
    - [x] Add `js-newsletter-embed js-reveal` to the Substack iframe wrapper.
    - [x] Add `js-newsletter-proof js-reveal` to the social proof container.
- [x] Update `src/components/organisms/NewsletterSection.astro` Script:
    - [x] Add `gsap.registerPlugin(ScrollTrigger)` after imports.
    - [x] Replace all occurrences of `.js-newsletter-reveal` with `.js-reveal`.

## Validation
- [x] Verify that all elements are hidden initially (except when JS is disabled).
- [x] Scroll to the Newsletter section and verify that the staggered reveal animation triggers correctly.
- [x] Verify that the Substack iframe scales up as intended.
- [x] Test with "Reduced Motion" setting enabled to ensure the simple fade-in fallback works.
