import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const specs = [
  { label: 'Processor', value: 'XIAO ESP32-S3 Sense', icon: '⚡' },
  { label: 'AI Engine', value: 'Groq / OpenAI / Ollama', icon: '🧠' },
  { label: 'Transcription', value: 'Deepgram / Whisper', icon: '🎙' },
  { label: 'App', value: 'iOS / Android (Flutter)', icon: '📱' },
  { label: 'Sensor', value: 'OV2640 CMOS Camera', icon: '📸' },
  { label: 'Lens', value: '66° FOV, f/2.8', icon: '🔭' },
  { label: 'Photo', value: '1600×1200 @ JPEG', icon: '🖼' },
  { label: 'Microphone', value: 'PDM, 16kHz mono', icon: '🔊' },
  { label: 'Connectivity', value: 'Wi-Fi · Bluetooth · Mic', icon: '📡' },
  { label: 'Battery Life', value: 'Up to 4 Hours', icon: '🔋' },
  { label: 'Charging', value: 'USB-C', icon: '⚡' },
  { label: 'Weight', value: 'Under 50g', icon: '🪶' },
]

export default function Device() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState('exploded') // exploded | schematic

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.spec-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, stagger: 0.06, duration: 0.7, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.specs-grid',
            start: 'top 80%',
          }
        }
      )
      gsap.fromTo('.device-visual',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      )
      gsap.fromTo('.device-heading',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="device"
      ref={sectionRef}
      className="relative py-36 px-4"
    >
      {/* BG accent */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(148,226,213,0.03) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="device-heading text-center mb-24">
          <div className="inline-flex items-center gap-2 glass radius-pill px-4 py-1.5 mb-5">
            <span className="text-xs font-mono text-aura tracking-widest uppercase">A Closer Look at Aura</span>
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-tight text-ghost mb-4 text-wrap-balance leading-tight">
            Wear It. Clip It.{' '}
            <span className="font-serif italic text-aura">Done.</span>
          </h2>
          <p className="text-mist text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Magnetic clasp. No setup required. Under 50g.
            Built on open-source hardware you can build yourself for ~$50–70.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Interactive Device Visualizer Tab (Apple Style) */}
          <div className="device-visual lg:col-span-6 flex flex-col items-center gap-8">
            {/* Visualizer Frame */}
            <div className="relative w-full aspect-square max-w-md rounded-3xl border border-white/5 bg-void p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(148,226,213,0.05)] overflow-hidden group">
              
              {/* Scanline overlay for high-tech aesthetic */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none z-10 opacity-30">
                <div className="scan-line w-full" />
              </div>

              {/* Toggle Images */}
              <div className="relative w-full h-full flex items-center justify-center">
                {activeTab === 'exploded' ? (
                  <img
                    src="/assets/hero/exploded view.jpg"
                    alt="Aura hardware exploded assembly view"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <img
                    src="/assets/hero/ALL COMPONENTS.png"
                    alt="Aura circuitry layout and component connections"
                    className="w-[90%] h-[90%] object-contain rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
              </div>
            </div>

            {/* Selector controls */}
            <div className="flex items-center gap-2 bg-graphite border border-white/5 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('exploded')}
                className={`px-5 py-2 text-xs font-mono rounded-full tracking-wide transition-all ${
                  activeTab === 'exploded'
                    ? 'bg-aura text-void font-medium'
                    : 'text-mist hover:text-ghost'
                }`}
              >
                Exploded View
              </button>
              <button
                onClick={() => setActiveTab('schematic')}
                className={`px-5 py-2 text-xs font-mono rounded-full tracking-wide transition-all ${
                  activeTab === 'schematic'
                    ? 'bg-aura text-void font-medium'
                    : 'text-mist hover:text-ghost'
                }`}
              >
                Schematic Layout
              </button>
            </div>
          </div>

          {/* Specs grid */}
          <div className="lg:col-span-6">
            <div className="specs-grid grid grid-cols-2 gap-3">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="spec-card glass-strong radius-card p-5 hover:border-aura/25
                    transition-all duration-300 border border-white/5 group cursor-default"
                >
                  <span className="text-xl mb-3 block">{spec.icon}</span>
                  <p className="text-[10px] font-mono text-mist tracking-widest uppercase mb-1">{spec.label}</p>
                  <p className="text-sm text-ghost font-light leading-snug">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Price badge */}
            <div className="mt-6 glass radius-card p-5 flex items-center justify-between border border-white/5">
              <div>
                <p className="text-[10px] font-mono text-mist uppercase tracking-widest mb-1">Build Cost</p>
                <p className="text-2xl font-bold text-ghost tracking-tight">~$50–70</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono text-aura mb-1">Fully Open Source</p>
                <a
                  href="https://github.com/thesohamdatta/Aura-Wearable-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-mist hover:text-aura transition-all hover:-translate-y-px inline-block font-light"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
