# Tasks: Remove "EST. 2024" Branding

## 1. Specification Updates
- [x] Modify `hero-section` spec to remove the "EST. 2024" label requirement.
- [x] Modify `footer-section` spec to remove the "Est. 2024" timestamp requirement.
- [x] Add/Update `page-loader` spec to remove "EST. 2024" from the status text.

## 2. Implementation
- [x] Remove `floatingLabel='EST. 2024'` from `src/components/organisms/Hero.astro`.
- [x] Update `src/components/organisms/Footer.astro` to remove "Est. 2024 / " and change "Ciudad de México" to "México".
- [x] Update `src/components/organisms/Loader.astro` to remove "EST. 2024 / ".
- [x] Update `ui-design/hero/code.html` to remove "EST. 2024".
- [x] Update `docs/design-system.md` to remove or generalize the "EST. 2024" example.

## 3. Validation
- [x] Verify that no instances of "EST. 2024" (case-insensitive) remain in the active `src/` directory.
- [x] Ensure `EditorialPortrait` in the Hero section does not render an empty box.
- [x] Confirm Footer layout remains balanced without the timestamp.
