# page-loader Specification

## Purpose
TBD - created by archiving change 2026-04-08-implement-cinematic-loader-fouc-fix. Update Purpose after archive.
## Requirements
### Requirement: Centralized Page Loader
The project SHALL utilize a global page loader to provide a cinematic and unified entrance experience for the website.

#### Scenario: Loader Design & Accessibility
- **GIVEN** a user first visits the site.
- **THEN** a full-viewport loader SHALL be displayed immediately.
- **AND** it SHALL feature the brand's editorial aesthetic and high-contrast color palette.
- **ADDED** **AND** it SHALL display the brand mission text (e.g., "DOCUMENTING POTENTIAL") without the establishment date.

### Requirement: Smoothed Scroll Scrubbing
Scroll-driven parallax effects (e.g., in the Hero section) SHALL utilize smoothed scrubbing to ensure a premium, non-mechanical feel.

#### Scenario: Catch-up delay in Hero Parallax
- **GIVEN** a Hero section with a parallax scroll trigger.
- **THEN** it SHALL use a `scrub` value of at least `1` second.
- **AND** it SHALL NOT use `scrub: true` (direct 1:1 scrubbing) for large images.

