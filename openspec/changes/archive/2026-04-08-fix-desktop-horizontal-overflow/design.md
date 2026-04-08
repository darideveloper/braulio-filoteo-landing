# Design: Fix Desktop Horizontal Overflow

The current layout in `Layout.astro` uses a `flex-col xl:flex-row` configuration on a wrapper `div` that contains both the `Sidebar` and the `main` element. Because the `Sidebar` is `fixed` on desktop (`hidden xl:flex ... fixed`), it is removed from the normal flex flow. As a result, the `main` element with `flex-grow` behaves as if it's the only child in the flex row, expanding to 100% width. When the `xl:ml-[280px]` margin is applied, it pushes the `main` element beyond the viewport by exactly 280px.

## Architectural Changes

- **Layout Structure Adjustment:** Remove the `xl:flex-row` from the layout wrapper on desktop. Since the sidebar is `fixed`, it will overlay the page content correctly, and the `main` element, acting as a block element in the normal flow, will naturally respect its left margin without needing to be part of a flex container. On mobile, `flex-col` will still work correctly.
- **Scrollbar Management:** Change `width: 100vw` in `src/styles/global.css` to `width: 100%`. `100vw` includes the width of the vertical scrollbar, often causing a horizontal scrollbar if a vertical scrollbar is present.

## Detailed Plan

### 1. `src/layouts/Layout.astro`
- Current: `<div class="flex flex-col xl:flex-row min-h-screen">`
- Change: `<div class="min-h-screen flex flex-col">` (Removes the `xl:flex-row` that was causing the `flex-grow` to over-expand.)
- The `main` element with `xl:ml-[280px]` will now correctly position itself to the right of the `fixed` sidebar, and its block nature will ensure it stays within the available width.

### 2. `src/styles/global.css`
- Change `html, body` from `width: 100vw` to `width: 100%`.

## Alternatives Considered

- **`max-width: calc(100vw - 280px)`:** This would also solve it, but it's more fragile than letting block elements handle their width naturally.
- **Removing `fixed` from Sidebar:** This would require a significant overhaul of the sidebar's scrolling behavior and position logic.
