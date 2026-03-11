# Branding and Style Integration Guide (Braulio Filoteo)

This document provides a technical blueprint for the branding and UI standards of the **Braulio Filoteo** project.

## 1. Tailwind CSS v4 Configuration
In Tailwind v4, configuration is primarily CSS-first. Create or update your main input CSS file (e.g., `src/styles/global.css`).

### Theme Definition
Add the following `@theme` block to your CSS to register the project's color palette and typography.

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-brand-background: #000000;
  --color-brand-heading: #BD23FF;
  --color-brand-primary: #FF5E2A;
  --color-brand-text: #D9D9D9;

  /* Typography */
  --font-brand-title: "Metropolis", sans-serif;
  --font-brand-sans: "Inter Variable", sans-serif;
}
```

## 2. Global Styles
To maintain the UX, apply these base styles in your CSS:

```css
@layer base {
  html,
  body {
    @apply bg-brand-background text-brand-text;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-brand-title text-brand-heading;
  }

  /* Default font for everything else */
  body {
    @apply font-brand-sans;
  }
}
```

## 3. Brand Components
Standard reusable brand elements.

### Primary Button
```css
@layer components {
  .btn-primary {
    @apply bg-brand-primary text-white font-bold py-2 px-4 rounded transition-all hover:opacity-90;
  }
}
```

### Custom Scrollbar
```css
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #1a1a1a;
}
::-webkit-scrollbar-thumb {
  background: var(--color-brand-primary);
  border-radius: 4px;
}
```
