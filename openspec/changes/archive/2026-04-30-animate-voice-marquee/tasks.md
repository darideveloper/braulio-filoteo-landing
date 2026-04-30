# Tasks: Animate Background Words in FeatureCTA

## Phase 1: Component Enhancement
- [x] **Update `FeatureCTA.astro` Props:** Add `marqueeWords` to the `Props` interface and destructure it. <!-- id: 1 -->
- [x] **Implement Marquee Markup:** Add the conditional rendering logic to display the marquee container if `marqueeWords` is present. <!-- id: 2 -->
- [x] **Integrate Marquee Script:** Update the `<script>` block in `FeatureCTA.astro` to import `initNewsletterMarquee` and initialize it for the new marquee container. <!-- id: 3 -->

## Phase 2: Page Integration
- [x] **Update `index.astro`:** Replace the `watermark` prop with `marqueeWords` in the `vehicle-cta` section, providing the new Spanish word list. <!-- id: 4 -->

## Phase 3: Validation
- [x] **Verify Animation:** Ensure the marquee scrolls infinitely and smoothly. <!-- id: 5 -->
- [x] **Verify Responsive Design:** Check that the marquee scales appropriately on mobile and desktop. <!-- id: 6 -->
- [x] **Verify Reduced Motion:** Confirm the animation stops when reduced motion is enabled. <!-- id: 7 -->
- [x] **Full-Width Background**: Ensure background marquee/watermark spans edge-to-edge. <!-- id: 8 -->
