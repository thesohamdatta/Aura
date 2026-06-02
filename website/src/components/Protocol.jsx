import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const protocol = [
  {
    num: '01',
    title: 'Wear It',
    desc: 'Clip Aura to your collar or lanyard. Magnetic clasp locks in seconds. No setup, no pairing ritual.',
    tag: 'Physical Layer',
    visual: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-ghost transition-transform duration-500 group-hover:scale-110">
        <circle cx="50" cy="50" r="30" fill="none" stroke="var(--ghost)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="var(--aura)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="6" fill="var(--ghost)" />
        <path d="M50,10 L50,20 M44,12 L56,12" stroke="var(--ghost)" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'It Listens & Sees',
    desc: 'Microphone captures audio continuously. Camera shoots at set intervals. All processed on-device first.',
    tag: 'Capture Layer',
    visual: (
      <svg viewBox="0 0 100 100" className="w-24 h-16 text-ghost transition-transform duration-500 group-hover:scale-110">
        <path d="M10,50 Q25,20 40,80 T70,20 T90,50" fill="none" stroke="var(--ghost)" strokeWidth="1" strokeOpacity="0.25" />
        <path d="M10,50 Q25,35 40,65 T70,35 T90,50" fill="none" stroke="var(--aura)" strokeWidth="1.8" />
        <rect x="5" y="10" width="90" height="80" rx="4" fill="none" stroke="var(--ghost)" strokeWidth="1.5" strokeOpacity="0.1" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="var(--aura)" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'AI Understands',
    desc: 'Deepgram transcribes. GPT-4o or Groq analyzes. Summaries, tasks, and memories surface in your app.',
    tag: 'Intelligence Layer',
    visual: (
      <svg viewBox="0 0 100 100" className="w-24 h-16 text-ghost transition-transform duration-500 group-hover:scale-110">
        <path d="M20,50 L50,25 L80,50 M50,25 L50,75" fill="none" stroke="var(--ghost)" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="20" cy="50" r="8" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1.5" />
        <circle cx="50" cy="25" r="8" fill="var(--void)" stroke="var(--aura)" strokeWidth="2" />
        <circle cx="80" cy="50" r="8" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1.5" />
        <circle cx="50" cy="75" r="8" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1.5" />
        <circle cx="20" cy="50" r="3" fill="var(--ghost)" />
        <circle cx="50" cy="25" r="3" fill="var(--aura)" />
        <circle cx="80" cy="50" r="3" fill="var(--ghost)" />
        <circle cx="50" cy="75" r="3" fill="var(--ghost)" />
        <text x="50" y="14" textAnchor="middle" className="text-[5px] font-mono fill-aura font-medium uppercase">AI CLOUD</text>
        <text x="20" y="64" textAnchor="middle" className="text-[5px] font-mono fill-mist uppercase">MIC</text>
        <text x="80" y="64" textAnchor="middle" className="text-[5px] font-mono fill-mist uppercase">CAM</text>
        <text x="50" y="89" textAnchor="middle" className="text-[5px] font-mono fill-mist uppercase">DB</text>
      </svg>
    )
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.protocol-heading',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )

      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.9,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="protocol"
      ref={sectionRef}
      className="relative py-36 px-4 bg-void border-t border-white/5"
    >
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(148,226,213,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="protocol-heading text-center mb-24">
          <div className="inline-flex items-center gap-2 glass radius-pill px-4 py-1.5 mb-5">
            <span className="text-xs font-mono text-aura tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-bold tracking-tight text-ghost mb-4 text-wrap-balance leading-tight">
            Three layers.{' '}
            <span className="font-serif italic text-aura">One seamless experience.</span>
          </h2>
          <p className="text-mist text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Aura's architecture is designed to stay invisible — capturing and processing
            everything while demanding nothing from you.
          </p>
        </div>

        {/* Protocol cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {protocol.map((step, i) => (
            <div
              key={step.num}
              ref={el => cardsRef.current[i] = el}
              className="glass-strong radius-card p-7 flex flex-col gap-6
                hover:border-aura/25 transition-all duration-500 group relative overflow-hidden border border-white/5"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(171,237,225,0.06) 0%, transparent 70%)'
                }}
              />

              {/* Step number */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-mist tracking-widest uppercase">{step.tag}</span>
                <span
                  className="text-3xl font-semibold font-mono"
                  style={{ color: 'var(--mist)', opacity: 0.15 }}
                >
                  {step.num}
                </span>
              </div>

              {/* Visual Asset Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-void/50 aspect-video flex items-center justify-center p-4">
                {step.visual}
              </div>

              {/* Copy */}
              <div className="mt-auto">
                <h3 className="text-xl font-semibold text-ghost mb-2 transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-mist font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
