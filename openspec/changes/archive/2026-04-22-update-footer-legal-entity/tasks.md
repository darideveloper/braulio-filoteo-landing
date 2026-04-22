# Tasks: Update Legal Entity Branding

- [x] Update legal entity branding in `src/components/organisms/Footer.astro` <!-- id: 0 -->
    - Replace "Braulio Filoteo Editorial" with "GRITONES STUDIO LLC".
    - Update copyright notice "Braulio Filoteo" to "GRITONES STUDIO LLC".
    - Update logo alt text "Braulio Filoteo Logo" to "GRITONES STUDIO LLC Logo".
    - *Validation*: Run `npm run dev` and verify footer text, copyright, and alt text.
- [x] Update alt text in `src/components/organisms/Hero.astro` <!-- id: 1 -->
    - Replace "Braulio Filoteo Editorial Portrait" with "GRITONES STUDIO LLC Portrait".
    - *Validation*: Verify alt text in Hero section via dev tools.
- [x] Update `footer-section` specification <!-- id: 2 -->
    - Modify the `Brand Identity` scenario to reflect "GRITONES STUDIO LLC" and updated copyright holder.
    - *Validation*: Run `openspec validate update-footer-legal-entity`.
- [x] Update `hero-section` specification <!-- id: 3 -->
    - Modify relevant scenarios to use "GRITONES STUDIO LLC" in alt text requirements if applicable.
    - *Validation*: Run `openspec validate update-footer-legal-entity`.
