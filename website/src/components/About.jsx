import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    date: 'June 2025',
    title: 'Designing the Device',
    desc: 'Draw first ever sketch of the Aura wearable pendant. Envisioned a screenless connection between humans and AI.',
    status: 'Inspiration: Her (2013)'
  },
  {
    date: 'July 2025',
    title: 'OS1 - Research',
    desc: 'Exploring what an AI OS can bring to humans with Edge AI. Deployed local Ollama pipelines.',
    status: 'Failure & Learning: We chose the wrong platform initially.'
  },
  {
    date: 'December 2025',
    title: 'Open Ecosystem Discoveries',
    desc: 'Discovered smartphones can compute faster. Shifted architecture to run lightweight capture on-device and heavy lifting on the phone/backend.',
    status: 'Omi AI Integration'
  },
  {
    date: 'February 2026',
    title: 'First Prototype',
    desc: 'Failed, tried, failed again. Designed custom 3D printed casings and routed the micro LiPo battery cells.',
    status: 'Hardware assembly'
  },
  {
    date: 'March 2026',
    title: 'First Recording Success',
    desc: 'Captured and transcribed the first speech packet. (Got too excited and shorted a Seeed Xiao module costing $20!)',
    status: 'The turning point'
  },
  {
    date: 'April 2026',
    title: 'The Final Prototype',
    desc: 'Hardware and software working in sync. Memories, tasks, and chats became a reliable assistant. Aura helper active.',
    status: 'Success'
  },
  {
    date: '2030 & Beyond',
    title: 'Building the Beyond',
    desc: 'Aura getting shaped by experiences, not by tiny screens. Rewiring our attention and reclaim human connection.',
    status: 'Vision'
  }
]

