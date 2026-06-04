// website/js/ai.js
// Handles specific animations for the AI Pipeline page

document.addEventListener('DOMContentLoaded', () => {
  initPipelineAnimation();
});

function initPipelineAnimation() {
  if (typeof gsap === 'undefined') return;
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Simple pulsing data dot animation
  const dot = document.querySelector('.pipeline-connector .dot');
  if (dot) {
    gsap.to(dot, {
      y: 52, // move down the 60px line
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: "power1.inOut"
    });
  }
}
