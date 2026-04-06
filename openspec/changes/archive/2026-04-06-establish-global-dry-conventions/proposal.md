# Change: Establish Global DRY Conventions

## Why
The project currently has several duplicated requirements across `branding`, `style-guide`, and `hero-section` specifications (e.g., hex codes for the palette, font sizes). This duplication increases maintenance overhead and the risk of inconsistency in future proposals.

## What Changes
- **Global Core Architecture Spec:** Create a new `core-architecture` capability that defines universal implementation patterns (Loop Rendering, Atomic Composition, Section Interfaces).
- **Consolidate Design Tokens:** Refactor `branding` to serve as the single source of truth for design tokens (Colors, Typography, UI Utilities).
- **Update Project Conventions:** Update `openspec/project.md` with explicit DRY mandates for all future AI agents and contributors.

## Impact
- **Affected Specs:** `branding`, `style-guide`, `hero-section`, and all future feature specs.
- **Affected Code:** `src/components/`, `src/layouts/`, and `src/styles/global.css` (standards only).
- **BREAKING:** This change mandates that all future proposals *reference* tokens rather than *hardcode* values.
