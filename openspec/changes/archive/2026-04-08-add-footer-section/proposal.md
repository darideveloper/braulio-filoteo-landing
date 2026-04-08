---
change-id: 2026-04-08-add-footer-section
title: Add Footer Section
status: draft
author: Gemini CLI
date: 2026-04-08
---

# Proposal: Add Footer Section

## Why
The website currently lacks a formal footer section. While a mobile menu provides some closing information ("Est. 2024 / Braulio Filoteo."), a persistent footer is standard for professional landing pages to provide easy access to core navigation, legal info, and branding.

## What Changes
Implement a "Neon Noir" editorial footer as an organism (`Footer.astro`) and integrate it into the global `Layout.astro`.

### Capabilities
- **Footer Section**: A new organism component that renders at the bottom of every page.
- **Logo Integration**: Re-uses the brand logo for visual consistency.
- **Navigation Links**: Re-uses the `Navigation` molecule for consistent site-wide links.
- **Social Presence**: Inclusion of social links (via `SocialLinks` atom).
- **Branding Alignment**: Adheres to the "Tonal Stepping" and "No-Line" rules defined in `branding/spec.md`.

## User Experience
Users will have a consistent endpoint at the bottom of every page where they can find navigation, the brand logo, and professional credentials.

## Dependencies
- `branding/spec.md` (Design tokens)
- `core-architecture/spec.md` (Layout/Section patterns)
- `src/components/molecules/Navigation.astro` (Existing links)
- `src/assets/images/logo.webp` (Brand logo)
