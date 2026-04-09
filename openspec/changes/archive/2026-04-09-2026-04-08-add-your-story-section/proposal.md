# Proposal: Add "Your Story" Hero Section

Implement a high-impact, editorial-style hero section titled "Your Story" based on the design reference `ui-design/your-story/code.html`. This section serves as a centered storytelling anchor that reinforces the brand's "Neon Noir Editorial" aesthetic.

## Motivation
The project requires a specialized section to emphasize the user's journey and provide a direct path to the "Crea tu podcast" conversion point. The current hero sections (`HeroNoir`, `HeroEditorial`) are asymmetrical and image-focused, whereas this section requires a centered, typography-first approach with subtle watermark branding.

## Proposed Changes

### Core Components
- **`YourStory.astro`**: Create a new organism component that implements the centered layout, specific mixed-style headline, and background watermark.

### Integration
- **`index.astro`**: Add the `YourStory` section to the main landing page.

## Reuse Strategy
- **`SectionWrapper`**: Use for base structure and background containment.
- **`BrandButton`**: Use for the primary CTA, adhering to existing `rounded-[0.25rem]` and `variant="primary"` to maintain architectural consistency.
- **`MaterialIcon`**: Use for the contact information row.
- **Tailwind Utilities**: Leverage `display-2xl`, `decoration-editorial`, `text-watermark`, and `label-md` for styling.

## Impact
- **Visual**: Adds a high-contrast, centered typographic section to the homepage.
- **Consistency**: Maintains the strict design system rules regarding border-radii and typography while introducing new storytelling depth.
- **Performance**: Zero external dependencies added; utilizes existing CSS utilities.
