---
id: make-newsletter-full-width
title: Full-width Newsletter Embed Section
---

# Proposal: Full-width Newsletter Embed Section

## Problem Statement
The current newsletter subscription section is contained within a fixed-width container, which makes the Substack embed feel like a small "card" in the middle of the page. To achieve a more immersive and "editorial" feel, the Substack embed section (the black background area) should span the full width of the main content area, creating a distinct "stripe" or "break" in the page flow.

## Proposed Solution
Update `NewsletterSection.astro` and the core architecture to:
1. **Refactor `SectionWrapper.astro`**: Remove the hardcoded centered container to allow for truly full-width sections across the site.
2. **Standardize Layouts**: Update all existing sections to maintain their centered state by explicitly passing the `container` class.
3. **Immersive Newsletter Stripe**: Make the Substack embed container (the black background wrapper) expand to 100% of the viewport width.
4. **Branded Subscription UI**: Enhance the subscription area with editorial branding, including a profile photo and title, to create a more integrated feel.
5. **Preserved Iframe Logic**: Maintain the iframe's original scaling and attributes while optimizing it with `minimal=true` for a cleaner UI.


## Expected Outcome
The Substack newsletter section will have a full-width black background stripe that stretches from edge to edge in the main content area, while the text content remains centered and aligned with the rest of the site's editorial layout.
