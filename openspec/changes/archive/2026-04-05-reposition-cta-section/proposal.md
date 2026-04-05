# Proposal: Reposition CtaSection

Reposition the `CtaSection` (Telling Section) in the home page to follow the `PodcastSection`, making the `NewsletterSection` the final section of the page.

## Why
The `CtaSection` (Manifesto/Telling Section) currently sits at the very bottom of the page in `src/pages/index.astro`. While it features a contact CTA, placing it before the `NewsletterSection` creates a more natural editorial flow where the high-impact manifesto leads into the final conversion point (the newsletter subscription).

## What Changes
- **Home Page Layout:** Modify `src/pages/index.astro` to reorder the sections. The new sequence is: `Hero` -> `AboutSection` -> `PodcastSection` -> `CtaSection` -> `NewsletterSection`.
- **Specs:** Create a new `cta-position` capability spec to enforce the editorial sequence.

## Proposed Solution
- Modify `src/pages/index.astro` to reorder the sections.
- This ensures the `NewsletterSection` acts as the final conversion point of the "Social Hub".

## Goals
- Improve the editorial narrative flow of the home page.
- Position the `CtaSection` manifesto as a transition between content (Podcast) and community (Newsletter).
