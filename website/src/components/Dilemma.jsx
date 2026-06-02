import { useEffect, useRef } from 'react'

const blocks = [
  {
    id: 'problem',
    eyebrow: 'The Problem',
    heading: 'Every insight you have disappears.',
    body: `Meetings, conversations, ideas — they happen and they vanish. 
You either record nothing, or drown in disorganised notes no one reads. 
The smartest people we know spend hours recalling what they already knew.`,
  },
  {
    id: 'status-quo',
    eyebrow: 'The Status Quo',
    heading: 'Smartphones are the wrong tool.',
    body: `Your phone is a screen. Every AI assistant lives behind a notification wall. 
To capture anything useful you have to stop, unlock, type, and interrupt yourself. 
That is the opposite of thinking.`,
  },
  {
    id: 'dilemma',
    eyebrow: 'The Dilemma',
    heading: 'Capture everything or capture nothing?',
    body: `You cannot remember everything, and recording everything feels invasive. 
Most tools force a binary choice: constant surveillance or zero memory. 
That is a false dilemma. Intelligence should be ambient, not intrusive.`,
  },
  {
    id: 'answer',
    eyebrow: 'The Answer',
    heading: 'Aura: ambient AI that earns your trust.',
    body: `Aura runs on your terms — local AI or cloud, open-source firmware, data you own. 
It captures what matters, forgets the rest, and surfaces insights when you need them. 
No screen required. No privacy trade-off.`,
    isAnswer: true,
  },
]

export default function Dilemma({ onNavigate }) {
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
            The Dilemma
          </p>
          <h1 className="text-apple-hero text-[var(--page-text)] text-balance mb-6">
            Why does something this obvious not exist yet?
          </h1>
          <p className="text-apple-lead text-[var(--page-text-muted)] text-balance pb-16">
            Every wearable AI faces the same tension. We think the answer is different —
            and open source is the only honest way to prove it.
          </p>
        </div>
      </header>

      {/* Alternating editorial blocks */}
      <main className="max-w-[740px] mx-auto px-5 py-16 space-y-24">
        {blocks.map((block, i) => (
          <article
            key={block.id}
            id={block.id}
            className={`section-reveal ${block.isAnswer ? '' : ''}`}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            {/* Eyebrow + divider */}
            <div className="flex items-center gap-4 mb-8">
              <span
                className={`text-apple-fine uppercase tracking-widest font-mono ${
                  block.isAnswer ? 'text-apple-blue dark:text-apple-blue-dark' : 'text-[var(--page-text-subtle)]'
                }`}
              >
                {block.eyebrow}
              </span>
              <div className="flex-1 h-px bg-[var(--page-border)]" />
              <span className="text-apple-fine text-[var(--page-text-subtle)] font-mono">{String(i + 1).padStart(2, '0')}</span>
            </div>

            {/* Content card — answer tile gets special treatment */}
            {block.isAnswer ? (
              <div
                className="rounded-apple-lg p-8 md:p-12"
                style={{
                  backgroundColor: 'rgba(0,102,204,0.06)',
                  border: '1px solid rgba(0,102,204,0.2)',
                }}
              >
                <h2 className="text-apple-display-md text-[var(--page-text)] mb-5">
                  {block.heading}
                </h2>
                <p className="text-apple-body text-[var(--page-text-muted)] whitespace-pre-line">
                  {block.body}
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-apple-display-md text-[var(--page-text)] mb-5">
                  {block.heading}
                </h2>
                <p className="text-apple-body text-[var(--page-text-muted)] whitespace-pre-line">
                  {block.body}
                </p>
              </div>
            )}
          </article>
        ))}

        {/* Closing CTA */}
        <div className="section-reveal pt-8 border-t border-[var(--page-border)] flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <p className="text-apple-body-strong text-[var(--page-text)] mb-1">Ready to build?</p>
            <p className="text-apple-caption text-[var(--page-text-subtle)]">Open-source hardware. Yours to own and modify.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#waitlist"
              onClick={(e) => {
                e.preventDefault()
                onNavigate?.('/')
                setTimeout(() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }), 150)
              }}
              className="btn-apple-primary"
            >
              Join Waitlist
            </a>
            <a
              href="https://github.com/thesohamdatta/Aura-Wearable-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-secondary dark:text-apple-blue-dark dark:border-apple-blue-dark"
            >
              View GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
