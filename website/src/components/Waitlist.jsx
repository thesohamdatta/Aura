import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <section
      id="waitlist"
      className="relative py-36 px-4 bg-void border-t border-ghost/10 dark:border-white/5 overflow-hidden transition-all duration-500"
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(148,226,213,0.04) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 glass radius-pill px-4 py-1.5 mb-6">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="text-xs font-mono text-aura tracking-widest uppercase">Get Started</span>
        </div>

        <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-tight text-ghost mb-4 text-wrap-balance leading-tight">
          Join the waitlist for{' '}
          <span className="font-serif italic text-aura">Aura.</span>
        </h2>
        <p className="text-mist text-base md:text-lg font-light leading-relaxed max-w-md mx-auto mb-12">
          Be the first to know when the next hardware batch drops or when we launch new firmware modules.
        </p>

        {submitted ? (
          <div className="glass-strong radius-card p-8 border border-aura/25 bg-aura/5 max-w-md mx-auto">
            <span className="text-3xl mb-3 block">🎉</span>
            <h3 className="text-lg font-semibold text-ghost mb-1">You’re on the list!</h3>
            <p className="text-sm text-mist font-light">We’ve registered your email. Watch out for open-source batch updates soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-graphite border border-ghost/15 dark:border-white/5 radius-pill px-6 py-4 text-base text-ghost
                  placeholder-mist/60 focus:border-aura/50 focus:outline-none transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-magnetic radius-pill bg-aura text-void font-semibold py-4 text-sm
                shadow-[0_4px_20px_rgba(148,226,213,0.15)] tracking-wide flex items-center justify-center gap-2"
            >
              <span className="relative z-10">{loading ? 'Joining…' : 'Join Waitlist'}</span>
              <span className="btn-bg-slide bg-ghost rounded-full" aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
