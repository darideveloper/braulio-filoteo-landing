# Tasks: Fix YourStory Component Structure and SectionHeader Slots

- [x] Update `SectionHeader.astro` to support description slots and conditional labels
    - [x] Add `const hasDescriptionSlot = Astro.slots.has('description');` to frontmatter
    - [x] Update template to render `<slot name="description" />` or `description` prop
    - [x] Add conditional check for `label` prop to avoid empty tags
- [x] Fix `YourStory.astro` structure and content
    - [x] Add `slot="title"` to the headline `div`
    - [x] Fix typo: "evitaro" -> "evitarlo"
    - [x] Remove `label=""` from `SectionHeader` usage (optional but cleaner)
- [x] Verify changes
    - [x] Check generated HTML for empty `h2` or empty label `span`
    - [x] Confirm description visibility
    - [x] Validate GSAP animations still work as expected
