# Change: Update Sidebar and Navigation

## Why
The current navigation system has inconsistent labels (mix of English and Spanish), redundant layout margins that create visual off-center alignments in the footer, and a mobile menu that is currently invisible to users. Centralizing the navigation data and fixing these layout regressions is critical for a professional user experience.

## What Changes
- **Spanish Translation:** Update all navigation labels to Spanish.
- **Content Update:** Remove "Methodology" and add "Planes" pointing to the plans section (#plans).
- **Interactivity:** Implement global smooth scrolling for all hash links and update the logo to scroll back to `#home`.
- **Mobile Menu Fix:** Resolve the visibility issue by adjusting z-index and overflow settings.
- **Footer Layout Fix:** Eliminate the redundant left margin in the footer to achieve proper alignment.

## Impact
- **Affected specs:** `sidebar-nav`, `footer-section`
- **Affected code:** `src/config/navigation.ts`, `src/components/organisms/Header.astro`, `src/components/organisms/Footer.astro`, `src/layouts/Layout.astro`, `src/styles/global.css`
