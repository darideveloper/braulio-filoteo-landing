# Proposal: Animate Newsletter Section (Neon Noir)

## Problem
The `NewsletterSection` currently lacks the sophisticated "Neon Noir Editorial" motion language present in the Hero and About sections. It feels static and doesn't effectively guide the user's focus toward the Substack conversion point.

## Proposed Solution
Implement a high-fidelity, scroll-triggered animation sequence that emphasizes the atmospheric branding and the value proposition of the membership. The reveal will use coordinated staggering, hardware-accelerated transforms, and a "cinematic" easing strategy.

## Impact
- **Visual Narrative:** Aligns the newsletter with the site's premium aesthetic.
- **Conversion:** Uses motion to draw the eye to the subscription iframe.
- **Consistency:** Maintains the unified animation architecture (Manager + MatchMedia).

## Proposed Specs
- `newsletter-reveal`: Defines the entrance sequence, atmospheric glow reveal, and Substack focus.
