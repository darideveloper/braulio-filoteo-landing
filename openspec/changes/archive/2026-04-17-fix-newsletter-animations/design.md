# Design: Newsletter Animation Fix

## Architectural Mapping
The fix involves mapping the selectors referenced in the existing GSAP script to the corresponding elements in the `NewsletterSection.astro` HTML template.

### Class Mapping
| Script Selector | Target Element in HTML | Description |
| :--- | :--- | :--- |
| `.js-newsletter-glow` | The two atmospheric glow `div` elements | Background decorative elements. |
| `.js-newsletter-header` | `<SectionHeader />` | The primary heading of the section. |
| `.js-newsletter-quote` | `<SideBorderQuote />` | The editorial quote block. |
| `.js-newsletter-content` | The `div` containing the paragraph text | Main descriptive content. |
| `.js-newsletter-feature` | Individual feature divs in the `.map()` loop | The "Audios Inéditos" and "Ensayos" items. |
| `.js-newsletter-embed` | The Substack iframe wrapper `div` | The actual subscription form area. |
| `.js-newsletter-proof` | The social proof container (`.container.mt-4`) | The avatar list and subscriber count text. |
| `.js-reveal` | Content containers | Replaces `.js-newsletter-reveal` to align with `global.css`. |

## FOUC Prevention Strategy
The project uses a `.no-js .js-reveal` pattern in `global.css`:
- `.js-reveal` is defined with `opacity: 0; visibility: hidden;` by default.
- If JS is disabled (`.no-js`), these elements are shown (`opacity: 1 !important`).
- The GSAP script will manually set `autoAlpha: 1` on these elements before animating to ensure they are visible to GSAP's initial capture.

## Script Enhancements
1. **Plugin Registration:** Adding `gsap.registerPlugin(ScrollTrigger)` ensures the plugin is active within the component's scope.
2. **Selector Sync:** Updating the script to use `.js-reveal` for visibility management.
