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
    // Read route from path or fallback to hash if available
    const path = window.location.pathname
    if (path && path !== '/') {
      return path
    }
    const hash = window.location.hash.slice(1)
    if (hash && hash.startsWith('/')) {
      return hash
    }
    return '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path && path !== '/') {
        setCurrentRoute(path)
        return
      }
      const hash = window.location.hash.slice(1)
      if (hash && hash.startsWith('/')) {
        setCurrentRoute(hash)
        return
      }
      setCurrentRoute('/')
    }
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
    }
  }, [])

  const navigate = (path) => {
    // Push path and hash to support both standard routing and hash fallback
    window.history.pushState(null, '', path)
    window.location.hash = '#' + path
    setCurrentRoute(path)
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
        {currentRoute === '/dilemma' && <Dilemma />}
        {currentRoute === '/about-us' && <About />}
        {currentRoute.startsWith('/docs') && <Docs />}
      </main>

      <Footer />
    </>
  )
}

export default App
