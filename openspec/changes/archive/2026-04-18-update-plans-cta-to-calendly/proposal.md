---
change-id: update-plans-cta-to-calendly
title: Update Plans CTA to Calendly
description: Redirect the "Aplicar al programa" button in the Plans section to a Calendly booking page in a new tab.
---

# Proposal: Update Plans CTA to Calendly

## Goal
The goal is to enable users to book a discovery call directly through Calendly when clicking the "Aplicar al programa" button in the Plans section.

## Approach
Following "Option B: Direct Link", we will update the data object in `PlansSection.astro`. This approach is minimal and leverages existing components (`PlansCard` and `BrandButton`) which already support external links and `target="_blank"`.

## Architectural Reasoning
- **Minimalism:** No new JavaScript or external libraries are required.
- **Consistency:** Uses existing `BrandButton` props to handle the external link correctly.
- **UX:** Opens in a new tab to avoid taking the user away from the landing page prematurely.

## Spec Deltas
- `openspec/changes/update-plans-cta-to-calendly/specs/plans-cta-calendly/spec.md` (Modified `plans-section`)
