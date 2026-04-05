# Change: Add 404 Error Page

## Why
The website currently lacks a custom 404 Error page. When a user navigates to a non-existent URL, they see a default browser error page or an unstyled Astro fallback, which breaks the "Neon Noir" editorial branding experience.

## What Changes
- Implement a custom `src/pages/404.astro` page.
- Use `Layout.astro` for sidebar and header integration.
- Add an editorial 404 headline using `EditorialHeadline`.
- Include a branded error message and a navigation CTA using `BrandButton`.

## Impact
- **Affected specs:** `openspec/specs/style-guide/spec.md`, `openspec/specs/hero-section/spec.md` (typography/spacing).
- **Affected code:** `src/pages/404.astro` (new), `src/layouts/Layout.astro` (referenced).
- **User Experience:** Provides a professional error state consistent with the brand.
