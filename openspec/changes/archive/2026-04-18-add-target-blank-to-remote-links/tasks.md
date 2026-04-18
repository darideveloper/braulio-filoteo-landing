# Tasks: Enhance Link Handling & Internal Navigation

## 1. Core Component Updates
- [x] Update `src/components/atoms/BrandButton.astro` to support `target` and `rel` props.
- [x] Update `src/components/atoms/SocialLinks.astro` to add `target="_blank"` and `rel="noopener noreferrer"` to platform links.
- [x] Update `src/components/molecules/SocialCard.astro` to add `target="_blank"` and `rel="noopener noreferrer"` to the main anchor.
- [x] Update `src/components/molecules/CollabItem.astro` to add `target="_blank"` and `rel="noopener noreferrer"` to the link.
- [x] Update `src/components/molecules/PlansCard.astro` to support passing `target` and `rel` to `BrandButton`.
- [x] Update `src/components/molecules/FeatureCTA.astro` to support `href` prop and render as an anchor tag.

## 2. Page & Section Updates (Hardcoded Links)
- [x] Update `src/components/organisms/NewsletterSection.astro`: Add `target="_blank"` to the Substack fallback link.
- [x] Update `src/components/organisms/PodcastSection.astro`: Pass `target="_blank"` to the `BrandButton` for "Explorar todos los episodios".
- [x] Update `src/components/organisms/PlansSection.astro`: Pass `target="_blank"` for external plan links.
- [x] Update `src/components/organisms/PlansSection.astro`: Update "ESCRIBENOS" link with WhatsApp URL and add `target="_blank"`.
- [x] Update `src/components/organisms/SocialSection.astro`: Replace placeholder social links with actual URLs in the `platforms` array.
- [x] Update `src/components/organisms/CollabSection.astro`: Update `collabs` array with actual URLs and titles, and remove redundant/empty items.

## 3. Internal & High-Intent CTA Alignment
- [x] Update `src/components/organisms/Hero.astro`: Point "Escucha GRITones" to the client's Spotify podcast and add `target="_blank"`.
- [x] Update `src/components/organisms/Hero.astro`: Point "Crea tu podcast" button to `#plans`.
- [x] Update `src/components/organisms/GritonesSection.astro`: Point "Comienza Ahora" button to `#plans`.
- [x] Update `src/pages/index.astro`: Point "Empieza tu Viaje" in `CtaSection` to `#plans`.
- [x] Update `src/pages/index.astro`: Point "Inicia tu Proyecto" in `FeatureCTA` to `#plans`.

## 4. Configuration & Audit
- [x] Update `src/config/navigation.ts`: Replace placeholder social links with actual URLs (LinkedIn, Instagram, YouTube).
- [x] Update `src/config/navigation.ts`: Add `target: '_blank'` and `rel: 'noopener noreferrer'` to the `socialLinks` schema/objects.
- [x] Audit `src/components/organisms/Footer.astro` and `Sidebar.astro` for any missing external link targets.
- [x] Update `.links.md` index file to reflect current implementation.

## 5. Validation
- [x] Verify all external links open in a new tab with `rel="noopener noreferrer"`.
- [x] Verify all internal links (anchors) still work in the same tab.
- [x] Run `npm run build` to ensure no regressions.
