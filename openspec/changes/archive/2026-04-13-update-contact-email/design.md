# Design: Contact Email Update

## Rationale
Updating the hardcoded email ensures branding consistency with the `grit-ones.com` domain. Wrapping the email in a `mailto:` link is a UX improvement that simplifies contact for the user.

## Component Changes

### 1. `src/components/organisms/CtaSection.astro`
- **Current**: Plain text `hola@brauliofiloteo.com`.
- **New**: `<a>` tag with `href="mailto:info@grit-ones.com"` and text `info@grit-ones.com`.
- **Classes**: Maintain `text-sm font-bold tracking-widest uppercase text-brand-text-muted` but ensure the `<a>` tag inherits or applies them. Add `hover:text-brand-secondary transition-colors` for interactivity.

### 2. `src/components/organisms/YourStory.astro`
- **Current**: Plain text `hola@brauliofiloteo.com` inside a `<span class='label-md lowercase'>`.
- **New**: `<a>` tag with `href="mailto:info@grit-ones.com"`, keeping the `label-md lowercase` classes.
- **Classes**: Add `hover:text-brand-primary transition-colors` for interactivity.

## Specification Changes

### `openspec/specs/your-story/spec.md`
- Update the `Requirement: Centered CTA & Contact Row` to specify the new email address and the use of a link.
