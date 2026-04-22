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

#### Scenario: Deprecation of Full-Height Layouts
- **GIVEN** a standard section component.
- **THEN** it SHALL NOT expose or utilize a `fullHeight` prop.
- **AND** any legacy `fullHeight` logic SHALL be removed in favor of standardized padding.

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

### Requirement: Centralized SEO Metadata
All pages SHALL use a centralized SEO component to manage `<head>` metadata, ensuring consistency across the project.

#### Scenario: Integration of `BaseSEO` in Layouts
- **GIVEN** a global layout component (e.g., `Layout.astro`).
- **THEN** it SHALL include the `BaseSEO` organism in its `<head>`.
- **AND** it SHALL pass relevant props (`title`, `description`, `ogImage`) down to `BaseSEO`.
- **AND** individual pages SHALL NOT manually define standard SEO meta tags (OG, Twitter, Favicons) in their head.

#### Scenario: Automatic No-Indexing
- **GIVEN** a non-production environment (e.g., `import.meta.env.PROD === false`).
- **THEN** `BaseSEO` SHALL automatically render `<meta name="robots" content="noindex, nofollow" />`.
- **AND** it SHALL allow manual override for specific production pages if needed.

#### Scenario: Structured Data Rendering
- **GIVEN** a page rendered via `BaseSEO`.
- **THEN** it SHALL include a `Person` schema JSON-LD representing "Braulio Filoteo".
- **AND** it SHALL include a `Service` schema representing "Gritones Studio" services.
- **AND** it SHALL include a `BreadcrumbList` schema JSON-LD representing the current page's position in the hierarchy.

### Requirement: SEO-Friendly Island Architecture
To ensure maximum search visibility, all interactive components SHALL utilize the "Slot Pattern".

#### Scenario: Server-Side Rendering of Content Slots
- **GIVEN** a complex interactive component (e.g., a React slider or modal).
- **THEN** its primary SEO content (titles, text, links) SHALL be passed as Astro `<slot />` content.
- **AND** it SHALL NOT rely exclusively on client-side state for rendering essential information.

### Requirement: Standardized Section Spacing
All main content sections SHALL NOT enforce a minimum height of `100vh`, with explicit exceptions for above-the-fold entry points and specialized layout containers.

#### Scenario: Global Spacing Consistency
- **GIVEN** a standard main section component (e.g., `SectionWrapper`, `PodcastSection`).
- **THEN** it SHALL NOT apply `min-h-screen` or `min-height: 100vh`.
- **AND** it SHALL utilize standardized vertical padding (e.g., `py-24`).

#### Scenario: Spacing Exceptions
- **GIVEN** a specialized entry or layout component (e.g., `Hero`, `Layout`, `404.astro`).
- **THEN** it MAY utilize `min-h-screen` to ensure proper viewport coverage or structural integrity.

### Requirement: Critical Resource Preloading
Pages SHALL prioritize the loading of above-the-fold assets to improve Core Web Vitals (LCP).

#### Scenario: Preloading Hero Visuals
- **GIVEN** a page with a Hero section.
- **THEN** the `BaseSEO` component SHALL include a `<link rel="preload">` for the main Hero image.
- **AND** it SHALL include `<link rel="preconnect">` for third-party font domains.

