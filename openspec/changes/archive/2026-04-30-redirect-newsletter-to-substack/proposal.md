# Proposal: Redirect Newsletter Navigation to Substack

This change updates the "Newsletter" link in the sidebar navigation to redirect directly to the Substack profile in a new tab, instead of scrolling to the internal newsletter section.

## Problem
The "Newsletter" navigation item currently scrolls to the `#newsletter` section on the same page. The user wants to drive traffic directly to the Substack platform to increase conversion and engagement on that specific platform.

## Solution
1. Update the navigation configuration to change the `href` for the "Newsletter" item.
2. Add support for external links (new tab) in the navigation component.
3. Update the sidebar navigation specification to reflect this behavior change.

## Scope
- `src/config/navigation.ts`: Change "Newsletter" `href` to `https://brauliofiloteo.substack.com` and add `target="_blank"`.
- `src/components/molecules/Navigation.astro`: Update to support `target` and `rel` attributes on navigation items.
- `openspec/specs/sidebar-nav/spec.md`: Update requirements to match the new behavior.
