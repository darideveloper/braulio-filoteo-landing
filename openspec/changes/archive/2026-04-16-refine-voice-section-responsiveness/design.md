# Design: Voice Section Responsiveness

## Overview
This design adopts a mobile-first approach for the `VoiceSection`, ensuring that the "Noir Editorial" asymmetry is introduced gracefully at tablet sizes and fully realized on desktop.

## Strategy
### Breakpoint Alignment
- Use `@3xl` (768px) as the primary shift from stacked to asymmetric layout.
- Use `@5xl` (1024px) for the final high-end desktop grid.

### Layout Refinements
- **VoiceSection Container:** Reduce top padding on mobile (`pt-20`) and scale to `pt-32` on `@3xl`.
- **Editorial Gaps:** Tighten vertical gaps on mobile (`gap-y-12`) to keep content connected, scaling to `gap-y-24` on desktop.
- **Headline Overlap:** 
    - Stacked on mobile.
    - `col-span-10` on `@3xl`.
    - `col-span-9` on `@5xl`.
- **Description Overlap:**
    - Stacked on mobile.
    - `col-start-2 col-span-11` on `@3xl` to create initial tension.
    - `col-start-6 col-span-6` on `@5xl` for full asymmetric look.
- **Matrix Grid:**
    - 1 column on mobile.
    - 2 columns on `@3xl`.
    - 4 columns on `@5xl`.

### Component Refinements
- **TransformationCard:** 
    - Scale the icon from `text-6xl!` on mobile to `text-7xl!` on `@3xl`.
    - Reduce internal padding slightly on mobile (`p-6` -> `p-8`).

## Alternatives Considered
- **Viewport breakpoints (md:, lg:):** Rejected to maintain consistency with the project's preference for `@container` queries which offer better stability inside the sidebar-constrained layout.
