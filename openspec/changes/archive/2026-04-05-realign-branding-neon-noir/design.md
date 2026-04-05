## Context
The "Neon Noir Editorial" style favors dramatic whitespace, intentional asymmetry, and the visceral tension between deep shadows and vibrant accents. The current project implementation incorrectly maps colors and uses "generic template" patterns (like 1px borders) that contradict this vision.

## Goals / Non-Goals
- **Goals**:
  - Re-align color roles to match `DESIGN.md`.
  - Implement the "No-Line" rule via tonal shifts.
  - Refine typography scales and letter spacing.
  - Standardize component rounding and glassmorphism.
- **Non-Goals**:
  - Re-designing the functional layout (sidebar/header logic).
  - Adding new interactive features beyond styling updates.

## Decisions
- **Color Roles**: Use Purple (`#9B30FF`) for Primary Action (`primary_container`) and Orange (`#FE6500`) for Headings (`secondary_container`). This reversal ensures the "Editorial Orange" highlights headlines while the "Electric Purple" drives conversion.
- **Tonal Stepping**: Use `surface_container_low` (#1C1B1B) on top of `surface_container_lowest` (#0E0E0E) to create depth without borders.
- **Typography**: Force all `h1-h6` to use `color: var(--color-brand-secondary-container)` (Orange). Implement `Display-LG` (3.5rem) with `-0.04em` tracking for a loud, premium voice.
- **Button Gradient**: CTA buttons SHALL use a linear gradient from `primary` (#DCB8FF) to `primary_container` (#9B30FF) at 135deg.

## Risks / Trade-offs
- **Contrast**: Ensuring Orange text on Dark backgrounds remains accessible (WCAG check during implementation).
- **Complexity**: Removing all 1px borders might require careful review of component separation in complex views.

## Open Questions
- Should the `secondary` button also use a gradient or stay as a ghost/outline? Spec says "Secondary: Transparent background with a Ghost Border and Orange text."
