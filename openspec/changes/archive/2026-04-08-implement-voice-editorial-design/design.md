# Design: Voice Editorial Components

## Global Utilities (`src/styles/global.css`)
Refining the theme variables to match the "Noir" aesthetic and adding key utilities for editorial layouts.

```css
@theme {
  --color-brand-background: #0e0e0e;
  --color-brand-surface: #131313;
  --color-brand-surface-container: #201f1f;
  --color-brand-surface-low: #1c1b1b;
}

@utility editorial-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

@utility neon-glow {
  box-shadow: 0 0 60px 0 rgba(155, 48, 255, 0.1);
}
```

## Atomic Updates

### `atoms/BrandButton.astro`
Adding a `circular` boolean prop to allow for high-impact circular icon buttons.

```astro
interface Props {
  // ... existing props
  circular?: boolean;
}

const baseClasses = clsx(
  "inline-flex items-center justify-center gap-3 transition-all cursor-pointer select-none group",
  circular ? "p-6 rounded-full" : "px-10 py-5 rounded-[0.25rem] label-md"
);
```

### `atoms/MaterialIcon.astro`
Supporting custom sizes via Tailwind `text-*` classes passed as a `size` prop.

```astro
interface Props {
  name: string;
  size?: string; // e.g., 'text-6xl', 'text-4xl'
  class?: string;
}

const { name, size = 'text-2xl', class: className } = Astro.props;
```

## New Molecules

### `molecules/MatrixCard.astro`
A grid item component with a title, icon, and an interactive progress line animation.

```astro
---
import MaterialIcon from '../atoms/MaterialIcon.astro';

interface Props {
  title: string;
  icon: string;
}

const { title, icon } = Astro.props;
---

<div class="bg-brand-surface-low p-10 flex flex-col justify-between min-h-[300px] group hover:bg-brand-surface-container transition-colors duration-500">
  <MaterialIcon name={icon} size="text-6xl" class="text-brand-secondary" />
  <div>
    <h3 class="font-brand-display text-2xl font-bold uppercase text-brand-text-high mb-2">{title}</h3>
    <div class="h-1 w-0 group-hover:w-full bg-brand-primary transition-all duration-700"></div>
  </div>
</div>
```

### `molecules/FeatureCTA.astro`
A high-impact CTA component that combines a circular button with a bold text label.

```astro
---
import BrandButton from '../atoms/BrandButton.astro';

interface Props {
  label: string;
  ctaText: string;
  icon: string;
}

const { label, ctaText, icon } = Astro.props;
---

<div class="flex flex-col items-center text-center max-w-4xl mx-auto py-12">
  <p class="label-md text-brand-primary tracking-[0.3em] uppercase mb-6">{label}</p>
  <h2 class="display-lg text-4xl md:text-6xl text-brand-text-high mb-12">
    <slot />
  </h2>
  <div class="flex items-center gap-4 group cursor-pointer">
    <div class="bg-brand-secondary text-white p-6 rounded-full group-hover:bg-brand-primary transition-colors duration-300">
      <MaterialIcon name={icon} size="text-4xl" />
    </div>
    <span class="font-brand-display font-bold text-xl uppercase tracking-tighter group-hover:text-brand-primary transition-colors">
      {ctaText}
    </span>
  </div>
</div>
```

## New Organism: `organisms/HeroEditorial.astro`
A text-only asymmetric hero designed for editorial storytelling.

```astro
---
import SectionWrapper from './SectionWrapper.astro';

interface Props {
  badge: string;
  title: string;
  description: string;
}

const { badge, title, description } = Astro.props;
---

<SectionWrapper variant="lowest" class="py-24" containerClass="editorial-grid gap-y-16">
  <div class="col-span-12 md:col-span-9">
    <p class="label-md text-brand-secondary mb-4">{badge}</p>
    <h1 class="display-2xl text-[3.5rem] md:text-[5rem] text-brand-text-high mb-8">
      {title}
    </h1>
  </div>
  <div class="col-span-12 md:col-start-6 md:col-span-6 border-l-4 border-brand-primary pl-8 py-4">
    <p class="text-xl md:text-2xl font-light text-brand-text-muted leading-relaxed">
      {description}
    </p>
  </div>
</SectionWrapper>
```

## Integration: `src/pages/index.astro`
Appending the new editorial sections to the landing page.

```astro
  <!-- Voice Editorial Sections -->
  <HeroEditorial 
    badge="Metodología Noir"
    title="Tu voz puede convertirse en una plataforma."
    description="Hoy la marca personal no se construye con frases motivacionales. Se construye con la profundidad de las ideas y la radicalidad de la ejecución."
  />

  <SectionWrapper variant="lowest" class="py-24">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <MatrixCard title="claridad de propósito" icon="target" />
      <MatrixCard title="narrativa personal" icon="auto_stories" />
      <MatrixCard title="consistencia" icon="sync" />
      <MatrixCard title="conversaciones profundas" icon="forum" />
    </div>
  </SectionWrapper>

  <FeatureCTA label="El Vehículo" ctaText="Inicia tu Proyecto" icon="mic">
    El vehículo más poderoso para hacerlo es un <span class="decoration-editorial">podcast</span>.
  </FeatureCTA>
```
