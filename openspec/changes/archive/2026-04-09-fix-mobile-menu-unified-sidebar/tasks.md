# Tasks for Unified Mobile Menu and Sidebar

## 1. Header Cleanup and Logo Resize
- [x] Update `src/components/organisms/Header.astro`:
  - [x] Remove the `<div id="mobile-menu">` container and its internal navigation/social components.
  - [x] Reduce the mobile logo image width by 50% (set width to 60px).
  - [x] Refactor the `<script>` logic to dispatch a custom event (e.g., `toggle-mobile-menu`) or directly toggle classes on the Sidebar element instead of manipulating the deleted local menu.

## 2. Sidebar Refactoring
- [x] Update `src/components/organisms/Sidebar.astro`:
  - [x] Make the component responsive: remove `hidden xl:flex` and replace with base classes that position it off-screen (`-translate-x-full`) and `xl:translate-x-0`.
  - [x] Add `transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]` for the slide-in animation from the left.
  - [x] Ensure the container uses `h-[100dvh]` and `overflow-y-auto` for correct vertical alignment and scrolling on small devices.
  - [x] Reduce the desktop logo image width by 30% (set width to 126px).

## 3. Mobile State Integration
- [x] Implement the mobile toggle behavior:
  - [x] When the burger button is clicked, toggle the translation class on the Sidebar so it enters from the left.
  - [x] Add an overlay element (backdrop) that appears when the sidebar is open on mobile, allowing users to tap outside to close it.
  - [x] Ensure that clicking a navigation link inside the sidebar closes the menu on mobile.

## 4. Verification
- [x] Verify the mobile logo is visually smaller (60px).
- [x] Verify the desktop logo is visually smaller (126px).
- [x] On a mobile viewport, verify clicking the menu button slides the sidebar in from the left.
- [x] On a mobile viewport, verify all menu items are visible and the container is scrollable if the screen height is too small.
- [x] Verify desktop behavior remains stable (sidebar always visible on the left).
