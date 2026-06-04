// website/js/nav.js
// Handles scroll state (frosted glass), dark mode toggle, and mobile hamburger menu

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initThemeToggle();
  initMobileNav();
});

// 1. Navbar Scroll State
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Initial check
  handleScroll();
  
  // Listen for scroll
  window.addEventListener('scroll', handleScroll, { passive: true });
}

// 2. Dark Mode Toggle
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('aura-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  toggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('aura-theme', currentTheme);
  });
}

// 3. Mobile Hamburger Menu
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    
    // Toggle body scroll
    if (navLinks.classList.contains('nav-open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking a link
  const links = navLinks.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-open');
      document.body.style.overflow = '';
    });
  });
}
