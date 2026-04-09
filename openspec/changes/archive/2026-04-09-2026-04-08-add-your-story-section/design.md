# Design: Your Story Section

The "Your Story" section is designed as a centered, high-contrast hero section within the "Neon Noir Editorial" framework. It prioritizes typographic weight over imagery, using scale and high-contrast color shifts to create an editorial feel.

## Component Structure

### `YourStory.astro` (Organism)
- **Base**: Wraps the content in a `SectionWrapper` with `variant="lowest"` (deep black).
- **Watermark**: Uses an absolute positioned `div` with `text-watermark` utility ("GRIT") behind the content, contained by the `SectionWrapper`'s relative positioning.
- **Header Logic**: Reuses **`SectionHeader`** molecule with `align="center"` and `size="editorial"`.
  - **Headline (Title Slot)**: Implements the `display-2xl` utility for a "3.5rem" to "8rem" font size.
    - Mixes white text with `brand-secondary` (orange).
    - Uses the `decoration-editorial` utility for the "MERECE" emphasis.
  - **Subheadline (Description)**: A centered paragraph using `text-brand-text-muted` and `border-b-2 border-brand-secondary` for highlighted text segments.
- **Action Row**: A flex-centered row containing:
  - `BrandButton` (Primary gradient) with the text "Crea tu podcast".
  - A contact row with `MaterialIcon` (email) and the `label-md` utility for email text.

## Styling Alignment

### Typography
- **Headlines**: `Epilogue` font via `display-2xl` (Uppercase, tight leading).
- **Body**: `Inter` font via `body-lg` or similar high-readability tokens.
- **Labels**: `Inter` font via `label-md` (Uppercase, tracked).

### Colors
- **Emphasis**: `brand-secondary` (Orange, #fe6500) for high-impact words and highlights.
- **Base Background**: `brand-background` (#0e0e0e).
- **Accent**: `brand-primary` (Purple, #9b30ff) used as a background underline decoration.

## Responsive Design
- **Mobile**: Centered text, stacked CTAs on very small screens, 6xl headline.
- **Desktop**: Maximum container width (4xl for content, 12-column grid or centered flex), 8xl headline.
