# Design: Newsletter Navigation and Sidebar Spacing Optimization

### 1. Navigation Configuration
The `navItems` array in `src/config/navigation.ts` will be updated to include the "Newsletter" item. It will be placed before "Contacto" to maintain a logical flow (Content -> Community/Membresía -> Contact).

**New Item:**
```typescript
{
  label: 'Newsletter',
  href: '#newsletter',
  icon: 'mail' // Or 'email' or 'campaign'
}
```

### 2. Spacing Adjustments

#### Navigation Items (`Navigation.astro`)
- **Current:** `py-3` (12px top/bottom).
- **Target:** `py-2` (8px top/bottom). This reduces each item height by 8px. With 7 items (Inicio, Misión, Podcast, GRITones, Planes, Newsletter, Contacto), we save 56px in total vertical space.

#### Sidebar Container (`Sidebar.astro`)
- **Sidebar Padding:** Currently `p-10`. Reduce to `p-8` or `py-8 px-10`.
- **Logo Margin:** Currently `mb-16`. Reduce to `mb-10`.
- **Bottom Section Padding:** Currently `pt-12` and `mt-auto`. Reduce `pt-12` to `pt-8`.
- **Ecosistema Digital Margin:** Currently `mb-6`. Reduce to `mb-4`.

### 3. Visual Impact
These changes will make the sidebar more compact and "editorial," allowing more vertical room for the navigation list without losing the "breathable" feel of the design.
