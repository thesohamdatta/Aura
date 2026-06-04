// website/js/animations.js
// Handles GSAP ScrollTrigger and Lenis smooth scroll initialization

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initScrollReveals();
});

// 1. Lenis Smooth Scroll Setup
function initSmoothScroll() {
  // Check if Lenis is loaded via CDN
  if (typeof Lenis === 'undefined') {
    console.warn('Lenis not found. Smooth scrolling disabled.');
    return;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });

  // Sync Lenis with GSAP ScrollTrigger if GSAP is available
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
  } else {
    // Fallback raf if GSAP isn't used on this page
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

// 2. Global Reveal Animations
// Add class 'reveal' to any element that should fade up on scroll
function initScrollReveals() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  
  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const revealElements = document.querySelectorAll('.reveal');
  
  revealElements.forEach((el) => {
    gsap.fromTo(el, 
      { opacity: 0, y: 24 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { 
          trigger: el, 
          start: 'top 88%', // Triggers when element top hits 88% down viewport
          toggleActions: "play none none none"
        }
      }
    );
  });
  
  // Staggered reveals for lists or grids (add class 'reveal-stagger' to container)
  const staggerContainers = document.querySelectorAll('.reveal-stagger');
  staggerContainers.forEach((container) => {
    const children = container.children;
    gsap.fromTo(children,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 88%',
          toggleActions: "play none none none"
        }
      }
    );
  });
}
