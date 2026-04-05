# Proposal: Standardize Section Headers

## Problem
The `SectionHeader.astro` component is currently used only in `AboutSection.astro` and `PodcastSection.astro`. Other sections like `Hero.astro`, `CtaSection.astro`, and the `design-system.astro` page use manual implementations of headers. This leads to code duplication and visual inconsistencies across the site.

## Proposed Solution
Standardize the use of `SectionHeader.astro` across all sections of the project. To achieve this, the component must be refactored to be more flexible, supporting different heading levels (h1 vs h2), custom alignments, and rich text content in titles.

## Goals
- Standardize header structure and styling across the entire project.
- Reduce code duplication in `Hero`, `CtaSection`, and `design-system.astro`.
- Ensure a consistent "Neon Noir Editorial" aesthetic for all section headers.
- Maintain existing visual designs while using the shared component.

## Scope
- Refactor `src/components/molecules/SectionHeader.astro` to support slots, alignment, flexible heading levels, and an `editorial` size variant.
- Update `src/components/organisms/CtaSection.astro` and its usage in `index.astro` to use `SectionHeader`.
- Update `src/components/organisms/NewsletterSection.astro` to use `SectionHeader`.
- Update `src/pages/design-system.astro` to use `SectionHeader` for its sections.
- Update `openspec/specs/section-header/spec.md` to reflect new capabilities.

## Exclusions
- `src/components/organisms/Hero.astro`: Excluded from standardization due to its unique editorial structure, specific SEO requirements (H1/H2 nesting), and significantly larger font sizes that deviate from the standard section pattern.
