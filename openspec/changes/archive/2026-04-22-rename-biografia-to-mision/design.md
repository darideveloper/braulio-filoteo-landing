# Design: Rename "Biografía" to "Misión"

## Overview
The user wants to rename the primary "About" navigation link from "Biografía" (Biography) to "Misión" (Mission). This reflects a shift from a personal history focus to a mission-oriented focus, which is already present in the "About" section components (e.g., `SectionHeader` with `label="La Misión"`).

## Architecture Changes
- **Configuration**: Update `src/config/navigation.ts` to change the `label` from "Biografía" to "Misión".
- **Specs**: Update `openspec/specs/sidebar-nav/spec.md` to reflect the new navigation item text.
- **Specs**: Update `openspec/specs/about/spec.md` if necessary to ensure it remains consistent with the navigation label, though it already uses "La Misión".

## Trade-offs
- **Clarity vs. Convention**: "Biografía" is a standard term for an about page, but "Misión" is more specific to the brand's intent. Since the section already uses "La Misión", this change improves internal consistency.