const renderTimelineMedia = (title) => {
  if (title === 'Designing the Device') {
    return (
      <div className="my-4 max-w-lg">
        <svg className="w-full h-auto bg-graphite/30 border border-ghost/10 dark:border-white/5 rounded-2xl p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,40 L 400,40 M 0,80 L 400,80 M 0,120 L 400,120 M 0,160 L 400,160 M 0,200 L 400,200" stroke="var(--ghost)" strokeWidth="0.5" strokeOpacity="0.05" />
          <path d="M 40,0 L 40,240 M 80,0 L 80,240 M 120,0 L 120,240 M 160,0 L 160,240 M 200,0 L 200,240 M 240,0 L 240,240 M 280,0 L 280,240 M 320,0 L 320,240 M 360,0 L 360,240" stroke="var(--ghost)" strokeWidth="0.5" strokeOpacity="0.05" />
          <circle cx="200" cy="120" r="70" stroke="var(--ghost)" strokeWidth="2" strokeDasharray="5 3" />
          <circle cx="200" cy="120" r="62" stroke="var(--ghost)" strokeWidth="1" strokeOpacity="0.3" />
          <rect x="170" y="90" width="60" height="60" rx="6" stroke="var(--ghost)" strokeWidth="1.5" />
          <circle cx="200" cy="120" r="16" stroke="var(--aura)" strokeWidth="2" />
          <circle cx="200" cy="120" r="6" fill="var(--ghost)" />
          <circle cx="200" cy="104" r="2.5" fill="var(--aura)" />
          <path d="M 200,50 L 200,90 M 200,150 L 200,190 M 138,120 L 170,120 M 230,120 L 262,120" stroke="var(--aura)" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 200,50 L 260,30" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.5" />
          <text x="265" y="32" className="fill-ghost text-[10px] font-mono" dominantBaseline="middle">STATUS LED</text>
          <path d="M 210,115 L 290,95" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.5" />
          <text x="295" y="97" className="fill-ghost text-[10px] font-mono" dominantBaseline="middle">OV2640 CAMERA</text>
          <path d="M 180,140 L 120,180" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.5" />
          <text x="55" y="182" className="fill-ghost text-[10px] font-mono" dominantBaseline="middle">LIPO CELLS</text>
          <path d="M 220,130 L 285,155" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.5" />
          <text x="290" y="157" className="fill-ghost text-[10px] font-mono" dominantBaseline="middle">ESP32-S3 CORE</text>
          <line x1="125" y1="35" x2="275" y2="35" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.3" />
          <line x1="125" y1="31" x2="125" y2="39" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.3" />
          <line x1="275" y1="31" x2="275" y2="39" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.3" />
          <text x="200" y="27" className="fill-ghost/60 text-[9px] font-mono text-center" textAnchor="middle">Ø 44.00 mm Shell</text>
        </svg>
      </div>
    );
  }
  if (title === 'First Prototype') {
    return (
      <div className="my-4 max-w-lg">
        <svg className="w-full h-auto bg-graphite/30 border border-ghost/10 dark:border-white/5 rounded-2xl p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,40 L 400,40 M 0,80 L 400,80 M 0,120 L 400,120 M 0,160 L 400,160 M 0,200 L 400,200" stroke="var(--ghost)" strokeWidth="0.5" strokeOpacity="0.05" />
          <path d="M 40,0 L 40,240 M 80,0 L 80,240 M 120,0 L 120,240 M 160,0 L 160,240 M 200,0 L 200,240 M 240,0 L 240,240 M 280,0 L 280,240 M 320,0 L 320,240 M 360,0 L 360,240" stroke="var(--ghost)" strokeWidth="0.5" strokeOpacity="0.05" />
          <rect x="110" y="40" width="180" height="150" rx="8" stroke="var(--ghost)" strokeWidth="2.5" fill="var(--void)" />
          <rect x="150" y="80" width="60" height="70" rx="2" stroke="var(--ghost)" strokeWidth="1.5" />
          <text x="180" y="118" className="fill-ghost text-[8px] font-mono" textAnchor="middle" dominantBaseline="middle">ESP32-S3</text>
          {[...Array(8)].map((_, idx) => (
            <g key={idx}>
              <rect x="142" y={86 + idx * 8} width="8" height="3" fill="var(--ghost)" />
              <rect x="210" y={86 + idx * 8} width="8" height="3" fill="var(--ghost)" />
            </g>
          ))}
          <rect x="190" y="45" width="25" height="15" rx="1" stroke="var(--ghost)" strokeWidth="1" />
          <text x="202.5" y="52.5" className="fill-ghost text-[6px] font-mono" textAnchor="middle" dominantBaseline="middle">USB-C</text>
          <circle cx="250" cy="70" r="4" stroke="var(--aura)" strokeWidth="1" />
          <circle cx="250" cy="70" r="2.5" fill="var(--aura)" />
          <circle cx="250" cy="95" r="4" stroke="var(--aura)" strokeWidth="1" />
          <circle cx="250" cy="95" r="2.5" fill="var(--aura)" />
          <circle cx="250" cy="120" r="4" stroke="var(--aura)" strokeWidth="1" />
          <circle cx="250" cy="120" r="2.5" fill="var(--aura)" />
          <circle cx="250" cy="145" r="4" stroke="var(--ghost)" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="250" cy="145" r="2" fill="var(--ghost)" fillOpacity="0.4" />
          <path d="M 210,95 L 246,95 M 210,103 L 230,103 L 230,120 L 246,120 M 210,87 L 235,87 L 235,70 L 246,70" stroke="var(--aura)" strokeWidth="1" />
          <path d="M 180,150 L 180,175 L 140,175 L 140,150" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="2 2" />
          <path d="M 254,70 L 310,70" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.5" />
          <text x="315" y="72" className="fill-ghost text-[10px] font-mono" dominantBaseline="middle">TXD / RXD BUS</text>
          <path d="M 254,95 L 310,95" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.5" />
          <text x="315" y="97" className="fill-ghost text-[10px] font-mono" dominantBaseline="middle">MIC CLOCK (PDM)</text>
          <path d="M 254,120 L 310,120" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.5" />
          <text x="315" y="122" className="fill-ghost text-[10px] font-mono" dominantBaseline="middle">PDM DATA IN</text>
          <path d="M 120,40 L 80,40" stroke="var(--ghost)" strokeWidth="0.75" strokeOpacity="0.5" />
          <text x="75" y="42" className="fill-ghost text-[10px] font-mono text-right" dominantBaseline="middle">BREADBOARD v1.0</text>
        </svg>
      </div>
    );
  }
  return null;
};

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline nodes
      gsap.fromTo('.timeline-node',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 75%',
          }
        }
      )

      // Animate team cards
      gsap.fromTo('.team-card',
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-section',
            start: 'top 80%',
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-36 px-4 bg-void text-ghost overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 20% 20%, rgba(148,226,213,0.03) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 glass radius-pill px-4 py-1.5 mb-5">
            <span className="text-xs font-mono text-aura tracking-widest uppercase">Our Story</span>
          </div>
          <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-bold tracking-tight text-ghost max-w-3xl mx-auto leading-tight">
            We founded Aura with one vision:{' '}
            <span className="font-serif italic text-aura">To reinvent how people See and Hear their world.</span>
          </h2>
        </div>

        {/* Mission & Vision grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-graphite/40 dark:bg-graphite/30 radius-card p-8 border border-ghost/10 dark:border-white/5">
            <span className="text-xs font-mono text-aura tracking-widest uppercase mb-3 block">OUR MISSION</span>
            <p className="text-lg font-light text-mist leading-relaxed">
              To create less socially disruptive technology, fight attention manipulation from social platforms, and change how we live and interact with the digital world.
            </p>
          </div>
          <div className="bg-graphite/40 dark:bg-graphite/30 radius-card p-8 border border-ghost/10 dark:border-white/5">
            <span className="text-xs font-mono text-aura tracking-widest uppercase mb-3 block">OUR VISION</span>
            <p className="text-lg font-light text-mist leading-relaxed">
              Create an elegant Operating System for the AI and Human connection — enabling personal superintelligence without screens.
            </p>
          </div>
        </div>

        {/* Open Source Tribute */}
        <div className="bg-graphite/30 dark:bg-graphite/20 radius-card p-8 border border-ghost/10 dark:border-white/5 text-center max-w-3xl mx-auto mb-32">
          <span className="text-xs font-mono text-aura tracking-widest uppercase mb-2 block">COOPERATION</span>
          <h3 className="text-2xl font-semibold text-ghost dark:text-white mb-4">Thanks to Open Source</h3>
          <p className="text-mist font-light leading-relaxed max-w-xl mx-auto mb-4">
            Aura is built on top of the open-source <strong className="text-ghost dark:text-white">Omi AI</strong> wearable ecosystem.
            We cooperate with global developers to create hardware that is fully customisable, self-hosted, and secure.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs font-mono text-mist">
            <span className="px-3 py-1 bg-ghost/5 dark:bg-white/5 rounded-full border border-ghost/10 dark:border-white/5 text-ghost dark:text-mist">Omi AI Ecosystem</span>
            <span className="px-3 py-1 bg-ghost/5 dark:bg-white/5 rounded-full border border-ghost/10 dark:border-white/5 text-ghost dark:text-mist">Ollama (Offline)</span>
            <span className="px-3 py-1 bg-ghost/5 dark:bg-white/5 rounded-full border border-ghost/10 dark:border-white/5 text-ghost dark:text-mist">Cosmos OS</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section mb-32">
          <h3 className="text-2xl font-semibold text-center mb-16">The Journey</h3>
          <div className="timeline-container relative border-l border-ghost/10 dark:border-white/10 ml-4 md:ml-32 space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-node relative pl-8 md:pl-12 group">
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-void border-2 border-aura
                    group-hover:bg-aura transition-all duration-300 z-10"
                  style={{ boxShadow: '0 0 10px rgba(148,226,213,0.3)' }}
                />
                {/* Date */}
                <span className="block text-xs font-mono text-aura tracking-wider uppercase mb-1">{item.date}</span>
                {/* Title */}
                <h4 className="text-lg font-semibold text-ghost dark:text-white mb-2 group-hover:text-aura transition-colors duration-300">
                  {item.title}
                </h4>
                {/* Desc */}
                <p className="text-sm text-mist font-light leading-relaxed max-w-2xl mb-4">{item.desc}</p>
                
                {/* Timeline Node Media Attachment */}
                {renderTimelineMedia(item.title)}

                {/* Status */}
                <span className="inline-block text-[11px] font-mono text-ghost dark:text-mist/60 bg-ghost/5 dark:bg-white/5 border border-ghost/10 dark:border-white/5 px-2 py-0.5 rounded">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3 className="text-2xl font-semibold text-center mb-16">The Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Soham Datta */}
            <div className="team-card bg-graphite/40 dark:bg-graphite/30 radius-card p-8 border border-ghost/10 dark:border-white/5 text-center group hover:border-aura/20 transition-all duration-500">
              <div className="w-20 h-20 rounded-full bg-aura/5 border border-aura/20 mx-auto mb-6 flex items-center justify-center text-3xl">
                👨‍💻
              </div>
              <h4 className="text-xl font-semibold text-ghost dark:text-white transition-colors duration-300">Soham Datta</h4>
              <p className="text-xs font-mono text-aura mt-1 mb-4 uppercase tracking-wider">Lead Researcher | Software</p>
              <p className="text-sm text-mist font-light">“For the love of personal intelligence and screenless, calm computing.”</p>
            </div>
            {/* Laxman Pajai */}
            <div className="team-card bg-graphite/40 dark:bg-graphite/30 radius-card p-8 border border-ghost/10 dark:border-white/5 text-center group hover:border-aura/20 transition-all duration-500">
              <div className="w-20 h-20 rounded-full bg-ghost/5 dark:bg-white/5 border border-ghost/10 dark:border-white/10 mx-auto mb-6 flex items-center justify-center text-3xl">
                🛠
              </div>
              <h4 className="text-xl font-semibold text-ghost dark:text-white transition-colors duration-300">Laxman Pajai</h4>
              <p className="text-xs font-mono text-mist mt-1 mb-4 uppercase tracking-wider">Hardware & Design</p>
              <p className="text-sm text-mist font-light">“Designing physical experiences that fit into human lives naturally.”</p>
            </div>
          </div>
          <p className="text-center text-xs font-mono text-mist/40 mt-12">“We are not from IIT. Just two crazy guys with the internet.”</p>
        </div>
      </div>
    </section>
  )
}
