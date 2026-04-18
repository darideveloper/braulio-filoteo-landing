# Design: Scoped Animations and Reliable Entrance Sequences

## Architectural Reasoning

### The Reveal Conflict
The project uses a global utility class `.js-reveal` (defined in `global.css`) to hide elements intended for animation. While this is efficient for CSS, it creates a risk in JavaScript if global selectors like `gsap.set('.js-reveal', ...)` are used. 

In a multi-component Astro page, every component's `<script>` block executes. If `NewsletterSection.astro` executes its script before or during the `Hero` animation, and it calls `gsap.set('.js-reveal', { autoAlpha: 1 })`, it destroys the initial state required for the `Hero` animations.

**Decision:** All component-level scripts MUST scope their GSAP selectors to their own container using `section.querySelectorAll()` or similar scoped methods.

### `.from()` vs `.to()`
The current `Hero.astro` implementation relies on `.to()` animations. 
- **Pros:** Animates towards the "natural" state defined in CSS.
- **Cons:** Requires the "unnatural" state (e.g., `translateY(40px)`) to be defined in CSS. If the CSS doesn't have it, no movement occurs.

**Decision:** Transition to the `tl.from()` pattern for entrance animations.
- `.from()` allows defining the starting state in JavaScript, which is more robust for entrance sequences where we want to ensure specific offsets (like `y: 40`) without cluttering the global CSS with initial offsets for every single element.

### Animation Orchestration
The `animationManager` handles the `loader:complete` event. The `Hero` section must register its timeline as `paused: true` (which it currently does) so that the manager can trigger it at the correct moment.

## Component Impact

### Hero Section
- **State:** Will use `.from()` to define initial `y` and `autoAlpha`.
- **Visibility:** Will still use `.js-reveal` to ensure elements are hidden before GSAP initializes.

### Newsletter Section
- **Scoping:** Will change from `gsap.set('.js-reveal', ...)` to `gsap.set(section.querySelectorAll('.js-reveal'), ...)`.

## Performance Considerations
- Scoped selectors (`section.querySelectorAll`) are slightly faster than global selectors in large DOMs.
- `force3D: true` is already globally configured and will be respected.
