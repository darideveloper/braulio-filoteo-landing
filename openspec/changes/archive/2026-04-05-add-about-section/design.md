## Context
The "About" section is a core part of the "Neon Noir Editorial" design. It uses high-contrast typography, asymmetrical layouts, and atmospheric blurs to create a premium, curated feel.

## Goals
- Implement a 2-column asymmetrical layout for the About section.
- Create reusable components for numbered mission cards and signature quotes.
- Ensure all styling follows the "Neon Noir" palette (Midnight, Editorial Orange, Deep Ultraviolet).
- Standardize the use of Material Symbols across the project.

## Decisions

### 1. Component Granularity
- **AboutIcon**: Instead of raw `<span>` tags, a dedicated atom ensures consistent sizing and coloring (Purple/Orange) for all Material Symbols.
- **AboutCard**: Encapsulates the `hover:border-primary/30` logic and the distinctive "01/02" numbering style.
- **QuoteBlock**: Handles the complex positioning of the `format_quote` background icon and the brand line accent.

### 2. Styling Strategy
- **Vanilla CSS + Tailwind**: We will continue using Tailwind v4 utilities defined in `global.css`.
- **Corner Radii**: While `DESIGN.md` suggests sharp corners, we will use `3xl` (1.5rem) for the large mission cards and `rounded-[3rem]` for the quote block to match the high-end editorial feel of the reference.
- **Tonal Stepping**: We will use `bg-white/5` (on Dark background) to create depth without hard borders, as per the "No-Line Rule".

### 3. Font Integration
- **Material Symbols**: We will use the "Outlined" variant.
- **Inter/Epilogue**: We will expand the weight range in `Layout.astro` to include `300` (Light) for the quote and `500-800` for various headings.

## Risks / Trade-offs
- **Asset Loading**: Adding Material Symbols and more font weights increases initial payload. Mitigation: Use Google Fonts' optimized serving.
- **Mobile Layout**: The 2-column grid must collapse gracefully. Mitigation: Use `grid-cols-1 lg:grid-cols-2` with appropriate spacing.

## Migration Plan
1. Update `Layout.astro` and `global.css` first.
2. Build atoms and molecules.
3. Assemble the `AboutSection`.
4. Inject into `index.astro`.
