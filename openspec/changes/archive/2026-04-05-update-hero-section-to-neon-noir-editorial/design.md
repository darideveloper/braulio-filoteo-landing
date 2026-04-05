# Design: Neon Noir Editorial Hero & Footer

## Architectural Overview
The implementation follows an atomic design approach, breaking down the complex Hero section into manageable, reusable components that leverage the "Electric Noir" design tokens.

### Component Breakdown
- **Atoms:**
    - `Badge`: Small, technical labels (Inter, uppercase, tracking).
    - `StatItem`: Editorial numbers with a vertical accent border.
    - `BrandButton`: Updated to handle Material Symbols and brand-specific variants.
- **Molecules:**
    - `HeroPortrait`: A composition of the `@utility img-editorial` image, a floating `Badge`, and a decorative offset `border`.
- **Organisms:**
    - `Hero`: The top-level grid container (`lg:grid-cols-12`) managing layout, background blurs, and vertical spacing.
    - `SocialSection`: A high-contrast, edge-to-edge section with social navigation, implemented as a standard page section.

## Styling Strategy
- **Grid:** Use Tailwind's `grid-cols-12` for precise control over the content/image split (7/5 on desktop).
- **Background:** Use absolute-positioned `div`s with `blur-[120px]` and low opacity (`10% - 20%`) to create the "atmospheric" glow.
- **Images:** Apply the `.img-editorial` utility for the signature grayscale-to-color transition.
- **Typography:** Ensure `display-lg` (Epilogue 900) is used for the main name, while `label-md` (Inter) is used for technical metadata.

## Theme Alignment
| Design Requirement | Project Token |
| :--- | :--- |
| Background | `var(--color-brand-background)` (#0E0E0E) |
| Primary Action | `var(--color-brand-primary)` (#9B30FF) |
| Editorial Heading | `var(--color-brand-secondary)` (#FE6500) |
| Muted/Alt Text | `var(--color-brand-text-muted)` (#CFC2D8) |
