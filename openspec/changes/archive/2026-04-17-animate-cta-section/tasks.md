## 1. Section Preparation

- [x] 1.1 Define local wrappers and selectors for the header, CTA actions, optional contact block, and watermark inside `CtaSection.astro`.
- [x] 1.2 Define which targets should start hidden for the reveal without hiding the entire section structure.
- [x] 1.3 Confirm that the implementation does not require changes outside `src/components/organisms/CtaSection.astro`.

## 2. Main Motion

- [x] 2.1 Implement a GSAP timeline with `ScrollTrigger` for the editorial reveal of `CtaSection`.
- [x] 2.2 Implement the reveal order for the header, CTA actions, and optional contact block using `autoAlpha` and transforms.
- [x] 2.3 Adjust duration, overlaps, and easing so the rhythm feels aligned with AboutSection.
- [x] 2.4 Verify that the main timeline does not use `scrub` and that targets stay scoped to the section.

## 3. Watermark And Accessibility

- [x] 3.1 Implement a subtle visual treatment for the optional watermark without competing with the main content.
- [x] 3.2 Implement the `prefers-reduced-motion` path with immediate visibility or a short fade.
- [x] 3.3 Verify that the markup still works as progressive enhancement in Astro SSG.

## 4. Validation

- [x] 4.1 Verify that the section stays visible if JavaScript is disabled or GSAP does not run.
- [x] 4.2 Verify that no other component or section in the site is modified.
- [x] 4.3 Verify that the animation uses only performant properties and does not cause layout jank.
- [x] 4.4 Verify that `SectionHeader` and `MaterialIcon` internals are not animated.
