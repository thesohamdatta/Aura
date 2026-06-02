import { useEffect, useRef } from 'react'

const blocks = [
  {
    id: 'problem',
    eyebrow: 'Humans Need Third Device',
    heading: 'Smartphones are the wrong tool.',
    body: `We have Personal Computers — to create, work, and produce things that matter. We have Tiny Supercomputers — Smartphones — to consume, but we are drawn into the Social Dilemma.

But why have humans never built something different?

They tried. Ten years before smartphones, they made wearables — but added a screen to it. A screen that demands attention. A screen that distracts. A screen we never needed.

That is why we are building Aura. A device that combines the productive power of a computer and the connectivity of a smartphone — but with one fundamental difference. It does not pull you in. It works for you, quietly, in the background — transforming your intent into action, without ever asking for your attention.

Less distraction. More done.`,
  },
  {
    id: 'social-dilemma',
    eyebrow: 'Social Dilemma',
    heading: 'The social giants are eating our brains.',
    body: `Their influence has a deeply negative impact on our behaviour — how we talk, what we see, how we do things, how we live. This effect is damaging human nature, and it already has.

The smartphone is at the centre of all this. It manipulates our minds without us ever knowing why we do what we do, or how we became this way. We were not like this before.

For years, we have developed and refined this technology. Some of the greatest engineers in the world have worked on it — hired for one reason and one reason only: attention. How to capture the maximum attention of people. How to turn that attention into money. How to build an empire out of it.

There is no escape here. No freedom. No freedom. No freedom.`,
  },
  {
    id: 'ai-dilemma',
    eyebrow: 'AI Dilemma',
    heading: 'AI is not going to save this socially fucked up world.',
    body: `AI can and will change how we live, what we see, and how we perceive things — things we never needed and never wanted. The Slop. Its impact on our brain is not reversible.

AI is absolutely revolutionary and can change humanity. But humans are creating AI, AI is creating AI, and AI Dominate humans. We are in the Matrix.

Hence, we believe AI is humanity's last invention.`,
  },
  {
    id: 'aura-answer',
    eyebrow: 'Aura',
    heading: "That's Why We Need Aura",
    body: `We need a device that doesn't demand attention, doesn't bombard us with information, doesn't ping us with notifications every second — a device that needs no screen.

We need it combining the intelligence of AI and the human mind. The Personal Superintelligence.

The least socially disruptive device we've ever needed.

Humane AI Pin was the beginning — and it will return in another soul.`,
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
