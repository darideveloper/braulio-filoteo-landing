# Tasks: Redirect Newsletter Navigation to Substack

This plan updates the navigation configuration and component to support external links and redirects the "Newsletter" item to Substack.

## Configuration & Logic
- [x] **Task 1: Update Navigation Configuration**
    - Modify `src/config/navigation.ts` to change the `Newsletter` item's `href` to `https://brauliofiloteo.substack.com`.
    - Add `target: '_blank'` to the `Newsletter` item.
- [x] **Task 2: Update Navigation Component**
    - Modify `src/components/molecules/Navigation.astro` to accept and apply `target` and `rel` attributes to navigation links.

## Documentation
- [x] **Task 3: Update Sidebar Specification**
    - Apply the spec delta to `openspec/specs/sidebar-nav/spec.md`.

## Validation
- [x] **Task 4: Manual Verification**
    - Verify that clicking "Newsletter" in the sidebar opens Substack in a new tab.
    - Verify that other navigation items still work as internal anchors.
