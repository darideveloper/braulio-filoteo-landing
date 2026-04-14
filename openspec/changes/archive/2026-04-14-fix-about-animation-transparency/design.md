# Design: Fix About Section Animation Transparency and Timing

## Architectural Decisions

### 1. Shift to `tl.from()` Model
To resolve the initial transparency issues, we will adopt the `tl.from()` model used in the Hero section.
- **Problem:** When using `tl.to()`, GSAP needs to set the initial state (`autoAlpha: 0`) before the animation starts. If this happens *after* the browser renders the first frame, users see a "flash" of the content.
- **Solution:** By adding `opacity-0` in the CSS/Template and using `gsap.set(..., { autoAlpha: 1 })` followed by `tl.from(..., { autoAlpha: 0 })`, we ensure the content is 100% hidden by default and GSAP handles the reveal from the hidden state back to the fully visible natural state.

### 2. High-End "Hero Pattern" Fluidity
The Hero section's attractiveness comes from **overlapping motion**. We will refine the About section sequence to match this:
- **Large Overlaps:** Subsequent animations will have significant negative offsets (`"-=1.0"`, `"-=0.8"`). This means the mission cards start appearing while the header is still mid-move, creating a fluid, interconnected feel rather than a rigid "one after another" sequence.
- **Tightened Staggers:** Reducing staggers (e.g., from `0.3` to `0.15`) makes the "zipper" reveal feel faster and more professional.

### 3. Deliberate Entrance Point
We will maintain the `0.5s` initial delay on the header to ensure the user's eye has settled on the section before the motion sequence begins.

## Accessibility Considerations
The `prefers-reduced-motion` settings will continue to use a simple fade-in. The `tl.from()` model works perfectly for this as we only need to bypass the `y` and `scale` properties.

## Alternatives Considered
- **GSAP `fromTo()`:** While powerful, `from()` is more idiomatic when the "to" state is already defined by the CSS/layout, reducing complexity in the timeline code.
- **Intersection Observer with CSS Transitions:** Rejected because it cannot achieve the precise overlapping timeline needed for the "Hero" look.
