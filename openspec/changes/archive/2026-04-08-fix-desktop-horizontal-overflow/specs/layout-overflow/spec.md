# Capability: Layout Overflow Fix

Corrects the layout structure and global sizing to ensure a stable, overflow-free desktop experience with a fixed sidebar.

## ADDED Requirements

### Requirement: [LAY-01] Desktop Layout Stability
The layout MUST correctly account for the fixed sidebar width when calculating the main content's dimensions on desktop viewports.

#### Scenario: Desktop Viewport Without Overflow
- **GIVEN** a screen width of 1440px (or any width >= 1280px)
- **WHEN** the fixed sidebar is 280px wide
- **THEN** the main content MUST NOT exceed 1160px (Viewport - Sidebar) in width
- **AND** no horizontal scrollbar MUST be visible

### Requirement: [LAY-02] Scrollbar Compatibility
The application MUST NOT trigger horizontal overflow when a vertical scrollbar is present.

#### Scenario: Vertical Scrollbar Presence
- **GIVEN** the page content is longer than the viewport height
- **WHEN** a vertical scrollbar appears
- **THEN** the page width MUST NOT expand beyond the viewport's client area
- **AND** horizontal scrollbars MUST remain hidden unless specifically required by inner content
