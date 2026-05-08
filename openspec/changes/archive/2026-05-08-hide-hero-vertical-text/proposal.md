# Change: Hide Hero Vertical Text

## Why
The vertical watermark text ("DOCUMENTING HUMAN POTENTIAL") in the Hero section is no longer desired on any screen size to achieve a cleaner visual aesthetic.

## What Changes
- Remove the `verticalText` prop from the `EditorialPortrait` instance in the Hero section.

## Impact
- Affected specs: `hero-section`
- Affected code: `src/components/organisms/Hero.astro`
