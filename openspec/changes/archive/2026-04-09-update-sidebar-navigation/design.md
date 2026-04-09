# Design for Sidebar and Navigation Update

## Centralized Navigation Source
The navigation labels and paths will be managed in `src/config/navigation.ts` to ensure consistency between the `Sidebar`, `Header` (mobile), and `Footer`.

### Navigation Data Structure
```typescript
export const navItems = [
  { label: 'Inicio', href: '#home', icon: 'home' },
  { label: 'Biografía', href: '#about', icon: 'person' },
  { label: 'Podcast', href: '#podcast', icon: 'mic' },
  { label: 'Estudio', href: '#studio', icon: 'settings' },
  { label: 'Planes', href: '#plans', icon: 'payments' }, // Payments icon for plans
  { label: 'Social', href: '#social', icon: 'share' }
];
```

## Global Interactivity
- **Smooth Scroll:** Enabled globally via `html { scroll-behavior: smooth; }` in `global.css`.
- **Top of Page Navigation:** The brand logo in all navigational components will point to `#home` for a refresh-free scroll back to the top.

## Layout Fixes

### Mobile Menu Visibility
The current implementation of the mobile menu in `Header.astro` uses `fixed inset-0 top-20` and `translate-x-full`.
- **Potential Issues:**
  - `inset-0` with `top-20` sets `top: 80px`. On smaller screens or with dynamic height, this might be causing viewport overflow or hidden content.
  - The `z-index` of the sections in `main` might overlap with the mobile menu if the header's container `z-index` isn't properly isolated.
- **Solution:** Ensure the `Header` has high isolation (`z-50`) and its child `mobile-menu` remains visible above all sections. Re-examine the `overflow` settings to allow internal scrolling of the menu.

### Footer Alignment
The footer is currently positioned inside the `main` content container which already has a `xl:ml-[300px]` (or 280px) margin.
- **Issue:** `Footer.astro` also defines its own `xl:ml-[300px]`, causing a double-offset that creates an "extra margin" on the right.
- **Solution:** Remove the internal `xl:ml` from `Footer.astro`. Standardize the sidebar width and main margin in `Layout.astro` to 300px.
