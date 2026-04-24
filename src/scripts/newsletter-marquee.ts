import { gsap } from 'gsap';

export const initNewsletterMarquee = (container: HTMLElement) => {
  const wordsContainer = container.querySelector('.js-marquee-content') as HTMLElement;
  if (!wordsContainer) return;

  const ctx = gsap.context(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Duplicate content for seamless loop
    const children = Array.from(wordsContainer.children);
    children.forEach((child) => {
      wordsContainer.appendChild(child.cloneNode(true));
    });

    const totalWidth = wordsContainer.scrollWidth / 2;

    gsap.to(wordsContainer, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });
  }, container);

  return () => ctx.revert();
};
