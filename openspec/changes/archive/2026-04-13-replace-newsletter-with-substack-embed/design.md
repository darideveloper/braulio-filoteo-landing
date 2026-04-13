# Design: Substack Embed Integration

This design ensures the Substack iframe integrates into the "Electric Noir" design system through CSS filters and responsive container management.

## Visual Integration Strategy

### 1. Theme Matching (The "Dark Mode Hack")
Since Substack's embed has a fixed white background and black text, we will apply a CSS `filter` to the `iframe` element:
```css
filter: invert(1) hue-rotate(180deg) saturate(1.2);
```
- `invert(1)`: Flips colors, making the white background dark and black text light.
- `hue-rotate(180deg)`: Returns the brand's orange color while keeping the inverted luminosity.
- `saturate(1.2)`: (Optional) Fine-tunes the vibrance of the brand color after inversion.

### 2. Layout & Responsiveness
The iframe's container will have:
- `max-width: 480px` to maintain the embed's optimal proportions.
- `margin: auto` to center it within the newsletter section.
- `background-color: #0E0E0E` (Brand Surface) to prevent "white flashes" during load.
- `border: none` (removing the default Substack border).

### 3. Accessibility & Fallbacks
- **A11y:** The iframe will include `title="Suscripción a la Membresía Privada en Substack"`.
- **Adblocker Fallback:** Below the iframe container, a small text link will be provided: *"¿No ves el formulario? [Suscríbete directamente en Substack](https://brauliofiloteo.substack.com)"*.

## Technical Details

### Iframe Properties
- `src`: `https://brauliofiloteo.substack.com/embed`
- `width`: `100%` (inside a `max-w-[480px]` container)
- `height`: `320px`
- `frameborder`: `0`
- `scrolling`: `no`
- `title`: `Suscripción a la Membresía Privada en Substack`

### Fallback Mechanism
```html
<div class="bg-brand-surface min-h-[320px] rounded-lg overflow-hidden">
  <iframe ...></iframe>
</div>
<p class="text-xs text-brand-text-muted mt-4">
  ¿No ves el formulario? <a href="https://brauliofiloteo.substack.com" class="underline">Suscríbete aquí</a>.
</p>
```
