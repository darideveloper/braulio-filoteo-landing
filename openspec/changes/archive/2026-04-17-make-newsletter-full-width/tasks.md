# Tasks: Full-width Newsletter Embed

## Implementation
- [x] **Task 1: Modify `SectionWrapper.astro` for architectural flexibility**
  - **Action:** Remove hardcoded `container mx-auto` from `SectionWrapper.astro` to allow full-width sections.
  - **Validation:** Verify `SectionWrapper` now spans 100% width by default.

- [x] **Task 2: Standardize existing sections**
  - **Action:** Add `containerClass="container"` to all other organisms using `SectionWrapper` to maintain their centered layout.
  - **Validation:** Check that About, Plans, Pillars, etc., still look correctly centered.

- [x] **Task 3: Wrap Newsletter components in centered containers**
  - **Action:** Add a `div` with class `container` around the header/intro and the social proof/footer sections in `NewsletterSection.astro`.
  - **Validation:** Verify text content remains centered while the section itself is full-width.

- [x] **Task 4: Make Substack Embed Section full-width**
  - **Action:** Ensure the black background wrapper spans from edge to edge without rounded corners.
  - **Validation:** Confirm the black background touches the viewport edges.

- [x] **Task 5: Enhance Substack Embed with branding (Manual Change)**
  - **Action:** Add Braulio's profile photo and a Substack title above the iframe within the black stripe.
  - **Validation:** Verify the new branded elements are centered and look professional.

- [x] **Task 6: Maintain original iframe attributes**
  - **Action:** Keep the `<iframe>` tag's scaling and centered position, using `minimal=true` in the URL.
  - **Validation:** Ensure the iframe looks clean and is properly aligned.


## Verification
- [x] **Verify on Mobile:** Ensure no horizontal scrolling is introduced.
- [x] **Verify on Desktop:** Confirm the black stripe touches the sidebar on the left and the viewport edge on the right.
