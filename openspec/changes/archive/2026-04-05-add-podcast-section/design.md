# Design: Podcast Section Implementation

## Component Architecture

### 1. `SectionHeader.astro` (Molecule)
Encapsulates the two-line header pattern found in the About and Podcast sections.
- **Props**:
  - `label`: Small text over the title (Label-MD).
  - `title`: The main heading text (Display-LG).
  - `description`: (Optional) Large intro paragraph text (Headline-MD).
  - `labelColor`: Dynamic color from props.
  - `titleColor`: Dynamic color from props.
  - `class`: Additional classes for layout.
- **Benefits**: Simplifies header alignment across sections and standardizes spacing (`gap-4`).

### 2. `SpotifyEmbed.astro` (Atom)
A standardized wrapper for Spotify iFrames.
- **Props**:
  - `url`: The shareable Spotify embed link.
  - `height`: Default `452px` (standard show embed) or `152px` (single episode).
  - `title`: For accessibility (default: "Spotify Player").
- **Styling**: Enforces `rounded-xl` (12px) corners and `w-full`.

### 3. `PodcastCTA.astro` (Molecule)
A conversion card with a distinct layout from `QuoteBlock`.
- **Styling**: Reuses `bg-brand-surface` (Midnight Surface) with a `border-brand-primary/20`.
- **Integration**: Uses `BrandButton` (variant="primary") for the action.

### 4. `PodcastSection.astro` (Organism)
Main container for the podcast experience.
- **Layout**: 12-column grid to handle the asymmetrical description (left-border italicized block).
- **Media**: Uses `SpotifyEmbed` for the podcast player.
- **Atmosphere**: Includes purple and orange ambient glows to match the design's "Neon Noir" depth.

## Color Mapping (No New Variables)
To adhere to the existing branding while matching the reference design:

| Reference Element | Reference Color | Project Mapping |
| :--- | :--- | :--- |
| CTA Background | `surface-container-high` (#2A2A2A) | `bg-brand-surface-bright` (#393939) at lower opacity OR `bg-brand-surface/60`. |
| Section Header | `secondary-container` (#FE6500) | `text-brand-secondary` |
| Overline Label | `primary` (#DCB8FF) | `text-brand-primary-light` |
| Italicized Quote | `on-surface` (#E5E2E1) | `text-brand-text-high` |

## Icon Strategy
Introduce `MaterialIcon.astro` to provide a consistent way to render Material Symbols without duplicating styles in multiple components.

```astro
---
// src/components/atoms/MaterialIcon.astro
interface Props {
  name: string;
  class?: string;
}
const { name, class: className } = Astro.props;
---
<span class:list={["material-symbols-outlined", className]}>
  {name}
</span>
```
