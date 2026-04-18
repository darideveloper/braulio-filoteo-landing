# Tasks: Update Plans CTA to Calendly

## Implementation
- [x] Update `plans` data array in `src/components/organisms/PlansSection.astro` <!-- id: 1 -->
    - Change `href` to `https://calendly.com/braulio-grit-ones/30min?primary_color=ff7100` for the premium plan.
    - Add `target: '_blank'` to the CTA object.

## Validation
- [x] Verify the "Aplicar al programa" button has the correct link and attributes. <!-- id: 2 -->
    - Run `grep` or inspect the file to ensure `href` and `target` are set correctly.
- [x] Ensure `BrandButton` correctly handles these props (manual verification of existing code). <!-- id: 3 -->
