## MODIFIED Requirements

### Requirement: Design Token Visualization
The Design System page SHALL render all "Neon Noir" design tokens for visual confirmation and contrast testing.

#### Scenario: Color Swatches
- **GIVEN** the Design System page.
- **THEN** it SHALL display color swatches for all brand colors, including `surface_container_lowest` (#0E0E0E), `surface_container_low` (#1C1B1B), `primary_container` (#9B30FF), `secondary_container` (#FE6500), and `primary` (#DCB8FF).
- **AND** it SHALL show text contrast for "Editorial Orange" (#FE6500) against the "Midnight" background.

#### Scenario: Typography Scales
- **GIVEN** the Design System page.
- **THEN** it SHALL demonstrate the `Display-LG` (3.5rem, -0.04em) and `Headline-MD` (1.75rem) scales using **Epilogue**.
- **AND** it SHALL show the technical `Label-MD` (0.75rem, uppercase, 0.1em tracking) using **Inter**.

---

### Requirement: Utility Verification
The Design System page SHALL provide interactive or visual tests for Neon Noir specific UI utilities.

#### Scenario: Glassmorphism and Depth
- **GIVEN** the Design System page.
- **THEN** it SHALL contain a demonstration of the 60% opacity backdrop-blur utility on a background with signature textures or images.
- **AND** it SHALL show the 135° primary gradient on a sample element with sharp `0.25rem` corners.
