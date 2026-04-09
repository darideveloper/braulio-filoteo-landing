# Tasks: Implement Pillars and Collaboration Sections

## Core UI Refinements
- [x] **Task 1**: Update `SectionHeader.astro` to include `layout="inline-start"`.
  - [x] Add `layout="inline-start"` to the `Props` interface and destructuring.
  - [x] Implement the `inline-start` layout in the template (label before title, baseline-aligned).
  - [x] **Validation**: Verify `SectionHeader` renders correctly with the new layout in isolation.
- [x] **Task 2**: Enhance `SectionWrapper.astro` to expose core `SectionHeader` props.
  - [x] Add `headerLayout`, `titleColor`, `labelColor`, and `size` to `SectionWrapper`'s `Props`.
  - [x] Pass these props through to the underlying `SectionHeader`.
  - [x] **Validation**: Verify that standard organisms can now control their header color and layout.

## Methodology Section (Pillars)
- [x] **Task 3**: Implement `PillarCard.astro` molecule.
  - [x] Create the component in `src/components/molecules/`.
  - [x] Implement the `aspect-square` layout with icon, number, title, and description.
  - [x] Add hover background transitions and color shifts.
  - [x] **Validation**: Verify hover effects and aspect ratio stability across screen sizes.
- [x] **Task 4**: Create `PillarsSection.astro` organism.
  - [x] Create the section using `SectionWrapper` and a 4-column grid of `PillarCard`s.
  - [x] Use a data-driven loop for the card items.
  - [x] **Validation**: Confirm the section is fully responsive and uses the `inline-start` header layout.

## Collaboration Section
- [x] **Task 5**: Implement `CollabItem.astro` molecule.
  - [x] Create the component in `src/components/molecules/`.
  - [x] Implement the hover logic: icon fade-in and horizontal padding expansion.
  - [x] **Validation**: Verify smooth transitions and interactive feedback.
- [x] **Task 6**: Create `CollabSection.astro` organism.
  - [x] Implement the 6/5/1 split using the `editorial-grid` utility.
  - [x] Integrate `CollabItem`s on the right side.
  - [x] **Validation**: Confirm the asymmetric layout collapses correctly on mobile and doesn't overlap on desktop.

## Final Assembly & Validation
- [x] **Task 7**: Integrate sections into the landing page.
  - [x] Add `PillarsSection` and `CollabSection` to `src/pages/index.astro`.
  - [x] **Validation**: Run the project, verify visual fidelity against `code.html`, and check for console errors or accessibility issues.
