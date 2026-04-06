# Design: Social Gallery Slider Architecture

## Architectural Patterns
The `SocialSection` gallery will transition from a custom implementation to using **SwiperJS**, while strictly adhering to the "Neon Noir Editorial" style.

### 1. SwiperJS Implementation
The gallery will use the following Swiper configuration:
- `modules`: `[Navigation, Pagination, Mousewheel, FreeMode]`
- `freeMode`: `true` (with `momentumBounce: false` for a smooth, editorial feel)
- `mousewheel`: `true` (for desktop scrolling)
- `centeredSlides`: `false` (to match the current left-aligned start)
- `slidesPerView`: `'auto'` (to support variable-width portraits, specifically `300px` to `450px`)
- `spaceBetween`: `24` (matches the current `gap-6`)
- `loop`: `false` (standard for social feeds)

### 2. Custom Pagination
Instead of using Swiper's default bullets, we will override the `swiper-pagination` to match the project's existing "Gallery Indicators" (`w-8 h-1` bars).

**Branding Override**:
```css
.swiper-pagination-bullet {
  width: 2rem !important; /* w-8 */
  height: 0.25rem !important; /* h-1 */
  border-radius: 9999px !important; /* rounded-full */
  background: var(--color-brand-outline-variant) !important;
  opacity: 0.3 !important;
  transition: all 0.3s ease;
}
.swiper-pagination-bullet-active {
  background: var(--color-brand-primary) !important;
  opacity: 1 !important;
}
```

### 3. Component Structure
The `SocialSection.astro` will be restructured to follow the Swiper standard:
```astro
<div class="swiper">
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">...</div>
  </div>
  <!-- Indicators -->
  <div class="swiper-pagination"></div>
</div>
```

## Spec Deltas

### `specs/social-section/spec.md` (MODIFIED)
- **MODIFIED** Requirement for "Editorial Portrait Gallery" to specify the transition to a robust library implementation with free-mode support and hardware-accelerated transitions.
- **ADD** Requirement for "Library-Driven Pagination" to ensure pagination elements are dynamically linked to the slider's state.

## Component Strategy

| Component | Level | Status | Change |
| --- | --- | --- | --- |
| `SocialSection` | Organism | Existing | Replace custom script with SwiperJS initialization and custom styles. |
| `EditorialPortrait` | Molecule | Existing | No changes needed to the component itself, only its container in the slider. |
