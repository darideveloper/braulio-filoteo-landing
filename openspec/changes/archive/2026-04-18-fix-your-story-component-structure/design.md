# Design: Fix YourStory Component Structure and SectionHeader Slots

## Architectural Overview
The `SectionHeader` molecule is a central component for section layout. Its current design is too restrictive for rich-text descriptions, which led to the misuse in `YourStory.astro`. By adding slot support for the description, we align its pattern with how titles are handled.

## Component Changes

### 1. SectionHeader.astro
- **Description Slot**: Introduce `<slot name="description" />`.
- **Precedence**: If the `description` slot has content, it SHALL take precedence over the `description` prop.
- **Label Rendering**: Wrap the label `<span>` in a conditional check `{label && ...}` to avoid rendering empty tags when no label is provided.
- **Title Rendering**: Ensure `hasTitleSlot ? <slot name="title" /> : title` logic is robust across all layout variants.

### 2. YourStory.astro
- **Slot Targeting**: Update the title `div` to use `slot="title"`.
- **Slot Alignment**: The description `div` already uses `slot="description"`, so it will work automatically once `SectionHeader` is updated.
- **Content Correction**: Fix "evitaro" -> "evitarlo".
- **Animation Integrity**: The `js-` classes used for GSAP triggers (`js-your-story-title`, `js-your-story-description`, etc.) MUST remain on the same elements to avoid breaking the animation logic.

### 3. CtaSection.astro (Secondary Benefit)
- `CtaSection.astro` currently uses a workaround:
  ```astro
  <slot name="headline" slot="title" />
  <slot name="description" />
  ```
  Updating `SectionHeader` to natively support a `description` slot will allow `CtaSection` to be simplified or at least function more predictably.

## Animation Impact
The GSAP timeline in `YourStory.astro` targets elements by class name:
- `revealTargets`: `.js-your-story-reveal`
- `title`: `.js-your-story-title`
- `description`: `.js-your-story-description`

By keeping these classes on the `div`s being passed into slots, the animations will continue to work because those elements will still be present in the DOM, just correctly nested within the `SectionHeader`'s internal structure.
