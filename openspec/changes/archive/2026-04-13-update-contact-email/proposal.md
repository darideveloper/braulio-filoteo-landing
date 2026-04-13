# Change: Update Contact Email to info@grit-ones.com

## Why
The current contact email `hola@brauliofiloteo.com` is hardcoded in several components and needs to be updated to `info@grit-ones.com` to align with the new branding and professional direction.

## What Changes
- Update all occurrences of `hola@brauliofiloteo.com` to `info@grit-ones.com` in the `src/` directory.
- Wrap the email in a `mailto:` link to improve user experience, as it is currently plain text.
- Update the `your-story` specification to reflect this change in the requirements.

## Impact
- Affected specs: `openspec/specs/your-story/spec.md`
- Affected code: `src/components/organisms/CtaSection.astro`, `src/components/organisms/YourStory.astro`
