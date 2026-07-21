/**
 * nav.js — Single source of truth for the site navigation shell.
 * Renders the navbar into #nav-mount with correct active state.
 */
(function () {
  var pages = [
    { id: 'index', href: 'index.html', label: 'Overview' },
    { id: 'about', href: 'about.html', label: 'About' },
    { id: 'ai', href: 'ai.html', label: 'AI' },
    { id: 'manifesto', href: 'manifesto.html', label: 'Dilemma' },
    { id: 'docs', href: 'docs.html', label: 'Docs' }
  ];

  function detectActivePage() {
    var path = window.location.pathname.toLowerCase();
    var filename = path.split('/').pop() || 'index.html';
    if (filename === '' || filename === '/' || path.endsWith('/')) return 'index';
    for (var i = 0; i < pages.length; i++) {
      if (filename === pages[i].href) return pages[i].id;
    }
    return 'index';
  }

  function renderNavLinks(activePage) {
    var html = '';
    for (var i = 0; i < pages.length; i++) {
      var p = pages[i];
      var cls = p.id === activePage ? 'nav-link active' : 'nav-link';
      html += '<a class="' + cls + '" href="' + p.href + '">' + p.label + '</a>\n';
    }
    return html;
  }

  function renderNav() {
    var mount = document.getElementById('nav-mount');
    if (!mount) return;

    var activePage = detectActivePage();
    var isTransparent = mount.getAttribute('data-transparent') === 'true';
    var navClass = isTransparent
      ? 'fixed top-0 w-full h-[52px] z-[100] bg-transparent'
      : 'fixed top-0 w-full h-[52px] z-[100] transition-all duration-300';

    var html = ''
      + '<nav id="navbar" class="' + navClass + '">\n'
      + '<div class="nav-inner flex justify-between items-center px-margin-base w-full max-w-[1200px] mx-auto h-full">\n'
      + '<a href="index.html" class="nav-wordmark">Aura</a>\n'
      + '<div id="mobileMenu" class="hidden absolute top-[52px] left-0 w-full bg-surface/95 dark:bg-[#1d1d1f]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 flex-col p-4 gap-4 md:static md:w-auto md:bg-transparent md:border-none md:p-0 md:flex md:flex-row md:gap-8 items-center">\n'
      + renderNavLinks(activePage)
      + '</div>\n'
      + '<div class="flex items-center gap-4">\n'
      + '<a href="docs.html#hardware" class="nav-cta">Build Yours</a>\n'
      + '<button id="menuToggle" class="md:hidden flex items-center justify-center w-11 h-11" aria-expanded="false" aria-controls="mobileMenu" aria-label="Toggle navigation menu">\n'
      + '<i id="menuIcon" data-lucide="menu"></i>\n'
      + '</button>\n'
      + '</div>\n'
      + '</div>\n'
      + '</nav>\n';

    mount.insertAdjacentHTML('beforebegin', html);
    mount.remove();
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNav);
  } else {
    renderNav();
  }
})();
