# Design: Full-width Newsletter Embed

## Architectural Overview
The `NewsletterSection` uses a `SectionWrapper` which previously wrapped its content in a centered `.container`. To achieve a true full-width stripe, the following architectural changes were made:
1. **Global Change:** `SectionWrapper.astro` was modified to remove the hardcoded `.container mx-auto` class. This makes `SectionWrapper` full-width by default, controlled entirely by the `containerClass` prop.
2. **Standardization:** All other organisms using `SectionWrapper` were updated to explicitly include the `container` class in their `containerClass` prop to maintain their existing layout.
3. **Newsletter Layout:** In `NewsletterSection.astro`, the elements that should stay centered (Header, Intro, Footer) are manually wrapped in a `<div class="container">`.
4. **Full-Width Stripe:** The "Substack Embed" `div` remains unconstrained by the container, allowing its black background to span the full viewport width.

## Component Structure Changes
The new structure in `NewsletterSection.astro` is:
```astro
<SectionWrapper containerClass="text-center space-y-12">
  <div class="container space-y-12">
    <SectionHeader />
    <ContentGrid />
  </div>
  
  <div class="w-full pt-8">
    <div class="py-16 bg-[#000000]">
      <div class="relative flex items-center justify-center flex-col gap-4">
        <!-- New Manual Addition: Profile Photo and Title -->
        <div class="flex items-center gap-4">
          <Image src={BraulioPhoto} ... />
          <h3 class="text-white text-2xl font-bold text-left">
            <span class="block">Braulio Filoteo</span>
            <span class="text-brand-secondary block text-xl">Substack</span>
          </h3>
        </div>
        
        <iframe ... />
      </div>
    </div>
  </div>
  
  <div class="container mt-4 space-y-8">
     <!-- Social Proof / Footer info -->
  </div>
</SectionWrapper>
```

## Visual Adjustments
- **Background:** The Substack embed outer wrapper (`bg-[#000000]`) spans the full width and has no `rounded-lg`.
- **Content:** The Substack embed now includes an editorial profile section (photo and title) above the iframe for better branding.
- **Iframe Consistency:** The `<iframe>` tag's `width`, `height`, and scaling classes are preserved. It uses `minimal=true` in the URL for a cleaner look.


