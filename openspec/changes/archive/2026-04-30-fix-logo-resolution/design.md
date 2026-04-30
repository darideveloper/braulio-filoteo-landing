# Design: Logo Resolution & High-DPI Support

## Architectural Overview
The project uses Astro's native `astro:assets` for image optimization. By default, if `width` and `height` are provided, Astro resizes the source image to those exact dimensions.

## Key Decisions

### 1. Resolution Density
We will implement `densities={[1.5, 2]}`. This tells Astro to generate additional versions of the image at 1.5x and 2x scale, which the browser will automatically select based on the device's pixel density (DPR).

### 2. Dimension Consistency
The source image `logo.webp` is `512x512`. Current implementations use non-square ratios (e.g., 3:1), which can lead to unexpected cropping or distortion. We will use square dimensions in the `Image` component and control the visual footprint via CSS.

### 3. Responsive Sizing
Instead of relying on the `Image` component's `width`/`height` for final layout, we will use them as "source quality hints" and use Tailwind classes (e.g., `h-10 w-auto`) for the actual layout. This ensures the logo scales correctly across breakpoints without needing different `Image` configurations.

## Proposed Values

| Component | Current (W/H) | Proposed (W/H) | Densities | CSS Classes |
|-----------|---------------|----------------|-----------|-------------|
| Header    | 60 / 60       | 300 / 300      | N/A       | `h-full max-h-20 w-auto aspect-square` |
| Sidebar   | 126 / 42      | 300 / 300      | N/A       | `w-8/12 aspect-square` |
| Footer    | 160 / 52      | 300 / 300      | N/A       | `h-full max-h-32 w-auto aspect-square` |
