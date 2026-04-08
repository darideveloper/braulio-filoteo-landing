# Design: Footer Section Implementation

## Architecture overview
The `Footer` component will be implemented as an organism (`src/components/organisms/Footer.astro`) to ensure it's a self-contained, high-level structural unit. It will follow the "Neon Noir Editorial" aesthetic, utilizing tonal stepping (specifically the `surface_lowest` background) and radial glows as defined in `branding/spec.md`.

### Component Structure
The footer will be divided into three logical columns or rows (depending on viewport size):
1. **Brand Identity**: Logo and "Est. 2024" label.
2. **Navigation**: Re-using `Navigation.astro`.
3. **Legal & Social (Minimalist)**: A dynamic copyright notice (e.g., "© {new Date().getFullYear()} Braulio Filoteo. All rights reserved.") and potentially small social icons using `MaterialIcon.astro`.

### Integration Point
The component will be placed within `src/layouts/Layout.astro` as a sibling to the `main` tag. This ensures it appears at the very bottom of the page content (after the `main` content which includes the `Hero`). 

```astro
<div class="min-h-screen flex flex-col">
  <Sidebar />
  <Header />
  
  <main class="min-h-screen xl:ml-[280px] pt-20 xl:pt-0">
    <slot />
  </main>
  <Footer />
</div>
```

**Note:** The `Footer` component itself SHALL include the `xl:ml-[280px]` margin to align correctly with the `main` content area on desktop viewports.

## Technical choices
- **Tonal Stepping**: The footer will use `surface_container_lowest` (#0E0E0E) to differentiate itself from the preceding section's background, maintaining the "No-Line" rule.
- **Glassmorphism**: Consistent with the `Header`, the footer could optionally use a subtle glass effect if placed in a fixed position (though standard positioning is preferred for footers).
- **Loop Rendering**: Links and social information will be mapped from a central configuration object or passed via props to maintain the DRY mandate.
- **clsx Utility**: All conditional or complex class structures will use `clsx`.

## Trade-offs
- **Navigation Re-use**: While re-using `Navigation.astro` ensures consistency, the footer may require a vertical layout for links on mobile, which might differ from the header's navigation. The `Navigation` component's `className` prop will be used to adjust this layout.
- **Fixed vs Static**: A static (scrollable) footer is preferred for this landing page style to avoid cluttering the screen, especially given the existing persistent `Sidebar` and `Header` (on mobile).

## Implementation Details
- **Mobile responsiveness**: The 12-column editorial grid will be used to stack columns vertically on small screens and horizontally on large screens.
- **Spacing**: Generous vertical padding (`py-24` or similar) will maintain the bold, airy editorial feel.
