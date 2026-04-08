# Design: Voice Editorial Refinements

## Typography Strategy (`src/styles/global.css`)
The forced `uppercase` in `display-lg` and `display-2xl` is too restrictive. By removing it, we allow components to control their case via `uppercase` or `normal-case` utilities.

```css
/* Updated utilities in global.css */
@utility display-lg {
  @apply font-brand-display text-[3.5rem] font-black tracking-[-0.04em] leading-[1.1]; /* Removed uppercase */
}

@utility display-2xl {
  @apply font-brand-display text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]; /* Removed uppercase */
}
```

## Gradient Title (`HeroEditorial.astro`)
To support a gradient on a single word like "convertirse", we'll change the `title` prop from a string to a slot or use `set:html`. For simplicity and flexibility, we'll allow the `title` to be passed as a slot in the component.

```astro
<!-- HeroEditorial.astro update -->
<h1 class="display-2xl text-[3.5rem] md:text-[5rem] text-brand-text-high mb-8 normal-case">
  <slot name="title">{title}</slot>
</h1>
```

## Matrix Icon Scale (`MatrixCard.astro`)
We'll update the `MaterialIcon` size to `text-5xl!` to ensure it overrides any conflicting styles and maintains its editorial presence.

## FeatureCTA Refinements
The `FeatureCTA.astro` needs to be updated to:
1.  **Watermark**: Add an absolute-positioned `div` using `.text-watermark` behind the content.
2.  **Square-Rounded Icon**: Change the icon wrapper from `rounded-full` to `rounded-[0.25rem]`.
3.  **Normal Case Title**: Use `normal-case` in the heading element.

```astro
<!-- FeatureCTA.astro update structure -->
<div class="relative ...">
  <div class="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
     <span class="text-watermark">PODCAST</span>
  </div>
  ...
  <div class="... rounded-[0.25rem] ...">
    <MaterialIcon name={icon} size="text-4xl" />
  </div>
</div>
```
