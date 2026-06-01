import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    date: 'June 2025',
    title: 'Designing the Device',
    desc: 'Draw first ever sketch of the Aura wearable pendant. Envisioned a screenless connection between humans and AI.',
    status: 'Inspiration: Her (2013)',
    img: '/assets/hero/internal view 1.png',
    alt: 'First structural 3D assembly model of Aura internal structure'
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
    status: 'Hardware assembly',
    img: '/assets/hero/internal view 2.jpg',
    alt: 'First physical prototype board assembly and 3D printed case'
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
                
                {/* Timeline Node Image Attachment */}
                {item.img && (
                  <div className="my-4 max-w-lg rounded-xl overflow-hidden border border-ghost/10 dark:border-white/5 shadow-md">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-auto object-cover max-h-60"
                      loading="lazy"
                    />
                  </div>
                )}

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
