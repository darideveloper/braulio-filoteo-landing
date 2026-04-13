# Tasks: Replace Newsletter Form with Substack Embed

This plan replaces the custom newsletter form with the Substack embed iframe.

## Phase 1: Preparation
- [x] Review `src/components/organisms/NewsletterSection.astro` to identify the exact code to be replaced.
- [x] Test the CSS filter values (`invert(1) hue-rotate(180deg) saturate(1.2)`) in a separate prototype or dev console.

## Phase 2: Implementation
- [x] Replace the `<form>` and its supporting UI in `src/components/organisms/NewsletterSection.astro` with the Substack `<iframe>`.
- [x] Wrap the `<iframe>` in a responsive container (`max-w-[480px] mx-auto`) with a dark background color.
- [x] Apply the `filter` style and add the `title` attribute to the iframe.
- [x] Implement the adblocker fallback text link below the iframe container.
- [x] Remove unused imports (`BrandButton`, `Image`, `avatarMale`, `avatarFemale`) if no longer needed by other parts of the component.

## Phase 3: Validation
- [x] Verify the visual integration: Ensure the iframe matches the site's dark theme and no "white flash" occurs.
- [x] Verify accessibility: Confirm the `title` attribute is present and descriptive.
- [x] Verify responsiveness: Check the layout on mobile and desktop viewports.
- [x] Confirm the fallback link is visible and functional.