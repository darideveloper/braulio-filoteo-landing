# Design: Social Section Architecture

## Architectural Patterns
The "Conversaciones que continúan" section follows the **Atomic Design** pattern already established in the project. It leverages existing atoms and molecules to build a sophisticated organism.

### 1. Editorial Gallery Slider
The gallery slider will be a pure CSS implementation using:
- `flex overflow-x-auto`: For horizontal scrolling.
- `snap-x snap-mandatory`: To ensure images snap into place.
- `hide-scrollbar`: A new global utility to remove visual noise.
- `EditorialPortrait` (minimal variant): To reuse existing hover effects while removing extra decorative frames.
- **NEW: Gallery Indicators**: Visual bars (`w-8 h-1`) below the slider to match the design aesthetics.
- **NEW: Flexible Aspect**: Slider items will use `aspect-[3/4]` and responsive `min-w` (`300px` to `450px`).

### 2. Data-Driven Social Cards
`SocialCard.astro` will map a platform's unique accent color to its border and icon background on hover. We will use a standard set of "accent" keys (`primary`, `secondary`, `error`) that map to both brand variables and Tailwind utility classes.
- **Link Behavior**: The entire `SocialCard` will be a clickable `<a>` tag for better UX. The "View Profile" CTA at the bottom will be a styled internal element, not a separate component.

## Spec Deltas


### `specs/branding/spec.md` (MODIFIED)
- **ADD** `brand-outline-variant` (#4D4355) for the header divider and slider indicators.

### `specs/social-section/spec.md` (MODIFIED)
- **ADD** Requirement for "Editorial Portrait Gallery" with horizontal snapping.
- **ADD** Requirement for "Platform Engagement Grid" with platform-specific accent colors.
- **ADD** Requirement for "Data-Driven Composition" where content is passed via props.
- **ADD** Requirement for "Gallery Visual Indicators" (decoration bars).

### `specs/editorial-portrait/spec.md` (MODIFIED)
- **ADD** Requirement for "Minimal Variant" for use in crowded layouts or galleries.

## Component Strategy

| Component | Level | Status | Change |
| --- | --- | --- | --- |
| `SectionHeader` | Molecule | Existing | No changes needed (Reuse as is). |
| `EditorialPortrait` | Molecule | Existing | Add `variant="minimal"` (no frames/labels). |
| `BrandButton` | Atom | Existing | Ensure `variant="ghost"` supports small text-link style. |
| `SocialCard` | Molecule | **NEW** | Handles platform link, icon, and specific hover accent. |
| `SocialSection` | Organism | **NEW** | Orchestrates Header + Gallery + Grid. |
