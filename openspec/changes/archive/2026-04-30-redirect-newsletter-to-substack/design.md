# Design: Redirect Newsletter Navigation to Substack

This design focuses on enabling external navigation within the primary sidebar while maintaining the "Neon Noir Editorial" aesthetic.

## Navigation Configuration
The `navItems` array in `src/config/navigation.ts` will be enhanced to support optional `target` and `rel` properties. This allows individual items to opt-in to external navigation without breaking the existing internal anchor links.

### Updated Schema
```typescript
export interface NavItem {
  label: string;
  href: string;
  icon: string;
  target?: string;
  rel?: string;
}
```

## Component Enhancement
The `Navigation.astro` component will be updated to conditionally apply the `target` and `rel` attributes to the `<a>` tag.

```astro
<a
  href={item.href}
  target={item.target}
  rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
  ...
>
```

## User Experience
- Clicking "Newsletter" will now open `https://brauliofiloteo.substack.com` in a new browser tab.
- This ensures the user doesn't lose their place on the main site while exploring the Substack.
- All other navigation items remain as internal anchors (`#home`, `#about`, etc.).
