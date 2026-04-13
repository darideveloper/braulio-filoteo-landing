# Proposal: Standardize Section IDs and Remove Redundant Wrappers

## Problem Statement
The home page (`src/pages/index.astro`) currently uses several nested `<div>` wrappers to add `id` attributes for navigation (e.g., `<div id="about"><AboutSection /></div>`). This results in:
1.  **Redundant DOM depth**: Unnecessary layers in the HTML structure.
2.  **Inconsistent implementation**: Some sections hardcode their IDs, while others rely on external wrappers, leading to potential navigation bugs.
3.  **Maintenance overhead**: Developers must manage IDs in both the page and the component, making it easy for them to get out of sync.

## Proposed Solution
Standardize ID management by passing the `id` as a prop to all section organisms. All sections should handle their own top-level ID, preferably by using the `SectionWrapper` component or by applying the `id` to their outermost element.

## Benefits
- **Cleaner markup**: Removes redundant `<div>` wrappers from the home page.
- **Consistent navigation**: Centralizes ID configuration in the page where the section is used.
- **Improved encapsulation**: Sections become self-contained, handling their own structural identity.

## Risks & Mitigations
- **Broken anchor links**: If an ID is accidentally changed or omitted, navigation from the sidebar/header could break.
    - *Mitigation*: Ensure the current IDs are preserved when moving them to props.
- **CSS Selectors**: If CSS or JS relies on the wrapper div's ID, it might break.
    - *Mitigation*: Review all CSS/JS for selectors that target the wrapper IDs. (Initial analysis shows `Hero.astro` uses `.js-hero-section` and some JS targets classes, not the wrapper IDs).
