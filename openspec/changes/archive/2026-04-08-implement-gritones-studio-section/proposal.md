# Proposal: Implement Gritones Studio Section

## Summary
Implement a high-impact "Noir" editorial section and hero based on the `gritones` reference. This involves creating new minimalist organisms, a flexible bento-grid service molecule, and extending existing molecules (Portrait, Header) to support advanced horizontal layouts and decorative positioning.

## Motivation
The project requires a more stark, high-contrast "Editorial" alternative to the current feature-heavy landing page. By implementing these changes, we provide Braulio with a sophisticated "Studio" presence that emphasizes narrative and authority over simple features.

## Scope
- **Branding/Styles**: Add `leading-tightest` (0.9) and verify editorial contrast utilities.
- **Molecules**:
    - Update `EditorialPortrait.astro` with `framePosition` and `statCard` support.
    - Update `SectionHeader.astro` with an `inline` (horizontal) layout.
    - Create `ServiceCard.astro` for bento-grid layouts.
- **Organisms**:
    - Create `HeroNoir.astro` (7/5 split, minimalist).
    - Create `GritonesSection.astro` (Bento-grid services wrapper).
- **Page**: Create or update a page to demonstrate this section (e.g., `src/pages/studio.astro`).

## Risks & Mitigations
- **Risk**: Complexity in `SectionHeader` might break existing usages.
- **Mitigation**: Use default prop values to ensure backward compatibility and add regression tests if possible.
- **Risk**: Overlap between `PlansCard` and `ServiceCard`.
- **Mitigation**: Keep `ServiceCard` strictly focused on informational/bento layouts without pricing logic.
