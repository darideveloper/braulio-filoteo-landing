# Proposal: Add Newsletter Section

The goal of this change is to implement the new "Newsletter" section based on the design reference `ui-design/newsletter/code.html`. 

To maximize component reuse and keep the codebase DRY, we will:
1. Extract the side-bordered, italic quote pattern (currently used in `PodcastSection.astro` and required in the new newsletter design) into a reusable molecule called `SideBorderQuote.astro`.
2. Add new global CSS utilities required for the newsletter section (e.g., radial gradients).
3. Create the new `NewsletterSection.astro` organism using existing components (`Badge`, `EditorialHeadline`, `MaterialIcon`, `BrandButton`).
4. Integrate the new section into the main landing page (`src/pages/index.astro`).

This change aligns with our "Bold Editorial" design system and the goal of making Braulio's site the central hub for his content and private community.