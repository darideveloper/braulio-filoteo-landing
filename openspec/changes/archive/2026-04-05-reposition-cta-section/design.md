# Design: Reposition CtaSection

The repositioning of `CtaSection` (Telling Section) in the `index.astro` page is a structural change to the home page's flow.

## Architectural Reasoning
The "Neon Noir Editorial" aesthetic relies on dramatic, intentional flow. Placing the `CtaSection` (Manifesto) immediately after the `PodcastSection` (Content) provides a high-impact transition. The `NewsletterSection` then follows as the final conversion point, which is a standard pattern for landing pages where the newsletter acts as the "sticky" call to action before the page ends.

## Impact
- **Navigation:** This does not affect site navigation as `Sidebar` and `Header` are separate organisms.
- **Layout:** The `CtaSection` is `min-h-screen`, which means the transition between `PodcastSection` and `NewsletterSection` will be separated by a full viewport of manifesto content.
