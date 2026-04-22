# Proposal: Remove "EST. 2024" Branding Text

## Problem
The "EST. 2024" label (and its variations) is used across multiple sections (Hero, Footer, Loader) as part of the brand identity. The user has requested to remove this specific text while keeping all other labels and surrounding text intact.

## Proposed Changes
1.  **Hero Section**: Remove the "EST. 2024" floating label from the `EditorialPortrait` in the `Hero` organism.
2.  **Footer Section**: Remove the "Est. 2024 / " prefix and change "Ciudad de México" to "México" in the `Footer` organism.
3.  **Page Loader**: Remove the "EST. 2024 / " prefix from the status text in the `Loader` organism.
4.  **Specifications**: Update the `hero-section`, `footer-section`, and `page-loader` specifications to reflect the removal of these timestamps/labels.
5.  **Design Artifacts & Docs**: Update `ui-design/hero/code.html` and `docs/design-system.md` to maintain consistency with the implementation.

## Impact
- **UI/UX**: The "EST. 2024" mark will disappear from the cinematic loader, the hero image, and the footer. Surround text like "DOCUMENTING POTENTIAL" or "México" will remain.
- **Architecture**: No structural changes; strictly a content/branding update.
- **Consistency**: All instances of this specific timestamp will be removed to maintain a unified brand voice.
