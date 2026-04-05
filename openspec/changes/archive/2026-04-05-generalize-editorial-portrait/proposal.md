# Proposal: Generalize Editorial Portrait Component

## Motivation
The current `HeroPortrait.astro` component is highly specific to the Hero section, as evidenced by its name and default values. However, the editorial visual style (grayscale hover, offset frame, floating labels, and vertical text) is a signature branding element that should be available for other sections (Bio, Projects, etc.).

## Proposed Changes
1.  **Rename Component:** Rename `HeroPortrait.astro` to `EditorialPortrait.astro` and move it to a more general location if necessary (currently in molecules, which is fine).
2.  **Generalize Props:**
    - Make `est` and `sideText` optional and provide the ability to hide them entirely.
    - Add a `variant` or `accentColor` prop to allow switching between Purple (primary) and Orange (secondary) for the frame and labels.
    - Add an `aspectRatio` prop to support different image dimensions (default to `4/5`).
3.  **Update Usage:** Update `Hero.astro` to use the new `EditorialPortrait` component.
4.  **Specification Delta:** Move the portrait-specific requirements from `hero-section` to a new `editorial-portrait` specification.

## Impact
- **Consistency:** Ensures the signature editorial image treatment is consistent across the site.
- **Developer Experience:** Provides a flexible, reusable component for any section requiring a high-impact portrait.
