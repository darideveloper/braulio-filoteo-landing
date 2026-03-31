## Context
The Hero section is the first thing users see on Braulio Filoteo's landing page. It must reflect his identity as a social hub and content creator, following a "Bold Editorial" aesthetic.

## Goals / Non-Goals
- **Goals:**
  - Establish a professional, authoritative tone.
  - Clear CTA to engage visitors.
  - High-contrast layout using brand colors.
  - Large, bold typography for the name "BRAULIO FILOTEO."
- **Non-Goals:**
  - Complex animations or heavy JavaScript interactivity.
  - Multi-page navigation within the hero.

## Decisions
- **Decision:** Use CSS Grid for the hero layout to allow for flexible editorial structures.
- **Decision:** Use `Metropolis` as the primary font for the name/title in all-caps, with a trailing period (JP Newman style).
- **Decision:** Background will be `brand-background` (#000000) for maximum depth and contrast.
- **Decision:** Headings will use `brand-heading` (#9b30ff) for prestige.
- **Decision:** The CTA will use `brand-primary` (#ff0099) for high visibility.

## Risks / Trade-offs
- **Risk:** Large images (if any) could impact LCP. → **Mitigation:** Use modern formats like WebP/AVIF and proper sizing.

## Open Questions
- Will the hero include a specific portrait or generic branding image? (Assume generic/branding for now).
