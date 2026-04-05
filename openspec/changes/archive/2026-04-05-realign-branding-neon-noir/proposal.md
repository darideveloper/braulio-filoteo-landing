# Change: Realign Branding to Neon Noir Editorial

## Why
The current project implementation has several inconsistencies with the `ui-design/DESIGN.md` specification. Specifically, the color roles are reversed (Purple as accent instead of primary action, Orange as primary instead of heading color), typography tracking and weights are not aligned, and UI patterns like "1px borders" and large border radii contradict the "Neon Noir Editorial" aesthetic of "No-Lines," sharp edges, and dramatic whitespace.

## What Changes
- **Color Palette Re-Alignment**: Swap Purple and Orange roles. Define Purple (`#9B30FF`) as `primary_container` and Orange (`#FE6500`) as `secondary_container` (Headings).
- **New Color Tokens**: Add `primary` (`#DCB8FF`), `surface_bright` (`#393939`), and `surface_container_lowest` (`#0E0E0E`).
- **Typography Refinement**: Update headings to default to Orange. Implement `-0.04em` letter spacing for `Display-LG` and `0.1em` for `Label-MD`.
- **UI Architecture**: Replace `1px` solid borders with tonal shifts or ambient glows (**BREAKING** for components relying on borders).
- **Component Styling**: Update buttons to use a 135° linear gradient (Light Purple to Purple) and sharp `0.25rem` roundedness.
- **Glassmorphism**: Implement 60% opacity and 12px-20px backdrop-blur for headers and floating elements.

## Impact
- Affected specs: `branding`, `hero-section`, `sidebar-nav`, `style-guide`.
- Affected code: `src/styles/global.css`, `src/layouts/Layout.astro`, `src/components/atoms/BrandButton.astro`, `src/components/organisms/Header.astro`, `src/components/organisms/Hero.astro`, `src/components/organisms/Sidebar.astro`.
