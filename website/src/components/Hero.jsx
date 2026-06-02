import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * HERO SECTION — "The Opening Shot"
 * Cinematic full-bleed with real device render, orbital visualization,
 * GSAP staggered entrance, and generous Apple-style whitespace.
 */
export default function Hero() {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const deviceRef = useRef(null)
  const orbitRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Device drops in first
      tl.fromTo(deviceRef.current,
        { y: -60, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2 }
      )
      // Orbits expand
      .fromTo(orbitRef.current,
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.9 },
        '-=0.6'
      )
      // Headline
      .fromTo(headlineRef.current?.querySelectorAll('.word'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.9 },
        '-=0.4'
      )
      // Sub
      .fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.4'
      )
      // CTA
      .fromTo(ctaRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const headline1 = "Beyond"
  const headline2 = "the Screen."

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[120dvh] flex flex-col items-center justify-center
        overflow-hidden noise-overlay px-4 pt-44 pb-36"
      aria-label="Hero"
    >
      {/* ── Depth 0: Grayscale atmospheric background gradient ── */}
      <div
        className="absolute inset-0 -z-30"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(148,226,213,0.06) 0%, transparent 75%), radial-gradient(ellipse 60% 40% at 85% 85%, rgba(134,134,139,0.04) 0%, transparent 60%), var(--void)'
        }}
      />

      {/* ── Depth 1: Soft monochromatic glow blobs ── */}
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(148,226,213,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute top-2/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(134,134,139,0.03) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
      </div>

      {/* ── Depth 2: Apple Grid overlay ── */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.018] dark:opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(rgba(148,226,213,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,226,213,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* ── Depth 3: Real Device visualization ── */}
      <div
        ref={deviceRef}
        className="relative mb-16 mt-8 animate-float"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        {/* Orbit rings */}
        <div ref={orbitRef} className="absolute inset-0 flex items-center justify-center">
          {/* Ring 1 */}
          <div
            className="absolute w-[280px] h-[280px] rounded-full"
            style={{ border: '1px solid var(--aura)', opacity: 0.15 }}
          />
          {/* Ring 2 */}
          <div
            className="absolute w-[380px] h-[380px] rounded-full"
            style={{ border: '1px solid var(--ghost)', opacity: 0.08 }}
          />
          {/* Ring 3 */}
          <div
            className="absolute w-[480px] h-[480px] rounded-full"
            style={{ border: '1px solid var(--ghost)', opacity: 0.04 }}
          />

          {/* Orbiting particles */}
          <div className="absolute w-[280px] h-[280px] rounded-full orbit-1">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-aura"
              style={{ boxShadow: '0 0 12px var(--aura)' }}
            />
          </div>
          <div className="absolute w-[380px] h-[380px] rounded-full orbit-2">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-mist"
              style={{ opacity: 0.5 }}
            />
          </div>
        </div>

        {/* Central device core with real asset */}
        <div className="relative flex items-center justify-center">
          {/* Pulse rings */}
          <div
            className="absolute w-36 h-36 rounded-full animate-pulse-ring"
            style={{ border: '1px solid var(--aura)', opacity: 0.3 }}
            aria-hidden="true"
          />
          <div
            className="absolute w-36 h-36 rounded-full animate-pulse-ring"
            style={{ border: '1px solid var(--aura)', opacity: 0.15, animationDelay: '0.8s' }}
            aria-hidden="true"
          />

          {/* Stylized SVG Representation of the Aura Pendant */}
          <svg
            className="relative z-10 w-44 h-44 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_12px_32px_rgba(171,237,225,0.2)]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer body frame */}
            <circle cx="50" cy="50" r="44" fill="var(--void)" stroke="var(--ghost)" strokeWidth="2.5" />
            {/* Inner aesthetic groove ring */}
            <circle cx="50" cy="50" r="36" stroke="var(--ghost)" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3" />
            {/* Center camera sensor frame */}
            <circle cx="50" cy="50" r="22" fill="var(--void)" stroke="var(--ghost)" strokeWidth="2" />
            {/* Lens outer glass bezel */}
            <circle cx="50" cy="50" r="14" fill="var(--ghost)" stroke="var(--aura)" strokeWidth="1.5" />
            {/* Lens aperture core */}
            <circle cx="50" cy="50" r="8" fill="#000000" />
            {/* Aperture highlight reflection */}
            <circle cx="47" cy="47" r="2" fill="#FFFFFF" fillOpacity="0.4" />
            {/* Status indicator LED */}
            <circle cx="50" cy="22" r="2" fill="var(--aura)" />
            {/* Mic sensor input hole */}
            <circle cx="50" cy="78" r="1.5" fill="var(--ghost)" fillOpacity="0.5" />
          </svg>
        </div>
      </div>

      {/* ── Depth 4: Text content ── */}
      <div className="relative z-10 text-center max-w-4xl mt-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 glass radius-pill px-4 py-2 mb-8">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="text-xs font-mono text-aura tracking-[0.18em] uppercase">
            AI Wearable · Open Source Hardware
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="text-[clamp(3.2rem,8.5vw,7rem)] font-bold leading-[1.05] tracking-tight mb-2 text-wrap-balance"
          aria-label={`Intelligence ${headline2}`}
        >
          <span className="block text-ghost font-extrabold">
            {headline1.split(' ').map((w, i) => (
              <span key={i} className="word inline-block mr-[0.2em] last:mr-0">{w}</span>
            ))}
          </span>
          <span
            className="block font-serif italic text-aura"
            style={{
              fontSize: 'clamp(3.6rem,9.5vw,8rem)'
            }}
          >
            {headline2.split(' ').map((w, i) => (
              <span key={i} className="word inline-block mr-[0.2em] last:mr-0">{w}</span>
            ))}
          </span>
        </h1>

        {/* Sub headline */}
        <p
          ref={subRef}
          className="mt-8 text-base md:text-lg text-mist font-light leading-relaxed max-w-2xl mx-auto tracking-wide"
        >
          Aura lives on your ear — listening, remembering, and thinking with you.
          An AI that knows your world, not just your prompts.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            id="hero-cta-primary"
            className="btn-magnetic radius-pill bg-aura text-void font-medium px-9 py-4 text-sm
              shadow-[0_4px_20px_rgba(148,226,213,0.15)] tracking-wide"
          >
            <span className="relative z-10">Join the Waitlist</span>
            <span className="btn-bg-slide bg-ghost rounded-full" aria-hidden="true" />
          </a>
          <a
            href="#device"
            id="hero-cta-secondary"
            className="btn-magnetic glass radius-pill text-ghost font-light px-9 py-4 text-sm
              hover:border-aura/30 tracking-wide transition-colors duration-300"
          >
            See the Device →
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40 animate-bounce" aria-hidden="true">
          <span className="text-xs font-mono text-mist tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-aura to-transparent" />
        </div>
      </div>

      {/* ── Depth 5: Foreground sparkles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px rounded-full bg-aura"
            style={{
              left: `${15 + (i * 12.3) % 70}%`,
              top: `${20 + (i * 17.7) % 60}%`,
              opacity: 0.2 + (i % 3) * 0.1,
              boxShadow: `0 0 ${4 + (i % 2) * 2}px var(--aura)`,
              animationDelay: `${i * 0.4}s`,
              animation: `float ${7 + (i % 3)}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
    </section>
  )
}
