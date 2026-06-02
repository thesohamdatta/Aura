import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Dilemma() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in blocks of text as they enter the screen
      gsap.fromTo('.dilemma-block',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="dilemma"
      ref={containerRef}
      className="relative py-32 px-4 bg-void text-ghost overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(171,237,225,0.04) 0%, transparent 80%)'
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="dilemma-block inline-flex items-center gap-2 glass radius-pill px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-aura animate-pulse" aria-hidden="true" />
          <span className="text-xs font-mono text-mist tracking-widest uppercase">The Attention Crisis</span>
        </div>

        {/* Big Statement */}
        <h2 className="dilemma-block text-[clamp(2rem,6vw,4rem)] font-semibold tracking-tight gradient-text-white mb-16 leading-[1.1]">
          The social giants are eating{' '}
          <span className="font-serif italic text-aura">our brains.</span>
        </h2>

        <div className="space-y-16 text-mist font-light text-base md:text-lg leading-relaxed">
          {/* Block 1 */}
          <div className="dilemma-block border-l border-aura/20 pl-6 space-y-4">
            <h3 className="text-lg font-mono text-ghost dark:text-white tracking-wide uppercase">Humans Need a Third Device</h3>
            <p>
              We have Personal Computers — to create, work, and produce things that matter. We have Tiny Supercomputers — Smartphones — to consume, but we are drawn into the Social Dilemma.
            </p>
            <p className="text-sm font-mono text-aura">
              But why have humans never built something different?
            </p>
            <p>
              They tried. Ten years before smartphones, they made wearables — but added a screen to it. A screen that demands attention. A screen that distracts. A screen we never needed.
            </p>
          </div>

          {/* Block 2 */}
          <div className="dilemma-block border-l border-aura/20 pl-6 space-y-4">
            <h3 className="text-lg font-mono text-ghost dark:text-white tracking-wide uppercase">The Social Dilemma</h3>
            <p>
              Their influence has a deeply negative impact on our behaviour — how we talk, what we see, how we do things, how we live. This effect is damaging human nature, and it already has.
            </p>
            <p>
              The smartphone is at the centre of all this. It manipulates our minds without us ever knowing why we do what we do, or how we became this way. We were not like this before.
            </p>
            <p>
              For years, we have developed and refined this technology. Some of the greatest engineers in the world have worked on it — hired for one reason and one reason only: attention. How to capture the maximum attention of people. How to turn that attention into money. How to build an empire out of it.
            </p>
            <p className="text-aura font-mono text-sm tracking-widest uppercase">
              There is no escape here. No freedom. No freedom. No freedom.
            </p>
          </div>

          {/* Block 3 */}
          <div className="dilemma-block border-l border-aura/20 pl-6 space-y-4">
            <h3 className="text-lg font-mono text-ghost dark:text-white tracking-wide uppercase">The AI Dilemma</h3>
            <p>
              AI is not going to make it good or help us live better in this socially fucked up world. Instead, AI can and will change how we live, what we see, and how we perceive things — things we never needed and never wanted. The Slop. Its impact on our brain is not reversible.
            </p>
            <p>
              AI is absolutely revolutionary and can change humanity. But humans are creating AI, AI is creating AI, and AI Dominate humans. We are in the Matrix.
            </p>
            <p className="italic text-ghost dark:text-white">
              Hence, we believe AI is humanity’s last invention.
            </p>
          </div>

          {/* Block 4 */}
          <div className="dilemma-block border border-aura/20 pl-6 pr-6 py-6 space-y-4 bg-aura/5 rounded-2xl">
            <h3 className="text-lg font-mono text-aura tracking-wide uppercase">Why We Need Aura</h3>
            <p>
              That’s why we are building Aura.
            </p>
            <p>
              We need a device that doesn’t demand attention, doesn’t bombard us with information, doesn’t ping us with notifications every second — a device that needs no screen.
            </p>
            <p>
              A device that combines the productive power of a computer and the connectivity of a smartphone — but with one fundamental difference. It does not pull you in. It works for you, quietly, in the background — transforming your intent into action, without ever asking for your attention.
            </p>
            <p className="text-ghost dark:text-white font-mono text-sm">
              We need it combining the intelligence of AI and the human mind. The Personal Superintelligence.
            </p>
            <p className="text-xs text-mist italic">
              Humane AI Pin was the beginning — and it will return in another soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
