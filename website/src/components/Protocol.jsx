import { useEffect, useRef } from 'react'

const layers = [
  {
    id: 'capture',
    num: '01',
    name: 'Capture Layer',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v3m0 16v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M1 12h3m16 0h3M4.22 19.78l2.12-2.12m11.32-11.32 2.12-2.12" />
      </svg>
    ),
    description: 'On-device PDM microphone and OV2640 camera capture raw audio and visual input.',
    badge: 'ESP32-S3 Sense',
  },
  {
    id: 'edge',
    num: '02',
    name: 'Edge Processing',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    description: 'Audio compressed and streamed via BLE or Wi-Fi to the Aura companion app in real time.',
    badge: 'BLE + Wi-Fi',
  },
  {
    id: 'ai',
    num: '03',
    name: 'AI Pipeline',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6m-6 3h6m-6 3h4" />
      </svg>
    ),
    description: 'Deepgram / Whisper transcription → LLM (Groq / GPT-4o / Ollama) for semantic understanding.',
    badge: 'Cloud / Local',
  },
  {
    id: 'memory',
    num: '04',
    name: 'Memory Engine',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    description: 'Omi memory pipeline indexes your conversations. Semantic search, auto-tasks, timeline recall.',
    badge: 'Omi + Local DB',
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="protocol"
      ref={sectionRef}
      className="tile-dark-2 section-apple"
      aria-label="How Aura Works"
    >
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <p className="text-apple-caption-strong text-apple-blue-dark uppercase tracking-widest mb-4">
            The Full Stack
          </p>
          <h2 className="text-apple-display text-white text-balance mb-5">
            How Aura Works.
          </h2>
          <p className="text-apple-body text-apple-muted-body max-w-xl mx-auto text-balance">
            Four layers. From sensor to insight. Each one replaceable, open, and hackable.
          </p>
        </div>

        {/* Vertical pipeline — timeline style */}
        <div className="relative">
          {/* Spine line */}
          <div
            className="absolute left-[28px] md:left-[36px] top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(41,151,255,0.6), rgba(41,151,255,0.1))' }}
            aria-hidden="true"
          />

          <div className="space-y-0">
            {layers.map((layer, i) => (
              <div
                key={layer.id}
                className="section-reveal relative flex gap-6 md:gap-10 pb-10 last:pb-0 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Node */}
                <div className="relative shrink-0">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-apple-lg flex items-center justify-center text-apple-blue-dark transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: 'rgba(41,151,255,0.10)', border: '1px solid rgba(41,151,255,0.2)' }}
                  >
                    {layer.icon}
                  </div>
                  {/* Connector dot */}
                  {i < layers.length - 1 && (
                    <div
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ background: 'rgba(41,151,255,0.4)' }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-apple-fine text-apple-blue-dark font-mono">{layer.num}</span>
                    <h3 className="text-apple-body-strong text-white">{layer.name}</h3>
                    <span
                      className="text-apple-fine rounded-apple-pill px-2.5 py-0.5"
                      style={{ backgroundColor: 'rgba(255,255,255,0.07)', color: '#cccccc' }}
                    >
                      {layer.badge}
                    </span>
                  </div>
                  <p className="text-apple-caption text-apple-muted-body leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack choice card */}
        <div
          className="mt-16 section-reveal rounded-apple-lg p-8 md:p-10"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Run local', desc: 'Use Ollama + Whisper entirely offline. Your data never leaves your device.', badge: 'Privacy Mode' },
              { title: 'Run cloud', desc: 'Connect GPT-4o and Deepgram for maximum accuracy and speed.', badge: 'Pro Mode' },
              { title: 'Run hybrid', desc: 'Local transcription, cloud reasoning. Balance speed and privacy.', badge: 'Recommended' },
            ].map(opt => (
              <div key={opt.title}>
                <span
                  className="inline-block text-apple-fine rounded-apple-pill px-2 py-0.5 mb-3"
                  style={{ backgroundColor: 'rgba(41,151,255,0.12)', color: '#2997ff' }}
                >
                  {opt.badge}
                </span>
                <h4 className="text-apple-body-strong text-white mb-2">{opt.title}</h4>
                <p className="text-apple-caption text-apple-muted-body">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
