// Scroll state logic
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });
}

// Dark mode management
const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');

if (toggle) {
  const saved = localStorage.getItem('aura-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('aura-theme', next);
  });
}

// Active page highlight
let currentPage = window.location.pathname.split('/').pop();
if (!currentPage || currentPage === '') {
  currentPage = 'index.html';
}

document.querySelectorAll('.nav-links a, .nav-mobile-overlay a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

// Hamburger menu control
const hamburger = document.querySelector('.nav-hamburger');
const mobileOverlay = document.querySelector('.nav-mobile-overlay');

if (hamburger && mobileOverlay) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!open));
    mobileOverlay.setAttribute('aria-hidden', String(open));
    mobileOverlay.classList.toggle('open', !open);
    
    // Prevent body scroll when menu is open
    if (!open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close overlay on clicking any link
  mobileOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileOverlay.setAttribute('aria-hidden', 'true');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
