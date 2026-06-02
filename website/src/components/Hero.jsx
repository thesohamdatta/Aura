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
            width="160"
            height="160"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer shell */}
            <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#1d1d1f" strokeWidth="2" />
            {/* Inner groove */}
            <circle cx="50" cy="50" r="36" stroke="#1d1d1f" strokeWidth="0.75" strokeOpacity="0.12" strokeDasharray="3 3" />
            {/* Sensor frame */}
            <circle cx="50" cy="50" r="22" fill="#ffffff" stroke="#1d1d1f" strokeWidth="1.5" />
            {/* Lens bezel */}
            <circle cx="50" cy="50" r="14" fill="#1d1d1f" stroke="#0066cc" strokeWidth="1.5" />
            {/* Aperture */}
            <circle cx="50" cy="50" r="8" fill="#000000" />
            {/* Highlight */}
            <circle cx="47" cy="47" r="2" fill="#ffffff" fillOpacity="0.4" />
            {/* Status LED */}
            <circle cx="50" cy="22" r="2.5" fill="#0066cc" />
            {/* Mic hole */}
            <circle cx="50" cy="78" r="1.5" fill="#1d1d1f" fillOpacity="0.4" />
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
      <div className="mt-16 flex flex-col items-center gap-2 opacity-30" aria-hidden="true">
        <span className="text-apple-fine text-apple-ink uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-apple-ink to-transparent" />
      </div>
    </section>
  )
}
