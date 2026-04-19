# heading-semantics Spec Delta

## Purpose
This specification modifies existing components to ensure a semantic heading hierarchy while maintaining the editorial visual style and GSAP animation functionality.

## ADDED Requirements

### Requirement: Single H1 per Page
The project SHALL only have one `H1` tag per page, specifically the primary Hero title.

#### Scenario: Loader Semantic Downgrade
- **GIVEN** the `Loader` component.
- **THEN** its primary brand text SHALL NOT be rendered in an `<h1>` tag.
- **AND** it SHALL be rendered in a `<span>` or `<div>` visually styled as `display-lg`.

#### Scenario: Hero Section Primary H1
- **GIVEN** the `Hero` component.
- **THEN** the main portfolio name ("BRAULIO FILOTEO") SHALL be rendered in an `<h1>` tag.
- **AND** any preceding descriptor (e.g., "COLECCIONISTA DE HISTORIAS") SHALL NOT use a heading level higher than `H2`.

### Requirement: Sequential Heading Order
All sections SHALL follow a logical heading hierarchy (H1 -> H2 -> H3 -> H4) without skipping levels.

#### Scenario: Section Title (H2)
- **GIVEN** a primary content section (About, Podcast, Social, etc.).
- **THEN** its main title SHALL use an `<h2>` tag (via `SectionHeader` or equivalent).

#### Scenario: Section Item Title (H3)
- **GIVEN** an item inside a section (e.g., `AboutCard`, `PodcastCTA`, `CollabItem`, `SocialCard`).
- **THEN** its title SHALL use an `<h3>` tag.
- **AND** it SHALL NOT use an `<h4>` if it directly follows an `H2` section header.

#### Scenario: Footer and About Section Labels (H3)
- **GIVEN** column headers in the `Footer` or brand labels in the `AboutSection`.
- **THEN** these SHALL use `<h3>` tags instead of `<h4>`.
- **AND** they SHALL maintain their existing `label-md` or `text-xs font-bold` visual styling.

### Requirement: Heading Styling Decoupling
Heading tags (H1-H6) SHALL be visually interchangeable via utility classes.

#### Scenario: H3 Styled as Large Headline
- **GIVEN** an `<h3>` tag.
- **WHEN** visually representing a section item.
- **THEN** it SHALL use utility classes (e.g., `font-brand-display text-2xl font-bold`) to ensure it matches the design regardless of the underlying tag.
