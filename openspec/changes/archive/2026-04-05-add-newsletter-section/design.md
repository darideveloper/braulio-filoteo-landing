# Design: Newsletter Section & Editorial Quote

### 1. Global CSS Utilities
The new newsletter design relies on a couple of specific visual treatments that need to be added to `src/styles/global.css`:
- `bg-noir-gradient`: A radial gradient for the background (`radial-gradient(circle at center, var(--color-brand-surface) 0%, var(--color-brand-background) 100%)`).
- Kinetic Scroller Text Stroke: We will add an inline style or a custom tailwind class (e.g., `text-stroke-brand` or equivalent) to replicate the stroked typography effect in the background of the newsletter section.

### 2. Extracting `SideBorderQuote.astro`
Currently, `PodcastSection.astro` hardcodes a side-bordered quote:
```html
<p class="text-brand-text-high font-brand-body text-lg border-l-2 border-brand-primary pl-6 py-2 italic leading-relaxed">
```
The newsletter section requires a visually identical pattern. To prevent duplication and ensure consistency, we will create `src/components/molecules/SideBorderQuote.astro`. 

### 3. Constructing `NewsletterSection.astro`
The section will be implemented as an Organism. It will reuse:
- `<Badge>` for the "Membresía Privada" overline.
- `<EditorialHeadline>` for the "GRIT en la vida cotidiana" headline.
- `<SideBorderQuote>` for the descriptive quote.
- `<MaterialIcon>` for the list items ("Audios Inéditos", "Ensayos Semanales").
- `<BrandButton variant="secondary">` for the subscribe button to get the orange glow effect.

The animated input form and the overlapping avatars for social proof will be built directly inside the organism using Tailwind classes, as they are specific to this section and not yet needed elsewhere.