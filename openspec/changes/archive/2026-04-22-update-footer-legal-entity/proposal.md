# Proposal: Update Legal Entity Branding

## Goal
Update the legal entity name from "Braulio Filoteo Editorial" to "GRITONES STUDIO LLC" across the site, primarily in the footer and alt text, to reflect the current company name.

## Scope
- Modify `src/components/organisms/Footer.astro` to update the legal entity text, the copyright notice, and the logo alt text.
- Modify `src/components/organisms/Hero.astro` to update the hero portrait alt text.
- Update `footer-section` and `hero-section` specifications to reflect the new requirement.

## Strategy
- Replace the literal string "Braulio Filoteo Editorial" with "GRITONES STUDIO LLC".
- Update copyright notices from "Braulio Filoteo" to "GRITONES STUDIO LLC" where they refer to the legal entity.
- Update logo and portrait alt texts to use "GRITONES STUDIO LLC" instead of "Braulio Filoteo Editorial".
- Keep the "Est. 2024 / Ciudad de México" part as it provides context.
- Ensure the change aligns with the "Neon Noir Editorial" design system by maintaining typography and spacing.
- Retain "Braulio Filoteo" in contexts referring to the individual (e.g., SEO person name, individual portrait labels).
