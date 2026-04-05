# Design: Design System Expansion

## Architecture
The Design System page (`src/pages/design-system.astro`) follows an "Atomic Design" structure, grouping components into Atoms, Molecules, and Organisms. This structure will be maintained and expanded.

### Proposed Page Layout Updates
1.  **Atoms Section**
    -   Keep: Colors, Typography.
    -   Expand: `BrandButton` (show all variants, disabled state, icon usage).
    -   Expand: `Badge` (show usage with utilities).
    -   Expand: `StatItem` (show variant mix).
    -   Add: `MaterialIcon` (show symbol usage).
    -   Add: `SpotifyEmbed` (show media integration).
2.  **Molecules Section**
    -   Keep: `EditorialPortrait`, `Navigation`.
    -   Expand: `SectionHeader` (show branding, alignment: `left` vs `center`, heading level: `h1` vs `h2`, and use of the `title` slot).
    -   Add: `EditorialHeadline` (show layout patterns).
    -   Add: `PodcastCTA` (show primary action block).
    -   Add: `SideBorderQuote` (show textual accent).
    -   Expand: `QuoteBlock` & `AboutCard` (show in layout context).
3.  **Organisms & Sections (New Area)**
    -   Add: A new "Layout & Organisms" area to showcase larger blocks like `Header`, `Hero`, `AboutSection`, `CtaSection`, `NewsletterSection`, and `PodcastSection`. These should be rendered in a container to simulate a section layout.

## Technical Considerations
- **Imports:** New components will be imported into `design-system.astro`.
- **Layout:** Use `clsx` for conditional layout classes in the showcase.
- **Responsiveness:** Ensure all new showcase sections are responsive and look good on mobile.
- **Content:** Use realistic placeholder content that matches the "Neon Noir Editorial" brand.

## Potential Conflicts
- **Header/Sidebar:** Since these are global layout components, they may need special handling to avoid interfering with the Design System page's own layout or navigation. They should probably be shown as "Previews" in a constrained container or within an `iframe`-like structure if needed (though simple constrained containers are preferred).
