# Summary

## 1. Color Palette: "Electric Noir"
The palette uses a high-contrast dark theme with a vibrant primary "call-to-action" color and a secondary "spiritual" accent.

| Role | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Background (Surface)** | `#0E0E0E` to `#131313` | Deep blacks and dark grays for the main canvas. |
| **Primary (Brand)** | `#FE6500` | Used for buttons, highlights, and the "GRIT" identity. |
| **Accent (Spiritual)** | `#9B30FF` | A neon purple/violet used for borders, glows, and icons. |
| **Text High-Emphasis** | `#E5E2E1` | Off-white for maximum readability without harshness. |
| **Text Muted** | `#CFC2D8` | Desaturated lavender/gray for secondary labels and metadata. |
| **Glows/Gradients** | `rgba(155, 48, 255, 0.1)` | Subtle radial blurs to create depth in the dark background. |

---

## 2. Typography Strategy
The design uses a "Big & Bold" approach, mixing a geometric sans-serif for impact with a clean sans-serif for readability.

* **Display / Headlines:** **Epilogue** (Black 900 weight).
    * *Characteristics:* Ultra-tight tracking (`-0.06em`), uppercase, and heavy line heights (`0.9`).
* **Body / UI:** **Inter**.
    * *Characteristics:* Used for descriptions and metadata. Often paired with wide tracking (`0.3em`) when in uppercase for a "luxury label" feel.
* **Signifier Font:** Italics are used within headlines (e.g., *"CUENTAS"*) to add a rhythmic, editorial break.

---

## 3. Main Components & UI Elements

### **A. Navigation Bar (Glassmorphism)**
* **Style:** Fixed top, `131313` background at 80% opacity with a `backdrop-blur-md`.
* **Interaction:** Links use uppercase labels with a primary color hover state or a bottom-border transition.

### **B. The "Bento" & Feature Cards**
* **Surface:** `#1C1B1B` (Surface-low).
* **Corners:** Sharp for an aggressive look (approx. `4px` to `8px`).
* **Specialty:** Cards often feature a "numbering" system (01, 02) in a large, low-opacity typeface to establish hierarchy.

### **C. Action Buttons (CTAs)**
* **Primary:** Solid `#FE6500` with white text. Includes a `shadow-[0_10px_30px_-10px_rgba(254,101,0,0.4)]` for a "neon" lift.
* **Secondary/Ghost:** Transparent background with a `1px` border of `outline-variant` and a blur effect.

### **D. Image Treatment**
* **Filter:** High-contrast **Grayscale**.
* **Frame:** Use of "floating" decorative borders in purple (`primary-container`) that are offset from the image itself.
* **Badges:** Small "EST. 2024" or "HOST" labels pinned to the corners of images.

---

## 4. Technical Requirements for Implementation
To build the page as seen in the screenshots, you will need:

### **Frontend Stack**
* **Framework:** Tailwind CSS (configured with the custom theme colors above).
* **Iconography:** Google Material Symbols Outlined (with `FILL 1` for active states).
* **Animations:**
    * **Framer Motion (or CSS Keyframes):** For the "Kinetic Scroller" (the moving "DISCIPLINA / CARÁCTER" text in the background).
    * **Reveal on Scroll:** Elements should fade up or slide in as the user moves down the page.

### **Key CSS Utilities**
```css
/* Tight Headline Effect */
.headline-xl {
  font-family: 'Epilogue', sans-serif;
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.85;
  text-transform: uppercase;
}

/* The Signature Glow */
.bg-glow-purple {
  background: radial-gradient(circle at center, rgba(155, 48, 255, 0.15) 0%, transparent 70%);
}

/* Grayscale Image Hover */
.img-editorial {
  filter: grayscale(100%) brightness(90%);
  transition: all 0.7s ease;
}
.img-editorial:hover {
  filter: grayscale(0%) brightness(100%);
  transform: scale(1.05);
}
```

---

## 5. Layout Philosophy
* **Intentional Asymmetry:** Don't center everything. Use the "Editorial Grid" where text is pushed to one side while images or white space (black space) balance the other.
* **Text as Graphic:** Large background words like "GRIT" or "VOICE" should be used at 3%–5% opacity as structural elements, not just content.


Do you want to start by refining the **Hero Section** code to match the latest grayscale portrait layout?