import { useEffect, useRef } from 'react'

const timelineData = [
  {
    date: 'June 2025',
    title: 'Designing the Device',
    desc: 'Drew the first sketch of the Aura pendant. Envisioned a screenless connection between humans and AI — inspired by Her (2013).',
    status: 'Inspiration',
    statusColor: '#2997ff',
  },
  {
    date: 'July 2025',
    title: 'OS1 — Research',
    desc: 'Explored what an AI OS could bring with Edge AI. Deployed local Ollama pipelines, hit the wall, and chose the wrong platform initially.',
    status: 'Failure → Learning',
    statusColor: '#ff9f0a',
  },
  {
    date: 'December 2025',
    title: 'Open Ecosystem Discovery',
    desc: 'Discovered smartphones compute faster. Shifted to lightweight capture on-device and heavy lifting on the phone/backend via Omi.',
    status: 'Architecture pivot',
    statusColor: '#0066cc',
  },
  {
    date: 'February 2026',
    title: 'First Prototype',
    desc: 'Failed, tried, failed again. Designed custom 3D-printed casings and routed micro LiPo battery cells into a 36mm chassis.',
    status: 'Hardware assembly',
    statusColor: '#ff9f0a',
  },
  {
    date: 'March 2026',
    title: 'First Recording Success',
    desc: 'Captured and transcribed the first speech packet. (Got too excited and shorted a Seeed XIAO module — $20 lesson learned.)',
    status: 'Turning point',
    statusColor: '#30d158',
  },
  {
    date: 'April 2026',
    title: 'Final Prototype',
    desc: 'Hardware and software working in sync. Memories, tasks, and AI chats became a reliable assistant. Aura is alive.',
    status: 'Success ✓',
    statusColor: '#30d158',
  },
  {
    date: '2030 & Beyond',
    title: 'Building the Beyond',
    desc: 'Aura shaped by experiences, not tiny screens. Rewiring attention and reclaiming human connection.',
    status: 'Vision',
    statusColor: '#2997ff',
  },
]

