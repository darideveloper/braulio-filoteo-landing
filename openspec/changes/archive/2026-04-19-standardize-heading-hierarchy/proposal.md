# Proposal: Standardize Heading Hierarchy

## Problem
The current codebase has several semantic and SEO issues related to heading tags (H1-H6):
1. **Multiple H1 Tags**: Both `Loader.astro` and `Hero.astro` use `H1`, which is suboptimal for SEO and accessibility.
2. **Incorrect Sequence**: In `Hero.astro`, an `H2` is placed before the `H1` in the DOM.
3. **Heading Jumps**: Several sections jump from `H2` (section title) to `H4` (item titles) in `AboutSection`, `PodcastSection`, and `CollabSection`, skipping `H3`.
4. **Direct Tag Usage**: Some sections use raw `h2` tags instead of the standardized `SectionHeader` component, leading to potential inconsistency.

## Proposed Solution
Standardize the heading hierarchy across the entire project without altering the UI or breaking GSAP animations:
1. **Single H1**: Designate the main Hero title as the only `H1`. Downgrade the Loader title to a non-heading or lower-level heading.
2. **Correct Sequence**: Ensure `H1` is the first heading encountered in the main content flow.
3. **Fill Hierarchy Gaps**: Update child components (`AboutCard`, `PodcastCTA`, `CollabItem`, etc.) to use `H3` instead of `H4` where appropriate to follow an `H2` section header.
4. **Component Standardisation**: Update `VoiceSection`, `HeroNoir`, and `FeatureCTA` to use `SectionHeader` or at least match its semantic logic.
5. **Preserve Animations**: Ensure all GSAP selectors (which mostly use classes) remain functional by keeping existing classes on the modified elements.

## Scope
- `src/components/organisms/Loader.astro`
- `src/components/organisms/Hero.astro`
- `src/components/organisms/HeroNoir.astro`
- `src/components/organisms/VoiceSection.astro`
- `src/components/organisms/AboutSection.astro`
- `src/components/organisms/Footer.astro`
- `src/components/molecules/AboutCard.astro`
- `src/components/molecules/PodcastCTA.astro`
- `src/components/molecules/CollabItem.astro`
- `src/components/molecules/FeatureCTA.astro`
- `src/components/molecules/SectionHeader.astro` (verification)

## Risks & Mitigations
- **Broken Animations**: GSAP might target tags in some cases. **Mitigation**: Verify all GSAP scripts in the affected components to ensure they target classes (e.g., `.js-reveal`) rather than tags.
- **UI Regressions**: Changing a tag might inherit different default browser styles. **Mitigation**: Ensure all heading tags have explicit Tailwind/CSS classes that define their appearance (which they currently do).
