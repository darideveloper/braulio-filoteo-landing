import { gsap } from 'gsap';

class AnimationManager {
  private isLoaderComplete: boolean = false;
  private queue: (gsap.core.Timeline | gsap.core.Tween)[] = [];

  constructor() {
    if (typeof window === 'undefined') return;

    // Initial check: if there is no loader, we are effectively "complete"
    const loader = document.getElementById('loader');
    if (!loader || loader.style.display === 'none') {
      this.isLoaderComplete = true;
    }

    // Listen for the loader:complete event
    document.addEventListener('loader:complete', () => {
      this.isLoaderComplete = true;
      this.processQueue();
    });

    // Handle View Transitions if enabled
    document.addEventListener('astro:after-swap', () => {
      this.resetState();
    });
  }

  private resetState() {
    const loader = document.getElementById('loader');
    this.isLoaderComplete = !loader || loader.style.display === 'none';
    this.queue = [];
  }

  private processQueue() {
    this.queue.forEach(item => this.playEntrance(item));
    this.queue = [];
  }

  private playEntrance(item: gsap.core.Timeline | gsap.core.Tween) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // For reduced motion, skip movement and just show content
      if ('progress' in item) {
        item.progress(1);
      } else {
        item.play();
      }
    } else {
      item.play();
    }
  }

  /**
   * Registers an entrance animation (timeline or tween).
   * It will play automatically when the loader finishes.
   */
  public registerEntrance(item: gsap.core.Timeline | gsap.core.Tween) {
    if (this.isLoaderComplete) {
      this.playEntrance(item);
    } else {
      this.queue.push(item);
    }
  }
}

// Export as a singleton
export const animationManager = new AnimationManager();
