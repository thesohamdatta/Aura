import { useEffect, useRef, useState } from 'react'

/* ── Diagnostic Shuffler ── */
function DiagnosticShuffler() {
  const items = [
    { label: 'Meeting Recap',   meta: '14 action items captured' },
    { label: 'Context Switch',  meta: 'Remembered previous context' },
    { label: 'Voice Note',      meta: 'Transcribed & summarized' },
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
    <div className="relative h-36 w-full" aria-hidden="true">
      {stack.map((item, i) => (
        <div
          key={item.label}
          className="absolute left-0 right-0 rounded-apple-lg px-4 py-3 flex items-center gap-3"
          style={{
            top: `${i * 10}px`,
            zIndex: stack.length - i,
            opacity: 1 - i * 0.25,
            transform: `scale(${1 - i * 0.035})`,
            transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)',
            backgroundColor: i === 0 ? 'rgba(41,151,255,0.12)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${i === 0 ? '#2997ff' : 'rgba(255,255,255,0.08)'}`,
          }}
        >
          <div className="flex-1 min-w-0">
            <p className="text-apple-caption-strong text-white truncate">{item.label}</p>
            <p className="text-apple-caption text-apple-muted-body truncate mt-0.5">{item.meta}</p>
          </div>
          {i === 0 && (
            <span className="text-apple-fine text-apple-blue-dark bg-apple-blue-dark/10 px-2 py-0.5 rounded-apple-pill shrink-0">
              Live
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

/* ── Telemetry Typewriter ── */
const TYPEWRITER_LINES = [
  '> Transcribing audio...',
  '> Meeting: "Next sprint starts Monday"',
  '> Task captured: Review PR #42',
  '> Summary generated in 0.8s',
  '> Memory indexed ✓',
]

function TelemetryTypewriter() {
  const [displayed, setDisplayed] = useState('')
  const [lineIdx, setLineIdx]     = useState(0)
  const [charIdx, setCharIdx]     = useState(0)

  useEffect(() => {
    const current = TYPEWRITER_LINES[lineIdx]
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 38)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        const next = (lineIdx + 1) % TYPEWRITER_LINES.length
        setLineIdx(next)
        setCharIdx(0)
        setDisplayed(prev => (prev + '\n' + current).split('\n').slice(-5).join('\n'))
      }, 900)
      return () => clearTimeout(t)
    }
  }, [charIdx, lineIdx])

  const fullDisplay = displayed
    ? displayed + '\n' + TYPEWRITER_LINES[lineIdx].slice(0, charIdx)
    : TYPEWRITER_LINES[lineIdx].slice(0, charIdx)

  return (
    <div
      className="relative h-36 w-full rounded-apple-lg p-4 overflow-hidden"
      style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="pulse-dot" style={{ background: '#2997ff' }} />
        <span className="text-apple-fine text-apple-blue-dark tracking-wider uppercase">Live Feed</span>
      </div>
      <pre className="font-mono text-xs text-apple-muted-body leading-relaxed whitespace-pre-wrap break-all">
        {fullDisplay}
        <span className="text-apple-blue-dark animate-blink">▋</span>
      </pre>
    </div>
  )
}

/* ── Main Features Section ── */
export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      id: 'capture',
      num: '01',
      title: 'Never Miss A Thing.',
      desc: 'AI captures every conversation, insight, and idea automatically. No tapping, no prompting.',
      component: <DiagnosticShuffler />,
    },
    {
      id: 'recall',
      num: '02',
      title: 'Recalls Instantly.',
      desc: 'Ask anything from your day. Aura already knows the answer — with full context and timeline.',
      component: <TelemetryTypewriter />,
    },
    {
      id: 'memory',
      num: '03',
      title: 'Your Second Brain.',
      desc: 'Auto summaries, tasks, and memories. Synced, searchable, and always ready.',
      component: (
        <div
          className="h-36 w-full rounded-apple-lg flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          aria-hidden="true"
        >
          <div className="text-center space-y-2">
            <div className="w-10 h-10 rounded-full border-2 border-apple-blue-dark/40 flex items-center justify-center mx-auto">
              <div className="w-3 h-3 rounded-full bg-apple-blue-dark" />
            </div>
            <p className="text-apple-fine text-apple-muted-body uppercase tracking-widest">Memory indexed</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section
      id="intelligence"
      ref={sectionRef}
      className="tile-dark-1 section-apple"
      aria-label="Features"
    >
      <div className="max-w-[980px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 section-reveal">
          <p className="text-apple-caption-strong text-apple-blue-dark uppercase tracking-widest mb-4">
            Your Partner In Everything
          </p>
          <h2 className="text-apple-display text-white text-balance mb-5">
            Intelligence that works<br />while you do.
          </h2>
          <p className="text-apple-body text-apple-muted-body max-w-xl mx-auto text-balance">
            No screens. No notifications. No interruptions. Aura captures your world
            and surfaces what matters — only when you need it.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="section-reveal bg-[#2a2a2c] border border-white/5 rounded-apple-lg p-6 flex flex-col gap-5"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div>{card.component}</div>
              <div>
                <span className="text-apple-fine text-apple-muted-48 font-mono uppercase tracking-widest">{card.num}</span>
                <h3 className="text-apple-body-strong text-white mt-1 mb-2">{card.title}</h3>
                <p className="text-apple-caption text-apple-muted-body">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Software showcase */}
        <div className="mt-16 section-reveal bg-[#2a2a2c] border border-white/5 rounded-apple-lg p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-apple-caption-strong text-apple-blue-dark uppercase tracking-widest block">
                Mobile Companion App
              </span>
              <h3 className="text-apple-display-md text-white">
                Your entire history,<br />neatly indexed.
              </h3>
              <p className="text-apple-body text-apple-muted-body">
                Aura streams transcription packets securely to your phone.
                Search your conversations, review automated tasks, and ask
                questions to your local-first memory pipeline.
              </p>
              <ul className="space-y-2">
                {[
                  'Real-time speech transcription',
                  'Semantic retrieval of past conversations',
                  'Secure local-first storage',
                ].map(feat => (
                  <li key={feat} className="flex items-center gap-2 text-apple-caption text-apple-muted-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-apple-blue-dark shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-[9/18] rounded-[2rem] border-4 border-white/20 p-3 overflow-hidden flex flex-col"
                style={{ backgroundColor: '#1c1c1e' }}>
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-black rounded-full z-20" />
                <div className="flex-1 flex flex-col mt-5 overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-3 py-1 text-[10px] font-mono text-white/50">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>5G</span>
                      <div className="w-4 h-2 border border-white/40 rounded-sm p-0.5">
                        <div className="w-full h-full bg-white/60" />
                      </div>
                    </div>
                  </div>
                  {/* App header */}
                  <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Aura</p>
                      <p className="text-xs font-semibold text-white">Conversations</p>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-apple-blue animate-pulse" />
                  </div>
                  {/* Feed */}
                  <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
                    <div className="rounded-xl p-2 text-[9px]"
                      style={{ backgroundColor: 'rgba(41,151,255,0.12)', border: '1px solid rgba(41,151,255,0.2)' }}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-1 h-1 rounded-full bg-apple-blue-dark" />
                        <span className="font-mono text-white/60 uppercase tracking-wide">Streaming</span>
                      </div>
                      <p className="text-white/80 leading-relaxed font-light">
                        "Confirm the battery voltage levels are stable at 3.7V..."
                      </p>
                    </div>
                    <div className="rounded-xl p-2"
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span className="text-[8px] font-mono text-white/40 block mb-1">10:32 · Hardware Lab</span>
                      <p className="text-[9px] text-white/70 leading-relaxed font-light">
                        "We need the camera aperture centered exactly inside the 36mm chassis."
                      </p>
                    </div>
                    <div className="rounded-xl p-2"
                      style={{ backgroundColor: 'rgba(41,151,255,0.06)', border: '1px solid rgba(41,151,255,0.15)' }}>
                      <p className="text-[8px] font-mono text-apple-blue-dark uppercase tracking-wide">✓ Auto Task</p>
                      <p className="text-[9px] text-white font-semibold mt-0.5">Update STL to 36mm chassis</p>
                    </div>
                  </div>
                  {/* Search bar */}
                  <div className="p-3 border-t border-white/5">
                    <div className="rounded-full px-3 py-2 flex items-center justify-between"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <span className="text-[10px] text-white/30">Ask your memory anything...</span>
                      <span className="text-xs">⚡</span>
                    </div>
                  </div>
                </div>
                {/* Home bar */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
