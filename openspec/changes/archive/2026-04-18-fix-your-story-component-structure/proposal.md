---
id: fix-your-story-component-structure
title: Fix YourStory Component Structure and SectionHeader Slots
author: Gemini CLI
status: implemented
created: 2026-04-18
---

# Proposal: Fix YourStory Component Structure and SectionHeader Slots

## Problem Statement
The `YourStory.astro` component is currently rendering broken HTML and missing content because it misuses the `SectionHeader` molecule. Specifically:
1. The title content is passed to the default slot instead of the `title` slot, causing an empty `h2` to be rendered by `SectionHeader`.
2. The description content is passed to a non-existent `description` slot in `SectionHeader`, causing it to be lost.
3. There is a typo in the description: "evitaro" instead of "evitarlo".
4. Empty `label` props in `SectionHeader` are rendering empty `<span>` tags.

## Proposed Changes
1. **Modify `SectionHeader.astro`**:
    - Add a named `description` slot to allow rich text or custom-styled descriptions.
    - Conditionally render the label `<span>` only if the `label` prop is not an empty string.
2. **Modify `YourStory.astro`**:
    - Target the title `div` to the `title` slot of `SectionHeader`.
    - Correct the typo in the description ("evitarlo").
    - Remove the empty `label` prop if not needed, or ensure `SectionHeader` handles it gracefully.
    - Maintain all existing GSAP animations.

## Goals
- Fix the broken HTML structure (remove empty `h2`).
- Restore the visibility of the description text.
- Improve `SectionHeader` flexibility by adding a `description` slot.
- Fix typos and improve code quality while preserving animations.
