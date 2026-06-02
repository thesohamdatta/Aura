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

              {/* Interactive SVG Schematics */}
              <div className="relative w-full h-full flex items-center justify-center">
                {activeTab === 'exploded' ? (
                  <svg viewBox="0 0 200 200" className="w-[85%] h-[85%] text-ghost">
                    {/* Connection line helpers */}
                    <path d="M100,20 L100,180" stroke="var(--aura)" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
                    
                    {/* Layer 1: Front Cover */}
                    <g transform="translate(0, -30)" className="transition-transform duration-500 hover:translate-y-[-10px]">
                      <circle cx="100" cy="55" r="24" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1.5" />
                      <circle cx="100" cy="55" r="10" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1" />
                      <circle cx="100" cy="55" r="4" fill="var(--ghost)" />
                      <text x="100" y="24" textAnchor="middle" className="text-[7px] font-mono fill-mist">Front Enclosure (3D PLA)</text>
                    </g>

                    {/* Layer 2: ESP32-S3 Board */}
                    <g transform="translate(0, 0)">
                      <rect x="78" y="80" width="44" height="36" rx="3" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1.5" />
                      {/* Seeed Xiao details */}
                      <rect x="88" y="88" width="24" height="18" rx="1" fill="none" stroke="var(--ghost)" strokeWidth="1" strokeDasharray="1 1" />
                      <circle cx="100" cy="98" r="3" fill="var(--aura)" />
                      <text x="142" y="100" textAnchor="start" className="text-[7px] font-mono fill-ghost">XIAO ESP32-S3</text>
                      <path d="M122,98 L138,98" stroke="var(--ghost)" strokeWidth="0.5" />
                    </g>

                    {/* Layer 3: LiPo Battery */}
                    <g transform="translate(0, 30)">
                      <rect x="82" y="120" width="36" height="22" rx="2" fill="var(--ghost)" stroke="var(--ghost)" strokeWidth="1" />
                      <path d="M96,120 L96,117" stroke="var(--ghost)" strokeWidth="1.5" />
                      <path d="M104,120 L104,117" stroke="var(--ghost)" strokeWidth="1.5" />
                      <text x="100" y="152" textAnchor="middle" className="text-[7px] font-mono fill-mist">150mAh Battery Pack</text>
                    </g>
                    
                    {/* Layer 4: Rear Magnetic Mount */}
                    <g transform="translate(0, 55)">
                      <circle cx="100" cy="145" r="20" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1.5" />
                      <circle cx="100" cy="145" r="8" fill="var(--ghost)" />
                      <text x="60" y="148" textAnchor="end" className="text-[7px] font-mono fill-ghost">Neodymium Clasp</text>
                      <path d="M80,145 L68,145" stroke="var(--ghost)" strokeWidth="0.5" />
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 200 200" className="w-[85%] h-[85%] text-ghost">
                    {/* Core Board */}
                    <rect x="60" y="60" width="80" height="80" rx="6" fill="var(--void)" stroke="var(--ghost)" strokeWidth="2" />
                    <text x="100" y="76" textAnchor="middle" className="text-[9px] font-mono font-bold fill-ghost">ESP32-S3 SENSE</text>

                    {/* Pins Left */}
                    <g transform="translate(50, 80)">
                      <rect x="0" y="0" width="10" height="6" rx="1" fill="var(--ghost)" />
                      <rect x="0" y="10" width="10" height="6" rx="1" fill="var(--ghost)" />
                      <rect x="0" y="20" width="10" height="6" rx="1" fill="var(--ghost)" />
                      <rect x="0" y="30" width="10" height="6" rx="1" fill="var(--ghost)" />
                    </g>
                    
                    {/* Pins Right */}
                    <g transform="translate(140, 80)">
                      <rect x="0" y="0" width="10" height="6" rx="1" fill="var(--ghost)" />
                      <rect x="0" y="10" width="10" height="6" rx="1" fill="var(--ghost)" />
                      <rect x="0" y="20" width="10" height="6" rx="1" fill="var(--ghost)" />
                      <rect x="0" y="30" width="10" height="6" rx="1" fill="var(--ghost)" />
                    </g>

                    {/* Connections & Peripherals */}
                    {/* Camera */}
                    <circle cx="100" cy="115" r="12" fill="var(--void)" stroke="var(--aura)" strokeWidth="1.5" />
                    <circle cx="100" cy="115" r="4" fill="var(--ghost)" />
                    <text x="100" y="134" textAnchor="middle" className="text-[7px] font-mono fill-ghost">OV2640</text>

                    {/* Mic (Top Left) */}
                    <rect x="25" y="25" width="25" height="15" rx="2" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1" />
                    <text x="37.5" y="34" textAnchor="middle" className="text-[6px] font-mono fill-ghost">PDM MIC</text>
                    <path d="M50,32.5 L75,32.5 L75,60" fill="none" stroke="var(--aura)" strokeWidth="1" strokeDasharray="2 2" />

                    {/* Battery Power (Bottom) */}
                    <rect x="85" y="165" width="30" height="16" rx="2" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1" />
                    <text x="100" y="175" textAnchor="middle" className="text-[6px] font-mono fill-ghost">LIPO 3.7V</text>
                    <path d="M100,165 L100,140" fill="none" stroke="var(--ghost)" strokeWidth="1" />

                    {/* Signal indicators */}
                    <circle cx="15" cy="100" r="1.5" fill="var(--aura)" />
                    <line x1="15" y1="100" x2="60" y2="100" stroke="var(--aura)" strokeWidth="0.75" />
                    <text x="15" y="94" className="text-[6px] font-mono fill-aura">ANTENNA</text>
                  </svg>
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
