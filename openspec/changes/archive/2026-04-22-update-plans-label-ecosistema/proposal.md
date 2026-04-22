# Proposal: Update Plans Section Label and Title

## Summary
Update the `PlansSection` component by replacing the "Oferta de valor" label with "ECOSISTEMA" and the "Ecosistema de Planes" title with "Consolida tu Marca Personal".

## Problem
The current label and title are generic and don't fully align with the bold editorial branding and the strategic focus on personal branding consolidation.

## Solution
Modify the `SectionHeader` props within `src/components/organisms/PlansSection.astro`:
- Change `label` from "Oferta de valor" to "ECOSISTEMA".
- Change `title` from "Ecosistema de Planes" to "Consolida tu Marca Personal".

## Scope
- `src/components/organisms/PlansSection.astro`: Update the `SectionHeader` component's `label` and `title` props.
- `openspec/specs/plans-section/spec.md`: Update the specification to reflect the new label and title.
