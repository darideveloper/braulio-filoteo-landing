# Change: Fix Desktop Horizontal Overflow

## Why
The current layout configuration leads to a horizontal scrollbar on desktop viewports because the main content expands to 100% width and is then pushed right by the fixed sidebar's margin, exceeding the viewport width.

## What Changes
- **Layout Structure:** Remove `xl:flex-row` and `flex-grow` from the main layout wrapper to allow the `main` element to behave as a standard block element that respects its margins.
- **Global Sizing:** Update `html` and `body` to use `width: 100%` instead of `width: 100vw` to prevent overflow caused by the vertical scrollbar.

## Impact
- Affected specs: `specs/layout-overflow/spec.md`
- Affected code: `src/layouts/Layout.astro`, `src/styles/global.css`
