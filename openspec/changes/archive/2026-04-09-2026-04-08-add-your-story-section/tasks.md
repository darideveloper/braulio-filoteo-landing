# Tasks: Add "Your Story" Hero Section

## Implementation

### 1. Create `YourStory.astro` Component
- [x] Implement `src/components/organisms/YourStory.astro`.
- [x] Wrap main content with `SectionWrapper` (variant="lowest").
- [x] Add the background "GRIT" watermark with `text-watermark` utility.
- [x] Integrate `SectionHeader` with `align="center"` and `size="editorial"`.
- [x] Pass the mixed-style headline to the `title` slot (using `display-2xl`).
- [x] Pass the subheadline with orange inline highlights to the `description` prop/slot.
- [x] Add the `BrandButton` and contact information row as children of `SectionHeader` or below it.
- [x] Ensure responsive centering and spacing.

### 2. Integrate into Home Page
- [x] Import `YourStory` in `src/pages/index.astro`.
- [x] Add the section to the main layout.

## Validation

### Visual Alignment
- [x] Verify typography scale matches the "Neon Noir Editorial" system.
- [x] Ensure watermark is properly contained within the section's background.
- [x] Confirm button roundedness adheres to the architectural `rounded-[0.25rem]`.
- [x] Check mobile responsiveness and text centering.
