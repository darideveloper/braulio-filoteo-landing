# Design: 404 Error Page

## Architecture
The 404 page will follow the project's standard page pattern:
- **Layout:** Reuses `src/layouts/Layout.astro` which includes the `Sidebar` and `Header`.
- **Component Reuse:**
  - `EditorialHeadline`: Used for the prominent "404." text.
  - `BrandButton`: Provides the primary call to action back to the index page.
  - `SectionHeader`: (Optional) Can be used for a subheading if needed.

## Visual Aesthetic
The 404 page will leverage the "Neon Noir" palette:
- **Background:** `bg-brand-background` (Deep dark).
- **Typography:** Bold sans-serif `display-2xl` for the 404 error.
- **Accents:** Neon purple or secondary brand colors for the button and secondary text.

## Structure
```astro
---
import Layout from '../layouts/Layout.astro';
import EditorialHeadline from '../components/molecules/EditorialHeadline.astro';
import BrandButton from '../components/atoms/BrandButton.astro';
---

<Layout title="404 - Page Not Found / Braulio Filoteo">
  <section class="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
    <EditorialHeadline class="text-brand-primary drop-shadow-neon-purple leading-none mb-4">
      404.
    </EditorialHeadline>
    <p class="text-xl md:text-2xl font-medium text-slate-300 max-w-xl mx-auto mb-12">
      PARECE QUE TE HAS PERDIDO EN LA <span class="text-white italic">NARRATIVA</span>.
    </p>
    <BrandButton href="/" variant="primary" icon="arrow_forward">
      Regresar al Inicio
    </BrandButton>
  </section>
</Layout>
```

## Considerations
- **Responsiveness:** Ensure the 404 section is centered and legible on mobile.
- **Micro-interactions:** The `BrandButton` already includes hover effects and an icon, which will provide a polished feel.
- **Accessibility:** Use high-contrast colors and semantic HTML (`section`, `h2`/`h1` via `EditorialHeadline`).
