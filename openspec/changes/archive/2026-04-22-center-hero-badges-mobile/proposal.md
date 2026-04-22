# Proposal: Center Hero Badges on Mobile

## Problem
The professional badges in the Hero section ("HOST", "ENTREPRENEUR", "CO-FOUNDER", "GRIT PARAGON") are currently left-aligned on all screen sizes. On mobile devices, a centered alignment for these specific tags is desired to enhance the editorial visual hierarchy and improve balance when the content column occupies the full width of the viewport.

## Proposed Solution
Modify the Hero section's layout to apply centered alignment to the badges container specifically for mobile viewports, while maintaining the existing left-alignment for desktop (large) screens.

## Scope
- `src/components/organisms/Hero.astro`: Update the flex container for badges to support responsive alignment.
- `openspec/specs/hero-section/spec.md`: Update the specification to include mobile alignment requirements.
