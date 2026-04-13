# Design: Standardize Section ID Handling

## Background
The current approach to managing section IDs on the home page (`src/pages/index.astro`) is inconsistent. Many sections are wrapped in `<div>` elements solely to provide an `id` for navigation. Additionally, some sections have hardcoded IDs internally that conflict with the wrapper IDs.

## Proposed Architecture
All section organism components will support an optional `id` prop, standardized through the `SectionProps` interface in `src/types/Section.ts`.

### 1. Unified `Props` Interface
Each section organism should implement or extend `Partial<SectionProps>`.

```typescript
import type { SectionProps } from '../../types/Section';
interface Props extends Partial<SectionProps> { ... }
```

### 2. Standardized ID Application
- **Sections using `SectionWrapper`**: Pass the `id` prop directly to `SectionWrapper`.
- **Stand-alone sections (e.g., `Hero`, `CtaSection`)**: Apply the `id` to the root `<section>` element.

### 3. Home Page Cleanup
Remove all redundant `<div>` wrappers in `src/pages/index.astro` and pass the `id` directly to the components.

### 4. Transition & Backward Compatibility
To ensure anchor links from the navigation/sidebar continue to work, we will map the existing wrapper IDs to the component props:

| Current Wrapper ID | Target Component | Proposed Prop Value |
| --- | --- | --- |
| `home` | `Hero` | `id="home"` |
| `about` | `AboutSection` | `id="about"` |
| `podcast` | `PodcastSection` | `id="podcast"` |
| `social` | `SocialSection` | `id="social"` |
| `plans` | `PlansSection` | `id="plans"` |
| `studio` | `HeroNoir` | `id="studio"` |
| `methodology` | `PillarsSection` | `id="methodology"` |

*Note: For the `#studio` block, only the first component (`HeroNoir`) will receive the ID.*

### 5. Components to be Updated
- `src/components/organisms/Hero.astro`
- `src/components/organisms/PodcastSection.astro` (Remove hardcoded `"podcast"`)
- `src/components/organisms/SocialSection.astro`
- `src/components/organisms/HeroNoir.astro`
- `src/components/organisms/GritonesSection.astro` (Add optional `id` support)
- `src/components/organisms/PillarsSection.astro` (Remove hardcoded `"pilares"`)
- `src/components/organisms/CollabSection.astro` (Remove hardcoded `"colaboraciones"`)
- `src/components/organisms/YourStory.astro`
- `src/components/organisms/CtaSection.astro` (Add `id` support)
- `src/components/organisms/NewsletterSection.astro` (Ensure consistency)
