import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const protocol = [
  {
    num: '01',
    title: 'Wear It',
    desc: 'Clip Aura to your collar or lanyard. Magnetic clasp locks in seconds. No setup, no pairing ritual.',
    img: '/assets/hero/aura 4.png',
    alt: 'Aura wearable hardware design render',
    tag: 'Physical Layer',
  },
  {
    num: '02',
    title: 'It Listens & Sees',
    desc: 'Microphone captures audio continuously. Camera shoots at set intervals. All processed on-device first.',
    img: '/assets/diagrams/flow.png',
    alt: 'Audio capture and image processing data flow diagram',
    tag: 'Capture Layer',
  },
  {
    num: '03',
    title: 'AI Understands',
    desc: 'Deepgram transcribes. GPT-4o or Groq analyzes. Summaries, tasks, and memories surface in your app.',
    img: '/assets/diagrams/how_chat_tools_work.png',
    alt: 'AI tool calls and chat context generation diagram',
    tag: 'Intelligence Layer',
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
                  background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(148,226,213,0.06) 0%, transparent 70%)'
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
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-void/50 aspect-video flex items-center justify-center p-2">
                <img
                  src={step.img}
                  alt={step.alt}
                  className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
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
