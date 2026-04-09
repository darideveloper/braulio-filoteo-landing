# Proposal: Standardize Main Section Min-Height

Ensure all main content sections of the project have a minimum height equal to the viewport height (`100vh`) to improve visual focus and storytelling impact.

## Motivation
The current design allows sections to vary in height based on content. To achieve a high-end, editorial feel similar to the design inspiration ([jp-newman.com](https://jp-newman.com/)), main sections should command the user's full attention as they scroll. Standardizing on `min-h-screen` (or `100vh`) ensures each section acts as a distinct "chapter" in the landing page's narrative.

## Proposed Changes

### Core Component Update
- **`SectionWrapper.astro`**: Update the base styling to include `min-h-screen` by default or via a standardized prop.
- **Flexbox Alignment**: Ensure that `SectionWrapper` uses flexbox to vertically center its content when the content height is less than the viewport height.

### Layout Integration
- Review all organisms that use `SectionWrapper` to ensure their content is properly centered and doesn't look "lost" in a full-screen section.
- Ensure the `Hero` sections (which are already full-screen in many cases) are consistent with this new global standard.

## Impact
- **Visual Impact**: Stronger focus on individual content sections.
- **UX**: Improved storytelling as users scroll through distinct, full-screen chapters.
- **Consistency**: Unified height constraint across the entire landing page.

## Verification Plan
- **Visual Audit**: Verify each section on `index.astro` is at least 100vh.
- **Responsiveness**: Ensure `min-h-screen` doesn't cause issues on small viewports where content might exceed 100vh (it should grow naturally).
- **Alignment**: Verify content remains aesthetically balanced (centered) within the full-screen containers.
