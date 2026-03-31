# Tasks: Align Design System Branding

This task list covers the foundational branding updates for the "Electric Noir" design system.

## Foundational Branding

### Font Integration
- [x] Add Google Fonts import for `Epilogue:900` and `Inter:400,700` in `src/layouts/Layout.astro`.
- [x] Add `font-display: swap` to font imports for better performance.

### Tailwind v4 Configuration
- [x] Update `@theme` block in `src/styles/global.css` with new color palette:
    - [x] `brand-background: #0E0E0E`
    - [x] `brand-surface: #1C1B1B`
    - [x] `brand-primary: #FE6500`
    - [x] `brand-accent: #9B30FF`
    - [x] `brand-text-high: #E5E2E1`
    - [x] `brand-text-muted: #CFC2D8`
- [x] Define custom fonts in `@theme`:
    - [x] `font-display: 'Epilogue', sans-serif`
    - [x] `font-body: 'Inter', sans-serif`

### Global Utilities & Base Styles
- [x] Update `@layer base` styles in `src/styles/global.css`:
    - [x] Use `brand-background` and `brand-text-high` for `body`.
    - [x] Apply `font-body` as the default.
    - [x] Configure all headings to use `font-display` and `brand-primary` by default.
- [x] Add `.headline-xl` utility class to `@layer components` or `@layer utilities`.
- [x] Add `.bg-glow-purple` utility class for background glows.
- [x] Add `.img-editorial` utility class for grayscale image effects.

### Component Refinement
- [x] Update `.btn-primary` in `src/styles/global.css` to use `brand-primary` and add the neon shadow effect.
- [x] Update custom scrollbar colors to use `brand-accent`.

## Design System Page Implementation
- [x] Create `src/pages/design-system.astro`.
- [x] Implement Color Swatch section to visualize all brand colors.
- [x] Implement Typography section showing Epilogue and Inter at various scales.
- [x] Implement Utilities section demonstrating `.bg-glow-purple` and `.img-editorial`.
- [x] Implement Components section with standard buttons and common elements.

## Validation
- [x] Verify font loading in browser dev tools.
- [x] Check color contrast of `brand-primary` on `brand-background`.
- [x] Validate `.headline-xl` looks correct (tight tracking/line-height).
- [x] Confirm grayscale transition on images using `.img-editorial`.
- [x] Manually verify all visual tokens on `/design-system`.
