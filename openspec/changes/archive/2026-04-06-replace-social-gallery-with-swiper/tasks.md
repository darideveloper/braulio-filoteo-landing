# Tasks: Replace Social Gallery with SwiperJS

## 1. Preparation & Setup
- [x] Add SwiperJS to the project (via local installation or CDN in the component).
    - **Validation**: Verify SwiperJS script and CSS are correctly imported.

## 2. Component Refactoring
- [x] Remove the custom `drag-to-scroll` and `indicator-sync` script from `src/components/organisms/SocialSection.astro`.
- [x] Update the HTML structure in `SocialSection.astro` to use `swiper`, `swiper-wrapper`, and `swiper-slide` classes.
- [x] Implement Swiper initialization with `FreeMode`, `Pagination`, and `Mousewheel` modules.
    - **Validation**: Ensure the slider functions correctly with basic Swiper settings.

## 3. Styling & Branding
- [x] Apply custom CSS overrides to `swiper-pagination-bullet` and `swiper-pagination-bullet-active`.
- [x] Ensure `EditorialPortrait` aspect ratio and hover effects remain intact.
- [x] Adjust `spaceBetween` and `slidesPerView` to match the current horizontal layout.
    - **Validation**: Verify that the gallery still matches the "Neon Noir Editorial" look and the indicators are `w-8 h-1` bars.

## 4. Interaction & UX
- [x] Test mouse-drag interaction for inertia and momentum.
- [x] Verify touch-swiping on mobile devices (or via DevTools).
- [x] Check indicator synchronization during scroll/drag.
    - **Validation**: Confirm smooth, 60fps transitions and accurate pagination updates.

## 5. Final Verification
- [x] Perform a full responsive test (mobile, tablet, desktop).
- [x] Ensure no regressions in the social platform grid below the gallery.
    - **Validation**: Verify the entire `SocialSection` is bug-free and matches the original design intent.
