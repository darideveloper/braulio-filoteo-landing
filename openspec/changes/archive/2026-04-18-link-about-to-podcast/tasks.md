# Tasks: Link About Section to Podcast

- [x] **Research & Setup**
    - [x] Verify section ID for Podcast (`#podcast`).
    - [x] Analyze `AboutSection.astro` rendering logic.

- [x] **Implementation**
    - [x] Update `brandIcons` array in `AboutSection.astro` to include `href: "#podcast"` for the "Sigue explorando" item.
    - [x] Refactor the mapping logic to use an `<a>` tag when an `href` is present.
    - [x] Add hover styles to link-based brand icons to ensure clear affordance.

- [x] **Validation**
    - [x] Verify the link correctly scrolls to the Podcast section.
    - [x] Ensure non-link icons remain static and styled correctly.
    - [x] Check responsive behavior on mobile and desktop.
