# Design: Remote Link Handling

## Approach
We will implement a consistent way to handle external links across the project. 

### External Link Detection
While we could manually add `target="_blank"` to every link, a more robust approach is to have components or a utility detect if a URL is external.

A link is considered "external" if:
1. It starts with `http://` or `https://`.
2. It is not an anchor link starting with `#`.
3. It does not start with a slash `/` (absolute internal link).

### Component Modifications

#### 1. BrandButton.astro
- Add an explicit `target` prop to the destructuring.
- Add a `rel` prop.
- If `href` is provided and `target` is not explicitly set, we can optionally auto-detect if it's external, but for now, we will prefer explicit passing or a safe default for known external contexts.

#### 2. Specialized Social/Collab Components
- For `SocialCard`, `SocialLinks`, and `CollabItem`, since they almost exclusively handle external links, we have hardcoded `target="_blank"` and `rel="noopener noreferrer"` or made them the default.

#### 3. FeatureCTA.astro
- Added support for `href`.
- The component renders an `<a>` if `href` is present, or a `div` otherwise.
- Updated to support consistent external link attributes if needed.

### Security
All links using `target="_blank"` MUST include `rel="noopener noreferrer"` to prevent security risks (tabnabbing) and improve performance.

## Trade-offs
- **Manual vs Automatic:** Automatic detection is cleaner but can sometimes be over-engineered for a small project. We will start by updating the components to accept these props and manually setting them where external links are known to exist.
