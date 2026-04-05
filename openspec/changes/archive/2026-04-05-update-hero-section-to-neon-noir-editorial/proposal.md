# Proposal: Update Hero Section to Neon Noir Editorial

## Motivation
The current Hero section is a centered, simple layout that doesn't fully capture the "Neon Noir Editorial" aesthetic of the new design. The new design (from `ui-design/hero/code.html`) introduces a sophisticated 12-column grid, editorial portraiture, micro-credibility stats, and ambient glow effects that significantly elevate the brand's visual impact.

## Proposed Changes
1.  **Refactor Hero Section:** Replace the centered layout with a responsive 12-column grid.
2.  **New Atomic Components:** Introduce `Badge.astro` for professional titles and `StatItem.astro` for editorial metrics.
3.  **New Molecules:** Create `HeroPortrait.astro` to handle the complex layered image effect (grayscale, offset frame, floating labels).
4.  **Update BrandButton:** Enhance the existing button to support icons, new color variants (Secondary Orange, Glass), and better responsive sizing.
5.  **Ambient Atmosphere:** Add radial glow utilities and absolute-positioned blurs to the background.
6.  **Social Section:** Implement the high-contrast dark social links section defined in the design as a regular page section.

## Impact
- **Visuals:** Dramatically improved depth and professional "editorial" feel.
- **Components:** More reusable atomic units for future sections.
- **UX:** Better hierarchy and clear micro-credibility signals.
