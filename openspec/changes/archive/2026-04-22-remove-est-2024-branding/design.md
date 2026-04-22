# Design: Removal of "EST. 2024" Timestamp

## Overview
This change involves removing the "EST. 2024" branding mark from the project. This mark appears in three primary locations: the cinematic page loader, the hero section's portrait, and the site footer.

## Architectural Decisions

### 1. Hero Section Label Removal
In `Hero.astro`, the `EditorialPortrait` component receives `floatingLabel='EST. 2024'`. Since this component conditionally renders the label container only if `floatingLabel` is truthy, removing the prop will cleanly remove both the text and its "glass-surface" container.

### 2. Footer Timestamp Update
In `Footer.astro`, the text currently reads `Est. 2024 / Ciudad de México.`. This will be updated to `México.` to maintain the location information while removing the establishment date and simplifying the location. The header "Establecido" will be kept to maintain layout balance, but its content will now focus on the location/entity.

### 3. Loader Status Update
In `Loader.astro`, the text `EST. 2024 / DOCUMENTING POTENTIAL` will be reduced to `DOCUMENTING POTENTIAL`. This preserves the brand mission while removing the date.

### 4. Design-to-Code Alignment
The `ui-design/hero/code.html` file, which serves as a visual reference, will be updated to match the final implementation, ensuring that future design audits do not see the removed text as a regression.

## Verification Strategy
- **Visual Audit**: Manually verify that "EST. 2024" is gone from the loader, hero, and footer.
- **Structural Integrity**: Ensure no broken layouts or empty containers remain where the labels used to be.
