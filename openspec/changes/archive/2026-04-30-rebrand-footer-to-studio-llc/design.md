# Design: Rebrand Footer Copyright to "GRITONES STUDIO LLC"

## Architectural Overview
The change is localized to the copyright notice within the `Footer` organism and its corresponding specification.

## Component Changes

### `src/components/organisms/Footer.astro`
- Replace the dynamic copyright notice (`© {currentYear} GRITONES PODCAST <br /> All rights reserved.`) with the hardcoded string "2026 GRITONES STUDIO LLC ALL RIGHTS RESERVED".

## Specification Updates

### `openspec/specs/footer-section/spec.md`
- Update the copyright requirement in `Requirement: Footer Components` to reflect the new text format.
