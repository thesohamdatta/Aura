/**
 * nav.js - Renders the site navigation shell.
 * Page order and active-page rules live in js/site-data.js.
 */
(function () {
  function renderNavLinks(activePage) {
    var pages = window.AuraSite.getPages();
    var html = '';

    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      var isActive = page.id === activePage;
      var cls = isActive ? 'nav-link active' : 'nav-link';
      var current = isActive ? ' aria-current="page"' : '';

      html += '<a class="' + cls + '" href="' + page.href + '"' + current + '>' + page.label + '</a>\n';
    }

    return html;
  }

  function renderNav() {
    var mount = document.getElementById('nav-mount');
    if (!mount || !window.AuraSite) return;

    var activePage = window.AuraSite.getActivePage();
    var isTransparent = mount.getAttribute('data-transparent') === 'true';
    var navClass = isTransparent
      ? 'fixed top-0 w-full h-[52px] z-[100] bg-transparent'
      : 'fixed top-0 w-full h-[52px] z-[100] transition-all duration-300';

    var html = ''
      + '<nav id="navbar" class="' + navClass + '">\n'
      + '<div class="nav-inner">\n'
      + '<a href="index.html" class="nav-wordmark">Aura</a>\n'
      + '<div id="mobileMenu" class="nav-menu hidden">\n'
      + renderNavLinks(activePage)
      + '</div>\n'
      + '<div class="nav-actions">\n'
      + '<a href="docs.html#hardware" class="nav-cta">Build Yours</a>\n'
      + '<button id="menuToggle" class="nav-menu-toggle" aria-expanded="false" aria-controls="mobileMenu" aria-label="Toggle navigation menu">\n'
      + '<i id="menuIcon" data-lucide="menu"></i>\n'
      + '</button>\n'
      + '</div>\n'
      + '</div>\n'
      + '</nav>\n';

    mount.insertAdjacentHTML('beforebegin', html);
    mount.remove();
    if (window.AuraIcons) {
      window.AuraIcons.refresh();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNav);
  } else {
    renderNav();
  }
})();
