import { useEffect, useState } from 'react'

export default function Navbar({ currentRoute, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark'
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Dilemma', path: '/dilemma' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Docs', path: '/docs' }
  ]

  const handleLinkClick = (e, path) => {
    e.preventDefault()
    setMenuOpen(false)
    onNavigate(path)
  }

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(880px,94vw)]
        radius-pill px-6 py-3 flex items-center justify-between gap-4
        transition-all duration-500 ${
          scrolled || menuOpen
            ? 'glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/10'
            : 'bg-transparent border border-transparent'
        }`}
    >
      {/* Logo */}
      <a
        href="/"
        onClick={(e) => handleLinkClick(e, '/')}
        className="flex items-center gap-2 group transition-transform duration-300 hover:-translate-y-0.5"
      >
        <span className="text-lg font-semibold tracking-tight text-ghost hover:text-aura transition-all duration-300">
          aura
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-aura animate-pulse" aria-hidden="true" />
      </a>

      {/* Navigation links */}
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`text-sm font-light tracking-wide transition-all duration-300 hover:-translate-y-px inline-block ${
                  currentRoute === item.path
                    ? 'text-aura font-medium'
                    : 'text-mist hover:text-ghost'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Vertical divider */}
        <span className="hidden md:inline-block w-px h-4 bg-mist/20" />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-full border border-mist/20 hover:border-ghost/40 transition-colors focus:outline-none"
          aria-label="Toggle light or dark theme"
        >
          {theme === 'dark' ? (
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>

        {/* CTA */}
        <a
          href="#waitlist"
          onClick={(e) => {
            if (currentRoute !== '/') {
              handleLinkClick(e, '/')
              setTimeout(() => {
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
              }, 100)
            } else {
              e.preventDefault()
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="hidden md:flex btn-magnetic items-center gap-2 radius-pill
            bg-ghost text-void text-xs font-semibold px-4 py-2 hover:bg-mist/20 hover:text-ghost transition-colors duration-300"
        >
          <span className="relative z-10">Contribute to open source</span>
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 group"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`block w-5 h-px bg-ghost transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-px bg-ghost transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-ghost transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass-strong radius-card p-6 flex flex-col gap-4 border border-white/10">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleLinkClick(e, item.path)}
              className={`text-base font-light tracking-wide transition-colors ${
                currentRoute === item.path ? 'text-aura font-medium' : 'text-ghost hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={(e) => {
              setMenuOpen(false)
              if (currentRoute !== '/') {
                handleLinkClick(e, '/')
                setTimeout(() => {
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              } else {
                e.preventDefault()
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="mt-2 text-center btn-magnetic radius-pill bg-ghost text-void text-sm font-medium py-3"
          >
            Contribute to open source
          </a>
        </div>
      )}
    </nav>
  )
}
