## Context

`CtaSection.astro` is a small but important section at the end of the page narrative. It currently renders a centered `SectionHeader`, a CTA row with optional contact details, and a decorative background watermark, but it does not contain any GSAP logic. The structure is already well defined enough to support a local animation without requiring refactors in other components or shared files.

The project already has a clear editorial motion baseline: Hero combines entrance and atmosphere, while About uses a scroll-triggered reveal with a main timeline. For `CtaSection`, the most coherent solution is not to copy Hero's cinematic level, but to apply a scroll reveal with a single timeline and a minimal watermark treatment. This preserves the editorial tone and avoids over-animating a section whose main job is to convert or close the page.

Additionally, the component lives in a static Astro app. Because of that, the implementation must be pure progressive enhancement: the markup must continue working without JS, the animation must activate only as an enhancement when GSAP is available, and the solution must stay inside `CtaSection.astro` without depending on global script changes.

## Goals / Non-Goals

**Goals:**
- Define a GSAP animation only for `CtaSection`.
- Keep the implementation encapsulated inside `CtaSection.astro`.
- Keep the scroll animations entirely local to the section.
- Use a scroll reveal consistent with AboutSection.
- Treat the watermark as a secondary decorative layer, not the main focus.
- Respect Astro SSG, `prefers-reduced-motion`, and the no-JS fallback.
- Follow the GSAP best practices already used in the project.

**Non-Goals:**
- Modify `SectionHeader`, `MaterialIcon`, or other reusable components.
- Modify `gsap-init.ts`, `animation-manager.ts`, global styles, or other project files.
- Introduce pinning, aggressive scrub behavior, or complex scenes.
- Turn the watermark into a primary animation beat.
- Extend this proposal to other site sections.

## Decisions

### 1. The animation will live only in `CtaSection.astro`
The implementation must be solved with local wrappers, selectors, and script logic inside this section.

This is chosen because it:
- satisfies the requirement to touch only this section;
- avoids coupling reusable components to a specific case;
- keeps the change easy to revert or adjust.

Alternative considered:
- animate `SectionHeader` or `MaterialIcon` internals;
- rejected because it is fragile and out of scope.

### 2. Use a single timeline with `ScrollTrigger`
The main reveal should be triggered by a single timeline when the section reaches an entry point such as `top 75%`.

Proposed order:
- header;
- action row;
- optional contact;
- watermark, if present, as a secondary layer.

The main timeline must not use `scrub`. It should behave as a discrete editorial reveal with `toggleActions`, following the logic already used in sections like About and Podcast.

Alternative considered:
- use one trigger per element;
- rejected because it breaks the editorial rhythm and complicates maintenance.

### 3. Apply GSAP best practices explicitly
This proposal requires:
- `autoAlpha` for visibility;
- transforms (`x`, `y`, `scale`) instead of layout properties;
- a main timeline instead of loose delays;
- `gsap.matchMedia()` for reduced motion;
- resolving targets from `section.querySelector(...)` or `section.querySelectorAll(...)` to keep local scope;
- avoiding animation on the entire container when only specific blocks need to enter.

Alternative considered:
- use CSS animations or independent tweens without sequencing;
- rejected because it does not align with the existing project language.

### 4. The watermark must be ambient and optional
If `watermark` exists, its animation must be subtler than the primary content animation, for example with a fade or a slight scale.

Alternative considered:
- treat the watermark as a strong reveal beat;
- rejected because it would compete with the primary CTA.

### 5. Astro SSG is handled with progressive enhancement
The base HTML must remain usable and visible even if GSAP does not execute. Animated wrappers may use `.js-reveal`, but the `.no-js` fallback must continue to show the content.

This means wrapping `SectionHeader`, the action row, the optional contact block, and the watermark in local wrappers owned by `CtaSection`, without animating reusable child component internals.

Alternative considered:
- assume JavaScript is always available;
- rejected because it contradicts the current layout approach and the FOUC-prevention spec.

## Risks / Trade-offs

- [The section may feel too simple if the reveal is too short] -> Mitigation: use editorial overlaps similar to AboutSection.
- [The watermark may distract from the CTA] -> Mitigation: limit it to subtle opacity and transform changes.
- [FOUC or hidden content if GSAP fails] -> Mitigation: apply `.js-reveal` only to specific wrappers and rely on the `.no-js` fallback.
- [The implementation may drift out of scope] -> Mitigation: require all logic to live in `CtaSection.astro`.
- [Excessive animation in a conversion section] -> Mitigation: avoid scrub on the main reveal and keep the choreography brief.

## Migration Plan

1. Approve this change as an isolated proposal for `CtaSection`.
2. Add local wrappers and GSAP selectors only inside `CtaSection.astro`.
3. Implement a reveal timeline with `ScrollTrigger`.
4. Add the optional and subtle watermark treatment.
5. Implement reduced motion and validate visibility without JS.
6. Verify that no other components or sections are changed.

## Resolved Defaults

- The watermark defaults to a secondary layer with a fade and, at most, a very slight scale.
- The optional contact block defaults to a separate beat but stays close to the CTA group to preserve visual hierarchy.
- The default entry point is `start: "top 75%"` to maintain consistency with the current motion language of the project.
