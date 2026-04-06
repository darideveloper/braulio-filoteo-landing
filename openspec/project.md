# Project Context

## Purpose
Landing and contact page for Braulio Filoteo. This page will be his social hub: the central point for all his content in social media, podcasts, etc.

## Tech Stack
- Astro 5.x (Framework)
- TypeScript (Language)
- `clsx` (CSS Class Utility)
- Vanilla CSS (Styling)

## Project Conventions

### Specification DRY Mandates
- **Single Source of Truth:** Design tokens (colors, fonts, sizes) SHALL only be defined in `specs/branding/spec.md`. All other specifications SHALL reference these tokens by name.
- **Architectural Rules:** Core implementation patterns (e.g., section interfaces, editorial filters) SHALL be defined in `specs/core-architecture/spec.md`.

### Code Style
- **Atomic Composition:** Developers SHALL NOT create new HTML for common elements (buttons, icons, headers). Always use components from `src/components/atoms/` or `molecules/`.
- **Loop Rendering:** All repetitive UI elements SHALL be rendered via `.map()` (or equivalent loop logic) from data arrays/objects. Hardcoded repeated markup is prohibited.
- Use `clsx` library for complex or conditional classes instead of Astro's native `class:list`.
- Use TypeScript for all components and logic.
- Follow Astro's component-based architecture.

### Architecture Patterns
- Component-driven development with Astro components (`.astro`).
- Centralized layout in `src/layouts/Layout.astro`.
- Page-based routing in `src/pages/`.

### Testing Strategy
- [TBD] (The project is in early stages; a testing framework like Vitest or Playwright should be considered as the project grows).

### Git Workflow
- Use **Conventional Commits** format for all commit messages.
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- Example: `feat(ui): add social media links section`.

## Domain Context
- **Personal Branding:** The site focuses on Braulio Filoteo as a central figure in social media and podcasts.
- **Social Hub:** The primary goal is to provide a single, professional point of contact and link to various platforms.

## Important Constraints
- **Design Inspiration:** Based on [jp-newman.com](https://jp-newman.com/):
  - **Aesthetic:** Bold Editorial, clean, professional, and authoritative.
  - **Typography:** Bold, modern sans-serif headings (often all-caps with a trailing period).
  - **Color Palette:** High-contrast, sophisticated (likely black/white with prestige accents like gold or deep navy).
  - **Layout:** Modern long-form landing page with single-column flow and grid-based sections.

## External Dependencies
- [TBD] (Future integration with social media APIs or newsletter services like Beehiiv or Mailchimp).
