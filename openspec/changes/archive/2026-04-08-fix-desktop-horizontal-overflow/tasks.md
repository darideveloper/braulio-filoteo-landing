## 1. Implementation

- [x] 1.1 **Adjust global width in `src/styles/global.css`**
  - Change `html, body` from `width: 100vw` to `width: 100%`.
- [x] 1.2 **Simplify `Layout.astro` structure**
  - Remove the `xl:flex-row` from the layout wrapper `div`.
  - Remove `flex-grow` from the `main` element.
- [x] 1.3 **Verify mobile layout consistency**
  - Ensure the `Header` and `main` elements still behave correctly on smaller viewports.
