# Design Specification: Ecosistema de Planes

## Architecture

This section follows the Atomic Design principles already established in the project. It introduces a new `PlansSection` (Organism) that acts as a container for two specialized `PlansCard` (Molecules), which in turn utilize existing Atoms (`Badge`, `BrandButton`, `MaterialIcon`).

### Layout

- **Header:** Uses `SectionHeader` but requires a new prop for the left-bordered description (`border-l-4`).
- **Bento Grid:** A 12-column grid layout where:
  - **Podcast Express:** Spans 5 columns on desktop.
  - **Podcast Pro+:** Spans 7 columns on desktop.
- **Outro:** A footer section with a call-to-action for an exploratory call, utilizing the `BrandButton` or a link component.

### Data Model

The `PlansCard` component will accept the following props:
- `title`: String
- `subtitle`: String
- `icon`: String (Material Icon name)
- `badge`: String
- `features`: Array of Strings
- `result`: { label: String, value: String }
- `cta`: { label: String, href: String }
- `variant`: "entry" | "premium"
- `class`: Optional extra classes for column spans.

### Theming & Variations

- **Entry Variant:** Uses secondary color accents (orange), solid borders, and check-mark lists.
- **Premium Variant:** Uses primary color accents (purple), glass-morphism, and line-mark lists.

## Trade-offs & Decisions

- **Why a new `PlansCard`?** While `MatrixCard` exists, it lacks the complex feature list and result-box structure needed for the Value Proposition section. Creating a dedicated `PlansCard` is cleaner than overloading `MatrixCard`.
- **Reusable Atoms:** Updating `Badge` and `BrandButton` to support new variants (outline, alternate colors) benefits the entire design system and avoids duplication.
