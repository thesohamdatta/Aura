import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Card 1: Diagnostic Shuffler ── */
function DiagnosticShuffler() {
  const items = [
    { label: 'Meeting Recap', meta: '14 action items captured', icon: '🎙' },
    { label: 'Context Switch', meta: 'Remembered previous context', icon: '🔄' },
    { label: 'Voice Note', meta: 'Transcribed & summarized', icon: '📝' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const id = setInterval(() => {
      setStack(prev => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => (
        <div
          key={item.label}
          className="absolute left-0 right-0 glass-strong radius-card px-5 py-4 flex items-center gap-3"
          style={{
            top: `${i * 10}px`,
            zIndex: stack.length - i,
            opacity: 1 - i * 0.22,
            transform: `scale(${1 - i * 0.04})`,
            transition: 'all 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)',
            background: i === 0
              ? 'rgba(148,226,213,0.12)'
              : 'rgba(255,255,255,0.03)',
            borderColor: i === 0
              ? 'var(--aura)'
              : 'rgba(255,255,255,0.06)',
          }}
        >
          <span className="text-2xl">{item.icon}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-ghost truncate">{item.label}</p>
            <p className="text-xs text-mist truncate mt-0.5">{item.meta}</p>
          </div>
          {i === 0 && (
            <span className="text-xs font-mono text-aura bg-aura/10 dark:bg-aura/20 px-2 py-0.5 rounded-full shrink-0">
              Live
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

/* ── Card 2: Telemetry Typewriter ── */
function TelemetryTypewriter() {
  const lines = [
    '> Transcribing audio...',
    '> Meeting: "Next sprint starts Monday"',
    '> Task captured: Review PR #42',
    '> Summary generated in 0.8s',
    '> Memory indexed ✓',
  ]
  const [displayed, setDisplayed] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = lines[lineIdx]
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 38)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        const next = (lineIdx + 1) % lines.length
        setLineIdx(next)
        setCharIdx(0)
        setDisplayed(prev => (prev + '\n' + current).split('\n').slice(-5).join('\n'))
      }, 900)
      return () => clearTimeout(t)
    }
  }, [charIdx, lineIdx])

  const fullDisplay = displayed
    ? displayed + '\n' + lines[lineIdx].slice(0, charIdx)
    : lines[lineIdx].slice(0, charIdx)

  return (
    <div className="relative h-44 w-full glass-strong radius-card p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="pulse-dot" aria-hidden="true" />
        <span className="text-xs font-mono text-aura tracking-wider uppercase">Live Feed</span>
      </div>
      <pre className="font-mono text-xs text-mist leading-relaxed whitespace-pre-wrap break-all">
        {fullDisplay}
        <span className="text-aura animate-pulse">▋</span>
      </pre>
    </div>
  )
}

/* ── Card 3: Cursor Protocol Scheduler ── */
function CursorScheduler() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const [activeDay, setActiveDay] = useState(null)
  const [phase, setPhase] = useState('idle') // idle | moving | clicking | saving

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 600))
      setPhase('moving')
      const day = Math.floor(Math.random() * 7)
      await new Promise(r => setTimeout(r, 800))
      setPhase('clicking')
      setActiveDay(day)
      await new Promise(r => setTimeout(r, 400))
      setPhase('saving')
      await new Promise(r => setTimeout(r, 1200))
      setPhase('idle')
    }
    const id = setInterval(sequence, 4000)
    sequence()
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-44 w-full glass-strong radius-card p-4 overflow-hidden">
      <p className="text-xs font-mono text-mist mb-3 uppercase tracking-wider">Weekly Sync Schedule</p>
      <div className="grid grid-cols-7 gap-1.5 mb-4">
        {days.map((d, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-xs text-mist font-mono">{d}</span>
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: activeDay === i
                  ? 'rgba(148,226,213,0.2)'
                  : 'rgba(255,255,255,0.04)',
                border: activeDay === i
                  ? '1px solid var(--aura)'
                  : '1px solid rgba(255,255,255,0.06)',
                transform: phase === 'clicking' && activeDay === i ? 'scale(0.92)' : 'scale(1)',
              }}
            >
              {activeDay === i && (
                <div className="w-1.5 h-1.5 rounded-full bg-aura" />
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className="glass radius-pill px-3 py-1.5 inline-flex items-center gap-2 transition-all duration-300"
        style={{
          opacity: phase === 'saving' ? 1 : 0.3,
          transform: phase === 'saving' ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        <span className="text-xs font-mono text-ghost">Saved to Aura memory</span>
      </div>
    </div>
  )
}

/* ── Main Features Section ── */
export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 48, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      )
      gsap.fromTo('.features-heading',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
      gsap.fromTo('.software-showcase',
        { y: 48, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.software-showcase',
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      id: 'capture',
      eyebrow: '01 — Capture',
      title: 'Never Miss A Thing.',
      desc: 'AI captures every conversation, insight and idea automatically. No tapping, no prompting.',
      component: <DiagnosticShuffler />,
    },
    {
      id: 'recall',
      eyebrow: '02 — Recall',
      title: 'Recalls Instantly',
      desc: 'Ask anything from your day. Aura already knows the answer — with full context and timeline.',
      component: <TelemetryTypewriter />,
    },
    {
      id: 'schedule',
      eyebrow: '03 — Organize',
      title: 'Your Second Brain.',
      desc: 'Auto summaries, tasks, and memories. Synced, searchable, and always ready.',
      component: <CursorScheduler />,
    },
  ]

  return (
    <section
      id="intelligence"
      ref={sectionRef}
      className="relative py-36 px-4 noise-overlay"
    >
      {/* Background accent */}
      <div className="absolute inset-0 -z-10" aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(148,226,213,0.04) 0%, transparent 75%)'
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="features-heading text-center mb-24">
          <div className="inline-flex items-center gap-2 glass radius-pill px-4 py-1.5 mb-5">
            <span className="text-xs font-mono text-aura tracking-widest uppercase">Your Partner In Everything</span>
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-tight text-ghost mb-4 text-wrap-balance leading-tight">
            Intelligence that works<br />
            <span className="font-serif italic text-aura">while you do.</span>
          </h2>
          <p className="text-mist text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            No screens. No notifications. No interruptions. Aura captures your world
            and surfaces what matters — only when you need it.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {cards.map((card) => (
            <div
              key={card.id}
              className="feature-card glass-strong radius-card p-6 flex flex-col gap-6
                hover:border-aura/20 transition-all duration-500 group border border-white/5"
            >
              {/* Card interactive component */}
              <div className="relative z-10">
                {card.component}
              </div>

              {/* Card copy */}
              <div className="mt-auto">
                <span className="text-xs font-mono text-aura tracking-widest uppercase">{card.eyebrow}</span>
                <h3 className="text-xl font-semibold text-ghost mt-1.5 mb-2 transition-all duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-mist font-light leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Real Asset Software Showcase (Double Whitespace) ── */}
        <div className="software-showcase mt-32 border border-white/5 glass-strong radius-card p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-aura tracking-widest uppercase block">Mobile Companion App</span>
              <h3 className="text-3xl font-bold tracking-tight text-ghost leading-tight">
                Your entire history,<br />
                <span className="font-serif italic text-aura">neatly indexed.</span>
              </h3>
              <p className="text-sm text-mist leading-relaxed font-light">
                Aura streams transcription packets and audio frames securely to your phone. 
                The companion Flutter app lets you search your conversations, review automated tasks, 
                and ask questions to your local-first memory pipeline.
              </p>
              <ul className="space-y-3 font-mono text-xs text-mist list-none pl-0">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-aura shrink-0" />
                  Real-time speech transcription matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-aura shrink-0" />
                  Semantic retrieval of past conversations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-aura shrink-0" />
                  Secure local-first vector DB storage
                </li>
              </ul>
            </div>

            {/* Right side high-res app screens mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-void/50 p-2 max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(148,226,213,0.05)]">
                <img
                  src="/assets/hero/software_mockups.jpg"
                  alt="Aura Mobile Flutter App Interface and mockups"
                  className="rounded-xl w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
