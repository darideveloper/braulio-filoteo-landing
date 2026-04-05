## 1. Foundation & Tokens
- [x] 1.1 Update `src/styles/global.css` with the new color palette (Purple as primary, Orange as headings).
- [x] 1.2 Implement the "Editorial Voice" typography scales and tracking in `global.css`.
- [x] 1.3 Add CSS variables for the 135° primary gradient and ambient glow shadows.

## 2. Global Shell & Layout
- [x] 2.1 Refactor `src/layouts/Layout.astro` to remove any hard borders and use tonal stepping for background levels.
- [x] 2.2 Update `src/components/organisms/Header.astro` with 60% opacity and 12px backdrop-blur.
- [x] 2.3 Refactor `src/components/organisms/Sidebar.astro` to remove borders and use `surface_container_low` for contrast.

## 3. Core Components
- [x] 3.1 Re-implement `src/components/atoms/BrandButton.astro` with the new primary gradient, sharp `0.25rem` corners, and Label-MD typography.
- [x] 3.2 Update `src/components/organisms/Hero.astro` headings and CTA to align with the Neon Noir spec.
- [x] 3.3 Audit all components for the "No-Divider Rule" and replace horizontal lines with spacing or tonal shifts.

## 4. Verification & Documentation
- [x] 4.1 Update `src/pages/design-system.astro` to reflect the new color roles and typography scales.
- [x] 4.2 Verify color contrast and accessibility on the new "Editorial Orange" headings.
- [x] 4.3 Run `openspec validate` to ensure all spec deltas are consistent.
