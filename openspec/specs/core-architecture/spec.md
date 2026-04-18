# core-architecture Specification

## Purpose
Establishes the foundational implementation rules for all components to ensure the project remains DRY, modular, and maintainable.
## Requirements
### Requirement: Implementation DRYness (Loop Rendering)
All components containing repetitive UI elements (e.g., social links, stats, cards, or menu items) SHALL utilize data-driven loops instead of hardcoded markup.

#### Scenario: Rendering lists from arrays
- **GIVEN** a component with multiple similar items.
- **THEN** the items SHALL be defined as a TypeScript array or object constant.
- **AND** the component SHALL use `.map()` (or equivalent Astro logic) to render the items.
- **AND** the data structure SHALL be separated from the visual template logic.

### Requirement: Atomic Composition Mandate
Developers SHALL NOT create new HTML for elements (e.g., buttons, icons, or headers) if an equivalent component already exists in `src/components/atoms/` or `molecules/`.

#### Scenario: Composing organisms from atoms
- **GIVEN** a new section requiring a button.
- **THEN** the developer SHALL import and use the existing `BrandButton.astro` component.
- **AND** it SHALL NOT define its own button styling or markup in the section component.

### Requirement: Standardized Section Interface
All section organism components SHALL support an `id` prop to handle their own identity within a page.

#### Scenario: Supporting `id` prop in organisms
- **GIVEN** a section organism component (e.g., `Hero`, `PodcastSection`).
- **THEN** it SHALL define an optional `id` prop in its `Props` interface.
- **AND** it SHALL apply this `id` to its root element.
- **AND** if it uses `SectionWrapper`, it SHALL pass the `id` to it.

### Requirement: Media & Filter Standardization
Any component rendering images SHALL apply the project's standard "Editorial Treatment".
#### Scenario: Efficient Transitions
- **ADDED** **GIVEN** an editorial image with hover effects.
- **ADDED** **THEN** the CSS transition SHALL explicitly target moving or filtering properties (e.g., `filter`, `transform`).
- **ADDED** **AND** it SHALL NOT use `transition: all` on elements undergoing continuous GSAP manipulation.

### Requirement: Container-Aware Responsiveness
All new editorial components SHALL use container-aware breakpoints (@3xl for 768px, @5xl for 1024px) instead of viewport breakpoints to ensure layout stability within the main content container.

#### Scenario: Global Layout Stability
- **GIVEN** a component inside the main container.
- **THEN** it SHALL use `@` breakpoints (e.g., `@3xl:grid-cols-2`).
- **AND** it SHALL NOT use standard `md:` or `lg:` viewport breakpoints.

### Requirement: Animation Engine (GSAP)
GSAP SHALL be the standard animation library for the project. Developers SHALL NOT use other animation libraries (e.g., Framer Motion, Motion One) or complex CSS `@keyframes` when GSAP can achieve the same effect with better performance and timeline control.

#### Scenario: Registering GSAP Plugins
- **GIVEN** a component requiring scroll-driven animations.
- **THEN** it SHALL use `gsap.registerPlugin(ScrollTrigger)` once within its client-side script.
- **AND** it SHALL utilize `gsap.matchMedia()` for responsive and accessible animation handling.

#### Scenario: Reduced Motion Handling
- **GIVEN** a user with `prefers-reduced-motion: reduce`.
- **THEN** all non-essential GSAP animations SHALL be disabled or simplified to basic opacity fades.
- **AND** the code SHALL check for this preference using `gsap.matchMedia()`.

### Requirement: Clean Page Markup
Page components SHALL NOT wrap section components in `<div>` elements only for the purpose of adding an `id`.

#### Scenario: Clean Home Page Markup
- **GIVEN** a page composed of multiple sections (e.g., `index.astro`).
- **THEN** it SHALL pass the section's unique identifier as a prop instead of using a wrapper `<div>`.
- **AND** it SHALL ensure that navigation IDs match the existing anchor links (e.g., `#home`, `#about`).

