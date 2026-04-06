---
change-id: replace-social-gallery-with-swiper
title: Replace Custom Social Gallery Slider with SwiperJS
description: Replace the inconsistent custom drag-to-scroll logic in the SocialSection with a robust SwiperJS implementation for better UX, touch support, and performance while maintaining the brand aesthetic.
author: Gemini CLI
status: implemented
---

# Proposal: Replace Custom Social Gallery Slider with SwiperJS

## Context
The current social gallery uses custom JavaScript for drag-to-scroll and indicator synchronization. This implementation is prone to bugs (especially on resize), lacks inertia/momentum, and doesn't provide the high-end feel expected of the brand.

## Goals
1. Improve the "Editorial Portrait Gallery" UX with smooth, hardware-accelerated transitions and inertia.
2. Provide native-feeling touch and mouse-drag support across all devices.
3. Maintain the existing "Neon Noir Editorial" branding (colors, indicators, grayscale transitions).
4. Simplify the codebase by replacing complex custom logic with a battle-tested library.
5. Keep the implementation data-driven for easy content updates.

## Proposed Changes
### Core Specs
- **MODIFIED `social-section`**: Update the "Editorial Portrait Gallery" requirement to specify SwiperJS behavior (inertia, loop, centered slides).

### Components
- **MODIFIED `src/components/organisms/SocialSection.astro`**:
    - Remove custom drag-to-scroll script.
    - Implement SwiperJS with the required modules (Navigation, Pagination, Autoplay).
    - Adapt the "Gallery Indicators" to work as Swiper Pagination dots with custom styling.
    - Ensure `EditorialPortrait` components are wrapped in `swiper-slide` containers.

### Global Styles
- **MODIFIED `src/styles/global.css`**: (Optional) Add Swiper CSS if not using CDN or local imports in the component.

## Data Structure
The `SocialSection` will continue to accept:
- `portraits`: An array of `{ src, alt }` for the gallery.
- `platforms`: An array of `{ name, description, icon, tag, href, color }` for the grid.

## Validation Plan
1. **Interaction Check**: Verify smooth dragging with inertia on desktop and touch devices.
2. **Indicator Sync**: Ensure indicators update correctly during both manual scroll and autoplay (if enabled).
3. **Responsive Behavior**: Verify the number of visible slides and spacing across mobile, tablet, and desktop.
4. **Visual Regression**: Compare against `ui-design/socials/code.html` to ensure zero visual changes to the branding.
