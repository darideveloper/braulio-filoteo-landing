import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register Plugins
gsap.registerPlugin(ScrollTrigger);

// Set Global Defaults
gsap.defaults({
  ease: "power4.out",
  duration: 1.2
});

// Configure Performance Defaults
gsap.config({
  force3D: true
});
