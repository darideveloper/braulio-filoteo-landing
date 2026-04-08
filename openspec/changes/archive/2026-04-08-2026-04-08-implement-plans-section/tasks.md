# Tasks: Implement Ecosistema de Planes Section

## 1. Atoms & Utilities

- [x] **Badge:** Add `variant` prop to `src/components/atoms/Badge.astro` to support `outline` and `filled`.
- [x] **MaterialIcon:** Add `filled` prop to `src/components/atoms/MaterialIcon.astro`.
- [x] **BrandButton:** Add `outline-secondary` variant to `src/components/atoms/BrandButton.astro`.

## 2. Molecules

- [x] **SectionHeader:** Add `withBorder` prop to `src/components/molecules/SectionHeader.astro`.
- [x] **PlansCard:** Create `src/components/molecules/PlansCard.astro`.
  - [x] Implement `entry` variant with secondary accents.
  - [x] Implement `premium` variant with primary accents and glass-morphism.
  - [x] Implement conditional lists (checks vs lines).

## 3. Organisms & Pages

- [x] **PlansSection:** Create `src/components/organisms/PlansSection.astro`.
  - [x] Implement the 12-column bento grid.
  - [x] Integrate two `PlansCard` instances.
  - [x] Implement the outro CTA footer.
- [x] **Homepage:** Add `PlansSection` to `src/pages/index.astro`.
- [x] **Design System:** Add `PlansCard` to `src/pages/design-system.astro` for visual testing.

## 4. Validation

- [x] **LCP Check:** Ensure the new section doesn't regress LCP.
- [x] **Responsive Check:** Verify the bento grid stacks properly on mobile.
- [x] **Design Review:** Compare the final result with `@ui-design/plans/code.html`.
