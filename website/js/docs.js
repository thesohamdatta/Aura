// website/js/docs.js
// Handles scroll spy and mobile navigation for the docs page

document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initMobileSelect();
});

function initScrollSpy() {
  const sections = document.querySelectorAll('.docs-section');
  const navLinks = document.querySelectorAll('.sidebar-link');
  
  if (sections.length === 0 || navLinks.length === 0) return;

  // Offset for fixed header (52px nav + 40px padding = 92px)
  const offset = 100; 

  const handleScroll = () => {
    let currentId = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - offset;
      if (scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
          
          // Sync mobile select if it exists
          const select = document.getElementById('docs-section-select');
          if (select && select.value !== currentId) {
            select.value = currentId;
          }
        }
      });
    }
  };

  // Listen to window scroll (Lenis integrates with native scroll)
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Smooth scroll to anchor on click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // If Lenis is active, use it for smooth scrolling
        if (typeof lenis !== 'undefined' && lenis) {
          lenis.scrollTo(targetSection, { offset: -90 });
        } else {
          // Fallback to native smooth scroll
          window.scrollTo({
            top: targetSection.offsetTop - 90,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

function initMobileSelect() {
  const select = document.getElementById('docs-section-select');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const targetId = e.target.value;
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      if (typeof lenis !== 'undefined' && lenis) {
        lenis.scrollTo(targetSection, { offset: -120 });
      } else {
        window.scrollTo({
          top: targetSection.offsetTop - 120,
          behavior: 'smooth'
        });
      }
    }
  });
}
