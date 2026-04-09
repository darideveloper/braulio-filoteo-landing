# Tasks for Sidebar and Navigation Update

## 1. Data Centralization and Content Update
- [x] Update `src/config/navigation.ts` with Spanish labels:
  - "Home" -> "Inicio"
  - "About" -> "Biografía"
  - "Podcast" -> "Podcast"
  - "Studio" -> "Estudio"
  - "Planes" -> `#plans` (pointing to the plans section)
  - "Social" -> "Social"
- [x] Ensure `navItems` uses the most relevant current sections in the project.

## 2. Global Interactivity and Behavior
- [x] Add `scroll-behavior: smooth` to `html` in `src/styles/global.css`.
- [x] Update `Sidebar.astro` logo link to `#home`.
- [x] Update `Header.astro` logo link to `#home`.

## 3. Layout Fixes: Sidebar and Header
- [x] Reconcile sidebar width and main content margin:
  - [x] Update `src/layouts/Layout.astro` to use `xl:ml-[300px]` for the `main` element.
  - [x] Ensure `Sidebar.astro` uses the consistent `w-[300px]`.
- [x] Resolve mobile menu visibility in `Header.astro`:
  - [x] Adjust `z-index` of the mobile menu to ensure it's on top of all page elements.
  - [x] Re-configure `fixed inset` and `overflow-y-auto` in `mobile-menu` to prevent content clipping or invisibility.
  - [x] Validate burger icon animation and menu toggle state.

## 4. Layout Fixes: Footer
- [x] Update `Footer.astro`:
  - [x] Remove redundant `xl:ml-[300px]` (since it is already inside the `main` container with its own left margin).
  - [x] Ensure correct content alignment with the editorial grid.

## 5. Verification
- [x] Validate that all navigation links work and scroll smoothly to the target section.
- [x] Verify the mobile menu's content is fully visible and scrollable if necessary.
- [x] Check footer alignment on desktop (ensure no right-side margin/offset).
- [x] Confirm all labels are in Spanish as requested.
