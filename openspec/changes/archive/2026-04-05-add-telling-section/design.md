# Design: Standalone CtaSection Pattern

## 1. Architectural Reasoning
The `CtaSection` is designed as a standalone "void" section. To maximize impact, it covers the entire viewport (`min-h-screen`) and focuses purely on its manifesto content. It does not integrate with the global site navigation or page footers within its container, ensuring a clean, high-impact focus.

## 2. Component Layout
1.  **Stage Control:** The section centers its content both horizontally and vertically.
2.  **Watermark Layering:** The `watermark` prop (e.g., "GRIT") is absolutely positioned in the background to provide texture without distraction.
3.  **Content Grouping:** Following the `code.html` reference, the main headline, description, and the CTA group (Button + Email) are part of a single, centered flex container.

## 3. Brand Consistency
While the `code.html` reference uses a flat orange button, this implementation **MUST use the `BrandButton` (primary)** with its linear gradient and neon shadow. This ensures the section remains a cohesive part of the project's "Neon Noir Editorial" brand.

## 4. Implementation Details
- **Typographic Scale:** Uses the new `display-2xl` utility to match the reference's `text-8xl`.
- **Contact Alignment:** The contact info is rendered inside the main content group, ensuring it stays close to the primary action button.
