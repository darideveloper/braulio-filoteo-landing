# Branding and Style Integration Guide (Django Port)

This document provides a technical blueprint for replicating the branding and UI standards of the **Cancun Airport Transportation** project in a **Django** application.

## 1. Tailwind CSS v4 Configuration
In Tailwind v4, configuration is primarily CSS-first. Create or update your main input CSS file (e.g., `static/css/input.css`).

### Theme Definition
Add the following `@theme` block to your CSS to register the project's color palette and typography.

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-accent: #ff8400;
  --color-accent-dark: #894700;
  --color-black: #16161d;
  --color-gray: #757575;
  --color-gray-light: #f9fafb;
  --color-gray-dark: #333333;
  --color-blue: #0056b1;
  --color-blue-dark: #425466;
  --color-yellow: #fdc90d;
  --color-green: #2e8e1f;

  /* Typography */
  --font-title: "Metropolis", sans-serif;
  --font-sans: "Inter Variable", sans-serif;
}
```

## 2. Asset Management (Fonts)
The project relies on local font files for brand consistency.

### File Placement
1. Create a `static/fonts/` directory in your Django project.
2. Copy the `.woff2` files (Inter and Metropolis) into this folder.

### CSS Declaration
In your `input.css`, declare the fonts using `@font-face`:

```css
/* Inter Variable - Local */
@font-face {
  font-family: "Inter Variable";
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url("/static/fonts/inter-latin-wght-normal.woff2") format("woff2-variations");
}

/* Metropolis - Local */
@font-face {
  font-family: "Metropolis";
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url("/static/fonts/metropolis-latin-400-normal.woff2") format("woff2");
}
```

## 3. Global Styles
To maintain the UX, apply these base styles in your CSS:

```css
body {
  @apply text-gray-dark bg-white overflow-x-hidden;
  margin: 0;
  width: 100vw;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-title);
  color: var(--color-gray-dark);
}

/* Standard Container */
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
}

/* Forms - Standard Heights */
input, select {
  @apply w-full rounded-sm bg-white px-4;
  height: 3rem !important;
  border: 1px solid #e5e7eb;
}

/* Custom Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--color-gray-light); }
::-webkit-scrollbar-thumb { background: var(--color-accent); }
```

## 4. Django Template Integration
Ensure your `base.html` includes the compiled CSS and respects the layout.

```html
<!DOCTYPE html>
<html lang="{{ request.LANGUAGE_CODE }}" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}{% endblock %} | Cancun Airport Transportation</title>
    <link rel="stylesheet" href="{% static 'css/output.css' %}">
</head>
<body class="antialiased">
    <main class="container">
        {% block content %}{% endblock %}
    </main>
</body>
</html>
```

## 5. Centralized Branding (i18n)
Django's translation system should be used to manage brand-specific strings.

### Settings (`settings.py`)
```python
INSTALLED_APPS = [
    # ...
    'django.contrib.staticfiles',
]

SITE_NAME = "Cancun Airport Transportation"
```

### Translations (`locale/en/LC_MESSAGES/django.po`)
Instead of JSON, use Django's `.po` files for branding strings to allow for easy localization of the business name if needed.

```gettext
msgid "business_name"
msgstr "Cancun Airport Transportation"
```

In your templates:
```html
{% load i18n %}
<footer>
    {% translate "business_name" %}
</footer>
```
