# Design: FeatureCTA Kinetic Marquee

## Visual Language
The `FeatureCTA` section will feature an infinite horizontal scrolling marquee in the background. Following the `NewsletterSection` pattern, the words will alternate between "filled" and "stroke" (outline) styles.

### Word List (Spanish)
- **VOZ** (Filled)
- **PODCAST** (Stroke)
- **NARRATIVA** (Filled)
- **ESTRATEGIA** (Stroke)
- **PLATAFORMA** (Filled)
- **IMPACTO** (Stroke)

## Technical Architecture

### Component API Changes (`FeatureCTA.astro`)
The component will be updated to accept a new prop:
- `marqueeWords`: An array of objects `{ text: string, variant: 'filled' | 'stroke' }`.
- If `marqueeWords` is provided, it will render the marquee instead of the single `watermark` text.
- **Layout Update**: The background marquee and watermark will span the full viewport width (`w-screen`) while the content (label, headline, button) remains constrained to `max-w-4xl`.

### Animation Logic
The component will use the `initNewsletterMarquee` script (from `src/scripts/newsletter-marquee.ts`) to handle the infinite loop and cloning. This ensures we don't duplicate the animation logic.

### Integration in `index.astro`
The usage in `index.astro` for the `vehicle-cta` section will be updated:
```astro
<FeatureCTA
  ...
  marqueeWords={[
    { text: 'VOZ', variant: 'filled' },
    { text: 'PODCAST', variant: 'stroke' },
    { text: 'NARRATIVA', variant: 'filled' },
    { text: 'ESTRATEGIA', variant: 'stroke' },
    { text: 'PLATAFORMA', variant: 'filled' },
    { text: 'IMPACTO', variant: 'stroke' },
  ]}
>
  ...
</FeatureCTA>
```

## Accessibility & Performance
- **Reduced Motion:** The animation will be disabled if the user has `prefers-reduced-motion: reduce` set, falling back to a static visibility or hiding the marquee entirely.
- **Pointer Events:** The marquee will have `pointer-events-none` to avoid interfering with the CTA interaction.
- **Opacity:** A low opacity (e.g., `0.05` to `0.08`) will be used to ensure the background text remains subtle and doesn't compromise readability.
