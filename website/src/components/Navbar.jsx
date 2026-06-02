import { useEffect, useState } from 'react'

/**
 * Apple-style two-tier navigation:
 *   1. global-nav  — 44px solid black bar, always visible
 *   2. sub-nav-frosted — 52px frosted-glass bar, product links + primary CTA
 */
export default function Navbar({ currentRoute, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const toggleTheme = () => setTheme(p => p === 'dark' ? 'light' : 'dark')

  const navItems = [
    { label: 'Home',     path: '/' },
    { label: 'Dilemma', path: '/dilemma' },
    { label: 'About',   path: '/about-us' },
    { label: 'Docs',    path: '/docs' },
  ]

  const handleLink = (e, path) => {
    e.preventDefault()
    setMenuOpen(false)
    onNavigate(path)
  }

  const handleWaitlist = (e) => {
    if (currentRoute !== '/') {
      handleLink(e, '/')
      setTimeout(() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }), 120)
    } else {
      e.preventDefault()
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Tier 1: Global Nav — solid black 44px bar ── */}
      <nav
        className="tile-black flex items-center justify-between px-5"
        style={{ height: 44, minHeight: 44 }}
        aria-label="Global navigation"
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleLink(e, '/')}
          className="text-apple-nav text-white flex items-center gap-1.5 hover:opacity-75 transition-opacity"
          aria-label="Aura home"
        >
          <span className="font-semibold tracking-tight text-sm">aura</span>
          <span className="w-1 h-1 rounded-full bg-apple-blue" aria-hidden="true" />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleLink(e, item.path)}
                className={`text-apple-nav transition-opacity ${
                  (currentRoute === item.path || (currentRoute.startsWith(item.path + '/') && item.path !== '/'))
                    ? 'text-white opacity-100'
                    : 'text-white/70 hover:text-white/100'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster: theme toggle + search icon placeholder */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-white/70 hover:text-white transition-opacity p-1"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 p-1 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </nav>

      {/* ── Tier 2: Sub-nav frosted glass — 52px ── */}
      <div
        className={`nav-frosted border-b border-apple-hairline/60 transition-all duration-300 ${
          scrolled ? 'shadow-apple-hairline' : ''
        }`}
        style={{ height: 52, minHeight: 52 }}
      >
        <div className="flex items-center justify-between h-full px-5 max-w-[1440px] mx-auto">
          {/* Product category name */}
          <span className="text-apple-tagline text-apple-ink dark:text-white hidden sm:block">
            aura
          </span>

          {/* Inline utility links (desktop) */}
          <div className="hidden md:flex items-center gap-6">
                      {navItems.slice(1).map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLink(e, item.path)}
                className={`text-apple-caption transition-opacity ${
                  currentRoute === item.path
                    ? 'text-apple-ink dark:text-white'
                    : 'text-apple-muted-80 dark:text-apple-muted-body hover:text-apple-ink dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Primary CTA — always visible */}
          <a
            href="#waitlist"
            id="nav-cta-waitlist"
            onClick={handleWaitlist}
            className="btn-apple-primary"
            style={{ fontSize: 14, padding: '8px 18px' }}
          >
            Join Waitlist
          </a>
        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-[44px] left-0 right-0 bottom-0 tile-black border-t border-white/10 z-40 flex flex-col justify-between"
          role="dialog"
          aria-label="Mobile navigation"
          style={{ height: 'calc(100dvh - 44px)' }}
        >
          <ul className="list-none px-6 py-8 space-y-2">
            {navItems.map((item, i) => (
              <li key={item.path} style={{ animationDelay: `${i * 0.05}s` }}>
                <a
                  href={item.path}
                  onClick={(e) => handleLink(e, item.path)}
                  className={`block py-3 text-xl font-medium tracking-tight border-b border-white/5 transition-opacity ${
                    currentRoute === item.path ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-6 pb-12">
            <a
              href="#waitlist"
              onClick={handleWaitlist}
              className="btn-apple-primary w-full text-center py-4 justify-center"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
