# Proposal: Update Design System with Missing Components

## Problem
The current `/design-system` page does not accurately reflect the full library of components available in the project. Several atoms, molecules, and organisms are missing, and existing components are only partially documented with a limited set of their variants. This leads to inconsistencies in component usage and makes it harder for developers to discover and reuse existing UI patterns.

Recent project updates have also integrated `SectionHeader` across multiple organisms (Newsletter, Podcast, Cta, About), and the component itself has been enhanced with new features like alignment, slots, and heading levels that are not yet showcased.

## Solution
Update `src/pages/design-system.astro` to showcase all components from `src/components/`, including all their variants and states. This will involve adding new sections for missing components and expanding existing ones to include more comprehensive examples.

Special focus will be given to `SectionHeader`, showcasing its new alignment (`left` vs `center`), heading level (`h1` vs `h2`), and slot-based title functionality.

## Scope
- **Atoms:** Add `MaterialIcon`, `SpotifyEmbed`. Expand `BrandButton`, `Badge`, `StatItem`, `AboutIcon`.
- **Molecules:** Add/Expand `SectionHeader` (show branding, alignment, levels, and title slot). Add `EditorialHeadline`, `PodcastCTA`, `SideBorderQuote`. Expand `EditorialPortrait`, `QuoteBlock`, `AboutCard`.
- **Organisms:** Add a "Layout & Sections" area to showcase `Header`, `Hero`, `AboutSection`, `CtaSection`, `NewsletterSection`, `PodcastSection`, and `Sidebar`.
- **Utilities:** Add more visual tests for utility classes if applicable.

## Relationships
- **Modifies:** `style-guide` specification.
- **Depends on:** All existing component implementations in `src/components/`.
