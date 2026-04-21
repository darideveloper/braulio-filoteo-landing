# Design: Content-Driven Spacing Strategy

## Overview
The "Noir Editorial" design requires generous whitespace ("negative space") but shouldn't be rigidly tied to the viewport height. By moving to standardized padding, we ensure that the distance between content remains consistent regardless of the device's aspect ratio.

## Technical Architecture

### 1. Centralized Padding in `SectionWrapper.astro`
The `SectionWrapper` component is the source of truth for section spacing. It has been updated to include `py-24` as a default class.
```astro
<section class={clsx(backgroundClasses[variant], 'py-24 relative overflow-hidden', className)}>
```

### 2. Removal of `min-h-screen`
The `min-h-screen` class has been removed from all section organisms except the `Hero` (which remains a specialized full-screen entry point). This prevents sections from stretching unnecessarily. The `Hero` now uses `mt-12 sm:mt-0` to ensure proper top clearance on mobile devices without relying on global layout margins.

### 3. Asymmetric Vertical Offsets
For specific variants like `HeroNoir`, we use asymmetric padding (e.g., `pt-32 pb-24`) to maintain the "Neon Noir" visual tension.

## Performance Considerations
GSAP `ScrollTrigger` animations now trigger based on content proximity rather than fixed viewport entry points, making the scroll experience feel more organic and less "snapped."
