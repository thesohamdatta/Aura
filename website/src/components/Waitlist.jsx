import { useState } from 'react'

const stats = [
  { value: '400+', label: 'Early builders' },
  { value: '~$60', label: 'Build cost' },
  { value: '< 4h', label: 'Setup time' },
]

export default function Waitlist() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <section
      id="waitlist"
      className="tile-light section-apple border-t border-apple-hairline"
      aria-label="Join Waitlist"
    >
      <div className="max-w-[640px] mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-apple-caption-strong text-apple-blue uppercase tracking-widest mb-6">
          Early Access
        </p>

        {!submitted ? (
          <>
            <h2 className="text-apple-display text-apple-ink text-balance mb-5">
              Build yours.<br />Shape what&apos;s next.
            </h2>
            <p className="text-apple-body text-apple-muted-80 text-balance mb-10">
              Get early access to hardware files, firmware, and the companion app.
              Join 400+ builders already on the list.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
              aria-label="Waitlist signup form"
            >
              <div className="relative flex-1">
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                  placeholder="you@example.com"
                  required
                  disabled={loading}
                  className="w-full h-12 rounded-apple-pill px-5 text-apple-body text-apple-ink bg-apple-parchment border border-apple-hairline placeholder:text-apple-muted-48 focus:outline-none focus:border-apple-blue transition-colors"
                  aria-describedby={error ? 'waitlist-error' : undefined}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !email}
                id="waitlist-submit"
                className="btn-apple-primary h-12 px-7 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Joining…
                  </span>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>

            {error && (
              <p id="waitlist-error" className="mt-3 text-apple-caption text-red-500" role="alert">
                {error}
              </p>
            )}

            <p className="mt-4 text-apple-fine text-apple-muted-48">
              No spam. One email when we ship.
            </p>
          </>
        ) : (
          /* Success state */
          <div className="py-8">
            <div
              className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0,102,204,0.08)' }}
            >
              <svg className="w-7 h-7 text-apple-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-apple-display text-apple-ink mb-3">You&apos;re on the list.</h2>
            <p className="text-apple-body text-apple-muted-80">
              We&apos;ll send you one email when it&apos;s time to build.
              Check your inbox for a confirmation.
            </p>
          </div>
        )}

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 divide-x divide-apple-hairline border-t border-apple-hairline pt-8">
          {stats.map((s) => (
            <div key={s.label} className="px-4 first:pl-0 last:pr-0 text-center">
              <p className="text-apple-display-md text-apple-ink tabular-nums">{s.value}</p>
              <p className="text-apple-caption text-apple-muted-48 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
