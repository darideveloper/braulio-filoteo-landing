# Design for Unified Mobile Menu and Sidebar

## Unified Architecture
Instead of maintaining two separate navigation containers (one in `Sidebar.astro` and one in `Header.astro`), the application will use `Sidebar.astro` as the single source of truth for the navigation layout.

### Responsiveness Strategy
- **Desktop (`xl`):** The sidebar remains static, fixed on the left side (`xl:translate-x-0`).
- **Mobile/Tablet:** The sidebar is hidden by default off-screen to the left (`-translate-x-full`). When the burger menu in `Header.astro` is toggled, an event or class manipulation will trigger the sidebar to slide in (`translate-x-0`).

### Vertical Alignment & Overflow
To fix the overflow issues where mobile menu elements were invisible:
- The sidebar container will strictly use `h-[100dvh]` (or `h-screen`) to occupy the full vertical viewport.
- The inner container holding the navigation links will utilize `overflow-y-auto` to allow scrolling if the vertical space is insufficient for all links, while the logo (top) and footer/socials (bottom) remain structurally aligned using flexbox (`flex-col`, `flex-grow`, `mt-auto`).

### Logo Sizing Reductions
To meet the new aesthetic requirements:
- **Desktop Logo:** Reduced by 30%. Previous width was 180px; new target width is `126px`.
- **Mobile Logo:** Reduced by 50%. Previous width was 120px; new target width is `60px`.

## Implementation Details
1. **`Header.astro` Cleanup:** Remove the `<div id="mobile-menu">` entirely. The `Header.astro` will only contain the mobile top-bar layout (Logo + Burger Button).
2. **State Management:** The `<script>` inside `Header.astro` (or a global script) will toggle a class (e.g., `sidebar-open`) on the `<body>` or directly on the `Sidebar` DOM element to handle the slide-in animation.
3. **Overlay:** An optional dark, semi-transparent backdrop should appear when the mobile sidebar is active to focus user attention and close the menu when clicked outside.
