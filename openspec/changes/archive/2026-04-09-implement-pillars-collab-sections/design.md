# Design: Pillars and Collaboration Sections

## Architectural Context
The project follows an Atomic Design architecture using Astro. The core building blocks are atoms (`MaterialIcon`, `BrandButton`), which are composed into molecules (`SectionHeader`, `MatrixCard`), and then into organisms (`SectionWrapper`, `Hero`).

## Solution Overview
The methodology and collaboration sections require specific visual layouts that don't fit into existing components but share many common traits.

### 1. Enhanced `SectionHeader`
The current `SectionHeader` supports `standard` and `inline` (title-line-label) layouts. The new methodology section requires an `inline-start` layout where the label precedes the title, both baseline-aligned.
- **Decision**: Add `layout="inline-start"` to `SectionHeader.astro`.
- **Reasoning**: Maintains consistency while providing the required visual flexibility.

### 2. Methodology Cards (`PillarCard`)
While `MatrixCard` exists, the "PILARES" section requires a strict square aspect ratio, specific numbering (01, 02, etc.), and a background transition effect that differs from `MatrixCard`'s progress line.
- **Decision**: Create `PillarCard.astro` as a specialized molecule.
- **Reasoning**: Over-parametrizing `MatrixCard` for these specific needs would increase complexity and reduce maintainability.

### 3. Collaboration List (`CollabItem`)
The "COLABORACIONES" section uses an asymmetric editorial grid (5 columns for header, 7 for content). The content is a list of items with unique hover effects (fade-in icon, horizontal expansion).
- **Decision**: Create `CollabItem.astro` as a new molecule. Use the existing `editorial-grid` utility.
- **Reasoning**: This pattern is likely to be reused for other list-based CTAs or service summaries.

## Structural Breakdown

| Component | Level | Reuses | Key Features |
| :--- | :--- | :--- | :--- |
| `SectionHeader` | Molecule | N/A | `inline-start` layout, variable `titleColor` and `labelColor`. |
| `SectionWrapper` | Organism | `SectionHeader` | Standardized padding, background variants, and header prop passthrough. |
| `PillarCard` | Molecule | `MaterialIcon` | `aspect-square`, hover color transitions, sequential numbering. |
| `CollabItem` | Molecule | `MaterialIcon` | Hover-responsive padding and icon opacity. |
| `PillarsSection` | Organism | `SectionWrapper`, `PillarCard` | 4-column methodology grid. |
| `CollabSection` | Organism | `SectionWrapper`, `CollabItem` | Asymmetric 5/7 editorial grid layout. |

## Responsiveness & Layout
All new components will use container queries (`@md:`, `@lg:`) as mandated by `core-architecture` to ensure stability within the `<main>` container.
- Methodology grid will stack on small containers and expand to 2 or 4 columns on larger ones.
- Collaboration grid will stack on small containers and shift to a 5/7 horizontal split on larger ones.
