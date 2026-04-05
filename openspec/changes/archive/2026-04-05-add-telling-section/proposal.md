# Proposal: Add Reusable CtaSection

## 1. Summary
Implement a high-impact, reusable section component (`CtaSection.astro`) based on the `ui-design/telling/code.html` reference. This standalone, full-screen section is designed for manifesto statements and calls-to-action, featuring massive typography and the project's brand-standard primary button.

## 2. Motivation
The project requires high-impact "void" sections that break the standard page flow. Creating a reusable `CtaSection` allows us to replicate the massive, centered editorial look of the reference while using our existing design system elements (like the gradient-based `BrandButton`).

## 3. Scope
- Create a new `CtaSection.astro` organism (Reusable Base).
- Create a new `EditorialHeadline.astro` molecule (Specialized Headline).
- Update global styles with minimal utilities for the editorial layout.
- Ensure the section is standalone (no site header/footer integration inside the component).
- Implement the first instance on the home page (`src/pages/index.astro`).

## 4. Proposed Changes
### Components
- **`CtaSection.astro` (Base):** A full-height, standalone section (`min-h-screen`). It uses **slots** for `headline`, `description`, and `cta`. It accepts a `watermark` prop. The contact info is included as an optional part of the centered content group, not as a page footer.
- **`EditorialHeadline.astro`:** A reusable headline component that handles the `8xl` scale and editorial styling.
- **`BrandButton.astro`:** Used with `variant="primary"` (gradient) as the main CTA, adhering to the brand guidelines over the reference's flat style.

### Global Styles
- Add `display-2xl` for the massive headline.
- Add `decoration-editorial` for the 8px thick underline.
- Add `text-watermark` for the background text.

## 5. Verification Plan
- **Standalone Check:** Verify the section occupies the full viewport without interference from global layout elements.
- **Button Check:** Ensure the `BrandButton` uses the primary gradient and shadow as defined in the style guide.
- **Visual Check:** Compare the centered grouping (Headline + Description + Button/Contact) with `code.html`.
