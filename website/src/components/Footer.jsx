const links = {
  Aura: [
    { label: 'Home',         href: '/' },
    { label: 'Dilemma',      href: '/dilemma' },
    { label: 'About Us',     href: '/about-us' },
    { label: 'Documentation',href: '/docs' },
    { label: 'Join Waitlist',href: '#waitlist' },
  ],
  Build: [
    { label: 'Hardware Files',    href: 'https://github.com/thesohamdatta/Aura-Wearable-AI', external: true },
    { label: 'Firmware (ESP32)',  href: 'https://github.com/thesohamdatta/Aura-Wearable-AI', external: true },
    { label: 'Companion App',     href: 'https://github.com/thesohamdatta/Aura-Wearable-AI', external: true },
    { label: 'BOM (~$60)',        href: '/docs', external: false },
    { label: 'Assembly Guide',    href: '/docs', external: false },
  ],
  Community: [
    { label: 'GitHub',      href: 'https://github.com/thesohamdatta/Aura-Wearable-AI', external: true },
    { label: 'Discord',     href: '#', external: true },
    { label: 'Twitter / X', href: 'https://x.com/', external: true },
  ],
}

export default function Footer({ currentRoute, onNavigate }) {
  const handleNav = (e, href) => {
    if (href.startsWith('#')) {
      if (currentRoute !== '/') {
        e.preventDefault()
        onNavigate?.('/')
        setTimeout(() => {
          document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    } else if (!href.startsWith('http') && !href.startsWith('mailto')) {
      e.preventDefault()
      onNavigate?.(href)
    }
  }

  return (
    <footer
      className="bg-[var(--page-surface)] border-t border-[var(--page-border)] text-[var(--page-text-muted)] transition-colors duration-300"
      aria-label="Site footer"
    >
      <div className="max-w-[980px] mx-auto px-5 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-apple-tagline text-[var(--page-text)] mb-3">aura</p>
            <p className="text-apple-caption text-[var(--page-text-subtle)] leading-relaxed max-w-[180px]">
              Open-source AI wearable. Capture your world. Build yours for ~$60.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <p className="text-apple-fine text-[var(--page-text-muted)] uppercase tracking-widest mb-3">{col}</p>
              <ul className="list-none space-y-0.5">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-apple-dense-link text-[var(--page-text-muted)] hover:text-[var(--page-text)] transition-colors duration-150 block leading-[2.2] hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hairline divider */}
        <div className="border-t border-[var(--page-border)]" />

        {/* Bottom meta row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
          <p className="text-apple-caption text-[var(--page-text-subtle)]">
            Copyright &copy; 2026 Aura Project. Open-source hardware under CERN-OHL-P.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-apple-caption text-[var(--page-text-subtle)] hover:text-[var(--page-text)] transition-colors">Privacy Policy</a>
            <a href="/docs" onClick={(e) => handleNav(e, '/docs')} className="text-apple-caption text-[var(--page-text-subtle)] hover:text-[var(--page-text)] transition-colors">Docs</a>
            <a
              href="https://github.com/thesohamdatta/Aura-Wearable-AI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Aura on GitHub"
              className="text-[var(--page-text-subtle)] hover:text-[var(--page-text)] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.73-1.32-1.73-1.08-.74.08-.72.08-.72 1.19.08 1.82 1.22 1.82 1.22 1.06 1.82 2.78 1.3 3.46.99.1-.77.41-1.3.75-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.3c0 .31.21.68.82.56C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
