# Design: Brand Social Icons

## Architectural Strategy
The migration from Material Symbols to Brand SVGs follows the project's **Atomic Composition** mandate. By creating a dedicated `SocialIcon` atom, we decouple the platform data from the visual representation.

### Component Design: `SocialIcon.astro`
- **SVG Embedding**: SVGs will be embedded directly in the component using `<path>` elements. This ensures they are available immediately without external network requests and are fully styleable via CSS `fill` and `color`.
- **Inheritance**: The SVGs will use `fill="currentColor"` and `width/height: 1em` to inherit dimensions and colors from their parent container (e.g., `SocialCard`'s hover states).
- **Graceful Degradation**: If an unknown platform is passed, it will default to the LinkedIn logo or a generic icon to prevent broken UI.

### Data Flow
1.  **Central Config**: `src/config/navigation.ts` stores the platform `name` (e.g., "LinkedIn").
2.  **Mapping**: `SocialIcon.astro` contains a static mapping object linking platform names to SVG paths.
3.  **Consumption**: Molecule components (`SocialCard`) and Organisms (`Footer`, `Sidebar`) iterate over the config and pass the `name` to `SocialIcon`.

### CSS & Styling
- **Neon Noir Integration**: The icons will leverage the `brand-primary` (Purple) and `brand-secondary` (Orange) tokens defined in `specs/branding/spec.md`.
- **Transitions**: Hover effects in `SocialCard.astro` will now animate the SVG `fill` color and `scale` using the existing transition durations (500ms).

## SVG Path Sources
The following official brand glyphs will be used:
- **LinkedIn**: Professional "In" square glyph.
- **Instagram**: Rounded square camera glyph.
- **YouTube**: Rounded triangle play button glyph.
- **Spotify**: Three-wave circular glyph.
- **Substack**: Simplified logo mark.

## DRY Mandate Compliance
Instead of multiple conditional renders across different sections (Footer vs Social Section), the logic is centralized in `SocialIcon.astro`. This ensures that updating a logo in one place updates it everywhere.
