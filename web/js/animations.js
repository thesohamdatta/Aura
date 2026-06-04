// Global GSAP ScrollTrigger Animation Controller
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Standard Reveal Animation (.reveal class)
    document.querySelectorAll('.reveal').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 32,
        duration: 0.85,
        ease: 'power2.out'
      });
    });

    // 2. Stagger Reveal Animation (.stagger-container + .stagger-item)
    document.querySelectorAll('.stagger-container').forEach(container => {
      const items = container.querySelectorAll('.stagger-item');
      if (items.length > 0) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: container,
            start: 'top 82%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out'
        });
      }
    });

    // 3. Respect Reduced Motion Settings
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.globalTimeline.timeScale(0);
      document.querySelectorAll('*').forEach(el => {
        el.style.animationDuration = '0.001ms';
        el.style.transitionDuration = '0.001ms';
      });
    }
  } else {
    // Fallback if GSAP is not loaded: make elements immediately visible
    document.querySelectorAll('.reveal, .stagger-item').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }
});
