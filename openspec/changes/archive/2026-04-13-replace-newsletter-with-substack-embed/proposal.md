# Proposal: Replace Newsletter Form with Substack Embed

This change replaces the custom newsletter subscription form in the `NewsletterSection` with an official Substack embed iframe, ensuring it integrates seamlessly with the "Electric Noir" branding.

## Goal
Migrate from a custom, unhooked subscription form to a functional Substack-managed subscription flow while maintaining the high-contrast, editorial aesthetic of the site.

## Proposed Changes
- Replace the `<form>` element in `src/components/organisms/NewsletterSection.astro` with the Substack embed iframe.
- Wrap the iframe in a container to manage its responsiveness and styling.
- Apply CSS filters (`invert(1) hue-rotate(180deg)`) to the iframe to match the website's dark theme and branding colors.
- Add an accessibility-compliant `title` to the iframe.
- Implement a "White Flash" prevention strategy by applying a dark background to the iframe container.
- Add a fallback link for users with aggressive adblockers or disabled scripts.

## Architectural Reasoning
Substack provides a secure, managed subscription service. Using their official embed is the most reliable way to handle signups without building a custom backend or using a third-party API. By applying CSS filters, we can overcome the iframe's styling limitations and ensure it matches the project's visual identity.

## Risks & Mitigations
- **Iframe Styling Limitations:** Iframe contents cannot be directly styled via CSS. The filter-based "dark mode hack" is a reliable workaround for matching themes without access to the iframe's internal styles.
- **Responsiveness:** Substack's embed has a fixed minimum width. We will wrap it in a container that handles overflow or scales appropriately on mobile devices.
- **Layout Shift & White Flash:** Using a fixed height and a dark background for the container prevents layout shifts and jarring white flashes as the iframe loads.
- **Adblockers:** Some adblockers may block the Substack domain. A fallback text link ensures users can still find the subscription page.
