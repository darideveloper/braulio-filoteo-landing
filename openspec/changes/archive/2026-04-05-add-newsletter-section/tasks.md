# Tasks: Add Newsletter Section

- [x] **CSS: Update global styles**
  - Add `@utility bg-noir-gradient` to `src/styles/global.css`.
  - Add text stroke utility (or update Tailwind config) if necessary for the kinetic scroller.
  - *Validation*: Verify the CSS compiles without errors via `npm run build`.

- [x] **Molecule: Create `SideBorderQuote.astro`**
  - Extract the side-bordered quote pattern from `PodcastSection.astro`.
  - Accept a `class` prop to allow custom sizing (e.g., overriding text size for different contexts).
  - *Validation*: Ensure the component renders a paragraph with `border-l-2 border-brand-primary` and italic text.

- [x] **Refactor: Update `PodcastSection.astro`**
  - Replace the hardcoded `<p>` quote with the new `<SideBorderQuote>` component.
  - *Validation*: Visually verify the podcast section quote looks identical to before.

- [x] **Organism: Create `NewsletterSection.astro`**
  - Scaffold the section with `min-h-[921px]` and `bg-noir-gradient`.
  - Implement ambient glow elements (`bg-brand-primary/10`, `bg-brand-secondary/5`).
  - Assemble the header using `Badge` and `EditorialHeadline`.
  - Implement the content using `SideBorderQuote`.
  - Implement the form input and `BrandButton` with `variant="secondary"`.
  - Implement the social proof avatars.
  - Add the kinetic scroller decoration at the bottom.
  - *Validation*: Render the component and visually match it against `ui-design/newsletter/code.html`.

- [x] **Page: Integrate `NewsletterSection` into `index.astro`**
  - Import and render `<NewsletterSection />` inside `src/pages/index.astro`, presumably below the CTA or Podcast section.
  - *Validation*: Run dev server, check the layout, responsiveness, and interactions on the index page.