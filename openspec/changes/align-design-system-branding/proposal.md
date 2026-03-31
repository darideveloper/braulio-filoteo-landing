# Proposal: Align Design System Branding

Update the project's visual identity to match the "Electric Noir" design system, ensuring a consistent high-contrast, bold editorial aesthetic across all pages.

## Goals
- Update the Tailwind v4 theme with the "Electric Noir" color palette.
- Implement the "Big & Bold" typography strategy using Epilogue and Inter fonts.
- Add essential global CSS utilities for high-impact visual effects (glows, tight headlines, editorial images).
- Standardize base styles for buttons and layout containers.
- Create a `/design-system` page to visualize and verify all branding elements, variants, and features.

## Current State
- The project uses a generic dark theme with placeholder colors (`#121212`, `#ff6600`, `#9b30ff`).
- Typography is inconsistent, using Metropolis and Inter without proper font imports.
- Global styles lack specific editorial utilities (tight headlines, glows).
- There is no central place to verify the design system's implementation.

## Capability Additions
- `branding`: A new capability providing the foundational visual rules and utilities for the project.
- `style-guide`: A new capability for the `/design-system` page to document and test the branding.
