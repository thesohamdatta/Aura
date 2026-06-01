export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-void dark:bg-[#030305] text-ghost border-t border-ghost/10 dark:border-white/5 pt-20 pb-12 px-6 rounded-t-[3rem] overflow-hidden transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight text-ghost dark:text-white">aura</span>
              <span className="w-1.5 h-1.5 rounded-full bg-aura animate-pulse" aria-hidden="true" />
            </div>
            <p className="text-sm text-mist font-light leading-relaxed max-w-sm">
              An open-source AI wearable pendant built to connect humans and AI seamlessly — screenless, distraction-free, and private-first.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <span className="pulse-dot" aria-hidden="true" />
              <span className="text-[11px] font-mono text-aura tracking-[0.15em] uppercase">
                SYSTEM_ACTIVE · OS1_RUNNING
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-mist uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2 text-sm font-light text-mist list-none">
              <li>
                <a href="mailto:thesohamdatta@gmail.com" className="hover:text-ghost dark:hover:text-white transition-colors duration-300">
                  thesohamdatta@gmail.com
                </a>
              </li>
              <li>
                <span className="font-mono text-xs text-ghost dark:text-white">IND : (+91) 9420984066</span>
              </li>
              <li>
                <span className="font-mono text-xs text-ghost dark:text-white">Aura HQ, Backyard</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-mist uppercase tracking-widest">Open Source</h4>
            <ul className="space-y-2 text-sm font-light text-mist list-none">
              <li>
                <a
                  href="https://github.com/thesohamdatta/Aura-Wearable-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ghost dark:hover:text-white transition-colors duration-300"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ghost dark:hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ghost dark:hover:text-white transition-colors duration-300"
                >
                  WhatsApp Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Bottom bar */}
        <div className="border-t border-ghost/10 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mist/60 font-light">
            &copy; {currentYear} Aura Wearable AI. Under MIT License.
          </p>
          <div className="flex gap-6 text-xs text-mist/60 font-light list-none">
            <a href="#docs" className="hover:text-ghost dark:hover:text-white transition-colors">Documentation</a>
            <a href="#dilemma" className="hover:text-ghost dark:hover:text-white transition-colors">Dilemma</a>
            <a href="#about" className="hover:text-ghost dark:hover:text-white transition-colors">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