const values = [
  {
    title: 'Open by Default',
    desc: 'Every schematic, firmware line, and design file is public. You can fork it, hack it, or improve it.',
  },
  {
    title: 'Privacy First',
    desc: 'Run fully local with Ollama + Whisper. Your conversations never leave your device unless you choose.',
  },
  {
    title: 'Radical Honesty',
    desc: 'We ship real prototypes, not renders. When things break (and they do), we document it.',
  },
  {
    title: 'Community Built',
    desc: 'Aura is shaped by builders, not investors. Every contribution improves the hardware for everyone.',
  },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)] pt-[96px]"
    >
      {/* Page header */}
      <header className="section-apple pb-0 border-b border-[var(--page-border)]">
        <div className="max-w-[740px] mx-auto section-reveal">
          <p className="text-apple-caption-strong text-apple-blue dark:text-apple-blue-dark uppercase tracking-widest mb-5">
            About Aura
          </p>
          <h1 className="text-apple-hero text-[var(--page-text)] text-balance mb-6">
            Built by a student.<br />For everyone.
          </h1>
          <p className="text-apple-lead text-[var(--page-text-muted)] text-balance pb-16">
            Aura is an independent open-source project — no VC funding,
            no NDAs, no corporate roadmap. Just curiosity and a soldering iron.
          </p>
        </div>
      </header>

      <main className="max-w-[740px] mx-auto px-5 py-20 space-y-24">
        {/* Mission */}
        <section id="mission" className="section-reveal">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-apple-fine text-[var(--page-text-subtle)] uppercase tracking-widest font-mono">Mission</span>
            <div className="flex-1 h-px bg-[var(--page-border)]" />
          </div>
          <blockquote
            className="border-l-2 border-apple-blue dark:border-apple-blue-dark pl-8"
          >
            <p className="text-apple-display-md text-[var(--page-text)] text-balance leading-snug">
              &ldquo;AI should know your world, not just your prompts.&rdquo;
            </p>
            <footer className="mt-4 text-apple-caption text-[var(--page-text-subtle)]">
              — Soham Datta, founder
            </footer>
          </blockquote>
        </section>

        {/* Timeline */}
        <section id="timeline" className="section-reveal">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-apple-fine text-[var(--page-text-subtle)] uppercase tracking-widest font-mono">Timeline</span>
            <div className="flex-1 h-px bg-[var(--page-border)]" />
          </div>

          <div className="relative">
            {/* Spine */}
            <div
              className="absolute left-[7px] top-2 bottom-4 w-px"
              style={{ background: 'linear-gradient(to bottom, var(--apple-blue) 0%, rgba(0,102,204,0.1) 100%)' }}
              aria-hidden="true"
            />

            <ol className="space-y-12 list-none">
              {timelineData.map((item, i) => (
                <li
                  key={item.date}
                  className="relative pl-10 section-reveal"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  {/* Node dot */}
                  <div
                    className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2"
                    style={{
                      borderColor: item.statusColor,
                      backgroundColor: 'var(--page-bg)',
                      boxShadow: `0 0 0 3px var(--page-bg)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Date */}
                  <time className="text-apple-caption text-[var(--page-text-subtle)] font-mono block mb-1">
                    {item.date}
                  </time>

                  {/* Title */}
                  <h3 className="text-apple-body-strong text-[var(--page-text)] mb-2">{item.title}</h3>

                  {/* Body */}
                  <p className="text-apple-body text-[var(--page-text-muted)]">{item.desc}</p>

                  {/* Status badge */}
                  <span
                    className="inline-block mt-3 text-apple-fine rounded-apple-pill px-2.5 py-0.5"
                    style={{
                      color: item.statusColor,
                      backgroundColor: `${item.statusColor}14`,
                    }}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="section-reveal">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-apple-fine text-[var(--page-text-subtle)] uppercase tracking-widest font-mono">Values</span>
            <div className="flex-1 h-px bg-[var(--page-border)]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="section-reveal rounded-apple-lg p-6"
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  backgroundColor: 'rgba(0,102,204,0.04)',
                  border: '1px solid var(--page-border)',
                }}
              >
                <h3 className="text-apple-body-strong text-[var(--page-text)] mb-2">{v.title}</h3>
                <p className="text-apple-caption text-[var(--page-text-muted)]">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="section-reveal">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-apple-fine text-[var(--page-text-subtle)] uppercase tracking-widest font-mono">The Builder</span>
            <div className="flex-1 h-px bg-[var(--page-border)]" />
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar */}
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-apple-lg overflow-hidden shrink-0 flex items-center justify-center text-apple-blue-dark text-2xl font-semibold"
              style={{ backgroundColor: 'rgba(41,151,255,0.10)', border: '1px solid rgba(41,151,255,0.15)' }}
              aria-label="Soham Datta avatar"
            >
              SD
            </div>
            <div className="flex-1">
              <h3 className="text-apple-body-strong text-[var(--page-text)] mb-1">Soham Datta</h3>
              <p className="text-apple-caption text-[var(--page-text-subtle)] mb-4">
                Founder · Builder · Student
              </p>
              <p className="text-apple-body text-[var(--page-text-muted)] mb-5">
                Engineering student and indie hardware maker. Aura started as a personal
                frustration with forgetting everything important. It turned into a full
                open-source project that anyone can build, own, and improve.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/thesohamdatta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-apple-secondary"
                  style={{ fontSize: 14, padding: '8px 18px' }}
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-apple-caption link-apple dark:text-apple-blue-dark"
                >
                  @sohamdatta →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-reveal pt-8 border-t border-[var(--page-border)] flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <p className="text-apple-body-strong text-[var(--page-text)] mb-1">Join the build.</p>
            <p className="text-apple-caption text-[var(--page-text-subtle)]">Open-source. Community-driven. Hardware you own.</p>
          </div>
          <a
            href="https://github.com/thesohamdatta/Aura-Wearable-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple-primary shrink-0"
          >
            View on GitHub
          </a>
        </section>
      </main>
    </div>
  )
}
