# Design: Standardizing Section Headers

## Architectural Overview
The `SectionHeader` component will become the single source of truth for all section-level titles and labels. It will be enhanced to handle the varying requirements of different sections while maintaining a core structural pattern.

## Component Refactoring
The `SectionHeader.astro` component will be updated with the following enhancements:

### 1. Leverage Existing Color Props
- Continue using `labelColor` and `titleColor` props to manage section-specific branding (e.g., the different accent colors in About vs. Podcast sections) while maintaining consistent typography and spacing.

### 2. Flexible Heading Level
- Add a `level` prop (defaulting to `2`) to allow for `<h1>` rendering where semantically appropriate.

### 3. Title Slot Support
- In addition to the `title` prop, add a `title` slot to support rich text (e.g., spans with different colors or italicized text as seen in `CtaSection` and `NewsletterSection`).

### 4. Alignment and Spacing
- Add an `align` prop (`left` | `center`, defaulting to `left`) to support centered headers.
- Add a `maxWidth` prop to control the width of the header container, particularly for centered layouts.

### 5. Standard and Editorial Sizes
- Add a `size` prop (`standard` | `editorial`, defaulting to `standard`).
- `standard`: The original look (text-[2.5rem] md:[3.5rem], tracking-[-0.04em]) for About/Podcast sections.
- `editorial`: The larger scale (text-5xl md:7xl lg:8xl, tracking-[-0.06em]) for Newsletter and CTA sections to match the provided HTML reference.

### 6. Style Customization
- Ensure `class` prop correctly merges with internal classes to allow for section-specific tweaks without breaking the core structure.

## Integration Strategy

### CTA Section
The `CtaSection` will be updated to use `SectionHeader` with `align="center"` and `size="editorial"`. The rich text currently in `EditorialHeadline` will be passed via the `title` slot, allowing for the use of highlighting spans while maintaining a standardized layout.

### Newsletter Section
The `NewsletterSection` currently uses a `Badge` and `EditorialHeadline` manually. It will be updated to use `SectionHeader` with `align="center"` and `size="editorial"`. The `Badge` content will be passed as the `label` prop, and the `EditorialHeadline` content will move into the `title` slot.

### Design System
Each section in `design-system.astro` will replace its manual `label-md` and `headline-md` divs with the `SectionHeader` component. This will ensure consistent vertical gaps and typography across all documentation sections.

### Excluded: Hero Section
The Hero section's header remains a manual implementation. This decision avoids bloating `SectionHeader` with complex props for H1/H2 nesting, multiple overline tiers (Badges + Text), and unique font sizes (Headline-XL) that are exclusive to the page entry point.

## Visual Consistency
The "Neon Noir Editorial" style (bold, all-caps labels, specific tracking, and high-contrast titles) will be baked into the `SectionHeader` component defaults, ensuring that all sections automatically inherit the correct branding.
