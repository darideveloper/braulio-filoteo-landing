# Design: Transformation Matrix Grid

## Overview
The "Transformation Matrix" is a 4-column grid of cards that provides a concrete breakdown of the methodology introduced in the `VoiceSection`.

## Strategy
### TransformationCard Molecule
- **Layout:** Vertical stack (Icon top-left, Title bottom-left).
- **Background:** `brand-surface-low` with a transition to `brand-surface` on hover.
- **Interaction:** A 4px horizontal line (`brand-primary`) that expands from `width: 0` to `width: 100%` on hover using Tailwind `group-hover:w-full`.
- **Iconography:** Uses `MaterialIcon` with icons from the prototype: `target`, `auto_stories`, `sync`, `forum`.

### Grid Integration in VoiceSection
- Positioned below the asymmetric text blocks.
- Uses a 4-column grid on desktop (`@6xl:grid-cols-4`) and 1-column on mobile.
- Follows the "Loop Rendering" mandate: cards are mapped from a data array.

### Animation (GSAP)
- The cards will be part of the `VoiceSection` reveal timeline.
- Stagger effect (`stagger: 0.1`) applied to the cards to create a wave-like entrance from left to right.
- `autoAlpha` and `y` translation for consistency with other project sections.

## Alternatives Considered
- **Using `ServiceCard`:** Dismissed because the "Transformation Matrix" cards have a very specific "minimalist footer title" layout and unique line expansion animation that differs from the more descriptive `ServiceCard`.
