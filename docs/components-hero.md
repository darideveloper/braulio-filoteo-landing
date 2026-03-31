--- 

## **1. Typography Atoms**
These must handle the aggressive "Big & Bold" scaling and the secondary "Inter" utility styles.

### **`DisplayHeadline`**
* **Props:**
    * `as`: (string) The HTML tag (defaulting to `h1`, but switchable to `h2` or `span`).
    * `size`: ('sm' | 'md' | 'lg' | 'xl') Mapping to font sizes like `text-4xl` up to `text-9xl`.
    * `color`: ('primary' | 'white' | 'accent') For those moments where the headline turns orange or purple.
* **Key Features:**
    * **Tight Tracking:** Must default to `tracking-tighter` or a custom `-0.06em`.
    * **Line Height:** Needs `leading-[0.85]` to ensure multi-line text "stacks" elegantly.

### **`OverlineLabel`**
* **Props:**
    * `variant`: ('default' | 'italic') To support the "ENDURE TO SHINE" style vs the "COLECCIONISTA" style.
    * `color`: ('accent' | 'primary' | 'muted')
* **Key Features:**
    * **Spacing:** High letter-spacing (`tracking-[0.3em]` or `0.5em`) is the signature move here.

---

## **2. Interaction Atoms**
Since you are using **React Icons**, these atoms need a slot or a prop to handle icon placement.

### **`Button`**
* **Props:**
    * `variant`: ('primary' | 'ghost' | 'link')
    * `iconPlacement`: ('left' | 'right' | 'none')
    * `fullWidth`: (boolean) For mobile responsiveness.
* **Key Features:**
    * **Shadow States:** The primary variant needs a custom orange glow `shadow-[0_10px_30px_-10px_rgba(254,101,0,0.4)]`.
    * **Transitions:** Smooth `duration-300` and a `scale-95` on click (active state).

### **`NavLink`**
* **Props:**
    * `isActive`: (boolean) Adds the underlined state or a specific color.
* **Key Features:**
    * **Hover Logic:** Transitions from `text-on-surface-variant` to `text-primary`.

---

## **3. Media & Decorative Atoms**
These provide the "Editorial" texture to the UI.

### **`EditorialPortrait`**
* **Props:**
    * `src`: (string) Image path.
    * `aspectRatio`: ('4/5' | 'square' | 'video') To reuse this for podcast episode thumbnails.
    * `grayscale`: (boolean) Toggle for the noir effect.
* **Key Features:**
    * **Object Fit:** Must use `object-cover` to prevent distortion.

### **`DecorativeFrame`**
* **Props:**
    * `position`: ('top-right' | 'bottom-left') To offset the lines from the content.
    * `thickness`: ('thin' | 'bold')
* **Key Features:**
    * **Z-Index:** Usually sits behind the image (`z-0`) to create depth.

### **`VerticalDivider`**
* **Props:**
    * `color`: ('primary' | 'accent') Orange for stats, purple for testimonials/quotes.
    * `height`: (string) Tailored height (e.g., `h-12`).

---

## **4. Structural / Layout Atoms**

### **`AtmosphericGlow`**
* **Props:**
    * `position`: ('top-left' | 'bottom-right' | 'center')
    * `intensity`: ('low' | 'high')
* **Key Features:**
    * **Blur:** Uses `blur-[120px]` or `blur-[150px]` for that hazy, high-end feel.

---

## **Key Consideration: Tailwind Config**

To make these atoms truly "dynamic," we should first define the **Design System tokens** in your `tailwind.config.mjs`. This allows you to use classes like `text-brand-orange` or `font-display` consistently across all components.

**Would you like to see the `tailwind.config.mjs` setup that maps these specific "Editorial Noir" colors and typography tokens next?**