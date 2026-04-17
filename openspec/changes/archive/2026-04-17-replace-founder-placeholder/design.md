# Design: Founder Image Replacement

This change transitions the Gritones Studio section from a low-fidelity SVG placeholder to a high-fidelity WebP image.

## Visual Strategy

- **Format:** Using `.webp` for optimal compression and quality.
- **Component:** Leveraging `EditorialPortrait.astro` which uses `astro:assets` for automatic optimization and lazy loading.
- **Aesthetic:** The new image `gritones-founder.webp` should align with the established "Neon Noir Editorial" style, featuring high contrast and professional lighting.

## Implementation Details

- **File Path:** `src/assets/images/gritones-founder.webp`
- **Component Update:** The change is confined to `src/pages/index.astro`, specifically updating the variable `founderPortrait`.
- **Optimization:** Astro's `<Image />` component within `EditorialPortrait` will handle the resizing and format conversion if needed for older browsers.
