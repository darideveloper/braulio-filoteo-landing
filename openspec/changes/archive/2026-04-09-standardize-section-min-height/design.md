# Design: Main Section Min-Height Standardization

## Architecture Overview
The project uses `SectionWrapper.astro` as the base component for all content sections. By modifying this component, we can globally enforce the `min-height: 100vh` constraint.

## Technical Implementation

### 1. `SectionWrapper.astro` Update
Modify the `section` element to include:
- `min-h-screen`: Ensures the section is at least 100vh.
- `flex items-center`: Vertically centers the content container when the section is at its minimum height.
- `w-full`: Ensures full width.

### 2. Vertical Centering Logic
Since `SectionWrapper` already has `py-24` (padding), adding `items-center` will center the content container within the 100vh area (including the padding). This is generally desired for editorial layouts.

### 3. Responsive Consideration
On mobile devices, content might exceed 100vh. `min-h-screen` correctly allows the section to expand as needed. The `py-24` padding should be maintained to ensure content doesn't hit the screen edges on long-scroll sections.

### 4. Opt-out Mechanism
To maintain flexibility, a `fullHeight` boolean prop will be added to `SectionWrapper`, defaulting to `true` to satisfy the "all main sections" requirement while allowing shorter sections (like "Contact" or "Newsletter") to opt-out if they explicitly don't need the full height.

## Trade-offs
- **Pros**: Strong visual consistency, high-impact editorial scrolling.
- **Cons**: Might require manual scroll-trigger adjustments for GSAP animations if they depend on section entry/exit points that are now further apart.
