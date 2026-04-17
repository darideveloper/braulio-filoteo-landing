## Why

`CtaSection` already fulfills its editorial and conversion role, but it currently enters as a static block at the end of the page flow, which makes its closing moment feel less integrated with the motion language already present in sections like Hero, About, and Podcast. A CTA section needs a clear and deliberate entrance so the headline, primary action, and optional contact details read as a narrative close rather than loose content.

This change is proposed now to define a local, contained animation that stays consistent with the rest of the site without modifying other components or breaking Astro SSG behavior. The intent is for `CtaSection` to adopt a scroll-driven editorial reveal and a subtle treatment for the optional watermark while respecting reduced motion and the no-JavaScript fallback.

## What Changes

- Define a GSAP scroll-reveal sequence for `CtaSection`.
- Keep the implementation strictly limited to `src/components/organisms/CtaSection.astro`, with no changes to other components, sections, shared scripts, or global styles.
- Define local wrappers for the header, actions, optional contact block, and watermark so the animation does not depend on `SectionHeader` or `MaterialIcon` internals.
- Define the reveal order for the editorial block: header, CTA actions, optional contact, and subtle watermark treatment.
- Formalize the use of GSAP best practices: `autoAlpha`, transforms, a single timeline with `ScrollTrigger`, `gsap.matchMedia()`, and performant properties.
- Make it explicit that the main reveal must be discrete and scroll-triggered, with no `scrub` on the primary timeline and no separate triggers for each minor element.
- Make it explicit that animation targets must be resolved from the section itself so behavior stays encapsulated and does not rely on fragile global selectors.
- Ensure Astro SSG compatibility through progressive enhancement: the base HTML must remain valid and visible without JavaScript.
- Ensure the scroll animations are mounted as progressive enhancement on top of static markup already rendered by Astro SSG.
- Reinforce the FOUC-prevention contract so only specific reveal wrappers are hidden, not the entire section.

## Capabilities

### New Capabilities
- `cta-section-motion`: Defines the editorial animation and scroll-reveal requirements for `CtaSection`, including optional watermark handling and the reduced-motion path.

### Modified Capabilities
- `fouc-prevention`: Clarifies how to prepare animated targets inside `CtaSection` so the scroll reveal does not leave critical content hidden if GSAP does not run.

## Impact

- OpenSpec artifacts in `openspec/changes/animate-cta-section/`.
- Future implementation scoped to `src/components/organisms/CtaSection.astro`.
- No new dependencies, because the project already uses `gsap` and `ScrollTrigger`.
- No functional impact on other sections, routes, or reusable components.
