# Tasks: Implement Brand Social Icons

## Phase 1: Foundation
- [x] **Task 1: Source SVG Paths**
    - Gather official SVG paths for LinkedIn, Instagram, YouTube, Spotify, and Substack.
- [x] **Task 2: Create `SocialIcon` Component**
    - Create `src/components/atoms/SocialIcon.astro`.
    - Implement mapping between platform names and SVG paths.
    - **Validation**: Rendered component successfully.

## Phase 2: Refactoring
- [x] **Task 3: Update Navigation Configuration**
    - Modify `src/config/navigation.ts` to ensure `platform` or `name` fields are consistent.
    - Removed unused `icon` fields from social links.
- [x] **Task 4: Refactor `SocialLinks` Atom**
    - Replace `MaterialIcon` usage with `SocialIcon` in `src/components/atoms/SocialLinks.astro`.
- [x] **Task 5: Refactor `SocialCard` Molecule**
    - Replace `MaterialIcon` usage with `SocialIcon` in `src/components/molecules/SocialCard.astro`.
    - Removed `icon` prop and updated `SocialSection.astro` platforms data.

## Phase 3: Integration & Cleanup
- [x] **Task 6: Update Sidebar and Footer**
    - Verified `src/components/organisms/Sidebar.astro` and `src/components/organisms/Footer.astro` reflect changes via `SocialLinks` atom.
- [x] **Task 7: Visual Regression Audit**
    - Checked all sections (Hero, Podcast, Social, Newsletter) for social icon consistency.
- [x] **Task 8: Standardize Substack and Spotify Icons**
    - Added Substack icon to `NewsletterSection.astro`.
    - Added Spotify icon to `Hero.astro` and `PodcastSection.astro` CTAs.
