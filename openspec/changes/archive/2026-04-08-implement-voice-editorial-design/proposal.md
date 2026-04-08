# Change: Implement Voice Editorial Design

## Why
Expand the design system to support the "Voice" editorial style, characterized by asymmetric grid layouts, high-impact typography, and interactive components for personal branding and podcasting. This includes integrating these new sections into the landing page to showcase the "Metodología Noir".

## What Changes
- **Global Styles**: Added `editorial-grid`, `neon-glow` utilities and refined Noir theme variables.
- **Atomic Components**: `BrandButton` (circular variant), `MaterialIcon` (scaling support).
- **Molecules**: `MatrixCard` (transformation steps), `FeatureCTA` (circular icon button with label).
- **Organisms**: `HeroEditorial` (text-only asymmetric hero), `SectionWrapper` (editorial grid support).
- **Landing Page Integration**: Added the "Voice" editorial sections (HeroEditorial, Matrix Grid, and FeatureCTA) to the bottom of `src/pages/index.astro`.

## Impact
- Affected specs: `branding`, `hero-section`, `section-header`, `style-guide`.
- Affected code: `src/styles/global.css`, `src/components/atoms/*`, `src/components/molecules/*`, `src/components/organisms/*`, `src/pages/index.astro`.
