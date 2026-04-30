---
change-id: add-newsletter-to-sidemenu
title: Add Newsletter to Sidebar and Optimize Spacing
description: Adds a "Newsletter" navigation option to the sidebar that anchors to the newsletter section and reduces vertical spacing of menu items to maintain UI balance.
---

# Proposal: Add Newsletter to Sidebar and Optimize Spacing

The user wants to add a "Newsletter" link to the sidebar navigation that anchors to the newsletter section. To accommodate this extra item and improve the overall layout, the vertical spacing of navigation items and sidebar padding will be slightly reduced.

## Problem Statement
- The "Newsletter" section is currently not directly accessible from the sidebar navigation.
- Adding a new item to the sidebar might overflow or feel cramped on smaller vertical viewports (especially on mobile or smaller laptop screens) if the current spacing is maintained.

## Proposed Solution
1. **Update Navigation Config:** Add a new "Newsletter" entry to `src/config/navigation.ts` pointing to `#newsletter`.
2. **Reduce Item Spacing:** Change the vertical padding of navigation items in `src/components/molecules/Navigation.astro` from `py-3` to `py-2`.
3. **Optimize Sidebar Layout:** Adjust the sidebar's internal padding and margins in `src/components/organisms/Sidebar.astro` (e.g., reducing the logo margin and top/bottom padding) to ensure all items fit comfortably without unnecessary scrolling.

## Scope
- `src/config/navigation.ts`: Update data.
- `src/components/molecules/Navigation.astro`: Update item styling.
- `src/components/organisms/Sidebar.astro`: Update container layout.
