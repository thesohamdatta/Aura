/**
 * reveal.js — Unified Scroll Reveal and Animation Observer
 * Consolidates IntersectionObserver animations across all pages.
 */
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Helper to immediately reveal all elements in fallback scenarios
  const revealAllImmediately = (isAbout, isAi, isManifesto) => {
    if (isAbout) {
      document.querySelectorAll('section:not(:first-of-type)').forEach(el => {
        el.classList.remove('opacity-0', 'translate-y-4');
        el.classList.add('opacity-100');
      });
    }
    if (isAi) {
      document.querySelectorAll('section > div').forEach(el => {
        el.classList.remove('opacity-0', 'translate-y-10');
        el.classList.add('opacity-100');
      });
    }
    if (isManifesto) {
      document.querySelectorAll('article p').forEach(p => {
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
      });
    }
  };

  const path = window.location.pathname.toLowerCase();
  const isAbout = path.includes('about') || document.body.dataset.page === 'about';
  const isAi = path.includes('ai') || document.body.dataset.page === 'ai';
  const isManifesto = path.includes('manifesto') || document.body.dataset.page === 'manifesto';
  const isIndex = path.includes('index') || path.endsWith('/') || path === '' || document.body.dataset.page === 'index' || (!isAbout && !isAi && !isManifesto && document.getElementById('app-demo-section'));

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealAllImmediately(isAbout, isAi, isManifesto);
    return;
  }

  const observerOptions = {
    threshold: 0.1
  };

  if (isAbout) {
    const revealElements = document.querySelectorAll('section:not(:first-of-type)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-4');
      observer.observe(el);
    });

  } else if (isAi) {
    const revealElements = document.querySelectorAll('section > div');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

  } else if (isManifesto) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('article p').forEach(p => {
      p.style.opacity = '0';
      p.style.transform = 'translateY(10px)';
      p.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      observer.observe(p);
    });

  } else if (isIndex) {
    const appDemoSection = document.getElementById('app-demo-section');
    if (appDemoSection) {
      const phoneImg = document.getElementById('demoPhoneImage');
      const captionLabel = document.getElementById('demoCaptionLabel');
      const captionBody = document.getElementById('demoCaptionBody');

      const demoObserver = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (phoneImg) phoneImg.classList.add('animate-in');
            setTimeout(() => {
              if (captionLabel) captionLabel.classList.add('animate-in');
            }, 300);
            setTimeout(() => {
              if (captionBody) captionBody.classList.add('animate-in');
            }, 500);
            observerInstance.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      demoObserver.observe(appDemoSection);
    }
  }
});
