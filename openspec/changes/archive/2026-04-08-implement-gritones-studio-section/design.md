# Design: Gritones Studio Implementation

## Architectural Strategy
The "Gritones Studio" design introduces a "Minimalist Noir" aesthetic that contrasts with the "Neon Hub" style of the main landing. We will achieve this through a "Core-Expansion" pattern:
1.  **Core Extension**: Enhance existing molecules (`EditorialPortrait`, `SectionHeader`) to support more layout configurations.
2.  **Specialized Organisms**: Create a new `HeroNoir` to avoid polluting the existing `Hero` with complex conditional logic.

## Layout Patterns

### 1. The 7/5 "Impact" Grid
The Hero section uses a 12-column grid where the text spans 7 columns and the portrait spans 5. This is already supported by the `editorial-grid` utility, but `HeroNoir` will implement it without the distraction of badges and multiple CTAs.

### 2. The Horizontal Inline Header
The `SectionHeader` will be updated to support an `inline` layout:
`[TITLE] [FLEX-GROWING-LINE] [CATEGORY-LABEL]`
This pattern uses `flex: 1` on a middle decorative element to push the label to the far right, maintaining a strong horizontal rhythm.

### 3. Bento-Grid Services
`ServiceCard` will be a simplified, non-pricing version of the `PlansCard`. It will use `col-span` classes to create an asymmetric bento grid.
- **Standard**: 1 col
- **Medium**: 2 cols
- **Large (Banner)**: 4 cols

## Styling Tokens
- **Leading**: `line-height: 0.9` for display titles.
- **Tracking**: `tracking-[-0.06em]` for tight, impactful headlines.
- **Grayscale**: Heavy contrast (`contrast-125`) for portraits to match the noir aesthetic.

## Component Tree
- `GritonesSection` (Organism)
  - `SectionHeader` (Molecule - inline variant)
  - `ServiceCard` (Molecule - 4 instances)
- `HeroNoir` (Organism)
  - `EditorialPortrait` (Molecule - updated with stat box)
  - `BrandButton` (Atom)
