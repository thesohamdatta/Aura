import { useRef, useState, useEffect } from 'react'

const specs = [
  { label: 'Processor',     value: 'XIAO ESP32-S3 Sense' },
  { label: 'AI Engine',     value: 'Groq / OpenAI / Ollama' },
  { label: 'Transcription', value: 'Deepgram / Whisper' },
  { label: 'App',           value: 'iOS / Android (Flutter)' },
  { label: 'Sensor',        value: 'OV2640 CMOS Camera' },
  { label: 'Lens',          value: '66° FOV, f/2.8' },
  { label: 'Photo',         value: '1600×1200 JPEG' },
  { label: 'Microphone',    value: 'PDM, 16kHz mono' },
  { label: 'Connectivity',  value: 'Wi-Fi · Bluetooth LE' },
  { label: 'Battery Life',  value: 'Up to 4 Hours' },
  { label: 'Charging',      value: 'USB-C' },
  { label: 'Weight',        value: 'Under 50g' },
]

export default function Device() {
  const sectionRef  = useRef(null)
  const [activeTab, setActiveTab] = useState('exploded')

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
      id="device"
      ref={sectionRef}
      className="tile-parchment section-apple"
      aria-label="Device specifications"
    >
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <p className="text-apple-caption-strong text-apple-blue uppercase tracking-widest mb-4">
            A Closer Look at Aura
          </p>
          <h2 className="text-apple-display text-apple-ink text-balance mb-5">
            Wear It. Clip It. Done.
          </h2>
          <p className="text-apple-body text-apple-muted-80 max-w-xl mx-auto text-balance">
            Magnetic clasp. No setup required. Under 50g.
            Built on open-source hardware you can assemble for ~$50–70.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Interactive Device Viewer */}
          <div className="lg:col-span-6 section-reveal">
            <div
              className="relative w-full aspect-square max-w-md mx-auto rounded-apple-lg overflow-hidden"
              style={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0' }}
            >
              {/* SVG schematic */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {activeTab === 'exploded' ? (
                  <svg viewBox="0 0 200 200" className="w-full h-full" aria-label="Exploded view of Aura pendant">
                    <path d="M100,20 L100,180" stroke="#0066cc" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
                    {/* Front cover */}
                    <g transform="translate(0,-30)">
                      <circle cx="100" cy="55" r="24" fill="#f5f5f7" stroke="#1d1d1f" strokeWidth="1.5" />
                      <circle cx="100" cy="55" r="10" fill="#f5f5f7" stroke="#1d1d1f" strokeWidth="1" />
                      <circle cx="100" cy="55" r="4" fill="#1d1d1f" />
                      <text x="100" y="24" textAnchor="middle" fill="#7a7a7a" fontSize="6" fontFamily="Fira Code, monospace">Front Enclosure (3D PLA)</text>
                    </g>
                    {/* ESP32-S3 board */}
                    <g transform="translate(0,0)">
                      <rect x="78" y="80" width="44" height="36" rx="3" fill="#f5f5f7" stroke="#1d1d1f" strokeWidth="1.5" />
                      <rect x="88" y="88" width="24" height="18" rx="1" fill="none" stroke="#1d1d1f" strokeWidth="1" strokeDasharray="1 1" />
                      <circle cx="100" cy="98" r="3" fill="#0066cc" />
                      <text x="142" y="100" textAnchor="start" fill="#1d1d1f" fontSize="6" fontFamily="Fira Code, monospace">XIAO ESP32-S3</text>
                      <path d="M122,98 L138,98" stroke="#1d1d1f" strokeWidth="0.5" />
                    </g>
                    {/* LiPo battery */}
                    <g transform="translate(0,30)">
                      <rect x="82" y="120" width="36" height="22" rx="2" fill="#1d1d1f" stroke="#1d1d1f" strokeWidth="1" />
                      <path d="M96,120 L96,117 M104,120 L104,117" stroke="#1d1d1f" strokeWidth="1.5" />
                      <text x="100" y="152" textAnchor="middle" fill="#7a7a7a" fontSize="6" fontFamily="Fira Code, monospace">150mAh Battery Pack</text>
                    </g>
                    {/* Rear clasp */}
                    <g transform="translate(0,55)">
                      <circle cx="100" cy="145" r="20" fill="#f5f5f7" stroke="#1d1d1f" strokeWidth="1.5" />
                      <circle cx="100" cy="145" r="8" fill="#1d1d1f" />
                      <text x="60" y="148" textAnchor="end" fill="#1d1d1f" fontSize="6" fontFamily="Fira Code, monospace">Neodymium Clasp</text>
                      <path d="M80,145 L68,145" stroke="#1d1d1f" strokeWidth="0.5" />
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 200 200" className="w-full h-full" aria-label="Schematic layout of Aura pendant">
                    <rect x="60" y="60" width="80" height="80" rx="6" fill="#f5f5f7" stroke="#1d1d1f" strokeWidth="2" />
                    <text x="100" y="76" textAnchor="middle" fill="#1d1d1f" fontSize="8" fontWeight="600" fontFamily="Fira Code, monospace">ESP32-S3</text>
                    {/* Pins */}
                    {[0,1,2,3].map(i => (
                      <g key={i}>
                        <rect x="50" y={80 + i*10} width="10" height="6" rx="1" fill="#1d1d1f" />
                        <rect x="140" y={80 + i*10} width="10" height="6" rx="1" fill="#1d1d1f" />
                      </g>
                    ))}
                    {/* Camera */}
                    <circle cx="100" cy="115" r="12" fill="#f5f5f7" stroke="#0066cc" strokeWidth="1.5" />
                    <circle cx="100" cy="115" r="4" fill="#1d1d1f" />
                    <text x="100" y="134" textAnchor="middle" fill="#1d1d1f" fontSize="6" fontFamily="Fira Code, monospace">OV2640</text>
                    {/* Mic */}
                    <rect x="25" y="25" width="25" height="15" rx="2" fill="#f5f5f7" stroke="#1d1d1f" strokeWidth="1" />
                    <text x="37" y="34" textAnchor="middle" fill="#1d1d1f" fontSize="5.5" fontFamily="Fira Code, monospace">PDM MIC</text>
                    <path d="M50,32.5 L75,32.5 L75,60" fill="none" stroke="#0066cc" strokeWidth="1" strokeDasharray="2 2" />
                    {/* Battery */}
                    <rect x="85" y="165" width="30" height="16" rx="2" fill="#f5f5f7" stroke="#1d1d1f" strokeWidth="1" />
                    <text x="100" y="175" textAnchor="middle" fill="#1d1d1f" fontSize="5.5" fontFamily="Fira Code, monospace">LIPO 3.7V</text>
                    <path d="M100,165 L100,140" fill="none" stroke="#1d1d1f" strokeWidth="1" />
                    {/* Antenna */}
                    <circle cx="15" cy="100" r="1.5" fill="#0066cc" />
                    <line x1="15" y1="100" x2="60" y2="100" stroke="#0066cc" strokeWidth="0.75" />
                    <text x="15" y="94" fill="#0066cc" fontSize="5.5" fontFamily="Fira Code, monospace">ANTENNA</text>
                  </svg>
                )}
              </div>
            </div>

            {/* View toggle */}
            <div
              className="flex items-center gap-1 mt-4 mx-auto w-fit rounded-apple-pill p-1"
              style={{ backgroundColor: '#e0e0e0' }}
            >
              {[
                { id: 'exploded',   label: 'Exploded View' },
                { id: 'schematic',  label: 'Schematic' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 text-apple-caption rounded-apple-pill transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-apple-ink shadow-sm font-semibold'
                      : 'text-apple-muted-80 hover:text-apple-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specs grid */}
          <div className="lg:col-span-6 section-reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="card-apple hover:border-apple-blue/30 transition-colors duration-200 cursor-default"
                >
                  <p className="text-apple-fine text-apple-muted-48 uppercase tracking-widest mb-1">{spec.label}</p>
                  <p className="text-apple-body-strong text-apple-ink leading-snug">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Build cost card */}
            <div
              className="mt-4 card-apple flex items-center justify-between"
            >
              <div>
                <p className="text-apple-fine text-apple-muted-48 uppercase tracking-widest mb-1">Build Cost</p>
                <p className="text-apple-display text-apple-ink tabular-nums">~$50–70</p>
              </div>
              <div className="text-right">
                <p className="text-apple-caption-strong text-apple-blue mb-1">Fully Open Source</p>
                <a
                  href="https://github.com/thesohamdatta/Aura-Wearable-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-apple text-apple-caption"
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
