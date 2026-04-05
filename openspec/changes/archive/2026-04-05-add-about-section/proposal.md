# Change: Add About Section

## Why
The project requires a dedicated "About" section that communicates Braulio Filoteo's mission and core values. This section, identified in the `ui-design/about/code.html` reference, is essential for building authority and establishing the "Neon Noir Editorial" brand identity.

## What Changes
- **ADDED** `src/components/atoms/AboutIcon.astro`: A reusable wrapper for Material Symbols with brand-specific styling.
- **ADDED** `src/components/molecules/AboutCard.astro`: A numbered card component for mission points.
- **ADDED** `src/components/molecules/QuoteBlock.astro`: A specialized component for the signature quote.
- **ADDED** `src/components/organisms/AboutSection.astro`: The main container component for the About section.
- **MODIFIED** `src/styles/global.css`: Added support for Material Symbols, text gradients, and refined glass utilities.
- **MODIFIED** `src/layouts/Layout.astro`: Updated Google Fonts to include additional weights and the Material Symbols stylesheet.
- **ADDED** `src/pages/index.astro` update: Integrated the new `AboutSection` into the landing page.

## Impact
- **Affected specs**: `branding`, `style-guide` (new section for about components).
- **New capability**: `about` (defined in new spec delta).
- **Affected code**: `src/layouts/Layout.astro`, `src/styles/global.css`, `src/pages/index.astro`.
