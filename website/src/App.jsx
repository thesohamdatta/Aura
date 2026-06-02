import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Device from './components/Device'
import Protocol from './components/Protocol'
import Dilemma from './components/Dilemma'
import About from './components/About'
import Docs from './components/Docs'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash.slice(1)
    if (hash && hash.startsWith('/')) {
      return hash
    }
    const path = window.location.pathname
    if (path === '/dilemma') return '/dilemma'
    if (path === '/about-us') return '/about-us'
    if (path.startsWith('/docs')) return '/docs'
    return '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1)
      if (hash && hash.startsWith('/')) {
        setCurrentRoute(hash)
        return
      }
      const path = window.location.pathname
      if (path === '/dilemma') {
        setCurrentRoute('/dilemma')
      } else if (path === '/about-us') {
        setCurrentRoute('/about-us')
      } else if (path.startsWith('/docs')) {
        setCurrentRoute('/docs')
      } else {
        setCurrentRoute('/')
      }
    }
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
    }
  }, [])

  useEffect(() => {
    let title = 'Aura — AI Wearable. Always With You.'
    if (currentRoute === '/dilemma') {
      title = 'The Dilemma — Aura'
    } else if (currentRoute === '/about-us') {
      title = 'About Us — Aura'
    } else if (currentRoute.startsWith('/docs')) {
      title = 'Documentation — Aura'
    }
    document.title = title
  }, [currentRoute])

  const navigate = (path) => {
    const isSubdir = window.location.pathname !== '/' && window.location.pathname !== '/index.html'
    if (isSubdir) {
      window.location.hash = '#' + path
    } else {
      window.history.pushState(null, '', path)
      setCurrentRoute(path)
    }
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Navbar currentRoute={currentRoute} onNavigate={navigate} />

      <main id="main-content">
        {currentRoute === '/' && (
          <>
            <Hero />
            <Features />
            <Device />
            <Protocol />
            <Waitlist />
          </>
        )}
        {currentRoute === '/dilemma' && <Dilemma onNavigate={navigate} />}
        {currentRoute === '/about-us' && <About onNavigate={navigate} />}
        {currentRoute.startsWith('/docs') && <Docs />}
      </main>

      <Footer currentRoute={currentRoute} onNavigate={navigate} />
    </>
  )
}

export default App
