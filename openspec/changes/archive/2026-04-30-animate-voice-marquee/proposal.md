# Proposal: Animate Background Words in FeatureCTA

This proposal aims to enhance the `FeatureCTA` section in the home page by replacing the static "VOICE" watermark with an animated background marquee of Spanish words related to the section's content ("VOZ", "PODCAST", "NARRATIVA", "ESTRATEGIA", "PLATAFORMA"). This animation will match the "Kinetic Scroller" pattern found in the `NewsletterSection`.

## Context & Motivation
The "El Vehículo" section currently uses a static background text ("VOICE"). To align with the "Neon Noir Editorial" aesthetic and maintain visual consistency with the `NewsletterSection`, this background element should be dynamic. Adding multiple words in Spanish provides better context for the Hispanic audience and adds a layer of depth to the cinematic experience.

## Proposed Changes
1. **Component Enhancement:** Update `src/components/molecules/FeatureCTA.astro` to support a marquee of background words.
2. **Kinetic Animation:** Implement the marquee animation logic within `FeatureCTA.astro`, reusing the `initNewsletterMarquee` pattern or utility.
3. **Usage Update:** Update `src/pages/index.astro` to pass the new list of Spanish words to the `FeatureCTA` component.
4. **Styling:** Ensure the marquee words use the "stroke" vs "filled" visual language established in the design system.

## Impact
- **Visuals**: Increases the "premium" feel of the section with high-impact kinetic typography that spans the full width of the viewport.
- **Consistency**: Unifies the motion language across different sections of the page.
- **Localization**: Introduces relevant Spanish terminology in the background layer.
