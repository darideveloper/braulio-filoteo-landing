# Change: Refine Voice Editorial Style

## Why
The initial implementation of the Voice Editorial sections (HeroEditorial, MatrixCard, FeatureCTA) requires fine-tuning to better match the high-impact editorial aesthetic of the original design. Specifically, the typography needs more flexibility (removing forced uppercase), the hierarchy of elements like icons and CTAs needs adjustment, and more atmospheric depth (watermarks) is required for branding sections.

## What Changes
- **Global Styles**: Remove forced `uppercase` from `display-lg` and `display-2xl` utilities to allow for mixed-case titles.
- **HeroEditorial**: Support a gradient accent on specific words in the title (e.g., "convertirse").
- **MatrixCard**: Increase icon scale for a more dramatic editorial presence.
- **FeatureCTA**: 
    - Add a large background watermark text ("PODCAST") for depth.
    - Change the circular icon button to a square with rounded corners.
    - Remove forced uppercase from the main title.
- **Landing Page Integration**: Update the content in `src/pages/index.astro` to use the refined styling.

## Impact
- Affected specs: `branding`, `hero-section`, `section-header`.
- Affected code: `src/styles/global.css`, `src/components/organisms/HeroEditorial.astro`, `src/components/molecules/MatrixCard.astro`, `src/components/molecules/FeatureCTA.astro`, `src/pages/index.astro`.
