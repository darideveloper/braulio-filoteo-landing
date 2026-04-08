# hero-noir Specification

## Purpose
The `HeroNoir` organism provides a minimalist, high-impact editorial entry point for the "Studio" experience. It emphasizes stark contrast, tight typography, and an asymmetric 7/5 grid.

## Requirements
### Requirement: Noir Hero Layout
The `HeroNoir` SHALL implement a 12-column `editorial-grid` where the content is split between text and a portrait.

#### Scenario: Asymmetric grid split
- **GIVEN** a `HeroNoir` component.
- **THEN** it SHALL allocate 7 columns for the text content on desktop.
- **AND** it SHALL allocate 5 columns for the `EditorialPortrait`.
- **AND** elements SHALL be aligned to the bottom of the grid row (`items-end`).

### Requirement: Noir Hero Typography
The `HeroNoir` SHALL use the most aggressive typographic scale and tightest leading for its title.

#### Scenario: High-impact display title
- **GIVEN** a `HeroNoir` instance.
- **THEN** the main title SHALL use `display-2xl` (text-6xl md:text-8xl).
- **AND** it SHALL apply `leading-[0.9]` and `tracking-tighter`.
- **AND** it SHALL support mixed-case titles with word-level `brand-secondary` accents.

### Requirement: Minimalist Noir Content
The `HeroNoir` SHALL exclude secondary decorative elements like badges or statistical grids to maintain a clean editorial look.

#### Scenario: Restricted content scope
- **GIVEN** a `HeroNoir` instance.
- **THEN** it SHALL only render a small overline label, a large display title, a description paragraph, and the main `EditorialPortrait`.
