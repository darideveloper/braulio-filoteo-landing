# Specification Delta: gsap-global-init

## MODIFIED Requirements

### Requirement: Centralized GSAP Registration
The project SHALL have a single source for GSAP plugin registration.
#### Scenario: Initialize GSAP Plugins
- **WHEN** the application is loaded on the client side.
- **THEN** it SHALL register `ScrollTrigger` and any other required plugins exactly once.
- **AND** it SHALL set global animation defaults (e.g., `ease: "power4.out"`, `duration: 1.2`).
- **AND** it SHALL enable performance-critical configurations (e.g., `force3D: true`).
- **ADDED** **AND** it SHALL configure `ScrollTrigger` with `limitCallbacks: true` to prevent redundant triggers during high-speed scrolling.
- **ADDED** **AND** it SHALL configure `ScrollTrigger` with `ignoreMobileResize: true` to prevent expensive recalculations during mobile browser chrome toggling.
