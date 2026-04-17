## 1. Section Preparation

- [x] 1.1 Add local wrappers and section-scoped selector classes for the watermark, headline, description, and action row inside `src/components/organisms/YourStory.astro`.
- [x] 1.2 Mark only the reveal targets that need initial hidden state without hiding the entire `YourStory` section.
- [x] 1.3 Confirm that the implementation scope remains limited to `src/components/organisms/YourStory.astro`.

## 2. Main Motion

- [x] 2.1 Implement a GSAP timeline with a single `ScrollTrigger` for the main `YourStory` reveal sequence.
- [x] 2.2 Implement the reveal order for the watermark, headline, description, and action row using `autoAlpha` and transform-based motion.
- [x] 2.3 Use `gsap.matchMedia()` to separate the standard motion path from the reduced-motion path.
- [x] 2.4 Adjust durations, overlaps, and easing so the rhythm feels aligned with the editorial motion language already used in the site.
- [x] 2.5 Verify that the main reveal does not use `scrub` and that primary targets are resolved from the section root.

## 3. Accessibility And Progressive Enhancement

- [x] 3.1 Implement a reduced-motion path for `YourStory` using immediate visibility or short opacity-only reveals.
- [x] 3.2 Verify that the watermark remains decorative and does not overpower the headline or CTA.
- [x] 3.3 Verify that the section remains visible and usable if JavaScript is disabled or GSAP does not run.

## 4. Validation

- [x] 4.1 Verify that no other section, component, shared script, or global style is modified.
- [x] 4.2 Verify that reusable component internals such as `SectionHeader`, `BrandButton`, and `MaterialIcon` are not animated directly.
- [x] 4.3 Verify that only performant GSAP properties are used and that the section does not introduce layout jank.
