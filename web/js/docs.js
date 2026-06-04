// Docs page sidebar scroll-spy and mobile select dropdown navigation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.docs-section');
  const sidebarLinks = document.querySelectorAll('.docs-sidebar a');
  const mobileSelect = document.getElementById('mobile-docs-select');

  // 1. Mobile Select Dropdown Redirect
  if (mobileSelect) {
    mobileSelect.addEventListener('change', (e) => {
      const targetHash = e.target.value;
      if (targetHash) {
        window.location.hash = targetHash;
        const targetElement = document.querySelector(targetHash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // 2. Scroll Spy Logic
  function updateActiveLink() {
    let activeSectionId = null;
    const scrollPosition = window.scrollY + 100; // Offset for header

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSectionId = section.getAttribute('id');
      }
    });

    if (activeSectionId) {
      sidebarLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === activeSectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // Update mobile select dropdown value
      if (mobileSelect) {
        mobileSelect.value = `#${activeSectionId}`;
      }
    }
  }

  // Bind scroll listeners
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // Initial run on mount
});
