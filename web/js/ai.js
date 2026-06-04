// AI Pipeline diagram nodes entrance and connector line animation
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth <= 768;

  if (typeof gsap !== 'undefined') {
    // 1. Stagger animate the nodes
    gsap.from('.pipeline-node', {
      scrollTrigger: {
        trigger: '.pipeline-graph',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // 2. Animate the line progress bars
    const progressLines = document.querySelectorAll('.line-progress');
    progressLines.forEach((line, index) => {
      gsap.to(line, {
        scrollTrigger: {
          trigger: '.pipeline-graph',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        width: isMobile ? '100%' : '100%',
        height: isMobile ? '100%' : '100%',
        duration: 0.8,
        delay: 0.3 + (index * 0.25),
        ease: 'power1.inOut'
      });
    });
  } else {
    // Intersection Observer Fallback
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Reveal nodes
          document.querySelectorAll('.pipeline-node').forEach((node, idx) => {
            setTimeout(() => {
              node.style.opacity = '1';
              node.style.transform = 'translateY(0) scale(1)';
            }, idx * 150);
          });

          // Reveal lines
          document.querySelectorAll('.line-progress').forEach((line, idx) => {
            setTimeout(() => {
              if (isMobile) {
                line.style.height = '100%';
              } else {
                line.style.width = '100%';
              }
            }, 300 + (idx * 250));
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const graph = document.querySelector('.pipeline-graph');
    if (graph) {
      // Set initial styles for fallback animation
      document.querySelectorAll('.pipeline-node').forEach(node => {
        node.style.opacity = '0';
        node.style.transform = 'translateY(10px) scale(0.95)';
        node.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      });
      observer.observe(graph);
    }
  }
});
