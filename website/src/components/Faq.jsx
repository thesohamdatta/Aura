import { useState } from 'react'

const faqItems = [
  {
    question: "What is Aura?",
    answer: "A wearable AI pendant we're building because we thought it would be really cool. Turns out, it is. It captures conversations, transcribes them, and indexes them into your personal memory engine."
  },
  {
    question: "Can I buy one?",
    answer: "Not yet. We're still building and refining the prototypes. However, you can join the waitlist to get early access to hardware schematics, firmware files, and the companion app so you can build your own."
  },
  {
    question: "Who made this?",
    answer: "Soham and Laxman — two builders leveraging the power of the open-source community to design independent, screenless personal hardware."
  },
  {
    question: "Is it finished?",
    answer: "We have a fully working physical prototype. So, almost. Kind of. We're getting there and actively releasing improvements to the firmware and client apps."
  },
  {
    question: "Is it open source?",
    answer: "Yes. That's the whole point. Every schematic, STL casing file, line of firmware, and backend integration is public and yours to own, modify, or fork."
  },
  {
    question: "Are you funded?",
    answer: "Working on it. We are community-driven and independent. If you believe in what we're building and want to support the project, let's talk (thesohamdatta@gmail.com)."
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="bg-white border-t border-apple-hairline section-apple"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[740px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-apple-caption-strong text-apple-blue uppercase tracking-widest mb-4">
            Answers
          </p>
          <h2 className="text-apple-display text-apple-ink">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="border-t border-[#e0e0e0]" role="presentation">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-[#e0e0e0]">
                <h3>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group text-apple-body-strong text-apple-ink"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="pr-4 group-hover:text-apple-blue transition-colors duration-200">
                      {item.question}
                    </span>
                    <span 
                      className={`text-xl font-light text-apple-muted-48 transition-transform duration-300 select-none shrink-0 ${isOpen ? 'rotate-45 text-apple-blue' : ''}`}
                      aria-hidden="true"
                    >
                      ＋
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-6' : 'max-h-0'}`}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p className="text-apple-caption text-apple-muted-80 leading-relaxed max-w-[680px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
