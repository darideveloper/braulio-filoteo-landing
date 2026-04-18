# Proposal: Enhance Link Handling & Internal Navigation

## Why
1. **Remote Links**: Many external links originally navigated the user away from the site in the same tab, breaking user flow and reducing session duration.
2. **Disconnected CTAs**: Several high-intent buttons across the landing page were either placeholders or lacked consistent destinations, leading to a fragmented user journey.

## What Changes
1. **External Links**: Updated shared components (`BrandButton`, `SocialCard`, `CollabItem`, `SocialLinks`, `FeatureCTA`) to support and/or default to `target="_blank"` for external URLs with `rel="noopener noreferrer"`.
2. **Social Media Configuration**: Updated `src/config/navigation.ts` and `SocialSection.astro` with the client's actual social media URLs.
3. **Internal & High-Intent Navigation**: Standardized CTA buttons to point to the `#plans` section or relevant external platforms (Spotify, WhatsApp).

## Specific Social Media Updates
- **LinkedIn**: `https://www.linkedin.com/in/braulio-filoteo-thrive/`
- **Instagram**: `https://www.instagram.com/brauliofiloteo/`
- **YouTube**: `https://www.youtube.com/@GRITonespodcast/featured`
- **WhatsApp (ESCRIBENOS)**: `https://api.whatsapp.com/send?phone=5219211697515`

## Specific Navigation Updates
The following buttons have been updated:
- **Escucha GRITones** (Hero Section) -> Points to Spotify (new tab).
- **Crea tu podcast** (Hero Section) -> Points to `#plans`.
- **Comienza Ahora** (Gritones Section / Service Card) -> Points to `#plans`.
- **Empieza tu Viaje** (CTA Section) -> Points to `#plans`.
- **Inicia tu Proyecto** (Feature CTA / Vehicle) -> Points to `#plans`.
- **ESCRIBENOS** (Plans Section) -> Points to WhatsApp (new tab).

## Specific Collaboration Updates
Updated `src/components/organisms/CollabSection.astro` with actual URLs and titles for:
- Charla TED
- La salud de tu marca (Spotify)
- Innokabi Podcast y Emprendimiento (YouTube)
- GRITones Podcast (Spotify)

## Scope
- `src/components/atoms/BrandButton.astro`
- `src/components/atoms/SocialLinks.astro`
- `src/components/molecules/SocialCard.astro`
- `src/components/molecules/CollabItem.astro`
- `src/components/molecules/PlansCard.astro`
- `src/components/molecules/FeatureCTA.astro`
- `src/components/organisms/NewsletterSection.astro`
- `src/components/organisms/PodcastSection.astro`
- `src/components/organisms/PlansSection.astro`
- `src/components/organisms/SocialSection.astro`
- `src/components/organisms/CollabSection.astro`
- `src/config/navigation.ts`
