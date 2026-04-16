# Design: Voice Methodology Section

## Overview
The `VoiceSection` organism will implement the asymmetric 12-column layout from the provided `code.html`. It serves as the philosophical introduction to the podcast vehicle.

## Strategy
### Asymmetric Editorial Grid
- Use the `editorial-grid` (12 columns) class.
- Headline Block: Spans columns `1` to `9`.
- Description Block: Spans columns `6` to `12`, with a `border-l-4` accent using `border-brand-primary`.
- This creates a deliberate 3-column overlap that drives visual tension and editorial interest.

### Atomic Composition
- The headline will use `display-2xl` tokens.
- The word "convertirse" will use a text gradient: `bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary`.
- The section will be wrapped in `SectionWrapper` with `variant="lowest"`.

### Animation (GSAP)
- ScrollTrigger reveal when `top 80%` enters the viewport.
- Headline: Slide up (`y: 40`) and fade in.
- Description: Delayed slide up (`y: 20`) with a more subtle stagger.

## Alternatives Considered
- **Using `SectionHeader`:** Dismissed because `SectionHeader` is designed for standard or inline-balanced layouts. The `VoiceSection` requires a specific asymmetric overlap that is easier to manage with custom grid markup within the organism.
