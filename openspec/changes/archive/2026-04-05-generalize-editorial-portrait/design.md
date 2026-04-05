# Design: Editorial Portrait Generalization

## Architectural Overview
The `HeroPortrait` component will be refactored into a more flexible `EditorialPortrait` molecule. This involves stripping away Hero-specific defaults and exposing configuration options for its distinctive layered elements.

### Prop Enhancements
- `src`: Image source (required).
- `alt`: Accessibility text (required).
- `floatingLabel`: Optional text for the bottom-right label (replaces `est`).
- `verticalText`: Optional text for the rotated side element (replaces `sideText`).
- `accent`: Choice of `'primary'` (Purple) or `'secondary'` (Orange) for the frame and labels.
- `aspect`: Tailwind aspect ratio class (default: `'aspect-[4/5]'`).
- `showFrame`: Boolean to toggle the decorative offset frame.

### Styling Strategy
- **Accent Handling:** Use a dynamic mapping for the border and text colors based on the `accent` prop.
- **Conditional Rendering:** Ensure that the side text and floating label containers only render if the corresponding props are provided.
- **Utilities:** Continue leveraging `.img-editorial` for the core hover effect.

## Component Structure (Draft)
```astro
---
interface Props {
  src: string;
  alt: string;
  floatingLabel?: string;
  verticalText?: string;
  accent?: 'primary' | 'secondary';
  aspect?: string;
  showFrame?: boolean;
  class?: string;
}
---
<div class="relative group">
  {showFrame && <div class="accent-specific-border" />}
  <div class="aspect-specific-container">
    <img class="img-editorial" />
    {floatingLabel && <div class="floating-label">{floatingLabel}</div>}
  </div>
  {verticalText && <div class="side-text">{verticalText}</div>}
</div>
```
