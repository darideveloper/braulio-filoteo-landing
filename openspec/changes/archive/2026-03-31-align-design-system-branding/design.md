# Design: Align Design System Branding

## Overview
The "Electric Noir" branding uses high-contrast colors and bold typography to create a sophisticated, editorial atmosphere. This design strategy emphasizes "Text as Graphic" and asymmetric layouts.

## Visual Identity
- **Color Palette:**
  - `brand-background`: Deep blacks (`#0E0E0E` to `#131313`).
  - `brand-primary`: High-vibrancy orange (`#FE6500`) for CTAs and "GRIT" identity.
  - `brand-accent`: Neon purple/violet (`#9B30FF`) for spiritual accents, glows, and borders.
  - `brand-text-high`: Off-white (`#E5E2E1`) for readability.
  - `brand-text-muted`: Desaturated lavender (`#CFC2D8`) for secondary content.
  - `brand-surface`: Dark gray (`#1C1B1B`) for card backgrounds.

- **Typography Strategy:**
  - **Headlines (Epilogue 900):** Ultra-tight tracking (`-0.06em`), heavy line-height (`0.9`), uppercase.
  - **Body (Inter):** Clean, readable, with luxury tracking (`0.3em` for uppercase metadata).
  - **Editorial Break:** Use of italics within headlines for rhythmic contrast.

- **UI Patterns:**
  - **Glows:** Subtle purple radial gradients (`rgba(155, 48, 255, 0.15)`) for background depth.
  - **Grayscale Images:** Grayscale by default, color/scale on hover.
  - **Bento Grids:** Sharp corners (`4px`-`8px`) for an aggressive, modern feel.

## Implementation Architecture
- **Tailwind CSS v4:** Colors and fonts will be defined in the `@theme` block of `src/styles/global.css`.
- **Global CSS:** Specific utilities like `.headline-xl` and `.bg-glow-purple` will be added to the base or components layer.
- **Base Layout:** `src/layouts/Layout.astro` will handle Google Font imports and the default background/text colors.
- **Design System Page:** A new route `src/pages/design-system.astro` will be created to render all design tokens and utility variants for visual verification.

## Trade-offs and Considerations
- **Performance:** External font imports from Google Fonts can slightly impact LCP. We will use `font-display: swap`.
- **Contrast:** The high-contrast theme requires careful attention to accessibility. We will ensure the white-on-orange and white-on-black combinations meet WCAG AA standards.
- **Exclusion from Build:** The `/design-system` page should be considered for exclusion from production builds or protected if needed, though for a public profile, it can serve as a technical portfolio piece.
