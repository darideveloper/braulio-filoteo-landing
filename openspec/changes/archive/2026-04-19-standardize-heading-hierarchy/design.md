# Design: Standardize Heading Hierarchy

## Architectural Reasoning
The project prioritizes an editorial aesthetic, but technical SEO and semantic HTML are essential for long-term health. The current architecture suffers from "heading bloat" and "sequence errors" that can be corrected through a systematic tag update.

### Core Principles
1. **Semantic Decoupling**: Visual appearance (governed by CSS classes like `.display-lg`) MUST be decoupled from semantic structure (H1-H6).
2. **Sequential Flow**: Headings MUST follow a logical, descending sequence (H1 -> H2 -> H3 -> H4). No skipping levels.
3. **Uniqueness**: A single `H1` MUST exist per page to satisfy SEO and accessibility crawlers.

## Component Updates

### Loader (Loader.astro)
- Current: `h1`
- Target: `span` (visually styled as `display-lg`)
- Reason: The Loader is a temporary UI state and should not contribute to the page's permanent semantic outline.

### Hero (Hero.astro)
- Current Sequence: `h2` ("COLECCIONISTA...") followed by `h1` ("BRAULIO FILOTEO").
- Target Sequence: `h1` ("BRAULIO FILOTEO") as the primary header. The descriptor ("COLECCIONISTA DE HISTORIAS") will be downgraded to a `p` or `span` tag.
- Reason: DOM order matters for assistive technologies. `h1` should be the first heading encountered.

### Section Items (Cards and CTAs)
- Target: Update `h4` tags to `h3` in components that are children of sections with `H2` headers.
- Affected: `AboutCard`, `PodcastCTA`, `CollabItem`.
- Organisms: `AboutSection` (brand icon labels), `Footer` (column titles).

## GSAP Animation Preservation
Most GSAP animations in this project use classes like `.js-reveal`, `.js-hero-headline`, etc.
- We will NOT change any `.js-*` class names.
- We will NOT remove any classes from elements.
- We will ONLY change the tag name (e.g., `<h4 class="js-card">` to `<h3 class="js-card">`).

Since GSAP targets these elements by class in almost all cases, the animations will remain 100% functional.

## UI Regression Prevention
Standard browser styles for `h1`-`h6` vary. However, this project uses a CSS reset (implied by `antialiased` and global styles) and explicit Tailwind classes for all heading components.
- Example: `AboutCard.astro` uses `text-xl font-brand-display font-bold mb-2`. This class set is independent of the `h4` or `h3` tag, ensuring the UI stays identical.
