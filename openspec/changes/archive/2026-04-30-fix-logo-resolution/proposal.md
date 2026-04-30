# Proposal: Fix Logo Resolution

## Problem
The website logo at `src/assets/images/logo.webp` appears pixelated on some screen sizes and high-density displays. This is due to the `Image` component being configured with small fixed dimensions and lacking resolution density hints, causing Astro to generate low-resolution assets that are then scaled up by the browser.

## Solution
Update the `Image` component usage in `Header.astro`, `Sidebar.astro`, and `Footer.astro` to:
1.  Significantly increase the base `width` and `height` values to provide a high-quality source that remains sharp across all display sizes.
2.  Standardize on a square aspect ratio (matching the source image) and use responsive CSS classes for display scaling and constraints.
3.  Utilize `max-height` and `aspect-square` for layout stability.

## Impact
- **Visual Quality:** The logo will appear sharp on all devices, including 4K monitors and mobile phones.
- **Performance:** Slight increase in image payload for high-DPI devices, but offset by the benefits of modern formats like WebP.
- **Consistency:** Uniform logo handling across the site.
