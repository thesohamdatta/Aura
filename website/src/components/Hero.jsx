import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef     = useRef(null)
  const eyebrowRef  = useRef(null)
  const headlineRef = useRef(null)
  const subRef      = useRef(null)
  const ctaRef      = useRef(null)
  const deviceRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(deviceRef.current,
        { y: -40, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1 }
      )
      .fromTo(eyebrowRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(headlineRef.current,
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        '-=0.3'
      )
      .fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(ctaRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.35'
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="tile-light min-h-[100dvh] flex flex-col items-center justify-center px-5 pt-[96px] pb-24 text-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Device render — float wrapper is separate from shadow to avoid repaint on every frame */}
      <div
        ref={deviceRef}
        className="mb-14 animate-float"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div className="shadow-apple-product">
          {/* Aura pendant vector — on white background */}
          <svg
            width="170"
            height="170"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="metal-casing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#e2e2e7" />
                <stop offset="50%" stopColor="#8e8e93" />
                <stop offset="70%" stopColor="#d1d1d6" />
                <stop offset="100%" stopColor="#48484a" />
              </linearGradient>
              <linearGradient id="metal-bevel" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#d1d1d6" />
                <stop offset="100%" stopColor="#8e8e93" />
              </linearGradient>
              <radialGradient id="glass-lens" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#1c1c1e" />
                <stop offset="70%" stopColor="#0a0a0c" />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>
              <linearGradient id="lens-reflection" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="blue-flare" cx="50%" cy="50%" r="50%">
                <stop offset="80%" stopColor="#0066cc" stopOpacity="1" />
                <stop offset="100%" stopColor="#2997ff" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="51.5" r="44" fill="#000000" fillOpacity="0.08" />
            <circle cx="50" cy="50" r="44" fill="url(#metal-casing)" stroke="#1d1d1f" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="41.5" fill="#ffffff" />
            <circle cx="50" cy="50" r="41.5" fill="url(#metal-bevel)" fillOpacity="0.06" />
            <circle cx="50" cy="50" r="36" stroke="#1d1d1f" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="23" fill="url(#metal-bevel)" stroke="#1d1d1f" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="21.5" fill="#ffffff" />
            <circle cx="50" cy="50" r="15" fill="url(#metal-casing)" stroke="#1d1d1f" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="13.5" fill="url(#glass-lens)" />
            <circle cx="50" cy="50" r="10" stroke="url(#blue-flare)" strokeWidth="0.75" strokeOpacity="0.8" />
            <circle cx="50" cy="50" r="6" fill="#050508" />
            <path d="M 42,42 A 11 11 0 0 1 58,42 L 50,50 Z" fill="url(#lens-reflection)" fillOpacity="0.35" />
            <circle cx="47" cy="47" r="1" fill="#ffffff" fillOpacity="0.65" />
            <circle cx="50" cy="20" r="2" fill="#1d1d1f" fillOpacity="0.08" />
            <circle cx="50" cy="20" r="1.25" fill="#0066cc" />
            <circle cx="50" cy="20" r="3" fill="#2997ff" fillOpacity="0.25" />
            <circle cx="50" cy="80" r="1.25" fill="#1d1d1f" fillOpacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Eyebrow */}
      <p ref={eyebrowRef} className="text-apple-caption-strong text-apple-blue uppercase tracking-widest mb-5">
        AI Wearable · Open Source Hardware
      </p>

      {/* Headline */}
      <h1
        ref={headlineRef}
        className="text-apple-hero text-apple-ink max-w-3xl text-balance mb-5"
      >
        Beyond the Screen.
      </h1>

      {/* Sub-copy */}
      <p
        ref={subRef}
        className="text-apple-lead text-apple-muted-80 max-w-xl mx-auto text-balance"
      >
        Aura lives around your neck — listening, remembering, and thinking with you.<br className="hidden sm:block" />
        An AI that knows your world, not just your prompts.
      </p>

      {/* CTAs */}
      <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#waitlist"
          id="hero-cta-join"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="btn-apple-primary"
        >
          Join the Waitlist
        </a>
        <a
          href="#device"
          id="hero-cta-device"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('device')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="btn-apple-secondary"
        >
          See the Device
        </a>
      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-apple-fine text-apple-ink/30 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-apple-ink/20" />
      </div>
    </section>
  )
}
