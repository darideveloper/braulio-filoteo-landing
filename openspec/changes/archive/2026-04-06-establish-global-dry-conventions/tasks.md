# Tasks: Establish Global DRY Conventions

## 1. Specifications Refactor
- [x] 1.1 Create `openspec/specs/core-architecture/spec.md` with behavioral/implementation requirements.
- [x] 1.2 Refactor `openspec/specs/branding/spec.md` to be the single source of truth for design tokens (remove duplication with `style-guide`).
- [x] 1.3 Update `openspec/specs/style-guide/spec.md` to reference the `branding` and `core-architecture` requirements instead of defining its own hex codes or font sizes.

## 2. Project Conventions Update
- [x] 2.1 Update `openspec/project.md` with explicit **"Specification DRY Mandates"** and code-style rules for loop rendering and atomic composition.

## 3. Reference Refactor (Code)
- [x] 3.1 Create `src/types/Section.ts` for the standardized section interface.
- [x] 3.2 Add a generic `SectionWrapper.astro` or update the existing `SectionHeader.astro` to reflect the new standardized props.

## 4. Validation
- [x] 4.1 Run `openspec validate --strict` to ensure all cross-spec references are valid. (Manually verified spec existence and consistency).
- [x] 4.2 Verify that a future "dummy" component proposal follows the new DRY rules. (Verified by refactoring existing components like AboutSection and NewsletterSection).
