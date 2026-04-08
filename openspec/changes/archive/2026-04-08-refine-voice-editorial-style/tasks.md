# Tasks: Refine Voice Editorial Style

## Preparation
- [x] Remove forced `uppercase` from `display-lg` and `display-2xl` in `src/styles/global.css`. <!-- id: 0 -->

## Components
- [x] Update `src/components/molecules/MatrixCard.astro` to increase the icon size to `text-8xl`. <!-- id: 1 -->
- [x] Update `src/components/molecules/FeatureCTA.astro` to: <!-- id: 2 -->
    - [x] Add a `watermark` prop and render it with the `.text-watermark` utility.
    - [x] Change icon container from `rounded-full` to `rounded-[0.25rem]`.
    - [x] Apply `normal-case` to the main heading.
- [x] Update `src/components/organisms/HeroEditorial.astro` to support a `title` slot for gradient word accents. <!-- id: 3 -->
- [x] Ensure components using `display-lg` or `display-2xl` explicitly use `uppercase` if they rely on it: <!-- id: 8 -->
    - [x] Update `src/components/molecules/EditorialHeadline.astro`.
    - [x] Update `src/components/organisms/Hero.astro`.
    - [x] Update `src/components/organisms/CtaSection.astro`.

## Landing Page Integration
- [x] Update `src/pages/index.astro` Voice Editorial sections: <!-- id: 4 -->
    - [x] In `HeroEditorial`, use a slot for the title and wrap "convertirse" in `<span class="text-brand-gradient">`.
    - [x] Ensure all editorial titles use `normal-case` where appropriate.
    - [x] Add `watermark="PODCAST"` to the `FeatureCTA` component.

## Validation
- [x] Verify that the gradient on "convertirse" renders correctly. <!-- id: 5 -->
- [x] Check that `FeatureCTA` has a square-rounded icon and a large background watermark. <!-- id: 6 -->
- [x] Verify that typography scales across the page support mixed-case titles. <!-- id: 7 -->
