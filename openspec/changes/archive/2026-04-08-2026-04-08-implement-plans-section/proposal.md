---
change-id: 2026-04-08-implement-plans-section
title: Implement Ecosistema de Planes Section
status: implemented
author: Gemini CLI
---

# Proposal: Implement Ecosistema de Planes Section

## Summary
Implement the "Ecosistema de Planes" (Value Proposition) section as defined in the reference page `@ui-design/plans/code.html`. This section showcases two main offerings (Podcast Express and Podcast Pro+) in a bento-style editorial grid, emphasizing the distinct value of each path for personal brand building.

## Goals
- Add a new `PlansSection` organism to display the value proposition grid.
- Create a reusable `PlansCard` molecule with support for "Entry Level" and "Premium" variants.
- Update `SectionHeader`, `Badge`, `BrandButton`, and `MaterialIcon` to support the visual requirements of the new section.
- Maintain consistency with the Neon Noir / Editorial design system while reusing existing components.

## Scope
- **Atoms:** `Badge.astro`, `BrandButton.astro`, `MaterialIcon.astro`.
- **Molecules:** `SectionHeader.astro`, `PlansCard.astro` (new).
- **Organisms:** `PlansSection.astro` (new).

## Out of Scope
- Global CSS modifications (the existing theme variables and utilities are sufficient).
- Backend integrations for the CTA forms.
- Re-design of existing sections (Hero, About, etc.).
