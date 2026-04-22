# Proposal: Remove "Est. 2024" Branding

## Goal
Remove the "Est. 2024" establishment label from the footer to simplify the branding as requested by the user.

## Scope
- Modify `src/components/organisms/Footer.astro` to remove "Est. 2024 / ".
- Update `footer-section` specification to reflect the removal.

## Strategy
- Delete the "Est. 2024 / " text in the Footer component.
- Update the `footer-section` spec's `Brand Identity` scenario.
