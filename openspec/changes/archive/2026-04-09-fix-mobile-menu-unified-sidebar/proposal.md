# Change: Fix Mobile Menu with Unified Sidebar

## Why
The current mobile menu has visibility and overflow issues, and it duplicates logic already present in the Sidebar. Unifying these into a single responsive component ensures consistent branding, simplifies maintenance, and provides a smoother user experience. Additionally, the logos in both desktop and mobile are currently oversized, requiring a reduction to maintain proper editorial balance.

## What Changes
- **Unified Navigation Component:** The `Sidebar` component will now handle both desktop (fixed) and mobile (toggleable slide-over) views.
- **Mobile Logic Migration:** The toggle functionality for the menu on mobile will be managed by the `Header` component but affect the `Sidebar` visibility.
- **Improved Layout:** The mobile menu will slide in from the left, matching the desktop position.
- **Logo Resizing:**
  - Desktop: Reduce logo size by 30% (from ~180px to ~126px).
  - Mobile: Reduce logo size by 50% (from ~120px to ~60px).
- **Overflow and Vertical Alignment:** Ensure the menu uses the full screen vertical size and fixes all content clipping/overflow issues.

## Impact
- **Affected specs:** `sidebar-nav`
- **Affected code:** `src/components/organisms/Sidebar.astro`, `src/components/organisms/Header.astro`, `src/layouts/Layout.astro`
