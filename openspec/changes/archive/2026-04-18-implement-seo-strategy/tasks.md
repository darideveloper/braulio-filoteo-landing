# Tasks: Implement SEO Strategy

## Phase 1: Infrastructure
- [x] Move all provided SEO assets (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `og-image.png`) from `temp/` to `public/`. <!-- id: 13 -->
- [x] Create `public/site.webmanifest` with branding colors. <!-- id: 1 -->
- [x] Create `src/components/organisms/BaseSEO.astro`. <!-- id: 3 -->
    - [x] Define `Props` interface (title, description, ogImage, canonicalURL, noindex).
    - [x] Implement title logic (`Page | Braulio Filoteo`).
    - [x] Implement environment-based noindex logic.
    - [x] Implement Open Graph and Twitter meta tags.
    - [x] Implement `Person`, `Service`, and `BreadcrumbList` JSON-LD schemas.
    - [x] Add preconnect and preload logic for LCP.

## Phase 2: Layout & Component Integration
- [x] Update `src/components/molecules/EditorialPortrait.astro` to support `loading`, `fetchpriority`, and `decoding` props. <!-- id: 11 -->
- [x] Modify `src/layouts/Layout.astro`. <!-- id: 4 -->
    - [x] Import `BaseSEO`.
    - [x] Replace manual head tags with `BaseSEO`.
    - [x] Pass `title`, `description`, and `ogImage` props.

## Phase 3: Content & Accessibility Audit
- [x] Audit `index.astro` and `404.astro` for unique titles and descriptions. <!-- id: 5 -->
- [x] Audit `Header.astro` and `Sidebar.astro` for `aria-label` on toggle buttons. <!-- id: 6 -->
- [x] Audit `Hero` section for image loading optimization (`loading="eager"`, `fetchpriority="high"`). <!-- id: 7 -->

## Phase 4: Validation
- [x] Run `npm run build` to ensure no regression in static site generation. <!-- id: 8 -->
- [x] Validate JSON-LD structure using a schema validator (manual or automated check). <!-- id: 9 -->
- [x] Verify `robots.txt` points correctly to the sitemap. <!-- id: 10 -->
