# Design: SEO Strategy Implementation

## Overview
The SEO strategy is built around a centralized component, `BaseSEO.astro`, which will be responsible for rendering all `<head>` metadata. This ensures consistency across pages and simplifies maintenance.

## Component Architecture

### `BaseSEO.astro`
Located in `src/components/organisms/BaseSEO.astro`.
It will accept props for:
- `title`: Page title (with fallback to site name).
- `description`: Page meta description.
- `ogImage`: URL for the social sharing image.
- `canonicalURL`: The canonical link for the page.
- `noindex`: Boolean to force `noindex`.

#### Logic
- **Title Rendering:** If `title` is provided, render `Title | Braulio Filoteo`. If not, just `Braulio Filoteo`.
- **Environment Check:** Automatically set `noindex` if `import.meta.env.PROD` is false, unless explicitly overridden.
- **Structured Data:** Embed JSON-LD scripts for `Person` (representing Braulio Filoteo) and `BreadcrumbList`.

## Layout Integration
`Layout.astro` will be modified to include `BaseSEO` instead of manual meta tags.

```astro
---
// Layout.astro
import BaseSEO from '../components/organisms/BaseSEO.astro';
const { title, description, ogImage } = Astro.props;
---
<head>
  <BaseSEO {title} {description} {ogImage} />
  ...
</head>
```

## Static Assets
- **Favicons:** Standardized set in `public/`.
- **Manifest:** `public/site.webmanifest` defining the PWA features.
- **Robots.txt:** Already exists as `src/pages/robots.txt.ts`, ensure it points correctly to the sitemap.

## Design Tokens Integration
The `theme-color` will be sourced from the `branding` spec's primary brand color (OKLCH).
